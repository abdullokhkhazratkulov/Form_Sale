import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedProduct: null,
  allData:[],
  newObj: {},
  btnEdit: false
}

const selectProduct = createSlice({
    name: 'sale',
    initialState,
    reducers: {
      getPrice: (state, action) => {
        state.selectedProduct = action.payload
      },
      addData: (state, action) => {
        state.allData.push(action.payload)
      },
      clearPrice: (state, action) => {
        state.selectedProduct = null
      },
      getObj: (state, action) => {
        state.newObj = action.payload
        state.btnEdit = true
      },
      updateForm: (state, action) => {
        const updateIndex = state.allData.findIndex(obj=> obj.id === action.payload.id) 
        state.allData[updateIndex] = {...state.allData[updateIndex],...action.payload}
        state.btnEdit = false
      }
    }
})

export const {getPrice,addData, clearPrice, getObj, updateForm} = selectProduct.actions
export const priceReducer = selectProduct.reducer