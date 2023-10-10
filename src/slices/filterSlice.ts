import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { Section, Sort, Window } from '../types/filter'
import { RootState } from '../libs/store'

export type FilterState = (
  | {
    section: 'user'
    sort: Sort
    window: null
    showViral: boolean
  }
  | {
    section: 'top'
    sort: null
    window: Window
    showViral: null
  }
  | {
    section: 'hot'
    sort: null
    window: null
    showViral: null
  }
) & { page: number }

const initialState: FilterState = {
  section: 'hot',
  sort: null,
  window: null,
  showViral: null,
  page: 1,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState as FilterState,
  reducers: {
    // ktu do kesh cases per secilen gje
    setSection: (state, action: PayloadAction<Section>) => {
      state.page = 1
    },
    setSort: (state, action: PayloadAction<Sort>) => {
      if (state.section === 'user') {
        state.sort = action.payload
        state.page = 1
      }
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setWindow: (state, action: PayloadAction<Window>) => {
      if (state.section === 'top') {
        state.window = action.payload
        state.page = 1
      }
    },
  },
})

export const selectPage = createSelector(
  (state: RootState) => state.filters.page,
  (x) => x
)
export const selectSection = (state: RootState) => state.filters.section
export const selectSort = (state: RootState) => state.filters.sort
export const selectWindow = (state: RootState) => state.filters.window
export const selectShowViral = (state: RootState) => state.filters.showViral

export const { setSection, setSort, setPage, setWindow } = filterSlice.actions
export default filterSlice.reducer
