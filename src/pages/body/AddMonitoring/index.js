import React, { Component } from 'react'
import "./addMonitoring.css"
import { Button, H3,H2, Input, Label, P, Small, A, Li, Ul,Option, Select,Textarea } from "../../../componen"
import DivClassSingle from "../../../componen/div/divClassSingle"
import * as FaIcons from 'react-icons/fa';
class AddMonitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[
                {
                    product :{
                        idProduct : "",
                        nameProduct : "",
                        descriptionProduct : ""
                    },
                    expiredDate : "",
                    price:"",
                    transType:"",
                    productQuantity:""

                }
            ]
        }
    }
   
    render() {
        return (
            <>
                <DivClassSingle className="navbarA">
                    <H2></H2>
                    <Button className="btn-kiri" onClick={()=>{this.props.history.push("/monitoring-produk")}}><FaIcons.FaList /></Button>
                </DivClassSingle>
                <DivClassSingle className="add">
                    <DivClassSingle className="add-kiri">
                        <DivClassSingle className="form-data">
                            <Label>Document Date</Label>
                            <Input type="date" name="" />
                        </DivClassSingle>
                        <DivClassSingle className="form-data">
                            <Label className="text-area-label">Description</Label>
                            <Textarea className="text-area" placeholder="Description..."></Textarea>
                        </DivClassSingle>
                        <DivClassSingle className="form-data">
                        <Button className="submitA" >Submit</Button>
                        </DivClassSingle>
                    </DivClassSingle>
                    <DivClassSingle className="add-kanan">
                        {/* {
                            console.log(this.state.items)
                        }
                        {
                            
                            this.state.items.map((value,index)=>{
                                let addButton;
                                // if(index === this.state.items.length - 1) {
                                //     addButton = 
                                //         // <Div class="add">
                                //         //         <Button value="+" class="button-add" onClick={this.addChild} />
                                //         // </Div>;
                                // } */}
                        <DivClassSingle className="add-product" >
                            <DivClassSingle className="form-data">
                                <Label>Select a product</Label>
                                <Select className="selectA">
                                    <Option>--Pilih--</Option>
                                    <Option>A</Option>
                                    <Option>B</Option>
                                </Select>
                            </DivClassSingle>
                            <DivClassSingle className="form-data">
                                <Label>Expired date</Label>
                                <Input type="date" onChange={event => this.onChangeInput("waktu", event.target.value)} name="" />
                            </DivClassSingle>
                            <DivClassSingle className="form-data">
                                <Label>Price (Rp)</Label>
                                <Input type="number" name="" placeholder="Price (Rp)..." />
                            </DivClassSingle>
                            <DivClassSingle className="form-data">
                                <Label>Trans Type</Label>
                                <Select className="selectA">
                                    <Option>--Pilih--</Option>
                                    <Option>Bertambah</Option>
                                    <Option>Berkurang</Option>
                                </Select>
                            </DivClassSingle>
                            <DivClassSingle className="form-data">
                                <Label>Product Quantity</Label>
                                <Input type="number" className="inputL" name="" placeholder="Product quantity..." />
                            </DivClassSingle>
                        </DivClassSingle>
                        {/* })
                    }         */}
                        <Button className="submitProduct" ><FaIcons.FaPlus /></Button>
                        <P>Add Product</P>
                    </DivClassSingle>
                </DivClassSingle>
            </>
        );
    }
}

export default AddMonitoring;