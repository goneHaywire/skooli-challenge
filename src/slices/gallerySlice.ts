import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { setSection } from './filterSlice'

export interface GalleryState {
  gallery: unknown[]
  isLoading: boolean
}

const initialState: GalleryState = {
  gallery: [],
  isLoading: true,
}

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setGallery: (state, action: PayloadAction<GalleryState['gallery']>) => {
      state.gallery = action.payload
    },
    addToGallery: (state, action: PayloadAction<GalleryState['gallery']>) => {
      state.gallery.push(action.payload)
    },
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading
    },
  },
  extraReducers: (builder) =>
    builder.addMatcher(
      (action) => action.type.split('/')[0] === setSection.type.split('/')[0],
      (state) => {
        state.gallery = []
        state.isLoading = true
      }
    ),
  // .addCase(setSection, (state) => {
  //   state.gallery = []
  // })
  // .addCase(setSort, (state) => {
  //   state.gallery = []
  // })
  // .addCase(setPageSize, (state) => {
  //   state.gallery = []
  // })
  // .addCase(setWindow, (state) => {
  //   state.gallery = []
  // }),
})

export const { setGallery, addToGallery, toggleLoading } = gallerySlice.actions

export default gallerySlice.reducer
