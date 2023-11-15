import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';

const FechaMenuScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleReserva = () => {
    // Lógica de reserva basada en la fecha seleccionada
    navigation.navigate('Reserva', { fecha: selectedDate });
  };

  return (
    <View>
      <Text>Menú por Fecha</Text>

      {/* DatePicker para seleccionar la fecha */}
      <DatePicker
        style={{ width: 200 }}
        date={selectedDate}
        mode="date"
        placeholder="Selecciona una fecha"
        format="YYYY-MM-DD"
        minDate="2023-01-01"
        maxDate="2023-12-31"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        onDateChange={(date) => setSelectedDate(date)}
      />

      {/* Botón de Reserva */}
      <Button
        title="Reservar"
        onPress={handleReserva}
      />
    </View>
  );
};

export default FechaMenuScreen;