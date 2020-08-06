import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function Toogle(props){
    
        if(props.player===1)
        {
            return(
            <Text style={{fontSize:20,fontWeight:'bold',color:'orange',transform: [{ rotate: "180deg" }]}}>Current Player (X)</Text>
            )
        }
        else
        {   
            return(
               <View></View>
                )
        }
}