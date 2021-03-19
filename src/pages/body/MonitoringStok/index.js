import React, { Component } from 'react'
import "./monitor.css"
import * as FaIcons from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Switch from '@material-ui/core/Switch';
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import ReactTooltip from 'react-tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DivClassSingle from "../../../componen/div/divClassSingle"
import {
    Button,
    H2,
    Input,
    Option,
    Select,
    P,
    Center
} from "../../../componen"
import {
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "../../../componen/table"
import { yellow } from '@material-ui/core/colors';

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
            stoks: [],
            stok: {},
            productId: "",
            ProductName: "",
            url: "http://localhost:8080/nd6/stock/",
            urlSearch: "http://localhost:8080/nd6/product/",
            detail: false,
            errorFetcing: false,
            id: "",
            page: 1,
            count: "",
            orderby: "asc",
            show: "7",
            checkedA: true,
            minus: 0,
            name: "",
            kondisi: ""
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
        this.handleChange = (event, value) => {
            this.setState({
                page: value
            })
            this.getCount(this.state.kondisi);
            this.getPaging(value, this.state.orderby, this.state.show, this.state.minus, this.state.name, this.state.productId, "", "");
        }
        this.cari = () => {
            console.log(this.state.productId)
            if (this.state.productId !== "") {
                this.getPaging(1, this.state.orderby, this.state.show, this.state.minus, this.state.productName, this.state.productId, "", "");
                this.getCountSearchId(this.state.productId);
            } else if (this.state.productName !== "") {
                this.getPaging(1, this.state.orderby, this.state.show, this.state.minus, this.state.productName, this.state.productId, "", "");
                this.getCountSearch(this.state.productName);
            } else {
                swal({
                    title: "Error !",
                    text: "Please input product dan product name !",
                    icon: "error",
                    button: "Ok",
                });
                this.getPaging(this.state.page, this.state.orderby, this.state.show, 1, this.state.productName, this.state.productId, "", "");
                this.getCount();
            }
        }
        this.detail = idStok => {
            this.setState({
                detail: true,
                id: idStok
            })
        }
        this.clear = () => {
            this.setState({
                detail: false,
                id: "",
                stok: {},
                productName: "",
                productId: ""
            })
        }
        this.onChangeSelectShow = el => {
            const show = el.target.value
            this.setState({
                show: show
            })
            this.getPaging(1, this.state.orderby, show, this.state.minus, this.state.name, this.state.productId, "", "");
            this.getCount(this.state.kondisi);
        }
        this.handleChangeMinus = (event) => {
            this.setState({
                [event.target.name]: event.target.checked,
            })
            const minus = event.target.checked
            console.log(minus)
            if (minus) {
                this.setState({
                    minus: 0,
                    kondisi: 0,
                    page:1
                })
                this.getPaging(1, this.state.orderby, this.state.show, 0, this.state.name, this.state.productId, "", "");
                this.getCount(0);
            } else {
                this.setState({
                    minus: 1,
                    kondisi: 1,
                    page:1
                })
                this.getPaging(1, this.state.orderby, this.state.show, 1, this.state.name, this.state.productId, "", "");
                this.getCount(1);
            }
        };
        this.delete = (idStok) => {
            // if (window.confirm('Are you sure wont to Delete ?')) {
            swal({
                title: "Are you sure?",
                text: "wont to Delete ?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        this.getApiStockDetail(idStok);
                        console.log("id", idStok)
                    } else {
                        //   swal("Your imaginary file is safe!");
                    }
                });
        }
        this.getApiStockDetail = (idStok) => {
            fetch(this.state.url + idStok, {
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
                        stok: Object.assign({}, json[0])
                    })
                    console.log(this.state.stok)
                })
                .then((json) => {
                    this.deleteToApi();
                })
                .catch((e) => {
                    console.log(e)
                    alert("Failed sending data!!");
                });

        }
        this.getCountSearch = (productName) => {
            fetch(this.state.urlSearch + "countSearch/" + productName, {
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
        this.deleteToApi = (idStok) => {
            console.log("id :", this.state.id);
            console.log("id  matc:", idStok);

            fetch(this.state.url + this.state.id, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json; ; charset=utf-8",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(this.state.stok)
            })
                .then(response => response.json())
                .then((json) => {
                    console.log("json", json);
                    if (json.errors) {

                        swal({
                            title: "Error !",
                            text: json.errors[0].defaultMessage,
                            icon: "error",
                            button: "Ok",
                        });
                    } else if (json.errorMessage) {

                        swal({
                            title: "Errors !",
                            text: json.errorMessage,
                            icon: "error",
                            button: "Ok",
                        });
                    } else if (json.message) {
                        console.log(json)
                        swal({
                            title: "Error !",
                            text: "Enter the product !",
                            icon: "error",
                            button: "Ok",
                        });
                    } else {
                        Swal.fire({
                            title: "Good job!",
                            text: json.successMessage,
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false,
                            timerProgressBar: true
                        });
                        this.getPaging(this.state.page, this.state.orderby, this.state.show, this.state.minus, this.state.name, this.state.productId, "", "");
                        this.getCount(this.state.kondisi);
                        this.clear();
                    }
                })
                .catch((e) => {
                    console.log(e)
                    alert("Failed sending data!!");
                });


        }
        this.getCount = (kondisi) => {
            if (kondisi) { } else { kondisi = 0 }
            console.log("kondisi :", kondisi)
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
                        count: Math.ceil(json / this.state.show),
                        errorFetcing: true
                    });
                    console.log(json)
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    // this.setState({errorFetcing:true})
                });
        }
        this.getPaging = (value, orderby, show, minus, name, id, startDate, endDate) => {
            if (value) { } else { value = 1; }
            if (orderby) { } else { orderby = "asc" }
            if (show) { } else { show = 7 }
            if (minus) { } else { minus = 0 }
            if (name) { } else { name = "" }
            if (id) { } else { id = "" }
            if (startDate) { } else { startDate = "" }
            if (endDate) { } else { endDate = "" }
            console.log("MInus ", minus)
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
                    console.log("json ", json)
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    this.setState({ errorFetcing: true })
                });
        }
    }

    componentDidMount() {
        this.getPaging();
        this.getCount();
    }

    render() {
        const { useStyles } = this.props
        const classes = () => useStyles;
        const { checkedA, show, productId, productName } = this.state
        const result = this.state.stoks.map(
            (value, idx) =>
                <Tr onClick={() => { this.detail(value.idStok) }} key={idx}>
                    <Td>{value.idStok}</Td>
                    <Td>{value.tanggaDokumen}</Td>
                    <Td>{value.deskripsiDokumen}</Td>
                    <Td className={{ backgroundColor: yellow }}>
                        Jenis Dokumen : {(value.productList[0].transTypeProduct) === 1 ? "Penjualan" : "Pembelian"}<br />
                        <b >Total Qty Stock: {value.totalStock}</b><br />
                        <b >Count Stock : {value.countStock}</b><br />
                        <b >Net Amount : {value.netAmount}</b>
                    </Td>
                </Tr>
        )
        return (

            <DivClassSingle>
                <DivClassSingle className="navbarM">
                    <DivClassSingle className="cari">
                        <Input
                            type="text"
                            className="input"
                            name="productId"
                            placeholder="Product Id..."
                            value={productId}
                            onChange={this.setValue} />
                        <Input
                            type="text"
                            className="input"
                            name="productName"
                            placeholder="Product Name..."
                            value={productName}
                            onChange={this.setValue} />
                        <div data-tip="Search">
                            <Button
                                className="btn-cari"
                                onClick={this.cari}>
                                <FaIcons.FaSearch />
                            </Button>
                        </div>
                        <ReactTooltip />
                        <div data-tip={(this.state.minus === 0 ?"Show all" : "Show qty not 0")}>
                        <FormControlLabel
                            control={<Switch checked={checkedA}
                                className="toogle"
                                onChange={this.handleChangeMinus}
                                name="checkedA" />}
                        />
                        </div>
                    </DivClassSingle>
                    <DivClassSingle className="judul">
                        <H2></H2>
                    </DivClassSingle>
                    <DivClassSingle className="proses">
                        {(this.state.detail) ?
                            <>
                                <ReactTooltip />
                                <div data-tip="Clear">
                                    <Button
                                        onClick={() => { this.clear() }}
                                    >
                                        <FaIcons.FaBan />
                                    </Button>
                                </div>
                                <div data-tip="Detail Stock">
                                    <Button
                                        onClick={() => {
                                            this.props.history.push(`/detail-monitoring/${this.state.id}`)
                                        }}
                                    >
                                        <FaIcons.FaEye />
                                    </Button>
                                </div>
                                <div data-tip="Edit Stock">
                                    <Button
                                        onClick={() => {
                                            this.props.history.push(`/edit-monitoring/${this.state.id}`)
                                        }}
                                    >
                                        <FaIcons.FaPencilAlt />
                                    </Button>
                                </div>
                                <div data-tip="Delete Stock">
                                    <Button onClick={() => { this.delete(this.state.id) }}>
                                        <FaIcons.FaTrash />
                                    </Button>
                                </div>
                            </>
                            : ""
                        }
                        <div data-tip="Add Stock">
                            <Button
                                className="btn-kiri"
                                onClick={() => {
                                    this.props.history.push("/add-monitoring")
                                }}
                            >
                                <FaIcons.FaPlus />
                            </Button>
                        </div>
                        <div data-tip="Report Stock">
                            <Button
                                onClick={() => {
                                    this.props.history.push("/report-monitoring")
                                }}
                            >
                                <FaIcons.FaBook />
                            </Button>
                        </div>
                        <P className="pM">Show</P>
                        <div data-tip="Show Stock">
                            <Select onChange={this.onChangeSelectShow} name="show" value={show}>
                                <Option value="-">-Pilih-</Option>
                                <Option value="7">7</Option>
                                <Option value="10">10</Option>
                                <Option value="15">15</Option>
                                <Option value="30">30</Option>
                                <Option value="50">50</Option>
                            </Select>
                        </div>
                    </DivClassSingle>
                </DivClassSingle>
                <DivClassSingle className="table">
                    <Table className="table-dataM" border="1px" cellPadding="4px" cellSpacing="0">
                        <Thead>
                            <Th className="Th-head">Document Number</Th>
                            <Th className="Th-head">Document Date</Th>
                            <Th className="Th-head">Document Description</Th>
                            <Th className="Th-head">Total Qty Product Stok Dokumen</Th>
                        </Thead>
                        <Tbody>
                            {result}
                            {(this.state.stoks.length <= 0) ?
                                <Tr>
                                    <Td colspan="4" className="td-notFound">Data Not Found ! </Td>
                                </Tr>
                                :
                                ""}
                        </Tbody>
                    </Table>
                </DivClassSingle>
                <DivClassSingle className="pagination">
                    <P>Page: {this.state.page}</P>
                    <DivClassSingle
                        class={classes.root}
                        className="data-pagination" >
                        <Pagination
                            count={this.state.count}
                            onChange={this.handleChange} />
                    </DivClassSingle>
                </DivClassSingle>
            </DivClassSingle>
        );
    }
}

export default MonitoringStok;