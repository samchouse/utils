import Utils from '@utils/lib';
import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';

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
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '91%',
    padding: 3
  },
  switchText: {
    fontSize: 22,
    marginLeft: 10
  }
});

const GenerateNumbers = () => {
  const [amount, setAmount] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [duplicates, setDuplicates] = useState(true);

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
          keyboardType="numeric"
          placeholder="Amount"
          value={amount}
          onChangeText={(input) => setAmount(input.replace(/[^\d]/g, ''))}
        />
        <TextInput
          style={styles.input}
          blurOnSubmit
          keyboardType="numeric"
          placeholder="Minimum"
          value={min}
          onChangeText={(input) => setMin(input.replace(/[^\d]/g, ''))}
        />
        <TextInput
          style={styles.input}
          blurOnSubmit
          keyboardType="numeric"
          placeholder="Maximum"
          value={max}
          onChangeText={(input) => setMax(input.replace(/[^\d]/g, ''))}
        />
        <View style={styles.switch}>
          <Switch
            onValueChange={() =>
              setDuplicates((previousState) => !previousState)
            }
            trackColor={{ false: '#3f58fc', true: '#3f58fc' }}
            thumbColor={duplicates ? '#fff' : '#fff'}
            value={duplicates}
          />
          <Text style={styles.switchText}>Duplicates</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            try {
              const numbers = Utils.math.generateNumbers(
                parseInt(amount, 10),
                parseInt(min, 10),
                parseInt(max, 10),
                duplicates
              );

              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              Alert.alert(
                'The generated numbers are:',
                numbers.sort((a, b) => a - b).join(', ')
              );
            } catch (err: any) {
              if (
                (err as Error).message === 'Cannot have a bigger min than max'
              )
                Alert.alert(
                  'Oops, there was an error:',
                  (err as Error).message
                );

              if (
                (err as Error).message ===
                'Cannot have a bigger amount of possibilities than the range of numbers available'
              )
                Alert.alert(
                  'Oops, there was an error:',
                  (err as Error).message
                );
            }
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

export default GenerateNumbers;
