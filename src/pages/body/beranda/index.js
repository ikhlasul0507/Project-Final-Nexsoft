import React, { Component } from 'react';
import "./beranda.css"
import Nd6 from "../../../assets/img/nd6.png"
import {
    Button,
    H1,
    P,
    Img,
    Center,
    Hr,
    H3
} from "../../../componen"
import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '../../../componen/table';
class Beranda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            urlProducts: "http://localhost:8080/nd6/productLast/"
        }
        this.getApiProducts = () => {
            fetch(this.state.urlProducts, {
                method: "get",
                headers: {
                    "Content-Type": "application/json; ; charset=utf-8",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                    "Access-Control-Allow-Origin": "*"
                },
            })
                .then(response => response.json())
                .then((json) => {
                    this.setState({
                        products: json
                    })
                })
                .catch((e) => {
                    console.log(e)
                    alert("Failed sending data!!");
                });
        }
    }
    componentDidMount() {
        this.getApiProducts()
    }
    render() {
        console.log("LOG :", this.state.products);
        const result = this.state.products.map(
            (value, idx) =>
                <Tr key={idx}>
                    <Td className="productName">{value.productName.substring(30, 0)}</Td>
                    <Td>{value.productQty}</Td>
                </Tr>
        )
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
                            {
                                result
                            }
                        </Tbody>
                    </Table>
                    <Button onClick={()=>{this.props.history.push("/master-produk")}}>View All</Button>
                </div>
            </div>
        );
    }
}

export default Beranda;