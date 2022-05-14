import Utils from '@utils/lib';
import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
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
  }
});

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
          onChangeText={(input) => setProduct(input.replace(/[^\d]/g, ''))}
        />
        <TextInput
          style={styles.input}
          blurOnSubmit
          keyboardType="numeric"
          placeholder="Sum"
          value={sum}
          onChangeText={(input) => setSum(input.replace(/[^\d]/g, ''))}
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
                    .join(' and ')}`
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
