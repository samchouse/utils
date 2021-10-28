import React from 'react';
import {
  Text as RNText,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { TextNavigationProps } from '../../typings';

const Text: React.FC<TextNavigationProps> = ({
  navigation
}: TextNavigationProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.push('Text', { screen: 'WTF' })}
        activeOpacity={0.75}
        style={styles.touchable}
      >
        <RNText style={styles.text}>WTF</RNText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.push('Text', { screen: 'Space' })}
        activeOpacity={0.75}
        style={styles.touchable}
      >
        <RNText style={styles.text}>Space</RNText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Text;

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
  }
});
