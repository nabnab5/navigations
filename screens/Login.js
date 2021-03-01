import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput,TouchableOpacity,Button,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


    const Login = ({navigation}) =>(
        <ImageBackground source={require('../assets/images/nabnab.jpg')} style={styles.Backgroundcontainer}>
        <View style={styles.logocontainer}>
        <Text style={styles.welcome}>WELCOME BACK</Text>
          <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
          <Text style={styles.logoText}>Login</Text>
        </View>
      
      
        <View style={styles.inputcontainer}>
        <Icon name={'ios-person-outline'} size={28} color={'#CD5C5C'}
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'enter your username'}    
            placeholderTextColor={'#7E867F'}
            underlineColorAndroid='transparent'
          />
        </View>
      
      
        <View style={styles.inputcontainer}>
           <Icon name={'ios-key-outline'} size={28} color={'#CD5C5C'}
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'enter your password'}
            secureTextEntry={true}
            placeholderTextColor={'#7E867F'}
            underlineColorAndroid='transparent'
      
          />
      
      
        </View>
        
        
        <View>
        <TouchableOpacity style ={styles.btnlogin}>
        <Button color='#fff' title="Connect" onPress={() => navigation.navigate('Profile')}/>
         </TouchableOpacity>
          
        </View>
        
             <View style={styles.signuptextcont}>
               <Text style={styles.texti}>Don't have an account ? </Text>
               <Button color='#161817' fontWeight='bold' title="Sign Up" onPress={() => navigation.navigate('SignUp')}/>
               
             </View>
        
      
      </ImageBackground>
      );


const styles = StyleSheet.create({
  Backgroundcontainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  logo: {
    width: 90,
    height: 90,
    
  },
  logocontainer: {
    alignItems: 'center',
    marginBottom: 70,
  },
  inputcontainer: {
    marginTop: 12,
    borderWidth:3,
    borderColor:'#CD5C5C',
    borderRadius:50,
  
  },
  logoText: {
    color: '#045610',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    opacity: 0.8
  },
  input: {
    width: 250,
    height: 40,
    borderRadius: 50,
    fontSize: 17,
    paddingLeft: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'black',
    marginHorizontal: 20,
    
    
  },
  inputIcon: {
    position:'absolute',
    top: 8,
    left: 30,
    justifyContent:'center',
    alignItems:'center',
  },
  
  btnlogin:{
    width: 150,
    height: 45,
    borderRadius: 50,
    backgroundColor:'#045610',
    justifyContent:'center',
    top:15,
  },
  text:{
    color:'#fff',
    textAlign:'center',
    fontSize:18,
  },
  signuptextcont:{
    top:25,
    flexDirection:'row',
    
  },
  texti:{
   color:'#7E867F',
   top:9,
   fontSize:17
  }
});
  export default Login;