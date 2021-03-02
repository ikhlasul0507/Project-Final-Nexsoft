import React, { Component } from 'react'
import "./addMonitoring.css"
import { Button, H3, Input, Label, P, Small, A, Li, Ul, } from "../../../componen"
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
        this.back = ()=>{
            this.props.history.push("/monitoring-produk")
        }
    }
   
    render() {
        return (
            <>
                <div className="navbarA">
                    <h2>Add Monitoring Stock</h2>
                    <Button className="btn-kiri" onClick={this.back}><FaIcons.FaList /></Button>
                    <Button><FaIcons.FaBook /></Button>
                </div>
                <div className="add">
                    <div className="add-kiri">
                        <div className="form-data">
                            <Label>Document Date</Label>
                            <Input type="date" name="" />
                        </div>
                        <div className="form-data">
                            <Label className="text-area-label">Description</Label>
                            <textarea className="text-area" placeholder="Description..."></textarea>
                        </div>
                        <div className="form-data">
                        <Button className="submitA" >Submit</Button>
                        </div>
                    </div>
                    <div className="add-kanan">
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
                        <div className="add-product" >
                            <div className="form-data">
                                <Label>Select a product</Label>
                                <select className="selectA">
                                    <option>--Pilih--</option>
                                    <option>A</option>
                                    <option>B</option>
                                </select>
                            </div>
                            <div className="form-data">
                                <Label>Expired date</Label>
                                <Input type="date" onChange={event => this.onChangeInput("waktu", event.target.value)} name="" />
                            </div>
                            <div className="form-data">
                                <Label>Price (Rp)</Label>
                                <Input type="number" name="" placeholder="Price (Rp)..." />
                            </div>
                            <div className="form-data">
                                <Label>Trans Type</Label>
                                <select className="selectA">
                                    <option>--Pilih--</option>
                                    <option>Bertambah</option>
                                    <option>Berkurang</option>
                                </select>
                            </div>
                            <div className="form-data">
                                <Label>Product Quantity</Label>
                                <Input type="number" className="inputL" name="" placeholder="Product quantity..." />
                            </div>
                        </div>
                        {/* })
                    }         */}
                        <Button className="submitProduct" ><FaIcons.FaPlus /></Button>
                        <P>Add Product</P>
                    </div>
                </div>
            </>
        );
    }
}

export default AddMonitoring;