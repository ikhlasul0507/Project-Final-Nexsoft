import React, {Component} from 'react'
import "./addMonitoring.css"
import {Button, H3, H2, Input, Label, P, Small, A, Li, Ul, Option, Select, Textarea} from "../../../componen"
import DivClassSingle from "../../../componen/div/divClassSingle"
import * as FaIcons from 'react-icons/fa';

class AddMonitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    product: {
                        idProduct: "",
                        nameProduct: "",
                        descriptionProduct: ""
                    },
                    expiredDate: "",
                    price: "",
                    transType: "",
                    productQuantity: ""

                }
            ]
        }

        this.onChangeSelectBarang = (idProduct, index) => {
            this.state.items[index].product.idProduct = idProduct;
            let newItems = this.state.items;
            this.setState({
                items: newItems
            });
        }

        this.onChangeSelectTrans = (transType, index) => {
            this.state.items[index].transType = transType;
            let newItems = this.state.items;
            this.setState({
                items: newItems
            });
        }


        this.onChangeInput = (attribut, value, index) => {
            this.state.items[index][attribut] = value;
            const newItems = this.state.items;
            this.setState({
                items: newItems
            });
            console.log(this.state.items)
        }
        this.addChild = () => {
            const newItems = this.state.items;
            newItems.push({
                product: {
                    idProduct: "",
                    nameProduct: "",
                    descriptionProduct: ""
                },
                expiredDate: "",
                price: "",
                transType: "",
                productQuantity: ""
            });

            this.setState({
                items: newItems
            });
        }
        this.removeChild = index => {
            this.state.items.splice(index, 1);
            const newItems = this.state.items;

            this.setState({
                items: newItems
            });
        }
    }

    render() {
        return (
            <>
                <DivClassSingle className="add">
                    <DivClassSingle className="add-kiri">
                        <DivClassSingle className="form-data">
                            <Label>Document Date</Label>
                            <Input type="date" name=""/>
                        </DivClassSingle>
                        <DivClassSingle className="form-data">
                            <Label className="text-area-label">Description</Label>
                            <Textarea className="text-area" placeholder="Description..."></Textarea>
                        </DivClassSingle>
                        <DivClassSingle className="form-data">
                            <Button className="submitA"><FaIcons.FaSave/> Save</Button>
                            <Button className="submitA" onClick={() => {
                                if (window.confirm("Are you sure, want to back ?")) {
                                    this.props.history.push("/monitoring-produk")
                                }
                            }}><FaIcons.FaBackward/> Back</Button>
                        </DivClassSingle>
                    </DivClassSingle>
                    <DivClassSingle className="add-kanan">
                        {
                            console.log(this.state.items)
                        }
                        {

                            this.state.items.map((value, index) => {
                                return (
                                    <DivClassSingle className="add-product" key={index}>
                                        <DivClassSingle className="form-data">
                                            <Label>Select a product</Label>
                                            <select className="selectA" value={value.product.idProduct}
                                                    onChange={event => this.onChangeSelectBarang(event.target.value, index)}>
                                                <option>--Pilih--</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                            </select>
                                        </DivClassSingle>
                                        <DivClassSingle className="form-data">
                                            <Label>Expired date</Label>
                                            <Input type="date" value={value.expiredDate}
                                                   onChange={event => this.onChangeInput("expiredDate", event.target.value, index)}
                                                   name=""/>
                                        </DivClassSingle>
                                        <DivClassSingle className="form-data">
                                            <Label>Price (Rp)</Label>
                                            <Input type="number" value={value.price} name="" placeholder="Price (Rp)..."
                                                   onChange={event => this.onChangeInput("price", event.target.value, index)}/>
                                        </DivClassSingle>
                                        <DivClassSingle className="form-data">
                                            <Label>Trans Type</Label>
                                            <select className="selectA" value={value.transType}
                                                    onChange={event => this.onChangeSelectTrans(event.target.value, index)}>
                                                <option>--Pilih--</option>
                                                <option value="Bertambah">Bertambah</option>
                                                <option value="Berkurang">Berkurang</option>
                                            </select>
                                        </DivClassSingle>
                                        <DivClassSingle className="form-data">
                                            <Label>Product Quantity</Label>
                                            <Input type="number" value={value.productQuantity} className="inputL"
                                                   name=""
                                                   onChange={event => this.onChangeInput("productQuantity", event.target.value, index)}
                                                   placeholder="Product quantity..."/>
                                        </DivClassSingle>
                                        {(index > 0) ?
                                            <>
                                                <Button className="removeProduct" onClick={() => {
                                                    if (window.confirm("Are you sure, want to delete")) {
                                                        this.removeChild(index)
                                                    }
                                                }}><FaIcons.FaMinus/></Button>
                                                <P>Remove</P>
                                            </>
                                            : ""
                                        }
                                    </DivClassSingle>

                                )
                            })
                        }
                        <Button className="submitProduct" onClick={this.addChild}><FaIcons.FaPlus/></Button>
                        <P>Add Product</P>
                    </DivClassSingle>
                </DivClassSingle>
            </>
        );
    }
}

export default AddMonitoring;