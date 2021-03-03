import React, { Component } from 'react'
import "./detail.css"
import * as FaIcons from 'react-icons/fa';
import DivClassSingle from "../../../componen/div/divClassSingle"
import { Button, H2, Input, Label, Option, Select, P, Small, A, Li, Ul, } from "../../../componen"
import { Table, Tbody, Td, Th, Thead, Tr } from "../../../componen/table"
class DetailMonitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <DivClassSingle className="navbarD">
                    <h2></h2>
                    <Button className="btn-detail" onClick={() => { this.props.history.push("/monitoring-produk") }}><FaIcons.FaBackward /></Button>
                </DivClassSingle>
                <DivClassSingle className="content-detail">
                    <DivClassSingle className="faktur-header">
                        <h2>PT Paramadaksa Teknologi Nusantara</h2>
                        <p>Tangerang - Indonesia</p>
                        <hr className="hr1" /><hr />
                    </DivClassSingle>
                    <DivClassSingle className="faktur-content">
                        <h1>INVOICE</h1>
                        <DivClassSingle className="faktur-content-header">
                            <DivClassSingle className="faktur-content-header-kiri">
                                <b><label className="label">Transaction Header</label></b>
                                <DivClassSingle className="field-label" >
                                    <label className="label">Document Number</label>
                                    <label>: {this.props.match.params.id}</label><br />
                                </DivClassSingle>
                                <DivClassSingle className="field-label" >
                                    <label className="label">Date</label>
                                    <label>: 2020/08/11</label><br />
                                </DivClassSingle>
                                <b><label className="label">Transaction Total</label></b>
                                <DivClassSingle className="field-label" >
                                    <label className="label">Totals Item</label>
                                    <label>: <b>20</b></label><br />
                                </DivClassSingle>
                                <DivClassSingle className="field-label" >
                                    <label className="label">Total Cases</label>
                                    <label>: <b>40</b></label><br />
                                </DivClassSingle>
                                <div className="field-label" >
                                    <label className="label">Net Amount</label>
                                    <label>: <b>800</b></label><br />
                                </div>
                            </DivClassSingle>
                            <DivClassSingle className="faktur-content-header-kanan">
                                <label className="label">Description :</label>
                                <DivClassSingle className="field-label" >
                                    <label>DCM112222 Search for the keywords to learn more about each warningis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</label><br />
                                </DivClassSingle>

                            </DivClassSingle>
                        </DivClassSingle>
                        <hr />
                        <DivClassSingle className="table">
                            <b><label className="label">Transaction Detail</label></b>
                            <table border="1px" cellPadding="3px" cellSpacing="0">
                                <thead>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Product Date Expired</th>
                                    <th>Product Quantity</th>
                                    <th>Product Price</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>PRR021</td>
                                        <td>Bear Bre</td>
                                        <td>2020/12/12</td>
                                        <td>12</td>
                                        <td>Rp.300000,-</td>
                                    </tr>
                                    <tr>
                                        <td>PRR021</td>
                                        <td>Bear Bre</td>
                                        <td>2020/12/12</td>
                                        <td>12</td>
                                        <td>Rp.300000,-</td>
                                    </tr>
                                    <tr>
                                        <td>PRR021</td>
                                        <td>Bear Bre</td>
                                        <td>2020/12/12</td>
                                        <td>12</td>
                                        <td>Rp.300000,-</td>
                                    </tr>
                                    <tr>
                                        <td>PRR021</td>
                                        <td>Bear Bre</td>
                                        <td>2020/12/12</td>
                                        <td>12</td>
                                        <td>Rp.300000,-</td>
                                    </tr>
                                    <tr>
                                        <td>PRR021</td>
                                        <td>Bear Bre</td>
                                        <td>2020/12/12</td>
                                        <td>12</td>
                                        <td>Rp.300000,-</td>
                                    </tr>
                                    <tr>
                                        <td>PRR021</td>
                                        <td>Bear Bre</td>
                                        <td>2020/12/12</td>
                                        <td>12</td>
                                        <td>Rp.300000,-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </DivClassSingle>
                        <DivClassSingle className="footer-content">
                            <label><b>Date Print : 2020/02/12 12:08:40</b></label>
                        </DivClassSingle>
                    </DivClassSingle>
                </DivClassSingle>
            </>
        );
    }
}

export default DetailMonitoring;