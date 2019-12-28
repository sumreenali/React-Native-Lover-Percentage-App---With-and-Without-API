import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const DisplayLove = props => {
  return (
    <View>
      <Icon
        style={{flex: 1, justifyContent: 'center'}}
        name="heartbeat"
        type="font-awesome"
        size={80}
        color="#f23a4d"
      />
      <Text style={style.text}>Percent: {props.percentage} % </Text>
      <Text style={style.text}> Message: {props.message} </Text>
    </View>
  );
};
const style = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
});

export default DisplayLove;
