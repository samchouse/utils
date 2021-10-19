import Utils from '@utils/lib';
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

const GCF = () => {
  const [number, setNumber] = useState('');

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
          placeholder="Numbers"
          value={number}
          onChangeText={(input) => setNumber(input.replace(/[^\d\s]/g, ''))}
        />
        <TouchableOpacity
          onPress={() => {
            const gcf = Utils.math
              .gcf(...number.split(' ').map((n) => parseInt(n, 10)))
              .toString();
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            Alert.alert(`The GCF is ${gcf}!`);
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

export default GCF;

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
