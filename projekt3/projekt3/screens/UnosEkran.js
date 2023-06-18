import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import Tipka from '../components/Tipka'
import Boje from '../constants/Boje';
import ListaElement from '../components/ListaElement';
import { useSelector } from 'react-redux';
import { RADOVI } from '../data/test-podaci';
import UnosEkran from '../screens/UnosEkran'
import UnosKnjige from '../components/UnosKnjige'

export default function App() {
  const [zanr, setZanr] = useState('');
  const [naslov, setNaslov] = useState('');
  const [autor, setAutor] = useState('');
  const [prikaziPodatke, setPrikaziPodatke] = useState(false);
  const [pohranjeniPodaci, setPohranjeniPodaci] = useState([]);

  const unesiPodatke = () => {
    const noviPodatak = {
      zanr: zanr,
      naslov: naslov,
      autor: autor,
    };
    setPohranjeniPodaci([...pohranjeniPodaci, noviPodatak]);
    setPrikaziPodatke(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#C1FFC1' }}>
      {!prikaziPodatke ? (
        <View style={stil.unos}>
          <TextInput
            placeholder="Žanr"
            value={zanr}
            onChangeText={(text) => setZanr(text)}
          />
          <TextInput
            placeholder="Naslov"
            value={naslov}
            onChangeText={(text) => setNaslov(text)}
          />
          <TextInput
            placeholder="Autor"
            value={autor}
            onChangeText={(text) => setAutor(text)}
          />
          <Tipka title="Unesi" onPress={unesiPodatke}/>
        </View>
      ) : (
        <View>
          <Text>Žanr: {zanr}</Text>
          <Text>Naslov: {naslov}</Text>
          <Text>Autor: {autor}</Text>
        </View>
      )}

      {pohranjeniPodaci.length > 0 && (
        <Tipka
          title="Povratak na unos"
          onPress={() => setPrikaziPodatke(!prikaziPodatke)}
        />
      )}

      {prikaziPodatke && (
        <View>
          <Text>~~~~ Prethodno uneseni podaci ~~~~</Text>
          {pohranjeniPodaci.map((podatak, index) => (
            <View key={index}>
              <Text style={stil.naslov}>Žanr: {podatak.zanr}</Text>
              <Text style={stil.naslov}>Naslov: {podatak.naslov}</Text>
              <Text style={stil.naslov}>Autor: {podatak.autor}</Text>
              <Text>~~~~~~~~~~~~~~~~~~~~~~~~~</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const stil = StyleSheet.create({
  
  naslov: {
    fontSize: 15,
    marginVertical: 5,
  }, 
  unos:{
    width: 300,
    maxWidth: "80%",
    alignItems: "center",  
    padding: 10,
    shadowColor: 'darkgreen',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10, 
    shadowOpacity: 0.8, 
    borderRadius: 15,
    elevation: 17
  },
 
})
