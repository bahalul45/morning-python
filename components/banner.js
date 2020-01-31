import React from 'react';
import {StyleSheet, View, Image } from 'react-native';



export const Banner = () => {
  return (
    <View style={styles.banner_box}>
        <Image source={require('../assets/banner/banner.jpg')} style={styles.banner_img}/>
    </View>
  );
}

const styles= StyleSheet.create({
    banner_box: {
        width: '100%',
        height: 200,
        backgroundColor: '#333',
      },
      banner_img: {
        width: '100%',
        height: '100%',
      },
})
