import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Boje from '../constants/Boje'

const Tipka = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...stil.tipka, ...props.style}}>
        <Text style={stil.naslov}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Botun,
    borderColor: Boje.OkvirBotuna,
    borderWidth: 4,
    width: 250,
    height: 40,
    borderRadius: 10,
    opacity: 0.99,
    elevation: 3
  },
  naslov:{
    color: Boje.Primarna,
    fontFamily: "castellar"
  }
});

export default Tipka;