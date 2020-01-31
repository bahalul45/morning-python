import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import {localhost} from './common';

import Banner from './banner';
import PageTitle from './page_title';
import PageHeader from './header_top';


export const BlogDetail = ()=>{
    const id = useNavigationParam("id");

    const [blogItem, setBlog] = useState({});

    const loadBlog = ()=>{
        const fetchSingleBlog = async ()=>{
            const res = await fetch(`${localhost}/blog_detail/` + id + "/");
            const response = await res.json();
            setBlog(response);
        }
        fetchSingleBlog();
    }
    useEffect(loadBlog, [id, setBlog]);



    return(
        <SafeAreaView style={styles.detailWrap}>
         <ScrollView>
            <ImageBackground source={require('../assets/images/page-bg.jpg')} style={styles.pageBg}>
                <PageHeader/>
                <PageTitle/>
                <Banner/>
                <View style={styles.blogWrap}>
                    {
                        <View style={styles.blogCard}>
                            <View>
                                <Image source={require('../assets/blog/blog.jpg')} style={styles.blogImg}/>
                            </View>
                            <View style={styles.blogTextBox}>
                                <Text style={styles.blogHeading}>{blogItem.title}</Text>
                                <Text style={styles.blogAuthor}>by: {blogItem.author}</Text>
                                <Text>{blogItem.description}</Text>
                            </View>
                        </View>
                    }
                </View>
            </ImageBackground>
         </ScrollView>
      </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    detailWrap:{
        flex: 1,
        marginTop: 30,
    },
    pageBg:{
        width: '100%',
        height: '100%',
    },
    blogWrap:{
        padding: 15,
    },
    blogCard:{
        backgroundColor: '#fff',
        borderRadius: 4
    },
    blogImg:{
        width: '100%',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
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
});