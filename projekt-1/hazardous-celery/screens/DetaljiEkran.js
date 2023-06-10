import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {promjenaFavorita} from '../store/actions/knjige'
import { View, Text, StyleSheet, Button } from 'react-native';
import Boje from '../constants/Boje';


const DetaljiEkran = ({ route, navigation }) => {

  const idKnjige = Number(route.params.id);
  const sveKnjige = useSelector(state => state.knjige.knjige)
  const knjiga = sveKnjige.find((k) => k.id === idKnjige);

  const dispatch = useDispatch()

  const akcijaFavorit = () =>{
    dispatch(promjenaFavorita(idKnjige))
  }


  return (
    <View style={stil.ekran}>
      <View style={stil.tablica}>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>ID Knjige</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{knjiga.id}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Zanr</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{knjiga.zanr}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Naslov</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{knjiga.naslov}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Autor</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{knjiga.autor}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Sadrzaj</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{knjiga.sadrzaj}</Text>
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
    width: '80%',
    flex: 1,
  },
  redak: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    paddingVertical: 0,
    marginVertical: 15,
  },
  stupac: {
    alignItems: 'center',
    marginVertical: 5,

  },
  bold:{
    fontWeight: "bold",
  }
});

export default DetaljiEkran;