import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = props => {

    const loadProfile = async () => {
        const token = await AsyncStorage.getItem('token');
        if(!token){
            props.navigation.navigate('Login')
        }
        console.log(token);

    }

    useEffect(() => {
        loadProfile();
    });

    return(
        <View>
            <Text>Home Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default HomeScreen;