/**
 * @author: Syeda Sumreen Ali
 * Date: 26 December,2019
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appbar, Surface, TextInput, Button} from 'react-native-paper';
import DisplayLove from './components/DisplayLove';
import Display from './Display';
class App extends Component {
  state = {
    fname: '',
    sname: '',
    love_percentage: '',
    message: '',
    spinner: 'true',
  };
  calculate = () => {
    let male_love_percentage = Math.round(Math.random(1, 100) * 100);
    let female_love_percentage = Math.round(Math.random(1, 100) * 100);
    let love_percentage = (male_love_percentage * female_love_percentage) % 100;
    let message;
    if (love_percentage <= 50) {
      message = "Bad Choice! You don't love each other ";
    } else if (love_percentage > 50 && love_percentage <= 75) {
      message = 'Congratulations! You both look good together';
    } else if (love_percentage > 75 && love_percentage <= 100) {
      message = 'What a Lovely Couple! You guys are made for each other ';
    }

    this.setState({
      love_percentage: love_percentage,
      message: message,
      spinner: 'false',
    });
  };
  submitit = () => {
    /**
     * There are two methods two calculate your love percentage
     * Method#1 fetching the API
     */

    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${
        this.state.fname
      }&sname=${this.state.sname}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        },
      },
    )
      .then(data => console.log(data.json()))
      .then(data2 => {
        if (data2) {
          console.log('empty response');
        } else {
          console.log(data2);
        }
      })
      .catch(err => {
        console.log(err);
      });
    /*
     * This API sometimes not work from the server side
     * In this case you can use the Method : 2
     * This is a simple function to calculate the percentage without
     * using any external API and also give you the offline availability
     */
    this.calculate();
  };
  render() {
    const errorMessage = <Text> Please Enter Name!</Text>;
    return (
      <View style={style.main}>
        <Appbar.Header style={style.Header}>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content
            title="Love % Calculator"
            subtitle="find how much your partner loves you"
          />
          <Appbar.Action icon="magnify" onPress={this._handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
        </Appbar.Header>
        <TextInput
          label="Person1 (male)"
          value={this.state.fname}
          style={style.input}
          placeholderTextColor="#f00"
          underlineColorAndroid="#f00"
          onChangeText={text => this.setState({fname: text})}
        />
        <TextInput
          label="Person2 (female)"
          value={this.state.sname}
          style={style.input}
          placeholderTextColor="#f00"
          underlineColorAndroid="#f00"
          onChangeText={text => this.setState({sname: text})}
        />
        <Button
          icon="heart"
          mode="contained"
          style={{
            marginTop: 40,
            marginRight: 5,
            marginLeft: 5,
            backgroundColor: '#f23a4d',
          }}
          onPress={this.submitit}>
          Calculate
        </Button>
        <DisplayLove
          percentage={this.state.love_percentage}
          message={this.state.message}
          spinner={this.state.spinner}
          fname={this.state.fname}
          sname={this.state.sname}
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  Header: {
    backgroundColor: '#f23a4d',
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 14,
  },
  input: {
    borderBottomColor: '#fff',
    backgroundColor: '#fff',
    marginTop: 5,
    color: '#f23a4d',
    fontSize: 20,
    zIndex: 100,
    marginBottom: 5,
  },
  button: {
    marginTop: 100,
  },
  main: {
    backgroundColor: '#fff',
    color: 'white',
    flex: 1,
  },
});

export default App;
