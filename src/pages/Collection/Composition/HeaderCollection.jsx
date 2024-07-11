// import { H2 } from "../../../elements/H2.jsx"
// import { useTitleByFilter } from "../../../hooks/useRouter.jsx"

import { useTitleByFilter } from '../../../hooks/useRouter.jsx'
import { H2 } from '../../../elements/H2.jsx'

export const HeaderCollection = () => {
  const title = useTitleByFilter()
  return (
    <H2 $paddingTop='xl' $paddingBottom='xl' className='padding-horizontal'>{title}</H2>
  )
}
