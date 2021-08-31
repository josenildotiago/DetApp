import React, { useRef, useState, useEffect } from 'react';
import { Text } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import { Container } from './styles';
import { MapsAPI } from '../../config';

export default () => {
    const map = useRef();
    const [mapLoc, setMapLoc] = useState({
        center:{
            latitude: -5.19123792455118,
            longitude: -37.3446489953544
        },
        zoom: 16,
        pitch:0,
        altitude:0,
        heading:0
    });

    const [fromLoc, setFromLoc] = useState({});
    const [toLoc, setToLoc] = useState({});

    useEffect(() => {
        Geocoder.init(MapsAPI, {language:'pt-br'});
        getMyCurrentPosition();
    }, [])

    const getMyCurrentPosition = () => {
        Geolocation.getCurrentPosition(async (info)=>{
            const geo = await Geocoder.from(info.coords.latitude, info.coords.longitude);
            if (geo.results.length > 0) {
                const loc = {
                    name:geo.results[0].formatted_address,
                    center:{
                        latitude:info.coords.latitude,
                        longitude:info.coords.longitude
                    },
                    zoom: 16,
                    pitch:0,
                    altitude:0,
                    heading:0
                };

                setMapLoc(loc);
                setFromLoc(loc);
            }
            console.log(geo.results[0]);
        }, (error)=>{
            console.log(error);
        });
    }

    return (
        <Container>
            <MapView
                ref={map}
                style={{ flex:1 }}
                provider="google"
                camera={mapLoc}
            ></MapView>
        </Container>
    );
}