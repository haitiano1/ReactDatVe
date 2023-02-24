import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTin extends Component {
    render() {
        return (
            <div className='col-4'>
                <div className="text-center ">
                    <div className="mt-5 text-left d-flex" style={{ justifyContent: 'center' }}>
                        <button className='gheDuocChon'></button>
                        <span className='text-light ml-2' style={{ fontSize: "20px" }}>Reserved Seat</span>
                        <br />
                        <button className='gheDangChon ml-3'></button>
                        <span className='text-light ml-2' style={{ fontSize: "20px" }}>Selected Seat</span>
                        <br />
                        <button className='ghe ml-3' style={{ marginLeft: "0" }}></button>
                        <span className='text-light ml-2' style={{ fontSize: "20px" }}>Empty Seat</span>
                    </div>
                    <table className="table mt-5 text-warning" border={2}>
                        <thead>
                            <tr className='text-light' style={{ fontSize: 25 }}>
                                <th>Seats</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.gheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td><span className='text-white' style={{ cursor: 'pointer', padding:"10px 15px", backgroundColor:'#ff9f5f', borderRadius:'12px' }} onClick={() => {
                                        let action = {
                                            type: "HUY_GHE",
                                            soGhe: gheDangDat.soGhe
                                        }
                                        this.props.dispatch(action)

                                    }}>Cancel</span></td>
                                </tr>
                            })}

                        </tbody>
                        <tfoot>
                            <tr className="text-warning">
                                <td></td>
                                <td><b>TOTAL</b></td>
                                <td>{this.props.gheDangDat.reduce(
                                    (tongTien, gheDangDat, index) => {
                                        return tongTien += gheDangDat.gia;
                                    }, 0)}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gheDangDat: state.DatVeReducer.gheDangDat
    }
}

export default connect(mapStateToProps)(ThongTin)

