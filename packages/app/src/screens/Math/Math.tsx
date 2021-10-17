import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text as RNText
} from 'react-native';

import { MathNavigationProps } from '../../typings';

const Math: React.FC<MathNavigationProps> = ({
  navigation
}: MathNavigationProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.push('Math', { screen: 'GCF' })}
        activeOpacity={0.75}
        style={styles.touchable}
      >
        <RNText style={styles.text}>GCF</RNText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.push('Math', { screen: 'Factors Of' })}
        activeOpacity={0.75}
        style={styles.touchable}
      >
        <RNText style={styles.text}>Factors Of</RNText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Math;

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
