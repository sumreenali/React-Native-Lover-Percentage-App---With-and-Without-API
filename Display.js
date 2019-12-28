import React from 'react';
import {View, Text} from 'react-native';
 import DisplayLove from './components/DisplayLove';

const Display = props => {
  const displayLove = (
    <DisplayLove
      percentage={props.percent}
      message={props.message}
      spinner={props.spinner}
    />
  );
  const errorMessage = <Text> Please Enter Name!</Text>;
  let displayMessage;
  if (props.fname && props.sname) {
    displayMessage = displayLove;
  } else {
    displayMessage = errorMessage;
  }
  return <View> {displayMessage}</View>;
};

export default Display;
