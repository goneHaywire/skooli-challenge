import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from '../slices/gallerySlice'
import filterReducer from '../slices/filterSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    filters: filterReducer,
    gallery: galleryReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
