import React from 'react';
import { StyleSheet,TouchableOpacity,Text, View,TouchableWithoutFeedback,BackHandler,Button,Alert ,Dimensions} from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toogle from './toogle';
import Toogle2 from './toogle2';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import vsPlayer from './vs_Player';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'white'}}>
        <Text style={{fontSize:50,paddingBottom:30,color:'green',fontWeight:'bold'}} >TIC TAC TOE</Text>
      <TouchableOpacity style={styles.btn}
            title="vsComputer"
            onPress={() => navigation.navigate('vsComputer')}
          >
            <Text style={{color:'white',fontWeight:'bold',letterSpacing:0.5}}>vs Computer</Text>
            </TouchableOpacity>
       <TouchableOpacity style={styles.btn}
            title="vsPlayer"
            onPress={() => navigation.navigate('vsPlayer')}
          >
            <Text style={{color:'white',fontWeight:'bold',letterSpacing:0.5}}>vs Player</Text>
            </TouchableOpacity>
      <TouchableOpacity style={styles.btnExit}
            title="Exit"
            onPress={() => BackHandler.exitApp()}
          >
            <Text style={{color:'green',fontWeight:'bold',fontSize:20,letterSpacing:0.5}}>Exit</Text>
            </TouchableOpacity>
    </View>

  );
}

function vsComputer({navigation}){
  return(
    <Text>I'm not developed yet.</Text>
  )
}

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="vsComputer" component={vsComputer} />
        <Stack.Screen name="vsPlayer" component={vsPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



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
  btnExit:{
    marginTop:50,
    borderColor:'green',
    borderWidth:2,
  width:120,
  borderRadius:20,
  height:50,
  paddingVertical:5,
  justifyContent:"center",
  alignItems:"center",
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
  width:120,
  borderRadius:20,
  height:50,
  paddingVertical:5,
  justifyContent:"center",
  alignItems:"center",
} 
});
