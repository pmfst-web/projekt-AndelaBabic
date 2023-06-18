import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {promjenaFavorita} from '../store/actions/radovi'
import { View, Text, StyleSheet, Button } from 'react-native';
import Boje from '../constants/Boje';
import Tipka from '../components/Tipka';

const DetaljiEkran = ({ route, navigation }) => {

  const idOsobe = Number(route.params.id);
  const sviRadovi = useSelector(state => state.radovi.radovi)
  const rad = sviRadovi.find((r) => r.id === idOsobe);

  const dispatch = useDispatch()

  const akcijaFavorit = () =>{
    dispatch(promjenaFavorita(idOsobe))
  }


  return (
    <View style={stil.ekran}>
      <View style={stil.tablica}>
        
        
        <View style={stil.redak}>
          
          <View style={stil.stupac}>
            <Text style={stil.ime}>{rad.naslov}</Text>
            <Text style={stil.bold}>{rad.autor}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          
          <View style={stil.stupac}>
            
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{rad.sadrzaj}</Text>
          </View>
        <View style={stil.kontrole}>
    
      </View>
        </View>
      
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina,
  },
  tablica: {
    width: '95%',
    flex: 1,
  },
  redak: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 70,
    paddingVertical: 1,
    marginVertical: 15,
  },
  stupac: {
    alignItems: 'center',
    marginVertical: 15,

  },
  ime: {
    fontFamily: "Corinthia",
    fontWeight: "bold", 
    fontSize: 32
  },
  bold:{
    fontWeight: "bold",
    fontSize: 14,
    
  }
});

export default DetaljiEkran;