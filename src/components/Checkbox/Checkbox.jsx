import { useState } from "react"
import styled from "styled-components"

const CheckboxContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CheckboxLabel = styled.label`
  display: flex;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
`

export const Checkbox = ({ label, checked, value, onChange }) => {
	const [isActive, setIsActive] = useState(checked)

  const innerOnChange = (e) => {
    onChange(e)
    setIsActive(prev => !prev)
  }

	return (
      <CheckboxContent>
        <CheckboxLabel htmlFor={label}>
          {label}
          <input
            onChange={innerOnChange}
            id={label}
            value={value}
            type='checkbox'
            checked={isActive}
          />
        </CheckboxLabel>
      </CheckboxContent>
	)
}