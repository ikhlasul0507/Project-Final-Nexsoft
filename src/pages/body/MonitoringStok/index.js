import React, { Component } from 'react'
import "./monitor.css"
import * as FaIcons from 'react-icons/fa';
import DivClassSingle from "../../../componen/div/divClassSingle"
import { Button, H3, Input, Label, P, Small, A, Li, Ul, } from "../../../componen"

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

class MonitoringStok extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: false
        }

        this.detail =()=>{
            this.setState({
                detail :true
            })
            alert("Detail")
        }
    }


    render() {
        const classes = () => this.props.useStyles();
        return (
            <div>
                <div className="navbarM">
                    <DivClassSingle className="cari">
                        <Input type="text" name="" placeholder="Product code" />
                        <Input type="text" name="" placeholder="Product name" />
                        <Button className="btn-cari" onClick={this.cari}><FaIcons.FaSearch /></Button>
                    </DivClassSingle>
                    <div className="judul">
                        <h2>List Monitoring Stock</h2>
                    </div>
                    <div className="proses">
                        {(this.state.detail)?
                        <>
                        <Button><FaIcons.FaEye /></Button>
                        <Button><FaIcons.FaPencilAlt /></Button>
                        <Button><FaIcons.FaTrash /></Button>
                        </>
                        :""
                        }
                        <Button className="btn-kiri" onClick={()=>{this.props.history.push("/add-monitoring")}}><FaIcons.FaPlus /></Button>
                        <Button><FaIcons.FaBook /></Button>
                        <p className="pM">Show</p>
                        <select>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                        </select>
                    </div>
                </div>
                <div className="table" >
                    <table className="table-dataM" border="1px" cellPadding="10px">
                        <thead>
                            <th>Nomor Dokumen</th>
                            <th>Tanggal Dokumen</th>
                            <th>Deskripsi Dokumen</th>
                            <th>Total Nominal Stok Dokumen</th>
                        </thead>
                        <tbody>
                            
                            <tr onClick={this.detail}>
                                <td>PROR1231</td>
                                <td>2020/01/22</td>
                                <td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.</td>
                                <td>50 Pcs</td>
                            </tr>
                            <tr onClick={this.detail}>
                                <td>PROR1231</td>
                                <td>2020/01/22</td>
                                <td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.</td>
                                <td>50 Pcs</td>
                            </tr>
                            <tr onClick={this.detail}>
                                <td>PROR1231</td>
                                <td>2020/01/22</td>
                                <td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.</td>
                                <td>50 Pcs</td>
                            </tr>
                            <tr onClick={this.detail}>
                                <td>PROR1231</td>
                                <td>2020/01/22</td>
                                <td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.</td>
                                <td>50 Pcs</td>
                            </tr>
                            <tr onClick={this.detail}>
                                <td>PROR1231</td>
                                <td>2020/01/22</td>
                                <td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.</td>
                                <td>50 Pcs</td>
                            </tr>
                            <tr onClick={this.detail}>
                                <td>PROR1231</td>
                                <td>2020/01/22</td>
                                <td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.</td>
                                <td>50 Pcs</td>
                            </tr>
                            <tr onClick={this.detail}>
                                <td>PROR1231</td>
                                <td>2020/01/22</td>
                                <td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.</td>
                                <td>50 Pcs</td>
                            </tr>
                            <tr onClick={this.detail}>
                                <td>PROR1231</td>
                                <td>2020/01/22</td>
                                <td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.</td>
                                <td>50 Pcs</td>
                            </tr>
                            <tr onClick={this.detail}>
                                <td>PROR1231</td>
                                <td>2020/01/22</td>
                                <td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.</td>
                                <td>50 Pcs</td>
                            </tr>
                            <tr onClick={this.detail}>
                                <td>PROR1231</td>
                                <td>2020/01/22</td>
                                <td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.</td>
                                <td>50 Pcs</td>
                            </tr>
                            <tr onClick={this.detail}>
                                <td>PROR1231</td>
                                <td>2020/01/22</td>
                                <td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.</td>
                                <td>50 Pcs</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div className={classes.root} className="pagination">
                    <Pagination count={10} color="primary" variant="outlined" shape="rounded" />
                </div>
            </div>
        );
    }
}

export default MonitoringStok;