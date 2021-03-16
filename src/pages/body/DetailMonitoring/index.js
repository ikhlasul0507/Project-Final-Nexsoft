import React, { Component } from 'react'
import "./detail.css"
import * as FaIcons from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';
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
        this.state = {
            stokDetail: {},
            productList: [],
            trans :"",
            printDate: "",
            url: "http://localhost:8080/nd6/stock/"
        }
        this.getDateWithMoment = () => {
            this.setState({
                printDate: moment().format('YYYY-MM-DD hh:mm:ss a')
            })
        };
        this.getApiStockDetail = () => {
            fetch(this.state.url + this.props.match.params.id, {
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
                        stokDetail: Object.assign({}, json[0])
                    })
                })
                .then((json) => {
                    this.setState({
                        productList: this.state.stokDetail.productList
                    })
                })
                .then((json) => {
                    this.setState({
                        trans: this.state.productList[0].transTypeProduct
                    })
                })
                .catch((e) => {
                    console.log(e)
                    alert("Failed sending data!!");
                });

        }

    }
    componentDidMount() {
        this.getApiStockDetail();
        this.getDateWithMoment();
    }
    render() {
        const { stokDetail, productList,trans } = this.state;
        const result = productList.map(
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
            <>
                <DivClassSingle className="navbarD">
                    <H2></H2>
                    <div data-tip="Print">
                        <Button
                            className="btn-detail"
                            onClick={() => {
                                window.print()
                            }}
                        >
                            <FaIcons.FaPrint />
                        </Button>
                        </div>
                        <div data-tip="Back To List">
                        <Button
                            className="btn-detail"
                            onClick={() => {
                                this.props.history.push("/monitoring-produk")
                            }}
                        >
                            <FaIcons.FaArrowLeft />
                        </Button>
                    </div>
                    <ReactTooltip />
                </DivClassSingle>
                <DivClassSingle className="content-detail">
                    <DivClassSingle className="faktur-header">
                        <H2>PT Paramadaksa Teknologi Nusantara</H2>
                        <P>Tangerang - Indonesia</P>
                        <Hr className="hr1" />
                        <Hr />
                    </DivClassSingle>
                    <DivClassSingle className="faktur-content">
                        <H1>INVOICE {(trans) === 0 ? "PEMBELIAN" : "PENJUALAN"}</H1>
                        <DivClassSingle className="faktur-content-header">
                            <DivClassSingle className="faktur-content-header-kiri">
                                <B><Label className="label">Transaction Header</Label></B>
                                <DivClassSingle className="field-label">
                                    <Label className="label">Document Number</Label>
                                    <Label>:
                                        {this.props.match.params.id}
                                    </Label><br />
                                </DivClassSingle>
                                <DivClassSingle className="field-label">
                                    <Label className="label">Date</Label>
                                    <Label>:
                                        {stokDetail.tanggaDokumen}
                                    </Label><br />
                                </DivClassSingle>
                                <b><Label className="label">Transaction Total</Label></b>
                                <DivClassSingle className="field-label">
                                    <Label className="label">Totals Item</Label>
                                    <Label>: <b>
                                        {stokDetail.totalStock}
                                    </b></Label><br />
                                </DivClassSingle>
                                <DivClassSingle className="field-label">
                                    <Label className="label">Total Cases</Label>
                                    <Label>: <b>
                                        {stokDetail.countStock}
                                    </b></Label><br />
                                </DivClassSingle>
                                <DivClassSingle className="field-label">
                                    <Label className="label">Net Amount</Label>
                                    <Label>: <b>
                                        Rp.{Number(stokDetail.netAmount).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")},-
                                        </b></Label><br />
                                </DivClassSingle>
                            </DivClassSingle>
                            <DivClassSingle className="faktur-content-header-kanan">
                                <Label className="label">Description :</Label>
                                <DivClassSingle className="field-label">
                                    <Label>
                                        {stokDetail.deskripsiDokumen}.
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
                            <Label><B>Date Print : {this.state.printDate}</B></Label>
                        </DivClassSingle>
                    </DivClassSingle>
                </DivClassSingle>
            </>
        );
    }
}

export default DetailMonitoring;