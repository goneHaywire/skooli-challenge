import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PageSize, Section, Sort, Window } from '../types/filter'

export type FilterState =
  | {
    section: 'user'
    sort: Sort
    pageSize: PageSize
    window: null
  }
  | {
    section: 'top'
    sort: null
    pageSize: PageSize
    window: Window
  }
  | {
    section: 'hot'
    sort: null
    pageSize: PageSize
    window: null
  }

const initialState: FilterState = {
  section: 'hot',
  sort: null,
  pageSize: 24,
  window: null,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState as FilterState,
  reducers: {
    // ktu do kesh cases per secilen gje
    setSection: (state, action: PayloadAction<Section>) => { },
    setSort: (state, action: PayloadAction<Sort>) => {
      if (state.section === 'user') state.sort = action.payload
    },
    setPageSize: (state, action: PayloadAction<PageSize>) => {
      state.pageSize = action.payload
    },
    setWindow: (state, action: PayloadAction<Window>) => {
      if (state.section === 'top') state.window = action.payload
    },
  },
})

export const { setSection, setSort, setPageSize, setWindow } =
  filterSlice.actions
export default filterSlice.reducer
