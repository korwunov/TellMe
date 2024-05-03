import { createSlice } from '@reduxjs/toolkit'

export const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    value: true,
  },
  reducers: {
    show: (state) => {
      state.value = true
    },
    hide: (state) => {
      state.value = false
    },
  },
})

export const { show, hide } = bannerSlice.actions

export default bannerSlice.reducer