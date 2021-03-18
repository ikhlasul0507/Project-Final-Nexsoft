import React, { Component } from 'react';
import "./beranda.css"
import Nd6 from "../../../assets/img/nd6.png"
import { Button, H1, Input, Label, P, Img, Center, Hr, H3 } from "../../../componen"
import { Table, Tbody, Td, Th, Thead, Tr } from '../../../componen/table';
class Beranda extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="data-kanan">
                    <Center>
                        <Img src={Nd6} className="img" />
                        <Hr />
                        <H1>APLIKASI</H1>
                        <H3>SISMONTOK</H3>
                        <P>(Sistem Monitoring Stok)</P>
                    </Center>
                </div>
                <div className="data-kiri">
                    <H1>Stock Products are low</H1><Hr />
                    <Table border="1px" cellPadding="4px" cellSpacing="0">
                        <Thead>
                            <Th>Product Name</Th>
                            <Th>Product Qty</Th>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Susu Beruang 200ml</Td>
                                <Td>12 Pcs</Td>
                            </Tr>
                            <Tr>
                                <Td>Susu Beruang 200ml</Td>
                                <Td>12 Pcs</Td>
                            </Tr>
                            
                            <Tr>
                                <Td>Susu Beruang 200ml</Td>
                                <Td>12 Pcs</Td>
                            </Tr>
                            <Tr>
                                <Td>Susu Beruang 200ml</Td>
                                <Td>12 Pcs</Td>
                            </Tr>
                            <Tr>
                                <Td>Susu Beruang 200ml</Td>
                                <Td>12 Pcs</Td>
                            </Tr>
                            <Tr>
                                <Td>Susu Beruang 200ml</Td>
                                <Td>12 Pcs</Td>
                            </Tr>
                            <Tr>
                                <Td>Susu Beruang 200ml</Td>
                                <Td>12 Pcs</Td>
                            </Tr>
                            <Tr>
                                <Td>Susu Beruang 200ml</Td>
                                <Td>12 Pcs</Td>
                            </Tr>
                            <Tr>
                                <Td>Susu Beruang 200ml</Td>
                                <Td>12 Pcs</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Button>View All</Button>
                </div>
            </div>
        );
    }
}

export default Beranda;