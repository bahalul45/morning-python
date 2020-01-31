import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import {localhost} from './common';

export const BlogList = () => {
    const [blogs, setBlog] =useState([]);
    const { navigate } = useNavigation();


    const loadData =()=>{
        const fetchFunc = async ()=>{
            const res = await fetch(`${localhost}/blog/`);
            const response = await res.json();
            setBlog(response);
        }
        fetchFunc();
    }
    useEffect(loadData, [setBlog]);
  return (
      <View style={styles.blogWrap}>
            {
                blogs.map((item, index)=>(
                    <View key={index} style={styles.blogCard}>
                        <View>
                            <Image onPress={() => navigate("Details", {id: item.id})} source={require('../assets/blog/blog.jpg')} style={styles.blogImg}/>
                        </View>
                        <View style={styles.blogTextBox}>
                            <Text onPress={() => navigate("Details", {id: item.id})} style={styles.blogHeading}>{item.title}</Text>
                            
                            <Text style={styles.blogAuthor}>by: {item.author}</Text>
                            <Text numberOfLines={2} onPress={() => navigate("Details", {id: item.id})} style={styles.blogDescripton}>{item.description}</Text>
                        </View>
                    </View>
                ))
            }
      </View>
  )
};

const styles= StyleSheet.create({
    blogWrap:{
        padding: 15,
    },
    blogCard:{
        marginBottom: 15,
        marginTop: 15,
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    blogImg:{
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        width: '100%',
    },
    blogTextBox:{
        padding: 15,
    },
    blogHeading:{
        fontSize:18,
        color: '#270091',
        paddingBottom: 5,
    },
    blogAuthor:{
        fontStyle: 'italic',
        paddingBottom: 10,
    },
})
