import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function Toogle(props){
    
        if(props.player===-1)
        {
            return(
                <Text style={{fontSize:20,fontWeight:'bold',color:'orange'}}>Current Player(Y)</Text>
            )
        }
        else
        {   
            return(
               <View></View>
                )
        }
}

//,transform: [{ rotate: "180deg" }]