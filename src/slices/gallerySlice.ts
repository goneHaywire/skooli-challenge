import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setSection, setSort, setWindow } from './filterSlice'
import { RootState } from '../libs/store'
import api from '../libs/api'
import { prop } from 'ramda'

export interface GalleryState {
  gallery: unknown[]
  isLoading: boolean
}

const initialState: GalleryState = {
  gallery: [],
  isLoading: true,
}

export const fetchGallery = createAsyncThunk(
  'gallery/fetchGallery',
  async (page) => {
    const gallery = await api
      .get(`/gallery/hot/${page}`)
      .then((resp) => resp.data)
      .then(prop('data'))
    return gallery
  }
)

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    addToGallery: (state, action: PayloadAction<GalleryState['gallery']>) => {
      state.gallery.push(action.payload)
    },
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(setSection, (state) => {
        state.gallery = []
        state.isLoading = true
      })
      .addCase(setSort, (state) => {
        state.gallery = []
        state.isLoading = true
      })
      .addCase(setWindow, (state) => {
        state.gallery = []
        state.isLoading = true
      })
      .addCase(fetchGallery.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchGallery.fulfilled,
        (state, action: PayloadAction<GalleryState['gallery']>) => {
          state.gallery.push(action.payload)
          state.isLoading = false
        }
      ),
})

export const selectGallery = (state: RootState) => state.gallery.gallery
export const selectIsLoading = (state: RootState) => state.gallery.isLoading

export const { addToGallery, toggleLoading } = gallerySlice.actions

export default gallerySlice.reducer
