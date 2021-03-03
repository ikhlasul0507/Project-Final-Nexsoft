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
                <div className="navbarD">
                    <h2></h2>
                    <Button className="btn-detail" onClick={() => { this.props.history.push("/monitoring-produk") }}><FaIcons.FaList /></Button>
                </div>
                <div className="content-detail">
                    <div className="faktur-header">
                        <h2>PT Paramadaksa Teknologi Nusantara</h2>
                        <p>Tangerang - Indonesia</p>
                        <hr className="hr1" /><hr />
                    </div>
                    <div className="faktur-content">
                        <h1>INVOICE</h1>
                        <div className="faktur-content-header">
                            <div className="faktur-content-header-kiri">
                                <b><label className="label">Transaction Header</label></b>
                                <div className="field-label" >
                                    <label className="label">Document Number</label>
                                    <label>: DCM112222</label><br />
                                </div>
                                <div className="field-label" >
                                    <label className="label">Date</label>
                                    <label>: 2020/08/11</label><br />
                                </div><hr />
                                <b><label className="label">Transaction Total</label></b>
                                <div className="field-label" >
                                    <label className="label">Totals Item</label>
                                    <label>: <b>20</b></label><br />
                                </div>
                                <div className="field-label" >
                                    <label className="label">Total Cases</label>
                                    <label>: <b>40</b></label><br />
                                </div>
                                <div className="field-label" >
                                    <label className="label">Net Amount</label>
                                    <label>: <b>800</b></label><br />
                                </div>
                            </div>
                            <div className="faktur-content-header-kanan">
                                <label className="label">Description :</label>
                                <div className="field-label" >
                                    <label>DCM112222 Search for the keywords to learn more about each warningis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</label><br />
                                </div>

                            </div>
                        </div>
                        <hr />
                        <div className="table">
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
                        </div>
                        <div className="footer-content">
                            <label><b>Date Print : 2020/02/12 12:08:40</b></label>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default DetailMonitoring;