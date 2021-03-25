import React, { Component } from 'react'
import "./report.css"
import * as FaIcons from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import DivClassSingle from "../../../componen/div/divClassSingle"
import ComponentToPrint from "./ComponentToPrint"
import {
    Button,
    H2,
    H3,
    Input,
    Img,
} from "../../../componen"
import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "../../../componen/table"
import Pagination from '@material-ui/lab/Pagination';
import ReactToPrint from 'react-to-print';
import swal from 'sweetalert';
class ReportMonitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            dataReport: true,
            stoks: [],
            stoksPrint: [],
            stok: {},
            productId: "",
            ProductName: "",
            url: "http://localhost:8080/nd6/stock/",
            urlSearch: "http://localhost:8080/nd6/product/",
            detail: false,
            errorFetcing: false,
            id: "",
            page: 1,
            count: 0,
            orderby: "asc",
            show: "12",
            minus: 0,
            name: "",
            kondisi: "",
            startDate: "",
            endDate: ""
        }
        this.cari = () => {
            if (this.state.productId !== "") {
                this.getPaging(1, this.state.orderby, this.state.show, this.state.minus, this.state.productName, this.state.productId, this.state.startDate, this.state.endDate);
                this.getCountSearchId(this.state.productId);
            } else if (this.state.startDate !== "" && this.state.endDate === "") {
                this.getPaging(1, this.state.orderby, this.state.show, this.state.minus, this.state.productName, this.state.productId, this.state.startDate, this.state.endDate);
                this.getCountSearchDate(this.state.startDate, "")
            } else if (this.state.startDate === "" && this.state.endDate !== "") {
                this.getPaging(1, this.state.orderby, this.state.show, this.state.minus, this.state.productName, this.state.productId, this.state.startDate, this.state.endDate);
                this.getCountSearchDate("", this.state.endDate)
            } else if (this.state.startDate !== "" && this.state.endDate !== "") {
                this.getPaging(1, this.state.orderby, this.state.show, this.state.minus, this.state.productName, this.state.productId, this.state.startDate, this.state.endDate);
                this.getCountSearchDate(this.state.startDate, this.state.endDate)
            } else {
                swal({
                    title: "Error !",
                    text: "Please input product dan complate date !",
                    icon: "error",
                    button: "Ok",
                });
                this.getPaging(this.state.page, this.state.orderby, this.state.show, 1, this.state.productName, this.state.productId, this.state.startDate, this.state.endDate);
                this.getCount();
            }
            // this.clear();
        }
        this.getCountSearchId = (productId) => {
            fetch(this.state.url + "countSearch/" + productId, {
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
                        count: Math.ceil((json) / this.state.show),
                        errorFetcing: true
                    });
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    // this.setState({errorFetcing:true})
                });
        }
        this.getCountSearchDate = (startDate, endDate) => {
            fetch(this.state.url + "countDate/?startDate=" + startDate + "&endDate=" + endDate, {
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
                        count: Math.ceil((json) / this.state.show),
                        errorFetcing: true
                    });
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    // this.setState({errorFetcing:true})
                });
        }
        this.getPaging = (value, orderby, show, minus, name, id, startDate, endDate) => {
            if (value) { } else { value = 1; }
            if (orderby) { } else { orderby = "asc" }
            if (show) { } else { show = 12 }
            if (minus) { } else { minus = 1 }
            if (name) { } else { name = "" }
            if (id) { } else { id = "" }
            if (startDate) { } else { startDate = "" }
            if (endDate) { } else { endDate = "" }
            fetch(this.state.url + "paging/?page=" + value + "&limit=" + show + "&orderby=" + orderby + "&minus=" + minus + "&name=" + name + "&id=" + id + "&startDate=" + startDate + "&endDate=" + endDate, {
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
                        stoks: json,
                        errorFetcing: true
                    });
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    this.setState({ errorFetcing: true })
                });
        }
        this.getAll = () => {
            fetch(this.state.url, {
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
                        stoksPrint: json,
                        errorFetcing: true
                    });
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    this.setState({ errorFetcing: true })
                });
        }
        this.getCount = (kondisi) => {
            if (kondisi) { } else { kondisi = 3 }
            fetch(this.state.url + "count/" + kondisi, {
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
                        count: Math.ceil((json) / this.state.show),
                        errorFetcing: true
                    });
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    // this.setState({errorFetcing:true})
                });
        }
        this.handleChange = (event, value) => {
            this.setState({
                page: value
            })
            if (this.state.productId !== "") {
                this.getCountSearchId(this.state.productId);
            } else if (this.state.startDate !== "" && this.state.endDate !== "") {
                this.getCountSearchDate(this.state.startDate, this.state.endDate)
            } else if (this.state.startDate === "" && this.state.endDate !== "") {

                this.getCountSearchDate("", this.state.endDate)
            } else if (this.state.startDate !== "" && this.state.endDate === "") {
                this.getCountSearchDate(this.state.startDate, "")
            } else {
                this.getCount(this.state.kondisi);
            }
            this.getPaging(value, this.state.orderby, this.state.show, this.state.minus, this.state.name, this.state.productId, this.state.startDate, this.state.endDate);
        }
        this.setValue = el => {
            this.setState({
                [el.target.name]: el.target.value,
            })
            if (el.target.value === "") {
                this.getPaging();
                this.getCount();
            }
        }
        this.clear = () => {
            this.setState({
                detail: false,
                id: "",
                stok: {},
                productName: "",
                productId: "",
                startDate: "",
                endDate: ""
            })
            this.getCount();
            this.getPaging();
        }
    }
    componentDidMount() {
        this.getPaging();
        this.getCount();
        this.getAll();
    }

    render() {
        const classes = () => this.props.useStyles();
        const { productId, startDate, endDate } = this.state
        const result = this.state.stoks.map(
            (value, idx) =>
                <Tr onClick={() => { this.detail(value.idStok) }} key={idx}>
                    <Td>{value.tanggaDokumen}</Td>
                    <Td>{value.idStok}</Td>
                    <Td>{(value.productList[0].transTypeProduct) === 1 ? "Penjualan" : "Pembelian"}</Td>
                    <Td>{value.countStock}</Td>
                    <Td>{value.totalStock}</Td>
                </Tr>
        )
        return (
            <>
                <DivClassSingle className="navbarReport">
                    <DivClassSingle className="cari">
                        <Input
                            type="text"
                            className="input"
                            name="productId"
                            placeholder="Product Id..."
                            value={productId}
                            onChange={this.setValue} />
                        <Input
                            type="date"
                            className="input"
                            name="startDate"
                            value={startDate}
                            onChange={this.setValue} />
                        <Input
                            type="date"
                            className="input"
                            name="endDate"
                            value={endDate}
                            onChange={this.setValue} />
                        <div data-tip="Search data">
                            <ReactTooltip />
                            <Button
                                className="btn-cari"
                                onClick={this.cari}>
                                <FaIcons.FaSearch />
                            </Button>
                        </div>
                        <div data-tip="Reset Search">
                            <Button
                                className="btn-cari"
                                onClick={this.clear}>
                                <FaIcons.FaBan />
                            </Button>
                        </div>
                    </DivClassSingle>
                    <DivClassSingle className="judul">
                        <H2></H2>
                    </DivClassSingle>
                    <DivClassSingle className="proses">
                        <div data-tip="Back to list">
                            <Button
                                className="btn-kiri"
                                onClick={() => { this.props.history.push("/monitoring-produk") }}>
                                <FaIcons.FaList />
                            </Button>
                        </div>
                        <div data-tip="Print">
                            {(this.state.dataReport) ?
                                <ReactToPrint
                                    trigger={() => <Button><FaIcons.FaPrint /></Button>}
                                    content={() => this.componentRef}
                                />
                                : ""}
                        </div>
                    </DivClassSingle>
                </DivClassSingle>
                {!(this.state.dataReport) ?
                    <DivClassSingle className="notFound">
                        <H3>Data Not Found Please Search !</H3>
                        <Img src="https://cdn.iconscout.com/icon/free/png-512/data-not-found-1965034-1662569.png" />
                    </DivClassSingle>
                    :
                    <>
                        <DivClassSingle className="dataReport">
                            <ComponentToPrint
                                ref={el => (this.componentRef = el)}
                                stoksPrint={this.state.stoksPrint} />
                        </DivClassSingle>
                        <DivClassSingle className="table">
                            <Table className="table-dataR" border="1px" cellSpacing="0" cellPadding="11px" style={{ color: "#000000" }}>
                                <Thead>
                                    <Th>Document date</Th>
                                    <Th>Document number</Th>
                                    <Th>Trans type</Th>
                                    <Th>Issued</Th>
                                    <Th>Balance</Th>
                                </Thead>
                                <Tbody>
                                    {result}
                                    {(this.state.stoks.length <= 0) ?
                                        <Tr>
                                            <Td colspan="5" className="td-notFound">Data Not Found ! </Td>
                                        </Tr>
                                        :
                                        ""}
                                </Tbody>
                            </Table>
                        </DivClassSingle>
                        <DivClassSingle class={classes.root} className="pagination">
                            <Pagination
                                count={this.state.count}
                                page={this.state.page}
                                onChange={this.handleChange}
                                color="secondary"
                                variant="outlined"
                                shape="rounded" />
                        </DivClassSingle>
                    </>
                }
            </>
        );
    }
}

export default ReportMonitoring;