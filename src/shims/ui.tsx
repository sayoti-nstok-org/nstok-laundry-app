import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onPress?: () => void;
}

export function Button({ label, variant = 'primary', onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: variant === 'primary' ? '#06B6D4' : '#1F2937',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 4
      }}
    >
      <Text style={{ color: variant === 'primary' ? '#090D16' : '#FFFFFF', fontWeight: 'bold' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ backgroundColor: '#111827', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#374151' }}>
      {children}
    </View>
  );
}

export function SearchInput({ placeholder }: { placeholder?: string }) {
  return null;
}

export function DataTable({ data }: { data?: any }) {
  return null;
}
