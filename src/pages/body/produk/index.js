import React, { Component } from 'react';
import "./produk.css"
import * as FaIcons from 'react-icons/fa';
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import ReactTooltip from 'react-tooltip';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
    Select,
    Option
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
            productQty: "",
            products: [],
            url: "http://localhost:8080/nd6/product/",
            urlLast: "http://localhost:8080/nd6/productLast/",
            errorFetcing: false,
            update: false,
            add: true,
            page: 1,
            count: "",
            orderby: "asc",
            show: "5",
            checkedA: true,
            minus: 0,
            name: ""
        }

        this.handleChange = (event, value) => {
            this.setState({
                page: value
            })
            this.getCount();
            this.getPaging(value, this.state.orderby, this.state.show, this.state.minus, this.state.name);
        }
        this.detail = (id, qty) => {
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
                        productQty: json.productQty,
                        errorFetcing: true,
                        disabled: true,
                        page: this.state.page
                    });
                })
                .catch((e) => {
                    swal({
                        title: "Error !",
                        text: "Error Connect to API",
                        icon: "error",
                        button: "Ok",
                    });
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
                        if (this.state.productQty !== 0) {
                            swal({
                                title: "Error !",
                                text: "The product cannot be deleted because not is empty",
                                icon: "error",
                                button: "Ok",
                            });
                        } else {
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
                                    if (json.error) {
                                        swal({
                                            title: "Error !",
                                            text: "The product cannot be deleted because it is foreign key to the detail table",
                                            icon: "error",
                                            button: "Ok",
                                        });
                                    } else {
                                        Swal.fire({
                                            title: "Good job!",
                                            text: json.successMessage,
                                            icon: "success",
                                            timer: 1000,
                                            showConfirmButton: false,
                                            timerProgressBar: true
                                        });
                                        this.getPaging(this.state.count, this.state.orderby, this.state.show);
                                        this.getCount();
                                        this.clear();
                                    }
                                })

                                .catch((e) => {
                                    swal({
                                        title: "Error !",
                                        text: "Error Connect to API",
                                        icon: "error",
                                        button: "Ok",
                                    });
                                });
                        }
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
                update: false,
                add: true
            })
        }
        this.clearProses = () => {
            this.setState({
                disabled: true,
                edit: "",
                hapus: "",
                update: false,
                add: true
            })
        }
        this.cari = () => {
            console.log(this.state.productName)
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
                        }
                    })
                    .catch((e) => {
                        swal({
                            title: "Error !",
                            text: "Error Connect to API",
                            icon: "error",
                            button: "Ok",
                        });
                    });
            } else if (this.state.productName !== "") {
                this.getPaging(this.state.page, this.state.orderby, this.state.show, 1, this.state.productName);
                this.getCountSearch(this.state.productName);
                // this.getCount();
                // this.getPaging();
            } else {
                swal({
                    title: "Error !",
                    text: "Please input product dan product name !",
                    icon: "error",
                    button: "Ok",
                });
                this.getPaging(this.state.page, this.state.orderby, this.state.show, 1, this.state.productName);
                this.getCount();
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
                edit: "",
                add: false,
                productId: ""
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
                            page: this.state.count
                        })

                        Swal.fire({
                            title: "Good job!",
                            text: json.successMessage,
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false,
                            timerProgressBar: true
                        });
                        this.clearProses()
                        this.getApiProductsLast();
                        this.getCount();
                        this.getPaging(this.state.count, this.state.orderby, this.state.show, 0, "");
                    }
                })
                .catch(() => {
                    swal({
                        title: "Error !",
                        text: "Error Connect to API",
                        icon: "error",
                        button: "Ok",
                    });
                });
        }
        this.edit = () => {
            this.setState({
                disabled: false,
                update: true,
                add: false
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

                        this.setState({
                            page: this.state.page
                        })
                        Swal.fire({
                            title: "Good job!",
                            text: "Product has been updated !",
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false,
                            timerProgressBar: true
                        });
                        this.getPaging(this.state.page, this.state.orderby, this.state.show);
                        this.clearProses()
                    }
                })
                .catch(() => {
                    swal({
                        title: "Error !",
                        text: "Error Connect to API",
                        icon: "error",
                        button: "Ok",
                    });
                });
        }
        this.setValue = el => {
            this.setState({
                [el.target.name]: el.target.value,
            })
            if (el.target.value === "") {
                this.getPaging();
                this.getCount();
            }
        }
        this.handleChangeMinus = (event) => {
            this.setState({
                [event.target.name]: event.target.checked,
            })
            const minus = event.target.checked
            if (minus)
                this.getPaging(this.state.page, this.state.orderby, this.state.show, 0);
            else
                this.getPaging(this.state.page, this.state.orderby, this.state.show, 1);
            this.getCount();
        };
        this.onChangeSelect = el => {
            const orderby = el.target.value
            this.setState({
                orderby: orderby
            })
            this.getPaging(this.state.page, orderby, this.state.show);
            this.getCount();
        }
        this.onChangeSelectShow = el => {
            const show = el.target.value
            this.setState({
                show: show
            })
            this.getPaging(1, this.state.orderby, show);
            this.getCount();
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
                        count: Math.ceil((json) / this.state.show),
                        errorFetcing: true
                    });
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    // this.setState({errorFetcing:true})
                });
        }
        this.getCountSearch = (productName) => {
            fetch(this.state.url + "countSearch/" + productName, {
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
                        count: Math.ceil((json) / this.state.show),
                        errorFetcing: true
                    });
                })
                .catch((e) => {
                    swal({
                        title: "Error !",
                        text: "Error Connect to API",
                        icon: "error",
                        button: "Ok",
                    });
                });
        }
        this.getPaging = (value, orderby, show, minus, name) => {
            if (value) { } else { value = 1; }
            if (orderby) { } else { orderby = "asc" }
            if (show) { } else { show = 5 }
            if (minus) { } else { minus = 0 }
            if (name) { } else { name = "" }
            fetch(this.state.url + "paging/?page=" + value + "&limit=" + show + "&orderby=" + orderby + "&minus=" + minus + "&name=" + name, {
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
                    swal({
                        title: "Error !",
                        text: "Error Connect to API",
                        icon: "error",
                        button: "Ok",
                    });
                    this.setState({ errorFetcing: true })
                });
        }
        this.getApiProductsLast = () => {
            fetch(this.state.urlLast, {
                method: "get",
                headers: {
                    "Content-Type": "application/json; ; charset=utf-8",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                    "Access-Control-Allow-Origin": "*"
                },
            })
                .then(response => response.json())
                .then((json) => {
                    this.setState({
                        productId: json.productId,
                        productName: json.productName,
                        productDescription: json.productDescription,
                        errorFetcing: true,
                        disabled: true,
                        page: this.state.page
                    })
                })
                .catch((e) => {
                    swal({
                        title: "Error !",
                        text: "Error Connect to API",
                        icon: "error",
                        button: "Ok",
                    });
                });
        }
    }
    componentDidMount() {
        this.getPaging();
        this.getCount();
    }
    render() {
        const { useStyles } = this.props
        const classes = () => useStyles;
        const { productId, productName, productDescription, orderby, show, checkedA } = this.state
        return (
            <>
                <DivClassSingle
                    className="content">
                    <DivClassSingle
                        className="data-left">
                        <DivClassSingle
                            className="cari">
                            <div data-tip="Show Product Qty < 10">
                                <FormControlLabel
                                    control={<Switch checked={checkedA}
                                        className="toogle"
                                        onChange={this.handleChangeMinus}
                                        name="checkedA" />}
                                />
                            </div>
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
                            <div data-tip="Search">
                                <Button
                                    className="btn-cari"
                                    onClick={this.cari}>
                                    <FaIcons.FaSearch />
                                </Button>

                            </div>
                            <ReactTooltip />
                        </DivClassSingle>
                        <Hr />
                        <DivClassSingle className={(this.state.show <= 5) ? "list" : "scroll"}>
                            {this.state.products.length <= 0 ?
                                <DivClassSingle
                                    className="list-data">
                                    <Center>
                                        <H3>
                                            DATA NOT FOUND
                                      </H3>
                                        <Img
                                            src="https://i1.wp.com/dewankomputer.com/wp-content/uploads/2019/08/pesawat.gif?resize=84%2C208"></Img>
                                    </Center>
                                </DivClassSingle>
                                :
                                this.state.products.map(
                                    (Item, idx) =>
                                        <DivClassSingle
                                            className="list-data"
                                            key={idx}
                                            onClick={() => this.detail(Item.productId, Item.productQty)} >
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
                                        <Select onChange={this.onChangeSelectShow} name="show" value={show}>
                                                <Option value="-">-Pilih-</Option>
                                                <Option value="5">5</Option>
                                                <Option value="10">10</Option>
                                                <Option value="15">15</Option>
                                                <Option value="30">30</Option>
                                                <Option value="50">50</Option>
                                            </Select>
                                        entries
                                    </P>
                                        <P>Page: {this.state.page}</P>
                                        <P>Order By:
                                        <Select onChange={this.onChangeSelect} name="orderby" value={orderby}>
                                                <option value="-" selected disabled>-Pilih-</option>
                                                <Option value="asc">ASC</Option>
                                                <Option value="desc">DESC</Option>
                                            </Select>
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
                            <H2>{(this.state.disabled) ? "Monitoring " : "Kelola "} Stock</H2>
                            {this.state.productId === "" ? "" :
                                <> <div data-tip="Clear Product">
                                    <Button
                                        onClick={this.clear}>
                                        <FaIcons.FaBan />
                                    </Button>
                                </div>
                                    <div data-tip="Edit Product">
                                        <Button
                                            onClick={this.edit}>
                                            <FaIcons.FaPencilAlt />
                                        </Button>
                                    </div>
                                    <div data-tip="Delete Product">
                                        <Button
                                            onClick={() => { this.delete() }}>
                                            <FaIcons.FaTrash />
                                        </Button>
                                    </div>
                                    <ReactTooltip />
                                </>
                            }
                            {(this.state.add) ?
                                <div data-tip="Add Product">
                                    <Button
                                        onClick={this.save}>
                                        <FaIcons.FaPlus />
                                    </Button>
                                    <ReactTooltip />
                                </div>

                                : ""}

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