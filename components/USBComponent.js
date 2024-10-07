import { View, Text, Image, StyleSheet } from "react-native"
import star from '../assets/star.png'
export default function USBComponent( {data} ){
  return(
    <View style={styles.container}>
      <View>
        <Image source={data.image}/>
      </View>
      <View style={styles.itemInfo}>
        <Text>{data.title}</Text>
        <Text><Image source={star} style={{marginRight: 20}}/>(15)</Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{marginRight: 10}}>{data.price}đ</Text>
          <Text>-39%</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection: 'column',
        marginBottom: 10
    },

    itemInfo:{
        display: 'flex'
    },
})