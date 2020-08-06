import React from 'react';
import { StyleSheet,TouchableOpacity,Text, View,TouchableWithoutFeedback,BackHandler,Button,Alert ,Dimensions} from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import Toogle from './toogle';
import Toogle2 from './toogle2';
const windowHeight = Dimensions.get('window').height;


export default class vsPlayer extends React.Component {

    constructor(props,navigation){
      super(props,navigation)
  
      this.state = {  
          gameState:
            [[0,0,0],
               [0,0,0],
               [0,0,0]],
         currentPlayer:1,
         chances:0,
         winnerA:0,
         winnerB:0,
      }
    }
     initializeGame=()=>{
       this.setState({gameState:[[0,0,0],
               [0,0,0],
               [0,0,0]],currentPlayer:1,chances:0});
     }
  
     getWinner=()=>{
       const TO_CHECK=3;
       var arr = this.state.gameState;
       var sum;
  
       //Check row
       for(var i=0;i<TO_CHECK;i++)
       {
         sum = arr[i][0] + arr[i][1] + arr[i][2];
         if(sum===3){return 1;}
         else if(sum===-3){return -1;}
       }
  
       //Check col
       for(var i=0;i<TO_CHECK;i++)
       {
         sum = arr[0][i] + arr[1][i] + arr[2][i];
                if(sum===3){return 1;}
         else if(sum===-3){return -1;}
       }
  
        sum = arr[0][0] + arr[1][1] + arr[2][2]
        if(sum===3) {return 1;}
        else if(sum===-3){return -1;}
  
        sum = arr[2][0] + arr[1][1] + arr[0][2]
        if(sum===3) {return 1;}
        else if(sum===-3){return -1;}
  
        return 0;
     }
   
    onTilePress = (row,col) =>{
      var value = this.state.gameState[row][col]
      if(value!==0){return ;}
      this.setState({chances:this.state.chances+1})
      var currentPlayer = this.state.currentPlayer;
      var array = this.state.gameState.slice()
      array[row][col] = currentPlayer
      this.setState({gameState:array})
  
      this.setState({currentPlayer : (currentPlayer===1) ? -1:1});
  
      var winner = this.getWinner()
      if(winner===1 )
      {
        Alert.alert(
          "Congratulations!",
          "X won",
          [
            {
              text: "Close",
              onPress: () => BackHandler.exitApp(),
              style: "cancel"
            },
            { text: "Play Again", onPress: () => this.initializeGame()}
          ],
          { cancelable: false }
        );
        this.setState({winnerA:this.state.winnerA+1})
        return;
      }
      else if(winner===-1)
      {
        Alert.alert(
          "Congratulations!",
          "O won",
          [
            {
              text: "Close",
              onPress: () => BackHandler.exitApp(),
              style: "cancel"
            },
            { text: "Play Again", onPress: () => this.initializeGame()}
          ],
          { cancelable: false }
        );
        this.setState({winnerB:this.state.winnerB+1})
        return;
      }
      else if(this.state.chances===8)
      {
        Alert.alert(
          "Oohh!",
          "Match Tied",
          [
            {
              text: "Close",
              onPress: () => BackHandler.exitApp(),
              style: "cancel"
            },
            { text: "Play Again", onPress: () => this.initializeGame()}
          ],
          { cancelable: false }
        );
    
        
        return;
      }
    }
  
    renderIcon=(row,col)=>{
      var value = this.state.gameState[row][col]
      switch (value) {
        case 1:return <Icon name="close" style={styles.tileX} />
        case -1:return <Icon name="circle-outline" style={styles.tile0} />
        default: return <View />
      }
    }
    render(){
      var currentPlayer = this.state.currentPlayer
    return (
      <View style={styles.container}>
        <View style={{justifyContent:'space-between',marginHorizontal:5,marginTop:5,flexDirection:'row',paddingTop:10}}>
         <Text style={{fontSize:20,fontWeight:'bold',color:'green',transform: [{ rotate: "180deg" }]}}>Score: {this.state.winnerA} </Text>
          <Toogle player={currentPlayer}/>
         </View>
         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <View style={{flexDirection:'row'}}>
        
        <TouchableWithoutFeedback 
        onPress={()=>this.onTilePress(0,0)} >
        <View style={[styles.tile,{borderLeftWidth:0,borderTopWidth:0}]} >
        {this.renderIcon(0,0)}
        </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>this.onTilePress(0,1)}><View style={[styles.tile,{borderTopWidth:0}]} >
        {this.renderIcon(0,1)}</View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>this.onTilePress(0,2)}><View style={[styles.tile,{borderRightWidth:0,borderTopWidth:0}]} >
        {this.renderIcon(0,2)}</View></TouchableWithoutFeedback>
        </View>
        <View style={{flexDirection:'row'}}>
        <TouchableWithoutFeedback onPress={()=>this.onTilePress(1,0)}><View style={[styles.tile,{borderLeftWidth:0}]} >
        {this.renderIcon(1,0)}</View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>this.onTilePress(1,1)}><View style={styles.tile} >
        {this.renderIcon(1,1)}</View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>this.onTilePress(1,2)}><View style={[styles.tile,{borderRightWidth:0}]} >
        {this.renderIcon(1,2)}</View></TouchableWithoutFeedback>
        </View>
        <View style={{flexDirection:'row'}}>
        <TouchableWithoutFeedback onPress={()=>this.onTilePress(2,0)}><View style={[styles.tile,{borderLeftWidth:0,borderBottomWidth:0}]} >
        {this.renderIcon(2,0)}</View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>this.onTilePress(2,1)}><View style={[styles.tile,{borderBottomWidth:0}]} >
        {this.renderIcon(2,1)}</View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>this.onTilePress(2,2)}><View style={[styles.tile,{borderRightWidth:0,borderBottomWidth:0}]} >
        {this.renderIcon(2,2)}</View></TouchableWithoutFeedback>
      </View>
      <View style={{justifyContent:"center",alignItems:"center",marginBottom:windowHeight-(windowHeight-20)}}>
      <TouchableOpacity onPress={this.initializeGame} title="Reset" style={styles.btn}><Text style={{  color:'white',fontWeight:'bold'}} >RESET</Text></TouchableOpacity></View>
      </View>
      <View style={{justifyContent:'space-between',paddingHorizontal:5,marginLeft:2,flexDirection:'row',marginBottom:5,paddingBottom:10}}>
         <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>Score: {this.state.winnerB} </Text>
         <Toogle2 player={currentPlayer}/>
         </View>
      </View>
      
    );
  }}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tile:{
      width:100,
      height:100,
      borderWidth:10,
      justifyContent:'center',
      alignItems:'center',
      borderColor:'black',
    },
  tileX:{
    color:"blue",
    fontSize:60,
  },
  tile0:{
    color:"red",
    fontSize:60,
  },
  btn:{
    marginTop:30,
    backgroundColor:"green",
    width:90,
    borderRadius:35,
    height:50,
    justifyContent:"center",
    alignItems:"center",
  } 
  });