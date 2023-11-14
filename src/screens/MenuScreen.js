// src/screens/MenuScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Menú de la Aplicación</Text>

      {/* Botón de Reserva para la Opción 1 */}
      <Button
        title="Reservar Opción 1"
        onPress={() => handleReserva('Opción 1')}
      />

      {/* Botón de Reserva para la Opción 2 */}
      <Button
        title="Reservar Opción 2"
        onPress={() => handleReserva('Opción 2')}
      />

      {/* Puedes agregar más botones de reserva para otras opciones aquí */}
    </View>
  );

  // Función para manejar la reserva
  const handleReserva = (opcion) => {
    // Lógica de reserva, por ejemplo, navegación a una pantalla de reserva
    navigation.navigate('Reserva', { opcion });
  };
};

export default MenuScreen;
