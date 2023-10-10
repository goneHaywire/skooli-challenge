import { useEffect } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import FilterSection from './components/FilterSection'
import { useAppSelector } from './libs/store'
import { selectPage, setPage } from './slices/filterSlice'
import { useDispatch } from 'react-redux'
import { fetchGallery, selectGallery } from './slices/gallerySlice'
import { add, compose } from 'ramda'

function App() {
  const page = useAppSelector(selectPage)
  const gallery = useAppSelector(selectGallery)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGallery(page))
  }, [page, dispatch])

  // no need for callback as page is the only thing that will make the component rerender so there's nothing we can save for efficiency
  const nextPage = () => compose(dispatch, setPage, add(1))(page)

  return (
    <>
      <FilterSection />
      <Gallery gallery={gallery} />
      <div onClick={nextPage}>mbushe</div>
    </>
  )
}

export default App
