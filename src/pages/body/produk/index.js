import React, { Component } from 'react';
import "./produk.css"
import * as FaIcons from 'react-icons/fa';
import swal from 'sweetalert';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import DivClassSingle from "../../../componen/div/divClassSingle"
import {
    Button,
    H3,
    H2,
    Input,
    Label,
    P,
    Small,
    Hr,
    Textarea,
    Img,
    Center,
} from "../../../componen"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

class Produk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            productId: "",
            productName: "",
            productDescription: "",
            products: [],
            url: "http://localhost:8080/nd6/product/",
            errorFetcing: false,
            update: false,
            page: 1,
            count: "",
            orderby:"asc"
        }

        this.handleChange = (event, value) => {
            this.setState({
                page: value
            })
            this.getCount();
            this.getPaging(value, this.state.orderby);
        };
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
                        productId: json.productId,
                        productName: json.productName,
                        productDescription: json.productDescription,
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
                        fetch(this.state.url + this.state.productId, {
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
                                    icon: "success",
                                    button: "Ok",
                                });
                                this.clear();
                                this.getAll();
                                this.getCount();
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
                productId: "",
                productName: "",
                productDescription: "",
                edit: "",
                hapus: "",
                update: false
            })
        }
        this.cari = () => {
            if (this.state.productId !== "") {
                fetch(this.state.url + this.state.productId, {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json; ; charset=utf-8",
                        "Access-Control-Allow-Headers": "Authorization, Content-Type",
                        "Access-Control-Allow-Origin": "*"
                    }
                })
                    .then(response => response.json())
                    .then(json => {
                        console.log(json)
                        if (json.errorMessage) {
                            swal({
                                title: "Error !",
                                text: json.errorMessage,
                                icon: "error",
                                button: "Ok",
                            });
                        } else {
                            let Product = [];
                            Product.push(json)
                            this.setState({
                                products: Product
                            })
                            this.clear();
                        }
                    })
                    .catch((e) => { alert("gagal") });
            } else if (this.state.productName !== "") {
                fetch(this.state.url + "name/" + this.state.productName, {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json; ; charset=utf-8",
                        "Access-Control-Allow-Headers": "Authorization, Content-Type",
                        "Access-Control-Allow-Origin": "*"
                    }
                })
                    .then(response => response.json())
                    .then(json => {
                        console.log(json)
                        if (json.errorMessage) {
                            swal({
                                title: "Error !",
                                text: json.errorMessage,
                                icon: "error",
                                button: "Ok",
                            });
                        } else {
                            let Product = [];
                            Product.push(json)
                            this.setState({
                                products: Product
                            })
                            this.clear();
                        }
                    })
                    .catch((e) => { alert("gagal") });
            } else {
                swal({
                    title: "Error !",
                    text: "Please, enter product id or product name !",
                    icon: "error",
                    button: "Ok",
                });
                this.getAll();
            }
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
                        this.setState({
                            page: 1
                        })
                        this.clear()
                        swal({
                            title: "Good job!",
                            text: json.successMessage,
                            icon: "success",
                            button: "Ok",
                        });
                        this.getPaging();
                        this.getCount();
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
            fetch(this.state.url + this.state.productId, {
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
                        this.setState({
                            page: 1
                        })
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
        this.onChangeSelect = el => {
            const orderby = el.target.value
            this.setState({
                orderby : orderby
            })
            this.getPaging(this.state.page,orderby);
        }
        this.getCount = () => {
            fetch(this.state.url + "count", {
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
                        count: Math.ceil((json) / 5),
                        errorFetcing: true
                    });
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    // this.setState({errorFetcing:true})
                });
        }
        this.getPaging = (value, orderby) => {
            if(value){
                // value = value
            }else{
            value =1;
            }
            if(orderby){

            }else{
                orderby="asc"
            }
            fetch(this.state.url + "paging/?page=" + value + "&limit=5&orderby="+   orderby+"", {
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
        this.getPaging();
        this.getCount();

    }
    render() {
        const classes = () => this.props.useStyles();
        const { productId, productName, productDescription, orderby } = this.state
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
                                className="input"
                                name="productId"
                                placeholder="Product Id..."
                                value={productId}
                                onChange={this.setValue} />
                            <Input
                                type="text"
                                className="input"
                                name="productName"
                                placeholder="Product Name..."
                                value={productName}
                                onChange={this.setValue} />
                            <Button
                                className="btn-cari"
                                onClick={this.cari}>
                                <FaIcons.FaSearch />
                            </Button>
                        </DivClassSingle>
                        <Hr />
                        <DivClassSingle
                            className="list">
                            {
                                // console.log(this.state.products.reverse())
                            }
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
                            <DivClassSingle className="pagin">
                                <DivClassSingle className={classes.root}>
                                    <DivClassSingle className="judul-pagin">
                                    <P>Show: 
                                        <select onChange={this.onChangeSelect} name="orderby" value={orderby}>
                                            <option value="-">-Pilih-</option>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                        </select>
                                        entries
                                    </P>
                                    <P>Page: {this.state.page}</P>
                                    <P>Order By: 
                                        <select onChange={this.onChangeSelect} name="orderby" value={orderby}>
                                            <option value="-">-Pilih-</option>
                                            <option value="asc">ASC</option>
                                            <option value="desc">DESC</option>
                                        </select>
                                    </P>
                                    </DivClassSingle>
                                    <Pagination count={this.state.count} page={this.state.page} onChange={this.handleChange} />
                                </DivClassSingle>
                            </DivClassSingle>
                        </DivClassSingle>
                    </DivClassSingle>
                    <DivClassSingle
                        className="data-right">
                        <DivClassSingle
                            className="navbar">
                            <H2>{(this.state.disabled) ? "Monitoring " : "Kelola "} Stock {this.state.productId}</H2>
                            {this.state.productId === "" ? "" :
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
                                        onClick={() => { this.delete() }}>
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