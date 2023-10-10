import { useAppSelector } from '../../libs/store'
import {
  selectSection,
  selectShowViral,
  selectSort,
  selectWindow,
} from '../../slices/filterSlice'

const FilterSection: React.FC = () => {
  const section = useAppSelector(selectSection)
  const window = useAppSelector(selectWindow)
  const sort = useAppSelector(selectSort)
  const showViral = useAppSelector(selectShowViral)

  console.log(section, window, sort, showViral)
  return <></>
}
export default FilterSection
