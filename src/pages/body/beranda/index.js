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
            totalProducts :"",
            totalPurchase:"",
            totalSales:"",
            urlProducts: "http://localhost:8080/nd6/productLast/"
        }
        this.getCount = () => {
            fetch("http://localhost:8080/nd6/product/count/2", {
                method: "get",
                headers: {
                    "Content-Type": "application/json; ; charset=utf-8",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        totalProducts: json,
                        errorFetcing: true
                    });
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    // this.setState({errorFetcing:true})
                });
        }
        this.getCountPurchase = () => {
            fetch("http://localhost:8080/nd6/stock/count/1", {
                method: "get",
                headers: {
                    "Content-Type": "application/json; ; charset=utf-8",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        totalPurchase: json,
                    });
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    // this.setState({errorFetcing:true})
                });
        }
        this.getCountSales = () => {
            fetch("http://localhost:8080/nd6/stock/count/2", {
                method: "get",
                headers: {
                    "Content-Type": "application/json; ; charset=utf-8",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        totalSales: json,
                    });
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    // this.setState({errorFetcing:true})
                });
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
        this.getCount()
        this.getCountPurchase()
        this.getCountSales()
    }
    render() {
        console.log(this.state.totalProducts)
        const result = this.state.products.map(
            (value, idx) =>
                <Tr key={idx}>
                    <Td className="productName">{value.productName.substring(30, 0)}</Td>
                    <Td>{value.productQty}</Td>
                </Tr>
        )
        return (
            <div>
                <div className="container">
                    <div className="data-kanan">
                    <marquee>Welcome to the stock monitoring application</marquee>
                        <Center>
                            <Img src={Nd6} className="img" />
                            <Hr />
                            <H1>APLIKASI</H1>
                            <P>SISMONTOK<br/>(Sistem Monitoring Stok)</P>
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
                        <Button onClick={() => { this.props.history.push("/master-produk") }}>View All</Button>
                    </div>

                </div>
                <div className="data-footer">
                    <div className="footer-kiri">
                        <p>Purchase documents</p><hr/>
                        <h1>{this.state.totalPurchase}</h1>
                    </div>
                    <div className="footer-tengah">
                        <p>Total product</p><hr/>
                        <h1>{this.state.totalProducts}</h1>
                    </div>
                    <div className="footer-kanan">
                        <p>Sales document</p><hr/>
                        <h1>{this.state.totalSales}</h1>
                    </div>
                </div>
            </div>

        );
    }
}

export default Beranda;