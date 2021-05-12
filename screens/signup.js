import {Button,Text,View,Image,TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import React, {  useState } from 'react';
import { TouchableOpacity } from 'react-native';
import firebase from '../firebase/fire';

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signUp = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('Home');
        } catch (err) {
            setError(err.message);
        }

    }
    return <>
     <View style={{backgroundColor:"#FFF",flex:1}}>
                <Image source ={require('../assets/sign-up-without-background.png')}
                    style={{flex:1,
                    marginHorizontal:30}}
                />
              
    <View style={{flex:1}}>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:20,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput 
                    placeholder="Enter your email"
                    
                    value={email}
                    onChangeText={setEmail}
                        style={{
                            paddingHorizontal:10,
                            width:250
                              
                        }}
                    />
            
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                    
                }}>
                    <Icon name="lock" color="#00716F" size={24}/>
                    <TextInput
                    secureTextEntry
                    placeholder="Enter your password"
                    placeholderTextColor="#00716F"
                    value={password}
                    onChangeText={setPassword} 
                        style={{
                            paddingHorizontal:10,
                            width:250
                        }}
                    />

                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                    
                }}>
                    <Icon name="lock" color="#00716F" size={24}/>
                    <TextInput
                    secureTextEntry
                    placeholder="Confirm your password"
                    placeholderTextColor="#00716F" 
                        style={{
                            paddingHorizontal:10,
                            width:250
                        }}
                    />


                </View>
                {
          error ?
              <Text  style={{ color: 'red',textAlign:'center',marginTop:10 }}>{error}</Text>
              : null
      }

                <View style={{
                    marginHorizontal:120,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:15,
                    backgroundColor:"#cc0033",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                     <Text onPress={() => signUp()} 
                     style={{
                        color:"white",
                        fontFamily:"SemiBold",
                        fontSize: 18,
                    }}>Sign Up</Text></TouchableOpacity>
                    
            
                </View>
         </View>     
          

          
        
            </View>
</>
};

export default Signup;