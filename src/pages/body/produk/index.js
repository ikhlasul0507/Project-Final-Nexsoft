import React, { Component } from 'react';
import "./produk.css"
import * as FaIcons from 'react-icons/fa';
import swal from 'sweetalert';
import DivClassSingle from "../../../componen/div/divClassSingle"
import {
    Button,
    H3,
    H2,
    Input,
    Label,
    P,
    Small,
    A,
    Li,
    Ul,
    Hr,
    Textarea,
    Img,
    Center
} from "../../../componen"

class Produk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            productName: "",
            productDescription: "",
            products: [],
            url: "http://localhost:8080/nd6/product/",
            errorFetcing: false,
            edit: "",
            hapus: "",
            update: false,
        }

        this.detail = (id) => {
            fetch(this.state.url + id, {
                method: "get",
                headers: {
                    "Content-Type": "application/json; ; charset=utf-8",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        productName: json.productName,
                        productDescription: json.productDescription,
                        edit: json.productId,
                        hapus: json.productId,
                        errorFetcing: true,
                        disabled: true
                    });
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    // this.setState({errorFetcing:true})
                });
        }
        this.delete = () => {
            // if (window.confirm('Are you sure wont to Delete ?')) {
                swal({
                    title: "Are you sure?",
                    text: "wont to Delete ?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                        fetch(this.state.url + this.state.hapus, {
                            method: "delete",
                            headers: {
                                "Content-Type": "application/json; ; charset=utf-8",
                                "Access-Control-Allow-Headers": "Authorization, Content-Type",
                                "Access-Control-Allow-Origin": "*"
                            }
                        })
                            .then(response => response.json())
                            .then(json => {
                                swal({
                                    title: "Good job!",
                                    text: json.successMessage,
                                    icon: "error",
                                    button: "Ok",
                                  });
                                this.clear();
                                this.getAll();
                            })
                           
                            .catch((e) => {
                                alert("Failed fetching data!!", e)
                                // this.setState({errorFetcing:true})
                            });
                    } else {
                    //   swal("Your imaginary file is safe!");
                    }
                  });
            
        }
        this.clear = () => {
            this.setState({
                disabled: true,
                productName: "",
                productDescription: "",
                edit: "",
                hapus: "",
                update: false
            })
        }
        this.cari = () => {
            alert("Cari")
        }
        this.submit = () => {
            if (this.state.update)
                this.editToApi();
            else
                this.saveToApi();
        }
        this.save = () => {
            this.setState({
                disabled: false,
                productName: "",
                productDescription: "",
                edit: ""
            })
        }
        this.saveToApi = () => {
            const objek = {
                productName: this.state.productName,
                productDescription: this.state.productDescription,
                productQty: 0
            }
            fetch(this.state.url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json; ; charset=utf-8",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(objek)
            })
                .then(response => response.json())
                .then((json) => {
                    if (json.errors) {
                        swal({
                            title: "Error !",
                            text: json.errors[0].defaultMessage,
                            icon: "error",
                            button: "Ok",
                          });
                    } else if (json.errorMessage) {
                        swal({
                            title: "Error !",
                            text: json.errorMessage,
                            icon: "error",
                            button: "Ok",
                          });
                    } else {
                        this.clear()
                        swal({
                            title: "Good job!",
                            text: json.successMessage,
                            icon: "success",
                            button: "Ok",
                          });
                        this.getAll();
                    }
                })
                .catch(() => {
                    alert("Failed sending data!!");
                });
        }
        this.edit = () => {
            this.setState({
                disabled: false,
                update: true
            })
        }
        this.editToApi = () => {
            const objek = {
                productName: this.state.productName,
                productDescription: this.state.productDescription,
                productQty: 0
            }
            fetch(this.state.url + this.state.edit, {
                method: "put",
                headers: {
                    "Content-Type": "application/json; ; charset=utf-8",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(objek)
            })
                .then(response => response.json())
                .then((json) => {
                    if (json.errors) {
                        swal({
                            title: "Error !",
                            text: json.errors[0].defaultMessage,
                            icon: "error",
                            button: "Ok",
                          });
                    } else if (json.errorMessage) {
                        swal({
                            title: "Error !",
                            text: json.errorMessage,
                            icon: "error",
                            button: "Ok",
                          });
                    } else {
                        this.clear()
                        swal({
                            title: "Good job!",
                            text: "Product has been updated !",
                            icon: "success",
                            button: "Ok",
                          });
                        this.getAll();
                    }
                })
                .catch(() => {
                    alert("Failed sending data!!");
                });
        }
        this.setValue = el => {
            this.setState({
                [el.target.name]: el.target.value,
            })
        }
        this.getAll = () => {
            fetch(this.state.url, {
                method: "get",
                headers: {
                    "Content-Type": "application/json; ; charset=utf-8",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        products: json,
                        errorFetcing: true
                    });

                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    // this.setState({errorFetcing:true})
                });
        }
    }
    componentDidMount() {
        this.getAll();
    }
    render() {
        const { productName, productDescription } = this.state
        return (
            <>
                <DivClassSingle
                    className="content">
                    <DivClassSingle
                        className="data-left">
                        <DivClassSingle
                            className="cari">
                            <Input
                                type="text"
                                name=""
                                placeholder="Product code" />
                            <Input
                                type="text"
                                name=""
                                placeholder="Product name" />
                            <Button
                                className="btn-cari"
                                onClick={this.cari}>
                                <FaIcons.FaSearch />
                            </Button>
                        </DivClassSingle>
                        <Hr />
                        <DivClassSingle
                            className="list">
                            {this.state.products.map(
                                (Item, idx) =>
                                    <DivClassSingle
                                        className="list-data"
                                        key={idx}
                                        onClick={() => this.detail(Item.productId)} >
                                        <H3>
                                            {Item.productId}
                                        </H3>
                                        <P>
                                            {Item.productName}
                                        </P>
                                        <Small>
                                            Product Qty :{Item.productQty}
                                        </Small>
                                    </DivClassSingle>
                            )
                            }
                            {
                                (!this.state.errorFetcing) ?
                                    <DivClassSingle
                                        className="list-data">
                                        <Center>
                                            <H3>
                                                ERROR FETCHING DATA TO API
                                                </H3>
                                            <Img
                                                src="https://i1.wp.com/dewankomputer.com/wp-content/uploads/2019/08/pesawat.gif?resize=84%2C208"></Img>
                                        </Center>
                                    </DivClassSingle>
                                    : ""
                            }
                            <Ul className="pagination">
                                <Li>
                                    <A href="#">Previous</A>
                                </Li>
                                <Li>
                                    <A href="#">1</A>
                                </Li>
                                <Li>
                                    <A className="active" href="#">2</A>
                                </Li>
                                <Li>
                                    <A href="#">3</A>
                                </Li>
                                <Li>
                                    <A href="#">4</A>
                                </Li>
                                <Li>
                                    <A href="#">Next</A>
                                </Li>
                            </Ul>
                        </DivClassSingle>
                    </DivClassSingle>
                    <DivClassSingle
                        className="data-right">
                        <DivClassSingle
                            className="navbar">
                            <H2>{(this.state.disabled) ? "Monitoring " : "Kelola "} Stock {this.state.edit}</H2>
                            {this.state.edit === "" ? "" :
                                <>
                                    <Button
                                        onClick={this.clear}>
                                        <FaIcons.FaBan />
                                    </Button>
                                    <Button
                                        onClick={this.edit}>
                                        <FaIcons.FaPencilAlt />
                                    </Button>
                                    <Button
                                        onClick={() => { this.delete()}}>
                                        <FaIcons.FaTrash />
                                    </Button>
                                </>
                            }
                            <Button
                                onClick={this.save}
                                className="tooltip">
                                <FaIcons.FaPlus />
                            </Button>
                        </DivClassSingle>
                        <Hr className="hr" />
                        <DivClassSingle
                            className="form-data">
                            <Label>Product Name</Label>
                            <Input
                                type="text"
                                className="input"
                                name="productName"
                                disabled={(this.state.disabled) ? "disabled" : ""}
                                placeholder="Product Name..."
                                value={productName}
                                onChange={this.setValue} />
                        </DivClassSingle>
                        <DivClassSingle
                            className="form-data">
                            <Label className="textarea">Product description</Label>
                            <Textarea
                                name="productDescription"
                                className="textarea-input"
                                onChange={this.setValue}
                                disabled={(this.state.disabled) ? "disabled" : ""}
                                placeholder="Product description..."
                                value={productDescription}>
                            </Textarea>
                        </DivClassSingle>
                        {(!this.state.disabled) ? <DivClassSingle className="form-data">
                            <Button
                                className="submit"
                                disabled={(this.state.disabled) ? "disabled" : ""}
                                onClick={this.submit}>
                                Submit
                            </Button>
                            <Button
                                className="submit"
                                disabled={(this.state.disabled) ? "disabled" : ""}
                                onClick={this.clear}>
                                Cancel
                            </Button>
                        </DivClassSingle> : ""}
                    </DivClassSingle>
                </DivClassSingle>
                <DivClassSingle className="footer">
                </DivClassSingle>
            </>
        );
    }
}

export default Produk;