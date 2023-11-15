import React from 'react';
import { View, Text, Button } from 'react-native';

const MenuScreen = ({ navigation }) => {
  const handleZona = (zona) => {
    navigation.navigate('Zona', { zona });
  };

  return (
    <View>
      <Text>Selecciona una Zona en Madrid</Text>

      <Button title="Zona Centro" onPress={() => handleZona('Centro')} />
      <Button title="Zona Chamberí" onPress={() => handleZona('Chamberí')} />
      {/* Agregar más botones para otras zonas de Madrid según sea necesario */}
    </View>
  );
};

export default MenuScreen;