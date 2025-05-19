import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  ScrollView,
} from 'react-native';

const NewsCard = ({
  weather,
  news,
  getMoodLabel,
  getMoodStyle,
  openArticle,
}) => {
  return (
    <View style={styles.section}>
      <View style={styles.headingContainer}>
  <View style={styles.headingBar} />
  <Text style={styles.sectionTitle}>
    News Based on Weather Mood & Preferences
  </Text>
</View>


      <View style={[styles.moodTag, getMoodStyle(weather.current.temp_c)]}>
        <Text style={styles.moodText}>{getMoodLabel(weather.current.temp_c)}</Text>
      </View>

      <ScrollView style={{ marginTop: 10 }} showsVerticalScrollIndicator={false}>
        {news.map((item) => (
          <View key={item.url} style={styles.card}>
            {item.image ? (
              <Image source={{ uri: item.image }} style={styles.image} />
            ) : null}

            <Text style={styles.title}>{item.title}</Text>

            {item.description ? (
              <Text style={styles.description}>{item.description}</Text>
            ) : null}

            <Text style={styles.source}>{item.source.name}</Text>

            <TouchableOpacity
              onPress={() => openArticle(item.url)}
              style={styles.readMoreButton}
            >
              <Text style={styles.readMoreText}>Read More</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
    paddingHorizontal: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#333',
  },
  
  moodTag: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginBottom: 16,
  },
  moodText: {
    fontWeight: '600',
    color: '#000',
  },
  card: {
    backgroundColor: '#f0f8ff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 3,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#222',
  },
  description: {
    fontSize: 14,
    marginBottom: 6,
    color: '#444',
  },
  source: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#777',
  },
  readMoreButton: {
    marginTop: 8,
    alignSelf: 'flex-start',
    backgroundColor: '#4682B4',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 3,
  },
  readMoreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NewsCard;
