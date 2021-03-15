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
            url: "http://localhost:8080/nd6/stock/",
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
            kondisi:""
        }
        this.handleChange = (event, value) => {
            this.setState({
                page: value
            })
            this.getCount(this.state.kondisi);
            this.getPaging(value, this.state.orderby, this.state.show, this.state.minus, this.state.name);
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
                id: ""
            })
        }
        this.onChangeSelectShow = el => {
            const show = el.target.value
            this.setState({
                show: show
            })
            this.getPaging(1, this.state.orderby, show, this.state.minus, this.state.name);
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
                    kondisi :0
                })
                this.getPaging(1, this.state.orderby, this.state.show, 0, this.state.name);
                this.getCount(0);
            } else {
                this.setState({
                    minus: 1,
                    kondisi:1
                })
                this.getPaging(1, this.state.orderby, this.state.show, 1, this.state.name);
                this.getCount(1);
            }
        };

        this.delete = (idStok) => {
            // if (window.confirm('Are you sure wont to Delete ?')) {
            console.log("id stok :", idStok)
            swal({
                title: "Are you sure?",
                text: "wont to Delete ?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        fetch(this.state.url + idStok, {
                            method: "delete",
                            headers: {
                                "Content-Type": "application/json; ; charset=utf-8",
                                "Access-Control-Allow-Headers": "Authorization, Content-Type",
                                "Access-Control-Allow-Origin": "*"
                            }
                        })
                            .then(response => response.json())
                            .then(json => {
                                if (json.error) {
                                    swal({
                                        title: "Error !",
                                        text: "The product cannot be deleted because it is foreign key to the detail table",
                                        icon: "error",
                                        button: "Ok",
                                    });
                                } else {
                                    Swal.fire({
                                        title: "Good job!",
                                        text: json.successMessage,
                                        icon: "success",
                                        timer: 1000,
                                        showConfirmButton: false,
                                        timerProgressBar: true
                                    })
                                    this.getApiStock()
                                }
                            })
                            .catch((e) => {
                                alert("Failed fetching data!!", e)
                                // this.setState({errorFetcing:true})
                            });
                    } else {
                        //   swal("Your imaginary file is safe!");
                    }
                });

        }
        this.getApiStock = () => {
            fetch(this.state.url, {
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
                        stoks: json
                    })
                    console.log("Stocks :", this.state.stoks);
                })
                .catch((e) => {
                    console.log(e)
                    alert("Failed sending data!!");
                });

        }
        this.getCount = (kondisi) => {
            if(kondisi){}else{kondisi=0}
            fetch(this.state.url +"count/"+ kondisi, {
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
                        count: Math.ceil((json) / this.state.show-1),
                        errorFetcing: true
                    });
                    console.log(json)
                })
                .catch((e) => {
                    alert("Failed fetching data!!", e)
                    // this.setState({errorFetcing:true})
                });
        }
        this.getPaging = (value, orderby, show, minus, name) => {
            if (value) { } else { value = 1; }
            if (orderby) { } else { orderby = "asc" }
            if (show) { } else { show = 7 }
            if (minus) { } else { minus = 0 }
            if (name) { } else { name = "" }
            fetch(this.state.url + "paging/?page=" + value + "&limit=" + show + "&orderby=" + orderby + "&minus=" + minus + "&name=" + name, {
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
                    console.log(json)
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
        const { checkedA, show } = this.state
        const result = this.state.stoks.map(
            (value, idx) =>
                <Tr onClick={() => { this.detail(value.idStok) }} key={idx}>
                    <Td>{value.idStok}</Td>
                    <Td>{value.tanggaDokumen}</Td>
                    <Td>{value.deskripsiDokumen}</Td>
                    <Td>
                        <b>Total Qty Stock: {value.totalStock}</b><br />
                        <b>Count Stock : {value.countStock}</b><br />
                        <b>Net Amount : {value.netAmount}</b>
                    </Td>
                </Tr>
        )
        return (

            <DivClassSingle>
                <DivClassSingle className="navbarM">
                    <DivClassSingle className="cari">
                        <Input type="text" name="" placeholder="Product code" />
                        <Input type="text" name="" placeholder="Product name" />
                        <div data-tip="Search">
                            <Button className="btn-cari" onClick={this.cari}><FaIcons.FaSearch /></Button>
                        </div>
                        <ReactTooltip />
                        <FormControlLabel
                            control={<Switch checked={checkedA} className="toogle" onChange={this.handleChangeMinus} name="checkedA" />}
                        />
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
                    <Table className="table-dataM" border="1px" cellPadding="10px" cellSpacing="0">
                        <Thead>
                            <Th>Document Number</Th>
                            <Th>Document Date</Th>
                            <Th>Document Description</Th>
                            <Th>Total Qty Product Stok Dokumen</Th>
                        </Thead>
                        <Tbody>
                            {result}
                        </Tbody>
                    </Table>
                </DivClassSingle>
                <DivClassSingle className="pagination">
                    <DivClassSingle class={classes.root} className="data-pagination" >
                        <Pagination count={this.state.count} page={this.state.page} onChange={this.handleChange} />
                    </DivClassSingle>
                </DivClassSingle>
            </DivClassSingle>
        );
    }
}

export default MonitoringStok;