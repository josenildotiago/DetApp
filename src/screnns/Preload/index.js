import React, {useEffect, useContext} from 'react';
import { Text } from 'react-native';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {UserContext} from '../../contexts/UserContext';
import Api from '../../Api';
import PrefLogo from '../../assets/brasao-pmm.svg';

export default () => {
    const {dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(()=>{
        const checarToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                let res = await Api.checkToken(token);
        
                if (res.token) {
                  await AsyncStorage.setItem('token', res.token);
                  userDispatch({
                    type: 'setAvatar',
                    payload: {
                      avatar: res.data.avatar,
                    },
                  });
                  // console.log(res);
                  navigation.reset({
                    routes: [{name: 'MainTab'}],
                  });
                } else {
                  navigation.navigate('Login');
                }
              } else {
                navigation.navigate('Login');
              }
        }
        checarToken();
    }, []);

    return (
        <Container>
        <PrefLogo width="100%" height="220" />
        <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}