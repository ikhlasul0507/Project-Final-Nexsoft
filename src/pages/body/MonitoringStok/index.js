import React, {Component} from 'react'
import "./monitor.css"
import * as FaIcons from 'react-icons/fa';
import DivClassSingle from "../../../componen/div/divClassSingle"
import {Button, H2, Input, Label, Option, Select, P, Small, A, Li, Ul,} from "../../../componen"
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../componen/table"
import {makeStyles} from '@material-ui/core/styles';
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
            detail: false,
            id: 1234567
        }

        this.detail = () => {
            this.setState({
                detail: true
            })
            alert("Detail")
        }
    }


    render() {
        const classes = () => this.props.useStyles();
        return (
            <DivClassSingle>
                <DivClassSingle className="navbarM">
                    <DivClassSingle className="cari">
                        <Input type="text" name="" placeholder="Product code"/>
                        <Input type="text" name="" placeholder="Product name"/>
                        <Button className="btn-cari" onClick={this.cari}><FaIcons.FaSearch/></Button>
                    </DivClassSingle>
                    <DivClassSingle className="judul">
                        <H2></H2>
                    </DivClassSingle>
                    <DivClassSingle className="proses">
                        {(this.state.detail) ?
                            <>
                                <Button onClick={() => {
                                    this.props.history.push(`/detail-monitoring/${this.state.id}`)
                                }}><FaIcons.FaEye/></Button>
                                <Button onClick={() => {
                                    this.props.history.push(`/add-monitoring/${this.state.id}`)
                                }}><FaIcons.FaPencilAlt/></Button>
                                <Button><FaIcons.FaTrash/></Button>
                            </>
                            : ""
                        }
                        <Button className="btn-kiri" onClick={() => {
                            this.props.history.push("/add-monitoring")
                        }}><FaIcons.FaPlus/></Button>
                        <Button onClick={() => {
                            this.props.history.push("/report-monitoring")
                        }}><FaIcons.FaBook/></Button>
                        <P className="pM">Show</P>
                        <Select>
                            <Option value="5">5</Option>
                            <Option value="10">10</Option>
                            <Option value="15">15</Option>
                        </Select>
                    </DivClassSingle>
                </DivClassSingle>
                <DivClassSingle className="table">
                    <Table className="table-dataM" border="1px" cellPadding="10px" cellSpacing="0">
                        <Thead>
                            <Th>Nomor Dokumen</Th>
                            <Th>Tanggal Dokumen</Th>
                            <Th>Deskripsi Dokumen</Th>
                            <Th>Total Nominal Stok Dokumen</Th>
                        </Thead>
                        <Tbody>
                            <Tr onClick={this.detail}>
                                <Td>PROR1231</Td>
                                <Td>2020/01/22</Td>
                                <Td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan
                                    huruf atau typesetting.</Td>
                                <Td>50 Pcs</Td>
                            </Tr>
                            <Tr onClick={this.detail}>
                                <Td>PROR1231</Td>
                                <Td>2020/01/22</Td>
                                <Td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan
                                    huruf atau typesetting.</Td>
                                <Td>50 Pcs</Td>
                            </Tr>
                            <Tr onClick={this.detail}>
                                <Td>PROR1231</Td>
                                <Td>2020/01/22</Td>
                                <Td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan
                                    huruf atau typesetting.</Td>
                                <Td>50 Pcs</Td>
                            </Tr>
                            <Tr onClick={this.detail}>
                                <Td>PROR1231</Td>
                                <Td>2020/01/22</Td>
                                <Td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan
                                    huruf atau typesetting.</Td>
                                <Td>50 Pcs</Td>
                            </Tr>
                            <Tr onClick={this.detail}>
                                <Td>PROR1231</Td>
                                <Td>2020/01/22</Td>
                                <Td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan
                                    huruf atau typesetting.</Td>
                                <Td>50 Pcs</Td>
                            </Tr>
                            <Tr onClick={this.detail}>
                                <Td>PROR1231</Td>
                                <Td>2020/01/22</Td>
                                <Td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan
                                    huruf atau typesetting.</Td>
                                <Td>50 Pcs</Td>
                            </Tr>
                            <Tr onClick={this.detail}>
                                <Td>PROR1231</Td>
                                <Td>2020/01/22</Td>
                                <Td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan
                                    huruf atau typesetting.</Td>
                                <Td>50 Pcs</Td>
                            </Tr>
                            <Tr onClick={this.detail}>
                                <Td>PROR1231</Td>
                                <Td>2020/01/22</Td>
                                <Td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan
                                    huruf atau typesetting.</Td>
                                <Td>50 Pcs</Td>
                            </Tr>
                            <Tr onClick={this.detail}>
                                <Td>PROR1231</Td>
                                <Td>2020/01/22</Td>
                                <Td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan
                                    huruf atau typesetting.</Td>
                                <Td>50 Pcs</Td>
                            </Tr>
                            <Tr onClick={this.detail}>
                                <Td>PROR1231</Td>
                                <Td>2020/01/22</Td>
                                <Td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan
                                    huruf atau typesetting.</Td>
                                <Td>50 Pcs</Td>
                            </Tr>
                            <Tr onClick={this.detail}>
                                <Td>PROR1231</Td>
                                <Td>2020/01/22</Td>
                                <Td>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan
                                    huruf atau typesetting.</Td>
                                <Td>50 Pcs</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </DivClassSingle>
                <DivClassSingle className={classes.root} className="pagination">
                    <Pagination count={10} color="secondary" variant="outlined" shape="rounded"/>
                </DivClassSingle>
            </DivClassSingle>
        );
    }
}

export default MonitoringStok;