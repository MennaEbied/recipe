import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { theme } from '../theme';




export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.text}>Foody</Text>
     <Text style={{fontSize:24,color:theme.colorWhite}}>Food is always right</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:theme.colorOrange,
  },
  text:{
    fontSize:32,
    fontWeight:"bold",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    color:theme.colorWhite,
  },
  backGround:{
    flex:1,
  }
});
