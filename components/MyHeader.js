import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header,Icon} from 'react-native-elements'

const MyHeader=props=>{
    return(
        <Header
        centerComponents = {{text:props.title,style:{color:'lightblue', fontSize:20,fontWeight:'bold'}}
    }backgroundColor="red"
        />
    )
}
export default MyHeader