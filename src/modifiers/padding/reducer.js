import { sizes } from "../values/sizes"
const key = 'padding'
export const paddingReducer = (props) => {
  let result = ''

  if (props.$padding) {
    result += `${key}: ${sizes[props.$padding]};`
  }

  if (props.$paddingTop) {
    result += `${key}-top: ${sizes[props.$paddingTop]};`
  }

  if (props.$paddingBottom) {
    result += `${key}-bottom: ${sizes[props.$paddingBottom]};`
  }

  if (props.$paddingLeft) {
    result += `${key}-left: ${sizes[props.$paddingLeft]};`
  }

  if (props.$paddingRight) {
    result += `${key}-right: ${sizes[props.$paddingRight]};`
  }
  return result
}