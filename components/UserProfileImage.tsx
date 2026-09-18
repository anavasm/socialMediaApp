import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

interface UserProfileImageProps {
  profileImage: ImageSourcePropType;
  imageDimensions?: number;
  accessibilityLabel?: string;
}

const UserProfileImage: React.FC<UserProfileImageProps> = ({
  profileImage,
  imageDimensions = 65,
  accessibilityLabel = 'User profile image',
}) => {
  const containerSize = imageDimensions + 10;

return (
    <View
      testID="user-profile-image-container"
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
        testID="user-profile-image"
        accessibilityRole="image"
        accessibilityLabel={accessibilityLabel}
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
