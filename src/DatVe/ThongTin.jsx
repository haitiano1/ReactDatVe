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
                            {/* <tr>
                                <th>vc</th>
                                <th>vc</th>
                                <th>vc</th>
                            </tr> */}
                            {this.props.gheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia}</td>

                                </tr>
                            })}

                        </tbody>
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

