import {View, Text, Image, StyleSheet,FlatList, SafeAreaView} from 'react-native'
import left_arrow from '../assets/left-arrow.png'
import cart_icon from '../assets/cart.png'
import back_icon from '../assets/back.png'
import more_icon from '../assets/more.png'
import home_icon from '../assets/home.png'
import product from '../assets/data'
import ItemConponent from './ItemComponent'
export default function MainScreen(){
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={left_arrow}/>
        <Text style={{color:'white'}}>Chat</Text>
        <Image source={cart_icon}/>
      </View>
      <View style={styles.text}>
        <Text >Bạn có thắc mắc với sản phẩm nào vừa xem. Đừng ngại chat với Shop</Text>
      </View>
      <FlatList 
        data={product}
        renderItem={({item}) => <ItemConponent data={item}/>}
        key={product.id}
      />
      <View style={styles.header}>
        <Image source={more_icon}/>
        <Image source={home_icon}/>
        <Image source={back_icon}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{

    flex: 1
  },

  header:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: '#1BA9FF',
    alignItems:'center',
    padding: 10
  },

  text:{
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    margin: 10
  },
})