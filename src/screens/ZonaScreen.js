import React from 'react';
import { View, Text } from 'react-native';

const ZonaScreen = ({ route }) => {
  const { zona } = route.params;

  return (
    <View>
      <Text>Actividades en la Zona: {zona}</Text>
      {/* Agrega más contenido de actividades según sea necesario */}
    </View>
  );
};

export default ZonaScreen;