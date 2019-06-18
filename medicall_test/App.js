import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput, Image, StyleSheet } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTypedText: null,
      text: null
    }
  }

  buttonClickListener = () => {
    this.setState({
      showTypedText: this.state.text,
      text: null
    })
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image style={{ marginBottom: 20 }} source={picture} />
        <Text
          style={{ marginBottom: 10 }}
        >
          Üdv, {this.state.showTypedText}!
        </Text>
        <TextInput
          style={{ width: 150, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
          onChangeText={(text) => this.setState({ text })}
          placeholder="Név"
          value={this.state.text}
        />
        <Button
          onPress={this.buttonClickListener}
          title="küldés"
          color="#EF4472"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
};

const picture = require('./images/logo.android.png');