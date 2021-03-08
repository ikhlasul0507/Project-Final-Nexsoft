import React, {Component} from 'react'
import "./detail.css"
import * as FaIcons from 'react-icons/fa';
import DivClassSingle from "../../../componen/div/divClassSingle"
import {
    Button, 
    H2,
    H1,
    Hr,
    Label, 
    P,
    B
} from "../../../componen"
import {
    Table, 
    Tbody, 
    Td, 
    Th, 
    Thead, 
    Tr
} from "../../../componen/table"

class DetailMonitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <DivClassSingle className="navbarD">
                    <H2></H2>
                    <Button className="btn-detail" onClick={() => {
                        this.props.history.push("/monitoring-produk")
                    }}><FaIcons.FaBackward/></Button>
                </DivClassSingle>
                <DivClassSingle className="content-detail">
                    <DivClassSingle className="faktur-header">
                        <H2>PT Paramadaksa Teknologi Nusantara</H2>
                        <P>Tangerang - Indonesia</P>
                        <Hr className="hr1"/>
                        <Hr/>
                    </DivClassSingle>
                    <DivClassSingle className="faktur-content">
                        <H1>INVOICE</H1>
                        <DivClassSingle className="faktur-content-header">
                            <DivClassSingle className="faktur-content-header-kiri">
                                <B><Label className="label">Transaction Header</Label></B>
                                <DivClassSingle className="field-label">
                                    <Label className="label">Document Number</Label>
                                    <Label>: {this.props.match.params.id}</Label><br/>
                                </DivClassSingle>
                                <DivClassSingle className="field-label">
                                    <Label className="label">Date</Label>
                                    <Label>: 2020/08/11</Label><br/>
                                </DivClassSingle>
                                <b><Label className="label">Transaction Total</Label></b>
                                <DivClassSingle className="field-label">
                                    <Label className="label">Totals Item</Label>
                                    <Label>: <b>20</b></Label><br/>
                                </DivClassSingle>
                                <DivClassSingle className="field-label">
                                    <Label className="label">Total Cases</Label>
                                    <Label>: <b>40</b></Label><br/>
                                </DivClassSingle>
                                <DivClassSingle className="field-label">
                                    <Label className="label">Net Amount</Label>
                                    <Label>: <b>800</b></Label><br/>
                                </DivClassSingle>
                            </DivClassSingle>
                            <DivClassSingle className="faktur-content-header-kanan">
                                <Label className="label">Description :</Label>
                                <DivClassSingle className="field-label">
                                    <Label>DCM112222 Search for the keywords to learn more about each warningis simply
                                        dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer
                                        took a galley of type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged. It was popularised in the 1960s with the
                                        release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                        with desktop publishing software like Aldus PageMaker including versions of
                                        Lorem Ipsum.</Label><br/>
                                </DivClassSingle>

                            </DivClassSingle>
                        </DivClassSingle>
                        <Hr/>
                        <DivClassSingle className="table">
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
                                <Tr>
                                    <Td>PRR021</Td>
                                    <Td>Bear Bre</Td>
                                    <Td>2020/12/12</Td>
                                    <Td>12</Td>
                                    <Td>Rp.300000,-</Td>
                                </Tr>
                                <Tr>
                                    <Td>PRR021</Td>
                                    <Td>Bear Bre</Td>
                                    <Td>2020/12/12</Td>
                                    <Td>12</Td>
                                    <Td>Rp.300000,-</Td>
                                </Tr>
                                <Tr>
                                    <Td>PRR021</Td>
                                    <Td>Bear Bre</Td>
                                    <Td>2020/12/12</Td>
                                    <Td>12</Td>
                                    <Td>Rp.300000,-</Td>
                                </Tr>
                                <Tr>
                                    <Td>PRR021</Td>
                                    <Td>Bear Bre</Td>
                                    <Td>2020/12/12</Td>
                                    <Td>12</Td>
                                    <Td>Rp.300000,-</Td>
                                </Tr>
                                <Tr>
                                    <Td>PRR021</Td>
                                    <Td>Bear Bre</Td>
                                    <Td>2020/12/12</Td>
                                    <Td>12</Td>
                                    <Td>Rp.300000,-</Td>
                                </Tr>
                                <Tr>
                                    <td>PRR021</td>
                                    <td>Bear Bre</td>
                                    <td>2020/12/12</td>
                                    <td>12</td>
                                    <td>Rp.300000,-</td>
                                </Tr>
                                </Tbody>
                            </Table>
                        </DivClassSingle>
                        <DivClassSingle className="footer-content">
                            <Label><B>Date Print : 2020/02/12 12:08:40</B></Label>
                        </DivClassSingle>
                    </DivClassSingle>
                </DivClassSingle>
            </>
        );
    }
}

export default DetailMonitoring;