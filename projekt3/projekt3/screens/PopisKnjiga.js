import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Tipka from '../components/Tipka'
import Boje from '../constants/Boje';
import ListaElement from '../components/ListaElement';
import { useSelector } from 'react-redux';
import { RADOVI } from '../data/test-podaci';

const PopisKnjiga = ({ route, navigation }) => {
  const radoviPrikaz = useSelector((state) => state.radovi.filterRadovi);
  const radoviFavorit = useSelector((state) => state.radovi.favoritRadovi);

  const prikazElementa = (podaci) => {
    return (
      <Tipka
         title="Odabir knjige"
         onPress={() => navigation.navigate('Popis')}
        />
    );
  };

return (
  <View style={stil.ekran}>
    <View style={stil.lista}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ margin: 5 }}
        data={radoviPrikaz}
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

export default PopisKnjiga;