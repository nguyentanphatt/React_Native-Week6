import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, FlatList } from "react-native";
import left_arrow from '../assets/left-arrow.png'
import cart_icon from '../assets/cart.png'
import search_icon from '../assets/search_icon.png'
import dot from '../assets/dot.png'
import back_icon from '../assets/back.png'
import more_icon from '../assets/more.png'
import home_icon from '../assets/home.png'
import usb from '../assets/usb_data'
import USBComponent from './USBComponent'
const USBScreen = () => {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={left_arrow}/>
        <View style={styles.search}>
            <Image source={search_icon} style={{marginTop: 8, marginLeft: 10}}/>
            <TextInput placeholder="Dây cáp USB" style={styles.textInput} />
        </View>
        <View style={styles.dot}/>
        <Image source={cart_icon}/>
        <Image source={dot} style={{marginRight: 10}}/>
      </View>
      <FlatList 
        data={usb}
        renderItem={({item}) => <USBComponent data={item}/>}
        key={usb.id}
        numColumns={2}
      />
      <View style={styles.footer}>
        <Image source={more_icon}/>
        <Image source={home_icon}/>
        <Image source={back_icon}/>
      </View>

      <Text s></Text>
    </SafeAreaView>
    )
}

export default USBScreen;

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
      width: '100%',
      height: 50,
      marginBottom: 100
    },
    search:{
        display: 'flex',
        flexDirection:'row',
        backgroundColor: 'white',
        width: 200,
        height: 40,
    },  
    textInput:{
       backgroundColor: 'white',
       textAlign: 'center',
       marginLeft: 10
    }, 

    dot:{
        width: 20,
        height: 20,
        backgroundColor: 'red',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'red',
        left: 55,
        bottom: 8,
    },

    footer:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor: '#1BA9FF',
      alignItems:'center',
      padding: 10
    },
})