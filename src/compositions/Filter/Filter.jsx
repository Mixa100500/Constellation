import styled from "styled-components"
import { DropDown } from '../../components/DropDowns/DropDown.jsx'
import { Genres } from './Genres.jsx'

const FilterInner = styled.div`
  padding: 16px;
  max-width: 400px;
  border-radius: 6px;
  background-color: var(--filter-color);
`

const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Filter = () => {

  return (
    <div className='padding-horizontal'>
      <FilterInner>
        <DropDown title={'genres'}>
          <FilterList>
            <Genres />
          </FilterList>
        </DropDown>
      </FilterInner>
    </div>
  )
}

export default Filter
