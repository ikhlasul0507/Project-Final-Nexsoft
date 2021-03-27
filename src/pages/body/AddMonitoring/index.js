import React, { Component } from 'react'
import "./addMonitoring.css"
import Nd6 from "../../../assets/img/nd6.png"
import {
    Button,
    Input,
    Label,
    P,
    Textarea,
    Select,
    Option,
    Img
} from "../../../componen"
import DivClassSingle from "../../../componen/div/divClassSingle"
import * as FaIcons from 'react-icons/fa';
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import moment from 'moment';
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip';
class AddMonitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stoks: [],
            products: [],
            transTypeProduct: "",
            tanggaDokumen: "",
            deskripsiDokumen: "",
            productList: [
                {
                    productId: "",
                    tglExpiredProduct: null,
                    harga: null,
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
        };
        this.onChangeSelectBarang = (productId, index) => {
            if (this.state.productList[0].transTypeProduct === "") {
                swal({
                    title: "Error !",
                    text: "Please select transtype !",
                    icon: "error",
                    button: "Ok",
                });
                this.clear();
            } else {
                var cekProduct = this.state.productList.findIndex(function(el){
                    return el.productId === productId
                })
                if(cekProduct >= 0){
                    swal({
                        title: "Error !",
                        text: "Product is already !",
                        icon: "error",
                        button: "Ok",
                    });
                }else{
                this.state.productList[index].productId = productId;
                let newproductList = this.state.productList;
                this.setState({
                    productList: newproductList,
                });
            }
            }
        }
        this.onChangeSelectTrans = (transTypeProduct) => {
            this.state.productList[0].transTypeProduct = transTypeProduct;
            let newproductList = this.state.productList;
            this.setState({
                transTypeProduct: transTypeProduct,
                productList: newproductList,
                deskripsiDokumen: "Document " + (transTypeProduct == 0 ? "Bertambah" : "Berkurang")
            });
        }
        this.onChangeInput = (attribut, value, index) => {
            if (this.state.productList[0].productId === "") {
                swal({
                    title: "Error !",
                    text: "Please select product !",
                    icon: "error",
                    button: "Ok",
                });
                this.clear();
            } else {
               
                console.log("TTTTTTTTTTTTTTTTTTTTTT", this.state.transTypeProduct)
                this.state.productList[index][attribut] = value;
                const newproductList = this.state.productList;
                this.setState({
                    productList: newproductList,
                });
                if (this.state.transTypeProduct === 1) {
                    for (let i = 0; i < this.state.productList.length; i++) {
                        this.state.productList[i]["tglExpiredProduct"] = null;
                        this.state.productList[i]["harga"] = null;
                    }
                }
            }
            console.log("transtype -----:", this.state.transTypeProduct)
            console.log("prododuct id", this.state.productList[0].productId)
        }
        this.addChild = () => {
            
            const newproductList = this.state.productList;
            newproductList.push({
                productId: "",
                tglExpiredProduct: "",
                harga: "",
                transTypeProduct: this.state.transTypeProduct,
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
            if (this.state.productList[0].transTypeProduct === "") {
                swal({
                    title: "Error !",
                    text: "Please select transtype !",
                    icon: "error",
                    button: "Ok",
                });
            } else {
                this.setState({
                    [el.target.name]: el.target.value,
                })
            }
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
            console.log("document description :", this.state.deskripsiDokumen)
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
                        this.clear()
                        this.getApiProducts();
                        Swal.fire({
                            title: "Good job!",
                            text: json.successMessage,
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false,
                            timerProgressBar: true
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
                stoks: [],
                deskripsiDokumen: "",
                transTypeProduct: "",
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
            console.log(this.state.productList)
        }
    }

    componentDidMount() {
        this.getDateWithMoment();
        this.getApiProducts();
    }
    render() {
        const {
            tanggaDokumen,
            deskripsiDokumen,
            transTypeProduct,
            productList
        } = this.state
        var msgTotal = productList.reduce(function (prev, cur) {
            return Number(prev) + Number(cur.productQty);
        }, 0);
        var msgTotalPrice = productList.reduce(function (prev, cur) {
            return Number(prev) + Number(cur.harga);
        }, 0);
        return (
            <>
                <DivClassSingle className="add">
                    <DivClassSingle className="add-kiri">
                        <DivClassSingle className="form-data">
                            <Label>Trans Type</Label>
                            <Select
                                className="selectA"
                                value={transTypeProduct}
                                onChange={event => this.onChangeSelectTrans(event.target.value)}
                            >
                                <Option value="" disabled="disabled">--Pilih--</Option>
                                <Option value="0">Bertambah</Option>
                                <Option value="1">Berkurang</Option>
                            </Select>
                        </DivClassSingle>
                        <DivClassSingle className="form-data">
                            <Label>Document Date</Label>
                            <Input
                                type="date"
                                value={tanggaDokumen}
                                onChange={this.setValue}
                                name="tanggaDokumen"
                                onKeyDown={(e)=>{e.preventDefault()}}
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
                            <Label>Total items</Label>
                            <Input
                                type="text"
                                value={productList.length}
                                disabled
                            />
                        </DivClassSingle>
                        <DivClassSingle className="form-data">
                            <Label>Totals Qty</Label>
                            <Input
                                type="text"
                                value={msgTotal}
                                disabled
                            />
                        </DivClassSingle>
                        <DivClassSingle className="form-data">
                            <Label>Totals Price</Label>
                            <Input
                                type="text"
                                value={msgTotalPrice}
                                disabled
                            />
                        </DivClassSingle>
                        <DivClassSingle className="form-data">
                            <div data-tip="Save Document">
                                <Button
                                    data-tip="hello world"
                                    className="submitA"
                                    onClick={this.save}
                                >
                                    <FaIcons.FaSave />Save
                                    </Button>
                            </div>
                            <ReactTooltip />
                            <div data-tip="Back to list">
                                <Button
                                    className="submitA"
                                    onClick={this.back}
                                >
                                    <FaIcons.FaArrowLeft /> Back
                                    </Button>
                            </div>
                        </DivClassSingle>

                    </DivClassSingle>
                    <DivClassSingle className="add-kanan">
                    {(this.state.transTypeProduct !=="")?
                    <>
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
                                                 <Option value="" disabled="disabled">--Pilih--</Option>
                                                {
                                                    this.state.products.map(
                                                        (value, idx) =>
                                                            <option key={idx}
                                                                value={value.productId}>
                                                                {value.productId}-{value.productName.substring(30, 0)}
                                                            </option>
                                                    )
                                                }
                                            </Select>
                                        </DivClassSingle>
                                        {(this.state.transTypeProduct) == 0?
                                            <>
                                                <DivClassSingle className="form-data">
                                                    <Label>Expired date</Label>
                                                    <Input
                                                        type="date"
                                                        min={tanggaDokumen}
                                                        value={value.tglExpiredProduct}
                                                        onChange={event => this.onChangeInput("tglExpiredProduct", event.target.value, index)}
                                                        onKeyDown={(e)=>{e.preventDefault()}}
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
                                            </>
                                            : ""}
                                        <Input
                                            type="hidden"
                                            value={this.state.transTypeProduct}
                                            name="" placeholder="Harga (Rp)..."
                                            onChange={event => this.onChangeInput("transTypeProduct", this.state.transTypeProduct, index)}
                                        />
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
                                            <div data-tip="Remove Product" className="removeProduct1" >
                                                <Button
                                                    className="removeProduct"
                                                    onClick={() => { this.removeChild(index) }}
                                                >
                                                    <FaIcons.FaMinus />
                                                </Button>
                                                <P>Remove</P>
                                            </div>

                                            : ""
                                        }
                                    </DivClassSingle>

                                )
                            })
                        }
                        <div data-tip="Add Product">
                            <Button
                                className="submitProduct"
                                onClick={this.addChild}
                            >
                                <FaIcons.FaPlus />
                            </Button>
                        </div>
                        </>
                    :
                    <Img src={Nd6} className="img-add" />
                    }
                    </DivClassSingle>
                </DivClassSingle>
            </>
        );
    }
}

const mapStateToProps = state => ({
    checkLogin: state.AReducer.recaptchaResponse,
    dataForm: state.AReducer.isFormActive
})

const mapDispatchToProps = dispatch => {
    return {
        isFormActive: () => dispatch({ type: "FORM_ACTIVE" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMonitoring);