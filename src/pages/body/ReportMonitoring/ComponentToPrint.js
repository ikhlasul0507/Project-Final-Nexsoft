import React, { Component } from 'react';
import { H1, Hr, Img,Small } from '../../../componen';
import DivClassSingle from '../../../componen/div/divClassSingle';
import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "../../../componen/table"
import Nd6 from "../../../assets/img/nd6.png"
class ComponentToPrint extends Component {
    render() {

        const result = this.props.stoksPrint.map(
            (value, idx) =>
                <Tr key={idx}>
                    <Td>{value.tanggaDokumen}</Td>
                    <Td>{value.idStok}</Td>
                    <Td>{(value.productList[0].transTypeProduct) === 1 ? "Sales" : "Purchase"}</Td>
                    <Td>{value.countStock}</Td>
                    <Td>{value.totalStock}</Td>
                </Tr>
        )
        return (
            <center>
            <DivClassSingle>
                <DivClassSingle className="header-print">
                    <Img src={Nd6} className="img" />
                    <H1>REPORT MONITORING STOCK <br/><Small>PT Paramadaksa Teknologi Nusantara</Small></H1>
                </DivClassSingle>
                <Hr/>
                <Table className="table-dataR" border="1px" cellSpacing="0" cellPadding="5" style={{ color: "#000000" }}>
                    <Thead>
                        <Th>Document date</Th>
                        <Th>Document number</Th>
                        <Th>Trans type</Th>
                        <Th>Issued</Th>
                        <Th>Balance</Th>
                    </Thead>
                    <Tbody>
                        {result}
                        {(this.props.stoksPrint.length <= 0) ?
                            <Tr>
                                <Td colspan="5" className="td-notFound">Data Not Found ! </Td>
                            </Tr>
                            :
                            ""}
                    </Tbody>
                </Table>
            </DivClassSingle>
            </center>
        );
    }
}

export default ComponentToPrint;