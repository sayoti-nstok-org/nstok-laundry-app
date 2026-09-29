import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@nstok/ui';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to nstok-laundry-app</Text>
      <Button label="Get Started" variant="primary" />
    </View>
  );
}
