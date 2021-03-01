import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput,TouchableOpacity,Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MaterialIcons} from '@expo/vector-icons';

    const Profile = ({navigation}) =>(
        <ImageBackground source={require('../assets/images/nabnab.jpg')} style={styles.Backgroundcontainer}>
     
        <View style={styles.logocontainer}>
        <Text style={styles.welcome}>CREATE YOUR</Text>
          <Text style={styles.logoText}>BABY PROFIL</Text>
          
        </View>
        <TouchableOpacity onPress={() => {} }>
        <View style={styles.logocontainer}>
        
          <Image source={require('../assets/images/profile1.png')} style={styles.logo} />
        </View>
        <View >
        
          <Icon name='add-circle-outline' size ={38}  color='black' style={{
            opacity:0.7,
            alignItems:'center',
            justifyContent:'center',
            bottom:98,
            left:60,
          }}/>
          
        </View> 
        </TouchableOpacity>
       
  
        <View style={styles.inputcontainer}>
        <Icon name={'ios-person-outline'} size={28} color={'#045610'}
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'First name'}    
            placeholderTextColor={'#7E867F'}
            underlineColorAndroid='transparent'
          />
        </View>
  
  
        <View style={styles.inputcontainer}>
           <Icon name={'ios-person-outline'} size={28} color={'#045610'}
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Last name'}
            placeholderTextColor={'#7E867F'}
            underlineColorAndroid='transparent'
  
          />
  
  
        </View>
        
        <View style={styles.inputcontainer}>
           <MaterialIcons name={'1k'} size={28} color={'#045610'}
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Baby s weight'}
            keyboardType ='number-pad'
            placeholderTextColor={'#7E867F'}
            underlineColorAndroid='transparent'
  
          />
  
  
        </View>
        
        <View style={styles.inputcontainer}>
           <Icon name={'ios-calendar-outline'} size={28} color={'#045610'}
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Date of Birth'}
            keyboardType ='number-pad'
            placeholderTextColor={'#7E867F'}
            underlineColorAndroid='transparent'
          />
  
  
        </View>
        
        
        
        
        <View>
        <TouchableOpacity style ={styles.btnlogin}>
        <Button color='#fff' fontWeight='bold' title="Add" onPress={() => navigation.navigate('BabyProfile')}/>
         </TouchableOpacity>
          
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
          marginBottom: 0,
        },
        inputcontainer: {
          marginTop: 12,
          borderWidth:3,
          borderColor:'#CD5C5C',
          borderRadius:50,
        
        },
        welcome:{
          color:'#CD5C5C',
          fontSize:35,
          fontWeight: 'bold',
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
          width: 80,
          height: 45,
          borderRadius: 50,
          backgroundColor:'#CD5C5C',
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
        },
        textu:{
          color:'#7E867F',
          fontWeight:'bold'
        }
        
      });

      export default Profile;