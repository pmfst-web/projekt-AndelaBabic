import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {promjenaFavorita} from '../store/actions/radovi'
import { View, Text, StyleSheet, Button } from 'react-native';
import Boje from '../constants/Boje';


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
            <Text>Žanr:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={{...stil.bold}}>{rad.zanr}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Naslov:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.ime}>{rad.naslov}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Autor:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{rad.autor}</Text>
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
    width: '100%',
    flex: 1,
  },
  redak: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 80,
    paddingVertical: 0,
    marginVertical: 15,
  },
  stupac: {
    alignItems: 'center',
    marginVertical: 5,

  },
  ime: {
    fontFamily: "Corinthia",
    fontWeight: "bold", 
    fontSize: 45
  },
  bold:{
    fontWeight: "bold",
  }
});

export default DetaljiEkran;