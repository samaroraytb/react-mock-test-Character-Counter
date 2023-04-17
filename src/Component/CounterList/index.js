import {ListItemWithLength} from './styledComponents'

const CounterList = props => {
  const {eachDetail} = props
  const {userTyped} = eachDetail
  return (
    <ListItemWithLength>{`${userTyped}: ${userTyped.length}`}</ListItemWithLength>
  )
}

export default CounterList
