import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, ImageBackground, Image } from 'react-native';
import {PageHeader, PageTitle, Banner, BlogList, BlogPost, userPannel, Chat, Admin} from './components';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';



const App=()=> {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollCont}>
        <ImageBackground source={require('./assets/images/page-bg.jpg')} style={styles.page_bg}>
          <PageHeader/>
          <PageTitle/>
          <Banner/>
          <BlogList/>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};




const TabNavigator = createBottomTabNavigator({
  Home: App,
  Post: BlogPost,
  User: userPannel,
  Chat: Chat,
  Admin: Admin
}, { initialRouteName: 'Home'});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  scrollCont: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  page_bg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
