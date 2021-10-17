import Utils from '@xenfo/utils';
import * as Clipboard from 'expo-clipboard';
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
  Alert
} from 'react-native';

const WTF = () => {
  const [text, setText] = useState('');

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          blurOnSubmit
          multiline
          placeholder="Text"
          value={text}
          onChangeText={(input) => setText(input)}
        />
        <TouchableOpacity
          onPress={() => {
            Clipboard.setString(Utils.text.wtf(text));
            Alert.alert('Copied text to clipboard!');
          }}
          activeOpacity={0.75}
          style={styles.touchable}
        >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default WTF;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: '#fff'
  },
  touchable: {
    alignItems: 'center',
    backgroundColor: '#3f58fc',
    paddingVertical: 10,
    width: '90%',
    borderRadius: 5,
    marginVertical: 5
  },
  input: {
    maxHeight: 150,
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: '#C7C7CD',
    borderRadius: 5,
    width: '90%',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 10
  }
});
