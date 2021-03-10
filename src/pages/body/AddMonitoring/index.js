import React, { Component } from 'react'
import "./addMonitoring.css"
import {
    Button,
    Input,
    Label,
    P,
    Textarea,
    Select,
    Option
} from "../../../componen"
import DivClassSingle from "../../../componen/div/divClassSingle"
import * as FaIcons from 'react-icons/fa';
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import moment from 'moment';

class AddMonitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stoks: [],
            products: [],
            tanggaDokumen: "",
            deskripsiDokumen: "",
            productList: [
                {
                    productId: "",
                    tglExpiredProduct: "",
                    harga: "",
                    transTypeProduct: "",
                    productQty: ""
                }
            ],
            url: "http://localhost:8080/nd6/stock/",
            urlProducts: "http://localhost:8080/nd6/product/"
        }
        this.getDateWithMoment = () => {
            this.setState({
                tanggaDokumen: moment().format('YYYY-MM-DD')
                // tanggaDokumen: moment().format('DD/mm/YYYY')
            })
            console.log(this.state.tanggalDokumen)
        };
        this.onChangeSelectBarang = (productId, index) => {
            this.state.productList[index].productId = productId;
            let newproductList = this.state.productList;
            this.setState({
                productList: newproductList
            });
        }
        this.onChangeSelectTrans = (transTypeProduct, index) => {
            this.state.productList[index].transTypeProduct = transTypeProduct;
            let newproductList = this.state.productList;
            this.setState({
                productList: newproductList
            });
        }
        this.onChangeInput = (attribut, value, index) => {
            this.state.productList[index][attribut] = value;
            const newproductList = this.state.productList;
            this.setState({
                productList: newproductList
            });
        }
        this.addChild = () => {
            const newproductList = this.state.productList;
            newproductList.push({
                productId: "",
                tglExpiredProduct: "",
                harga: "",
                transTypeProduct: "",
                productQty: ""
            });

            this.setState({
                productList: newproductList
            });
        }
        this.removeChild = index => {
            swal({
                title: "Are you sure?",
                text: "wont to Delete ?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        this.state.productList.splice(index, 1);
                        const newproductList = this.state.productList;

                        this.setState({
                            productList: newproductList
                        });
                    } else {
                        //   swal("Your imaginary file is safe!");
                    }
                });
        }
        this.back = () => {
            swal({
                title: "Are you sure?",
                text: "wont to back to list ?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.props.history.push("/monitoring-produk")
                    } else {
                        //   swal("Your imaginary file is safe!");
                    }
                });
        }

        this.setValue = el => {
            this.setState({
                [el.target.name]: el.target.value,
            })
        }
        this.save = () => {
            const objek = {
                tanggaDokumen: this.state.tanggaDokumen,
                deskripsiDokumen: this.state.deskripsiDokumen,
                productList: this.state.productList
            }
            const stoks = [];
            stoks.push(objek)
            this.state.stoks.push(stoks);
            console.log("stok :", this.state.stoks)
            console.log("document description :", this.state.productList.productId)
            this.saveToApi();

        }
        this.saveToApi = () => {
            const objek = {
                tanggaDokumen: this.state.tanggaDokumen,
                deskripsiDokumen: this.state.deskripsiDokumen,
                productList: this.state.productList
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
                    } else if (json.message) {
                        console.log(json)
                        swal({
                            title: "Error !",
                            text: "Enter the product !",
                            icon: "error",
                            button: "Ok",
                        });
                    } else {
                        // this.setState({
                        //     page: 1
                        // })
                        this.clear()
                        this.getApiProducts();
                        Swal.fire({
                            title: "Good job!",
                            text: json.successMessage,
                            icon: "success",
                            timer:2000,
                            showConfirmButton:false,
                            timerProgressBar:true
                        });
                        // this.getPaging(this.state.page, this.state.orderby, this.state.show);
                        // this.getCount();
                    }
                })
                .catch((e) => {
                    console.log(e)
                    alert("Failed sending data!!");
                });
        }
        this.getApiProducts = () => {
            fetch(this.state.urlProducts, {
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
                        products: json
                    })
                })
                .catch((e) => {
                    console.log(e)
                    alert("Failed sending data!!");
                });
        }
        this.clear = () => {
            this.setState({
                deskripsiDokumen: "",
                productList: [
                    {
                        productId: "",
                        tglExpiredProduct: "",
                        harga: "",
                        transTypeProduct: "",
                        productQty: ""
                    }
                ]
            })
        }
    }

    componentDidMount() {
        this.getDateWithMoment();
        this.getApiProducts();

    }
    render() {
        const { tanggaDokumen, deskripsiDokumen } = this.state
        return (
            <>
                <DivClassSingle className="add">
                    <DivClassSingle className="add-kiri">
                        <DivClassSingle className="form-data">
                            <Label>Document Date</Label>
                            <Input
                                type="date"
                                value={tanggaDokumen}
                                onChange={this.setValue}
                                name="tanggaDokumen"
                            />
                        </DivClassSingle>
                        <DivClassSingle className="form-data">
                            <Label className="text-area-label">Description</Label>
                            <Textarea
                                className="text-area"
                                placeholder="Description..."
                                value={deskripsiDokumen}
                                name="deskripsiDokumen"
                                onChange={this.setValue}
                            />
                        </DivClassSingle>
                        <DivClassSingle className="form-data">
                            <Button
                                className="submitA"
                                onClick={this.save}
                            >
                                <FaIcons.FaSave /> Save
                                    </Button>
                            <Button
                                className="submitA"
                                onClick={this.back}
                            >
                                <FaIcons.FaBackward /> Back
                                    </Button>
                        </DivClassSingle>
                    </DivClassSingle>
                    <DivClassSingle className="add-kanan">
                        {
                            this.state.productList.map((value, index) => {
                                return (
                                    <DivClassSingle className="add-product" key={index}>
                                        <DivClassSingle className="form-data">
                                            <Label>Select a product</Label>
                                            <Select
                                                className="selectA"
                                                value={value.productId}
                                                onChange={event => this.onChangeSelectBarang(event.target.value, index)}
                                            >
                                                <Option>--Pilih--</Option>
                                                {
                                                    this.state.products.map(
                                                        (value, idx) =>
                                                            <option key={idx} value={value.productId}>{value.productName}</option>
                                                    )
                                                }
                                                <Option value="B">B</Option>
                                            </Select>
                                        </DivClassSingle>
                                        <DivClassSingle className="form-data">
                                            <Label>Expired date</Label>
                                            <Input
                                                type="date"
                                                value={value.tglExpiredProduct}
                                                onChange={event => this.onChangeInput("tglExpiredProduct", event.target.value, index)}
                                                name=""
                                            />
                                        </DivClassSingle>
                                        <DivClassSingle className="form-data">
                                            <Label>Harga (Rp)</Label>
                                            <Input
                                                type="number"
                                                value={value.harga}
                                                name="" placeholder="Harga (Rp)..."
                                                onChange={event => this.onChangeInput("harga", event.target.value, index)}
                                            />
                                        </DivClassSingle>
                                        <DivClassSingle className="form-data">
                                            <Label>Trans Type</Label>
                                            <Select
                                                className="selectA"
                                                value={value.transTypeProduct}
                                                onChange={event => this.onChangeSelectTrans(event.target.value, index)}
                                            >
                                                <Option>--Pilih--</Option>
                                                <Option value="0">Bertambah</Option>
                                                <Option value="1">Berkurang</Option>
                                            </Select>
                                        </DivClassSingle>
                                        <DivClassSingle className="form-data">
                                            <Label>Product Quantity</Label>
                                            <Input
                                                type="number"
                                                value={value.productQty}
                                                className="inputL"
                                                name=""
                                                onChange={event => this.onChangeInput("productQty", event.target.value, index)}
                                                placeholder="Product quantity..." />
                                        </DivClassSingle>
                                        {(this.state.productList.length > 1) ?
                                            <>
                                                <Button
                                                    className="removeProduct"
                                                    onClick={() => { this.removeChild(index) }}
                                                >
                                                    <FaIcons.FaMinus />
                                                </Button>
                                                <P>Remove</P>
                                            </>
                                            : ""
                                        }
                                    </DivClassSingle>

                                )
                            })
                        }
                        <Button
                            className="submitProduct"
                            onClick={this.addChild}
                        >
                            <FaIcons.FaPlus />
                        </Button>
                        <P>Add Product</P>
                    </DivClassSingle>
                </DivClassSingle>
            </>
        );
    }
}

export default AddMonitoring;