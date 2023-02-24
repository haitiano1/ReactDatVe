const initialState = {
  gheDangDat: [
    // {soGhe:"A1", gia:1000}
  ]
}

export const DatVeReducer = (state = initialState, action) => {
  switch (action.type) {

    case "DAT_GHE":
      let gheDangDatUpdate = [...state.gheDangDat]
      let index = gheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
      if (index !== -1) {
        gheDangDatUpdate.splice(index, 1);
      } else {
        gheDangDatUpdate.push(action.ghe);
      }

      state.gheDangDat = gheDangDatUpdate
      return { ...state }


    case "HUY_GHE": {
      let gheDangDatUpdate = [...state.gheDangDat]
      let index = gheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
      if (index !== -1) {
        gheDangDatUpdate.splice(index, 1);
      }
      state.gheDangDat = gheDangDatUpdate;
      return {...state}
    }


    default:
      return state
  }
}
