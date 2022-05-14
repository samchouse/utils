import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { HomeNavigationProps } from '../typings';

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

const Home: React.FC<HomeNavigationProps> = ({
  navigation
}: HomeNavigationProps) => (
  <SafeAreaView style={styles.container}>
    <TouchableOpacity
      onPress={() => navigation.push('Text', { screen: 'Main' })}
      activeOpacity={0.75}
      style={styles.touchable}
    >
      <Text style={styles.text}>Text</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.push('Math', { screen: 'Main' })}
      activeOpacity={0.75}
      style={styles.touchable}
    >
      <Text style={styles.text}>Math</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

export default Home;
