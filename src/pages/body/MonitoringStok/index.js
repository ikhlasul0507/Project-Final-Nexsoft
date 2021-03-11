import React, { Component } from 'react'
import "./monitor.css"
import * as FaIcons from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Switch from '@material-ui/core/Switch';
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
    }

    componentDidMount() {
        this.getApiStock();
    }

    render() {
        const { useStyles } = this.props
        const classes = () => useStyles;
        const {checkedA} = this.state
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
                        <Button className="btn-cari" onClick={this.cari}><FaIcons.FaSearch /></Button>
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
                                <Button onClick={() => { this.clear() }}><FaIcons.FaBan /></Button>
                                <Button onClick={() => {
                                    this.props.history.push(`/detail-monitoring/${this.state.id}`)
                                }}><FaIcons.FaEye /></Button>
                                <Button onClick={() => {
                                    this.props.history.push(`/add-monitoring/${this.state.id}`)
                                }}><FaIcons.FaPencilAlt /></Button>
                                <Button><FaIcons.FaTrash /></Button>
                            </>
                            : ""
                        }
                        <Button className="btn-kiri" onClick={() => {
                            this.props.history.push("/add-monitoring")
                        }}><FaIcons.FaPlus /></Button>
                        <Button onClick={() => {
                            this.props.history.push("/report-monitoring")
                        }}><FaIcons.FaBook /></Button>
                        <P className="pM">Show</P>
                        <Select>
                            <Option value="5">5</Option>
                            <Option value="10">10</Option>
                            <Option value="15">15</Option>
                        </Select>
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