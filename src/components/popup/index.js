import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Modal} from 'react-native';

export default function Popup({title, showing}) {
  return <View style={style.container} />;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.2,
  },
});
