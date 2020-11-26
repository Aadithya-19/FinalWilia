import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    StyleSheet,
    KeyboardAvoidingView,
    Alert
} from "react-native";
import * as firebase from "firebase";
import db from "../config.js";

import TransactionScreen from '../screens/BookTransactionScreen';


export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
    }

    login = async (email, password) => {
        if (email && password) {
            try {
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)
                if (response) {
                    this.props.navigation.navigate('Transaction')
                }
            }
            catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        Alert.alert("User doesn't exist");
                        console.log("doesn't exist")
                        break;

                    case 'auth/invalid-email':
                        Alert.alert("Incorrect email ID")
                        break;
                }
            }
        }
        else {
            Alert.alert("Enter email ID and password")
        }
    }

    render() {
        return (

            <KeyboardAvoidingView style={{ alignItem: "center", marginTop: 20 }}>

                <View>
                    <TextInput
                        placeholder="Enter email address"
                        keyboardType='email-address'
                        style={styles.loginBox}
                        onChangeText={(text) => {
                            this.setState({ email: text })
                        }}
                    />
                    <TextInput
                        placeholder="Enter password"
                        secureTextEntry={true}
                        style={styles.loginBox}
                        onChangeText={(text) => {
                            this.setState({ password: text })
                        }}
                    />
                </View>

                <View>
                    <TouchableOpacity
                        style={{ height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius: 7 }}
                        onPress={() => {
                            this.login(this.state.email, this.state.password)
                        }}
                    ><Text style={{ textAlign: "center" }}>
                            Login
                    </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({ 
    loginBox: { 
        width: 300, 
        height: 40, 
        borderWidth: 1.5, 
        fontSize: 20, 
        margin: 10, 
        paddingLeft: 10 
    } 
})