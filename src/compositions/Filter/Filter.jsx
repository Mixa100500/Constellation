import styled from "styled-components"
import { DropDown } from '../../components/DropDowns/DropDown.jsx'
import { Genres } from './Genres.jsx'

const FilterInner = styled.div`
  padding: 16px;
  max-width: 400px;
  border-radius: 6px;
  background-color: var(--filter-color);
`

export const Filter = () => {

  return (
      <FilterInner>
        <DropDown title={'genres'}>
          <Genres />
        </DropDown>
      </FilterInner>
  )
}

export default Filter
