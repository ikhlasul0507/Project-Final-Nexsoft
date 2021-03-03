import React, { Component } from 'react'
import "./report.css"
import * as FaIcons from 'react-icons/fa';
import DivClassSingle from "../../../componen/div/divClassSingle"
import { Button, H2, H3, Input, Label, P, Small, A, Li, Ul, Img } from "../../../componen"
import { Table, Tbody, Td, Th, Thead, Tr } from "../../../componen/table"
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import ReactToPrint from 'react-to-print';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));
class ComponentToPrint extends Component {

    render() {
        return (
            <Table className="table-dataM" border="1px" cellSpacing="0" cellPadding="10px">
                <Thead>
                    <Th>Document date</Th>
                    <Th>Document number</Th>
                    <Th>Trans type</Th>
                    <Th>Issued</Th>
                    <Th>Balance</Th>
                </Thead>
                <Tbody>
                    <Tr onClick={this.detail}>
                        <Td>2020/01/22</Td>
                        <Td>PROR1231</Td>
                        <Td>Bertambah</Td>
                        <Td>50 Pcs</Td>
                        <Td>100 Pcs</Td>
                    </Tr>
                    <Tr onClick={this.detail}>
                        <Td>2020/01/22</Td>
                        <Td>PROR1231</Td>
                        <Td>Bertambah</Td>
                        <Td>50 Pcs</Td>
                        <Td>100 Pcs</Td>
                    </Tr>
                    
                </Tbody>
            </Table>
        );
    }
}

class ReportMonitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            dataReport: false
        }
    }

    render() {
        console.log(this.state.disabled)
        const classes = () => this.props.useStyles();
        return (
            <>
                <DivClassSingle className="navbarReport">
                    <DivClassSingle className="cari">
                        <Input type="text" name="" placeholder="Product code" />
                        <Input type="date" name="" placeholder="Product name" />
                        <Input type="date" disabled={(this.state.disabled) ? "disabled" : ""} name="" placeholder="Product name" />
                        <Button className="btn-cari" onClick={this.cari}><FaIcons.FaSearch /></Button>
                    </DivClassSingle>
                    <DivClassSingle className="judul">
                        <H2></H2>
                    </DivClassSingle>
                    <DivClassSingle className="proses">
                        <Button className="btn-kiri" onClick={() => { this.props.history.push("/monitoring-produk") }}><FaIcons.FaList /></Button>
                        <ReactToPrint
                            trigger={() => <Button><FaIcons.FaPrint /></Button>}
                            content={() => this.componentRef}
                        />
                    </DivClassSingle>
                </DivClassSingle>
                {!(this.state.dataReport) ?
                    <DivClassSingle className="notFound">
                        <H3>Data Not Found Please Search !</H3>
                        <Img src="https://cdn.iconscout.com/icon/free/png-512/data-not-found-1965034-1662569.png" />
                    </DivClassSingle>
                    :
                    <>
                        <DivClassSingle className="table" >
                            <ComponentToPrint ref={el => (this.componentRef = el)} />
                        </DivClassSingle>
                        <DivClassSingle className={classes.root} className="pagination">
                            <Pagination count={10} color="secondary" variant="outlined" shape="rounded" />
                        </DivClassSingle>
                    </>
                }
            </>
        );
    }
}

export default ReportMonitoring;