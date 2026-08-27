import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

interface UserProfileImageProps {
  profileImage: ImageSourcePropType;
  imageDimensions?: number;
}

const UserProfileImage: React.FC<UserProfileImageProps> = ({
  profileImage,
  imageDimensions = 65,
}) => {
  const containerSize = imageDimensions + 10;

  return (
    <View
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Image
        source={profileImage}
        style={{
          width: imageDimensions,
          height: imageDimensions,
          borderRadius: imageDimensions / 2,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#F35BAC',
    borderWidth: 2,
    padding: 3,
    borderRadius: 50,
  }
});

export default UserProfileImage;
