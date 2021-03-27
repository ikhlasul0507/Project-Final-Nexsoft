import React, { Component } from 'react';
import "./detail.css"
import DivClassSingle from "../../../componen/div/divClassSingle"
import Nd6 from "../../../assets/img/nd6.png"
import {
    H2,
    H1,
    Hr,
    Label,
    P,
    B,
    Img
} from "../../../componen"
import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "../../../componen/table"

class ComponentToPrint extends Component {
    render() {
        const result = this.props.productList.map(
            (item, idx) =>
                <Tr key={idx}>
                    <Td>{item.productId}</Td>
                    <Td>{item.productName}</Td>
                    <Td>{item.tglExpiredProduct}</Td>
                    <Td>{item.kuantitasProduct}</Td>
                    <Td>Rp.{item.harga.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")},-</Td>
                </Tr>
        )
        return (
            <DivClassSingle className="content-detail">
                <DivClassSingle className="faktur-header">
                    <DivClassSingle className="faktur-header-img">
                        <Img src={Nd6}></Img>
                    </DivClassSingle>
                    <DivClassSingle className="faktur-header-judul">
                        <H2>PT Paramadaksa Teknologi Nusantara</H2>
                        <P>Tangerang - Indonesia</P>
                        
                    </DivClassSingle>
                   
                </DivClassSingle>
                <Hr className="hr1" />
                    <Hr />
                <DivClassSingle className="faktur-content">
                    <H1>INVOICE {(this.props.trans) === 0 ? "PURCHASE" : "SALES"}</H1>
                    <DivClassSingle className="faktur-content-header">
                        <DivClassSingle className="faktur-content-header-kiri">
                            <B><Label className="label">Transaction Header</Label></B>
                            <DivClassSingle className="field-label">
                                <Label className="label">Document Number</Label>
                                <Label>:
                                {this.props.match}
                                </Label><br />
                            </DivClassSingle>
                            <DivClassSingle className="field-label">
                                <Label className="label">Date</Label>
                                <Label>:
                                {this.props.stokDetail.tanggaDokumen}
                                </Label><br />
                            </DivClassSingle>
                            {(this.props.stokDetail.tanggalDokumenUpdate !== null) ? 
                            <DivClassSingle className="field-label">
                                <Label className="label">Date document update</Label>
                                <Label>:
                                {this.props.stokDetail.tanggalDokumenUpdate}
                                </Label><br />
                            </DivClassSingle>
                            :""}
                            <b><Label className="label">Transaction Total</Label></b>
                            <DivClassSingle className="field-label">
                                <Label className="label">Totals Item</Label>
                                <Label>: <b>
                                    {this.props.stokDetail.totalStock}
                                </b></Label><br />
                            </DivClassSingle>
                            <DivClassSingle className="field-label">
                                <Label className="label">Total Cases</Label>
                                <Label>: <b>
                                    {this.props.stokDetail.countStock}
                                </b></Label><br />
                            </DivClassSingle>
                            <DivClassSingle className="field-label">
                                <Label className="label">Net Amount</Label>
                                <Label>: <b>
                                    Rp.{Number(this.props.stokDetail.netAmount).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")},-
                                </b></Label><br />
                            </DivClassSingle>
                        </DivClassSingle>
                        <DivClassSingle className="faktur-content-header-kanan">
                            <Label className="label">Description :</Label>
                            <DivClassSingle className="field-label">
                                <Label>
                                    {this.props.stokDetail.deskripsiDokumen}.
                                </Label><br />
                            </DivClassSingle>
                        </DivClassSingle>
                    </DivClassSingle>
                    <Hr />
                    <DivClassSingle className="table-detail">
                        <B><Label className="label">Transaction Detail</Label></B>
                        <Table border="1px" cellPadding="3px" cellSpacing="0">
                            <Thead>
                                <Th>Product ID</Th>
                                <Th>Product Name</Th>
                                <Th>Product Date Expired</Th>
                                <Th>Product Quantity</Th>
                                <Th>Product Price</Th>
                            </Thead>
                            <Tbody>
                                {result}
                            </Tbody>
                        </Table>
                    </DivClassSingle>
                    <DivClassSingle className="footer-content">
                        <Label><B>Date Print : {this.props.printDate}</B></Label>
                        <Label>(......................................)</Label>
                    </DivClassSingle>
                </DivClassSingle>
            </DivClassSingle>
        );
    }
}

export default ComponentToPrint;