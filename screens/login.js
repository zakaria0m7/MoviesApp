
import {Button,Text,View,Image,TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import React, {  useState } from 'react';
import { TouchableOpacity } from 'react-native';
import firebase from '../firebase/fire';

const Login = ({navigation})=>{
    const [isLogin, setIsLogin] = useState(false); // initialize state
    const [name, setName] = useState(""); // initialize state
    const [photo, setPhoto] = useState(""); // initialize state

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmitGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    navigation.navigate('Home');
  }).catch((error) => {
     console.log(error)
  });
    }

    const onSubmitFacebook = () => {
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
      
          // The signed-in user info.
          var user = result.user;
      
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var accessToken = credential.accessToken;
      
          navigation.navigate('Home');
        })
        .catch((error) => {
            console.log(error);
        });
    }
    

  const  onLogout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log("Sign-out successful");
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });

          setIsLogin(false);
    }

        firebase.auth().onAuthStateChanged(function(user){
            if(user)
            {
                console.log("User Signed in");
                console.log(user);
                setIsLogin(true);
                setName(user.displayName);
                setPhoto(user.photoURL);
                
            }
                else
                {
                    console.log("no User is Signed in")
                }
        });
    
    

    const signIn = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Home');
        } catch (err) {
            setError(err.message);
        }

    }

    return<>
       {(isLogin === false)
          ? 
            <View style={{backgroundColor:"#FFF",height:"100%",flex:1}}>
                <Image source ={require('../assets/logo-without-background.png')}
                    style={{flex:1 ,height:'100%',width:'100%'}}
                />
              

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
                {
          error ?
              <Text style={{ color: 'red',textAlign:'center', marginTop:10 }}>{error}</Text>
              : null
      }

                <View style={{
                    marginHorizontal:120,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:15,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                     <Text onPress={() => signIn()} 
                     style={{
                        color:"white",
                        fontFamily:"SemiBold",
                        fontSize: 18,
                    }}>Sign In</Text>
                    
            
                </View>
               
          

    <View style={{
                    marginHorizontal:120,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:5,
                    backgroundColor:"#4267B2",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                     <Text onPress={() => onSubmitFacebook()} 
                     style={{
                        color:"white",
                        fontFamily:"SemiBold",
                        fontSize: 18,
                    }}>Facebook</Text>
                    
            
                </View>

                <View style={{
                    marginHorizontal:120,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:5,
                    backgroundColor:"#DB4437",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                     <Text onPress={() => onSubmitGoogle()}
                     style={{
                        color:"white",
                        fontFamily:"SemiBold",
                        fontSize: 18,
                    }}>Google</Text>
                    </TouchableOpacity>
                    
            
                </View>

                <TouchableOpacity style={{
                    alignSelf:'flex-center',
                     marginHorizontal:110 
                    }}  
                    onPress={() => navigation.navigate('Signup')}>
        <Text style={{
                    alignSelf:"center",
                    color:"#00716F",
                    fontFamily:"SemiBold",
                    paddingVertical:30,
                   
                }}>Don't have an account? Sign Up</Text>
    </TouchableOpacity>
        
            </View>
    :
    <View style={{
        flex:1,
        backgroundColor:"#FFF",
        height:"100%",
        alignItems:"center",
        }}>
       
           <Image source ={photo}
                    style={{width:"60%",height:"40%"}}
                />
                <br/>
                <Text style={{
                    alignSelf:"center",
                    color:"#00716F",
                    fontFamily:"SemiBold",
                    paddingVertical:30,
                    fontSize:29
                }}>{name}</Text>
                <Button title="SignOut" onPress={()=>onLogout()} color="#DB4437" />
    </View>
    }

    </>
}

export default Login;
