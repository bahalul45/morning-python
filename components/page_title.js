import React from 'react';
import {StyleSheet, Text } from 'react-native';



export const PageTitle = () => {
  return (
    <Text style={styles.heading}>
      Morning Python
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 45,
    color: '#111',
    backgroundColor: '#fff',
    width: '100%',
    textAlign: 'center',
  },
});