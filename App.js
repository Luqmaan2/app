import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Image} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>
        Hello
      </Text>
         <Image
         style={styles.img}
         source={require('./assets/favicon.png')}
         />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#22152C',
   
  },
 hello:{
color: '#F0EAEA',
fontSize:32,
width: 77,
height: 39,
left: 139,
top: 262,
 },
 img:{
  width:150,
  height:150,
 },
});
