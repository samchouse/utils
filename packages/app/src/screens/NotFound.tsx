import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NotFoundNavigationProps } from '../typings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    marginTop: 15,
    paddingVertical: 15
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
});

const NotFound: React.FC<NotFoundNavigationProps> = ({
  navigation
}: NotFoundNavigationProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>This screen doesn&apos;t exist.</Text>
    <TouchableOpacity
      onPress={() =>
        navigation.replace('Root', {
          screen: 'Home'
        })
      }
      style={styles.link}
    >
      <Text style={styles.linkText}>Go to home screen!</Text>
    </TouchableOpacity>
  </View>
);

export default NotFound;
