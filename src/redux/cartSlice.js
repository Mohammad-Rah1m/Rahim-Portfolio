import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  plan: '',
  popupOpen:false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByPrice: (state, action) => {
      state.value += action.payload
    },
    setPlan: (state, action) => {
      state.plan = action.payload; // Action to set the plan
    },
    setPopUp:(state,action)=>{
      state.popupOpen = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByPrice, setPlan, setPopUp} = cartSlice.actions

export default cartSlice.reducer