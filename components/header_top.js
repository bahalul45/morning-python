import React from 'react';
import {StyleSheet, View, Image } from 'react-native';



export const PageHeader = () => {
  return (
    <View style={styles.logo_box}>
        <Image source={require('../assets/logo/logo.png')} style={styles.page_logo}/>
    </View>
  );
}

const styles= StyleSheet.create({
    logo_box: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      page_logo: {
        width: 100,
        height: 100,
      },
})
