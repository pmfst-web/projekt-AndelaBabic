import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import Tipka from '../components/Tipka'
import Boje from '../constants/Boje'

const PocetniEkran = ({ navigation }) => {
  return (

    <ScrollView vertical={true} style={stil.ekran}>
      <View style={stil.slikaOkvir}>
        <Image style={stil.slika} source={require('../assets/knjiga.png')} />
      </View>
      <View style={stil.kontrole}>
        <Tipka
         title="Odabir žanra"
         onPress={() => navigation.navigate('Popis')}
        />
        <Tipka
         title="Unos radova"
         onPress={() => navigation.navigate('Unos')}
        />
      </View>
    </ScrollView>
  );
};

const stil = StyleSheet.create({
  ekran: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : Boje.Pozadina,
  },
  slika: {
    width: 300,
    height: 200,
    flex: 1,
  },
  slikaOkvir: {
    overflow: 'hidden',
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 20
  },
  kontrole:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    height: 100
  }
});

export default PocetniEkran;