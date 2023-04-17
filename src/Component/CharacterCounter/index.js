import {Component} from 'react'

import {
  MainCharacterCounterContainer,
  YellowLeftSideContainer,
  BlueRightSideContainer,
  LeftSideMainHeading,
  RightSideMainHeading,
  InputContainerCounter,
  InputTypeText,
  AddCounterButton,
} from './styledComponent'

class CharacterCounter extends Component {
  render() {
    return (
      <MainCharacterCounterContainer>
        <YellowLeftSideContainer>
          <LeftSideMainHeading>
            Count the characters like a Boss...
          </LeftSideMainHeading>
        </YellowLeftSideContainer>
        <BlueRightSideContainer>
          <RightSideMainHeading>Character Counter</RightSideMainHeading>
          <InputContainerCounter>
            <InputTypeText type="text" />
            <AddCounterButton type="button">Add</AddCounterButton>
          </InputContainerCounter>
        </BlueRightSideContainer>
      </MainCharacterCounterContainer>
    )
  }
}

export default CharacterCounter
