import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SettingsContext } from '../context/SettingsContext';

const availableCategories = [
  'General',
  'World',
  'Nation',
  'Business',
  'Technology',
  'Entertainment',
  'Sports',
  'Science',
  'Health',
];

const SettingsScreen = () => {
  const {
  temperatureUnit,
  setTemperatureUnit,
} = useContext(SettingsContext);

const [selectedCategories, setSelectedCategories] = useState(['General']);


  const toggleTemperatureUnit = () => {
    setTemperatureUnit(temperatureUnit === 'C' ? 'F' : 'C');
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category.toLowerCase())) {
      setSelectedCategories(
        selectedCategories.filter((c) => c !== category.toLowerCase())
      );
    } else {
      setSelectedCategories([...selectedCategories, category.toLowerCase()]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings ⚙️</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Temperature Unit 🌡️ </Text>
        <View style={styles.toggleContainer}>
          <Text
            style={[
              styles.unitLabel,
              temperatureUnit === 'C' && styles.unitLabelSelected,
            ]}
          >
            Celsius
          </Text>

          <Switch
            trackColor={{ false: '#ccc', true: '#4682B4' }}
            thumbColor="#fff"
            ios_backgroundColor="#4682B4"
            onValueChange={toggleTemperatureUnit}
            value={temperatureUnit === 'F'}
          />

          <Text
            style={[
              styles.unitLabel,
              temperatureUnit === 'F' && styles.unitLabelSelected,
            ]}
          >
            Fahrenheit
          </Text>
        </View>
      </View>

      <Text style={[styles.label, { marginTop: 30, marginBottom: 10 }]}>
        News Categories
      </Text>

      <FlatList
        data={availableCategories}
        keyExtractor={(item) => item.toLowerCase()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => {
          const isSelected = selectedCategories.includes(item.toLowerCase());
          return (
            <TouchableOpacity
              onPress={() => toggleCategory(item)}
              style={[styles.categoryItem, isSelected && styles.categorySelected]}
              activeOpacity={0.8}
            >
              <Text style={[styles.categoryText, isSelected && styles.categoryTextSelected]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 40,
    backgroundColor: '#f9fafd',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 7,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
  },
  toggleContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unitLabel: {
    fontSize: 16,
    color: '#6b7280',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  unitLabelSelected: {
    color: '#4682B4',
    fontWeight: '700',
  },
  categoryItem: {
    flex: 0.48,
    paddingVertical: 14,
    marginVertical: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  categorySelected: {
    backgroundColor: '#4682B4',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  categoryTextSelected: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default SettingsScreen;
