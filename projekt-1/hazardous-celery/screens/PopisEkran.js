import * as React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import Boje from '../constants/Boje';
import ListaElement from '../components/ListaElement';
import { useSelector } from 'react-redux';
import { KNJIGE } from '../data/test-podaci';

const PopisEkran = ({ route, navigation }) => {
  const knjigePrikaz = useSelector((state) => state.knjige.naslov);
  const knjigeFavorit = useSelector((state) => state.knjige.favoritRadovi);

  const prikazElementa = (podaci) => {
    return (
      <ListaElement
        onPress={() => navigation. navigate('Detalji', { id: podaci.item.id})}
        natpis={podaci.item.naslov}
      />
    );
  };

return (
  <View style={stil.ekran}>
    <View style={stil.lista}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ margin: 5 }}
        data={knjigePrikaz}
        renderItem={prikazElementa}
        numColumns={1}
        
      />
    </View>
    <View style={stil.lista}>
    <Text>FAVORITI</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ margin: 5 }}
        data={knjigeFavorit}
        renderItem={prikazElementa}
        numColumns={1}
      />
    </View>
  </View>
);
};

const stil = StyleSheet.create({
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
});

export default PopisEkran;