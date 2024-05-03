import { configureStore } from '@reduxjs/toolkit'
import bannerReducer from './features/bannerSlice'
import { loadState } from './localStorage/stateLoader';

const store =  configureStore({
  reducer: {
    cookieBannerVisible: bannerReducer,
  },
  preloadedState: loadState("cookiesBannerState")
});

export default store;