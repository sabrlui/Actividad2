// src/screens/MenuScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const MenuScreen = ({ navigation }) => {
  // Función para manejar la opción
  const handleReserva = (opcion) => {
    // Lógica de reserva
    if (opcion === 'Opción 1') {
      // Navegar a una pantalla específica para la Opción 1
      navigation.navigate('FechaMenuScreen');
    } else {
      // Lógica de reserva para otras opciones
      // Puedes ajustar esto según tus necesidades
      navigation.navigate('ZonaMenuScreen');
      console.log(`Yendo a la opcion ${opcion}`);
    }
  };

  return (
    <View>
      <Text>Menú de la Aplicación</Text>

      {/* Botón de Reserva para la Opción 1 */}
      <Button
        title="Elegir por fecha"
        onPress={() => handleReserva('Opción 1')}
      />

      {/* Botón de Reserva para la Opción 2 */}
      <Button
        title="Elegir por zona"
        onPress={() => handleReserva('Opción 2')}
      />

    </View>
  );
};

export default MenuScreen;