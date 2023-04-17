import {ListItemWithLength} from './styledComponents'

const CounterList = props => {
  const {eachDetail} = props
  const {userTyped} = eachDetail
  return (
    <li>
      <ListItemWithLength>{`${userTyped}: ${userTyped.length}`}</ListItemWithLength>
    </li>
  )
}

export default CounterList
