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
            id: "",
            checkedA: true
        }
        this.handleChangeMinus = (event) => {
            this.setState({
                [event.target.name]: event.target.checked,
            })
        };
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
        // this.delete = () => {
        //     // if (window.confirm('Are you sure wont to Delete ?')) {
        //     swal({
        //         title: "Are you sure?",
        //         text: "wont to Delete ?",
        //         icon: "warning",
        //         buttons: true,
        //         dangerMode: true,
        //     })
        //         .then((willDelete) => {
        //             if (willDelete) {
        //                 fetch(this.state.url + this.state.idStok, {
        //                     method: "delete",
        //                     headers: {
        //                         "Content-Type": "application/json; ; charset=utf-8",
        //                         "Access-Control-Allow-Headers": "Authorization, Content-Type",
        //                         "Access-Control-Allow-Origin": "*"
        //                     }
        //                 })
        //                     .then(response => response.json())
        //                     .then(json => {
        //                         if (json.error) {
        //                             swal({
        //                                 title: "Error !",
        //                                 text: "The product cannot be deleted because it is foreign key to the detail table",
        //                                 icon: "error",
        //                                 button: "Ok",
        //                             });
        //                         } else {
        //                             Swal.fire({
        //                                 title: "Good job!",
        //                                 text: json.successMessage,
        //                                 icon: "success",
        //                                 timer: 1000,
        //                                 showConfirmButton: false,
        //                                 timerProgressBar: true
        //                             // });
        //                             // this.getPaging(this.state.page, this.state.orderby, this.state.show);
        //                             // this.getCount();
        //                             // this.clear();
        //                         }
        //                     })
        //                     .catch((e) => {
        //                         alert("Failed fetching data!!", e)
        //                         // this.setState({errorFetcing:true})
        //                     });
        //             } else {
        //                 //   swal("Your imaginary file is safe!");
        //             }
        //         });

        // }
    }

    componentDidMount() {
        this.getApiStock();
    }

    render() {
        const { useStyles } = this.props
        const classes = () => useStyles;
        const { checkedA } = this.state
        const result = this.state.stoks.map(
            (value, idx) =>
                <Tr onClick={() => { this.detail(value.idStok) }} key={idx}>
                    <Td>{value.idStok}</Td>
                    <Td>{value.tanggaDokumen}</Td>
                    <Td>{value.deskripsiDokumen}</Td>
                    <Td>{value.totalStock}</Td>
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
                                            this.props.history.push(`/add-monitoring/${this.state.id}`)
                                        }}
                                    >
                                        <FaIcons.FaPencilAlt />
                                    </Button>
                                </div>
                                <div data-tip="Delete Stock">
                                    <Button  onClick={() => { this.delete() }}>
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
                        <Select>
                            <Option value="5">5</Option>
                            <Option value="10">10</Option>
                            <Option value="15">15</Option>
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
                        <Pagination count={10} color="secondary" variant="outlined" shape="rounded" />
                    </DivClassSingle>
                </DivClassSingle>
            </DivClassSingle>
        );
    }
}

export default MonitoringStok;