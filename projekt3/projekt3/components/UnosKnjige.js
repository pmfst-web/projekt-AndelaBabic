import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Boje from '../constants/Boje'

const UnosKnjige = (props) => {
  return(
    <TextInput {...props} style={{...stil.unos, ...props.style}} />
  );
};

const stil = StyleSheet.create({
  unos:{
    height: 30,
    marginVertical: 10,
    borderBottomColor: 'darkGreen',
    borderBottomWidth: 1
  }
});

export default UnosKnjige;