import React, { Component } from 'react'
import { connect } from 'react-redux';

 class DanhSachGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = "";
            let disabled = false;
            if (ghe.daDat) {
                cssGheDaDat = "gheDuocChon"
                disabled = true;
            }
            //Trạng thái ghế đã đặt
            let cssGheDangDat = ""
            let indexGheDangDat = this.props.gheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat!== -1){
                //có trong redux
                cssGheDangDat = 'gheDangChon'
            }
            return <button onClick={()=>{
                let action = {
                    type: 'DAT_GHE',
                    ghe
                }
                this.props.dispatch(action)
            }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>{ghe.soGhe}</button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) =>{
            return <span className='rowNumber'>{hang.soGhe}</span>
        })
    }

    renderHangGhe = () => {
        if (this.props.index === 0) {
            return <>
            {this.props.hangGhe.hang} {this.renderSoHang()}
        </>
        }else{
            return <>
            {this.props.hangGhe.hang} {this.renderGhe()}
        </>
        }
    }
    render() {


        return (
            <div className='text-light text-left ml-5' style={{ fontSize: "30px", alignItems: "center", gap: "5px" }}>
            {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        gheDangDat: state.DatVeReducer.gheDangDat
    }
}

export default connect(mapStateToProps)(DanhSachGhe)