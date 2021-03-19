import React, { Component } from 'react'
import "./detail.css"
import * as FaIcons from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';
import ReactToPrint from 'react-to-print';
import DivClassSingle from "../../../componen/div/divClassSingle"
import ComponentToPrint from "./ComponentToPrint"
import {
    Button,
    H2,
} from "../../../componen"

class DetailMonitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stokDetail: {},
            productList: [],
            trans: "",
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
        const { stokDetail, productList, trans,printDate } = this.state;
        
        return (
            <>
               
                <DivClassSingle className="navbarD">
                    <H2></H2>
                    <div data-tip="Print">
                        <ReactToPrint
                            trigger={() =>
                                <Button
                                    className="btn-detail"
                                >
                                    <FaIcons.FaPrint />
                                </Button>}
                            content={() => this.componentRef}
                        />
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
                <ComponentToPrint
                    ref={el => (this.componentRef = el)}
                    productList={productList}
                    stokDetail ={stokDetail}
                    trans={trans}
                    printDate={printDate}
                    match = {this.props.match.params.id}
                     />
            </>

        );
    }
}

export default DetailMonitoring;