import { useCallback, useEffect } from 'react'
import Gallery from './components/Gallery'
import FilterSection from './components/FilterSection'
import { useAppSelector } from './libs/store'
import { selectPage, setPage } from './slices/filterSlice'
import { useDispatch } from 'react-redux'
import {
  fetchGallery,
  selectGallery,
  selectIsLoading,
} from './slices/gallerySlice'
import { add, compose } from 'ramda'
import useInfiniteScroll from 'react-infinite-scroll-hook'

function App() {
  const dispatch = useDispatch()

  const page = useAppSelector(selectPage)
  const gallery = useAppSelector(selectGallery)
  const isLoading = useAppSelector(selectIsLoading)

  const nextPage = useCallback(
    () => compose(dispatch, setPage, add(1))(page),
    [page, dispatch]
  )

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: true,
    onLoadMore: nextPage,
    disabled: false,
    rootMargin: '0px 0px 500px 0px',
  })

  useEffect(() => dispatch(fetchGallery(page)), [page, dispatch])

  return (
    <div ref={sentryRef}>
      <FilterSection />
      <Gallery gallery={gallery} />
    </div>
  )
}

export default App
