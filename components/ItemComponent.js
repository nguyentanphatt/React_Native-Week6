import {Text, View, StyleSheet, Image, Button, TouchableOpacity} from 'react-native'
export default function ItemComponent( {data} ){
  return(
    <View style={styles.container}>
      <View>
        <Image source={data.image}/>
      </View>
      <View style={styles.info}>
        <View style={styles.text}>
          <Text>{data.title}</Text>
          <Text>{data.category}</Text>
        </View>
      </View>
      <View style={{marginRight: 10, marginTop:20}}>
        <Button title="ADD" color="red"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  info:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginRight: 40
  },

  text:{
    margin: 20
  }
})