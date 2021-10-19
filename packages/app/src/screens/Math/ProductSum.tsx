import Utils from '@xenfo/utils';
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

const ProductSum = () => {
  const [product, setProduct] = useState('');
  const [sum, setSum] = useState('');

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
          placeholder="Product"
          value={product}
          // eslint-disable-next-line no-eval
          onChangeText={(input) => setProduct(eval(input).toString() as string)}
        />
        <TextInput
          style={styles.input}
          blurOnSubmit
          keyboardType="numeric"
          placeholder="Sum"
          value={sum}
          // eslint-disable-next-line no-eval
          onChangeText={(input) => setSum(eval(input).toString() as string)}
        />
        <TouchableOpacity
          onPress={() => {
            const productSum = Utils.math.productSum(
              parseInt(product, 10),
              parseInt(sum, 10)
            );
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            Alert.alert(
              productSum.length
                ? `The two factors are ${productSum
                    .sort((a, b) => a - b)
                    .join(', ')}`
                : 'There are no factors for this product and sum'
            );
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

export default ProductSum;

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
