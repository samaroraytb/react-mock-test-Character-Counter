import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CounterList from '../CounterList'

import {
  MainCharacterCounterContainer,
  YellowLeftSideContainer,
  BlueRightSideContainer,
  LeftSideMainHeading,
  RightSideMainHeading,
  InputContainerCounter,
  InputTypeText,
  AddCounterButton,
  UnOrderListItemsContainer,
  NoListImage,
} from './styledComponent'

class CharacterCounter extends Component {
  state = {RenderList: [], userInput: ''}

  changeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  clickToAddList = () => {
    const {userInput, RenderList} = this.state
    if (userInput !== '') {
      const newObject = {
        id: uuidv4(),
        userTyped: userInput,
      }
      const newList = [...RenderList, newObject]
      this.setState({RenderList: newList, userInput: ''})
    }
  }

  render() {
    const {RenderList, userInput} = this.state

    const isRenderListShow = RenderList.length > 0

    return (
      <MainCharacterCounterContainer>
        <YellowLeftSideContainer>
          <LeftSideMainHeading>
            Count the characters like a Boss...
          </LeftSideMainHeading>
          <UnOrderListItemsContainer>
            {isRenderListShow ? (
              RenderList.map(each => (
                <CounterList key={each.id} eachDetail={each} />
              ))
            ) : (
              <NoListImage
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
          </UnOrderListItemsContainer>
        </YellowLeftSideContainer>
        <BlueRightSideContainer>
          <RightSideMainHeading>Character Counter</RightSideMainHeading>
          <InputContainerCounter>
            <InputTypeText
              type="text"
              value={userInput}
              placeholder="Enter the Characters here"
              onChange={this.changeUserInput}
            />
            <AddCounterButton onClick={this.clickToAddList} type="button">
              Add
            </AddCounterButton>
          </InputContainerCounter>
        </BlueRightSideContainer>
      </MainCharacterCounterContainer>
    )
  }
}

export default CharacterCounter
