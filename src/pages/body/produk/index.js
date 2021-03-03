import React, { Component } from 'react';
import "./produk.css"
import * as FaIcons from 'react-icons/fa';
import DivClassSingle from "../../../componen/div/divClassSingle"
import { Button, H3, H2, Input, Label, P, Small ,A,Li,Ul,Hr,Textarea} from "../../../componen"
import Tooltip from '@material-ui/core/Tooltip';
class Produk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        }

        this.detail = () => {
            alert("Detail")
        }
        this.cari = () => {
            alert("Cari")
        }
        this.save = () => {
            this.setState({
                disabled: false
            })
            console.log(this.state.disabled)
        }
        this.submit=()=>{
            alert("Berhasil Di Simpan !")
            this.setState({
                disabled: true
            })
        }
    }

    render() {
        return (
            <>
                <DivClassSingle className="content">
                    <DivClassSingle className="data-left">
                        <DivClassSingle className="cari">
                            <Input type="text" name="" placeholder="Product code" />
                            <Input type="text" name="" placeholder="Product name" />
                            <Tooltip title="Cari">
                            <Button className="btn-cari" onClick={this.cari}><FaIcons.FaSearch /></Button>
                            </Tooltip>
                            
                        </DivClassSingle>
                        <Hr/>
                        <DivClassSingle className="list">
                            <DivClassSingle className="list-data" onClick={this.detail}>
                                <H3>000011ERWEWET</H3>
                                <P>PRODUCT002</P>
                                <Small>Harga : Rp.10000000,-</Small>
                            </DivClassSingle>
                            <DivClassSingle className="list-data" onClick={this.detail}>
                                <H3>000011ERWEWET</H3>
                                <P>PRODUCT002</P>
                                <Small>Harga : Rp.10000000,-</Small>
                            </DivClassSingle>
                            <DivClassSingle className="list-data" onClick={this.detail}>
                                <H3>000011ERWEWET</H3>
                                <P>PRODUCT002</P>
                                <Small>Harga : Rp.10000000,-</Small>
                            </DivClassSingle>
                            <DivClassSingle className="list-data" onClick={this.detail}>
                                <H3>000011ERWEWET</H3>
                                <P>PRODUCT002</P>
                                <Small>Harga : Rp.10000000,-</Small>
                            </DivClassSingle>
                            <DivClassSingle className="list-data" onClick={this.detail}>
                                <H3>000011ERWEWET</H3>
                                <P>PRODUCT002</P>
                                <Small>Harga : Rp.10000000,-</Small>
                            </DivClassSingle>
                            <DivClassSingle className="list-data" onClick={this.detail}>
                                <H3>000011ERWEWET</H3>
                                <P>PRODUCT002</P>
                                <Small>Harga : Rp.10000000,-</Small>
                            </DivClassSingle>
                            <DivClassSingle className="list-data" onClick={this.detail}>
                                <H3>000011ERWEWET</H3>
                                <P>PRODUCT002</P>
                                <Small>Harga : Rp.10000000,-</Small>
                            </DivClassSingle>
                            <DivClassSingle className="list-data" onClick={this.detail}>
                                <H3>000011ERWEWET</H3>
                                <P>PRODUCT002</P>
                                <Small>Harga : Rp.10000000,-</Small>
                            </DivClassSingle>   
                            <Ul className="pagination">
                                <Li><A href="#">Previous</A></Li>
                                <Li><A href="#">1</A></Li>
                                <Li><A className="active" href="#">2</A></Li>
                                <Li><A href="#">3</A></Li>
                                <Li><A href="#">4</A></Li>
                                <Li><A href="#">Next</A></Li>
                            </Ul>
                        </DivClassSingle>
                    </DivClassSingle>
                    <DivClassSingle className="data-right">

                        <DivClassSingle className="navbar">
                            <H2>{(this.state.disabled) ? "Monitoring" : "Kelola"} Stock</H2>
                            <Button onClick={this.save} className="tooltip"><FaIcons.FaPlus /></Button>
                            <Button><FaIcons.FaPencilAlt /></Button>
                            <Button><FaIcons.FaTrash /></Button>
                        </DivClassSingle>
                        <Hr className="hr" />
                        <DivClassSingle className="form-data">
                            <Label>Product ID</Label>
                            <Input type="text" className="input" name="" disabled={(this.state.disabled) ? "disabled" : ""} placeholder="Product ID..." />
                        </DivClassSingle>
                        <DivClassSingle className="form-data">
                            <Label>Product Name</Label>
                            <Input type="text" className="input" name="" disabled={(this.state.disabled) ? "disabled" : ""} placeholder="Product Name..." />
                        </DivClassSingle>
                        <DivClassSingle className="form-data">
                            <Label className="textarea">Product description</Label>
                            <Textarea name="" className="textarea-input" disabled={(this.state.disabled) ? "disabled" : ""} placeholder="Product description...">
                            </Textarea>
                        </DivClassSingle>
                        <DivClassSingle className="form-data">
                            <Label>Product Price (Rp)</Label>
                            <Input type="number" className="input"  name="" disabled={(this.state.disabled) ? "disabled" : ""} placeholder="Product price..." />
                        </DivClassSingle>
                        {(!this.state.disabled) ? <DivClassSingle className="form-data">
                            <Button className="submit" disabled={(this.state.disabled) ? "disabled" : ""} onClick={this.submit}>Submit</Button>
                        </DivClassSingle> : ""}

                    </DivClassSingle>
                </DivClassSingle>
                <DivClassSingle className="footer">
                </DivClassSingle>
            </>
        );
    }
}

export default Produk;