import React from 'react';
import { StyleSheet, ScrollView, Image, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const imageWidth = (width - 40 - 15) / 2;

const ProfileTabContent: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {[...Array(8)].map((_, index) => (
          <Image
            key={index}
            accessibilityRole="image"
            accessibilityLabel={`Grid photo ${index + 1}`}
            source={require('../assets/images/default_post.png')}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  image: {
    width: imageWidth,
    height: 110,
    marginBottom: 15,
    borderRadius: 10,
  },
});

export default ProfileTabContent;