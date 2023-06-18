import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import Boje from '../constants/Boje'
import PocetniEkran from '../screens/PocetniEkran'
import Tipka from '../components/Tipka'
import UnosKnjige from '../components/UnosKnjige'
import UnosEkran from '../screens/UnosEkran'
import ListaElement from '../components/ListaElement';
import { useSelector } from 'react-redux';

const UneseneKnjige = (route, navigation) => {
  const radoviPrikaz = useSelector((state) => state.radovi.filterRadovi);

  const prikazElementa = (podaci) => {
    return (
      <ListaElement
        onPress={() => navigation.navigate('Unos')}
      />
    );
  };

  return (
    <View style={stil.ekran}>
    <View style={stil.lista}>
      
    </View>
    
  </View>
  )
}

const stil = StyleSheet.create( {
  ekran: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina,
  },
  lista: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
})

export default UneseneKnjige;