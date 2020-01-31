import React, { useReducer } from 'react';
import {View, StyleSheet, TextInput, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks'
import { localhost } from './common';
import {PageHeader, PageTitle} from '../components';


export const BlogPost = ()=>{
    const { navigate } = useNavigation();

    const initialData = {
        title: "",
        author: "",
        description: ""
    }

    const reduce = (data, newData)=>{
        return Object.assign({},data, newData)

    }
    const [data, dispatch] = useReducer(reduce, initialData);

    const submitForm =(e)=>{
        e.preventDefault();  
        const blog ={
            title: data.title,
            author: data.author,
            description: data.description
        }

        const fetchBlog = {
            method: "POST",
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(blog)
        }
        let url = localhost + "/blog/";

        const postBlog = async()=>{
            const res = await fetch(url, fetchBlog);
            const response = await res.json();
            navigate("Home");
        }
        postBlog();
    }

    return(
        <SafeAreaView style={styles.postWrap}>
            <ImageBackground source={require('../assets/images/page-bg.jpg')} style={styles.pageBg}>
            <ScrollView style={styles.postScroll}>
                    <PageHeader/>
                    <PageTitle/>
                    <View style={styles.postForm}>
                        <TextInput placeholder="Title" name="title" value={data.title}  onChangeText={text => dispatch({title:text})}  style={styles.postInput}/>
                        <TextInput placeholder="Author" name="author" value={data.author} onChangeText={text => dispatch({author:text})}  style={styles.postInput}/>
                        <TextInput  placeholder="Description" name="description" value={data.description} onChangeText={text => dispatch({description:text})} style={styles.postInput}/>
                        <Button title="Save" onPress={(e)=>submitForm(e)} style={styles.postButton}/>
                    </View>
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    postWrap:{
        flex: 1,
        marginTop: 30,
    },
    postScroll:{},
    pageBg:{
        width: '100%',
        height: '100%',
    },
    postForm:{
        margin: 30,
        padding: 15,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 4,
    },
    postInput:{
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 4,
        marginBottom: 15,
        paddingLeft: 7,
        fontSize: 16,
        padding: 5,
        color: '#fff',
    },
    postButton:{},
})