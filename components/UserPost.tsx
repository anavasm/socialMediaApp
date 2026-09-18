import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { UserPostType } from '../data/userPosts';
import UserProfileImage from './UserProfileImage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faMessage, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { getFontFamily } from '../assets/fonts/helper';

const UserPost: React.FC<UserPostType> = ({
  firstName,
  lastName,
  location,
  likes,
  comments,
  bookmarks,
  image,
  profileImage,
}) => {
  return (
    <View style={styles.container} accessible={true} accessibilityLabel={`Post by ${firstName} ${lastName}`}>
      <View style={styles.user}>
        <View style={styles.userContainer}>
          <UserProfileImage profileImage={profileImage} imageDimensions={48} />
          <View style={styles.userTextContainer}>
            <Text style={styles.userName} accessibilityRole="text">
              {firstName} {lastName}
            </Text>
            <Text style={styles.location} accessibilityRole="text">{location}</Text>
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} size={24} color={'#79869F'} testID="post-menu-icon" />
      </View>
      <View style={styles.postImage}>
        <Image source={image} accessible={true} accessibilityLabel={`Post image by ${firstName} ${lastName}`} />
      </View>
      <View style={styles.postStatsContainer} accessibilityLabel="Post statistics">
        <View style={styles.statItem} accessible={true} accessibilityLabel={`${likes} likes`}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={styles.statText}>{likes}</Text>
        </View>
        <View style={styles.statItemWithMargin} accessible={true} accessibilityLabel={`${comments} comments`}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={styles.statText}>{comments}</Text>
        </View>
        <View style={styles.statItemWithMargin} accessible={true} accessibilityLabel={`${bookmarks} bookmarks`}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={styles.statText}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  userName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
  postStatsContainer: {
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItemWithMargin: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 27,
  },
  statText: {
    marginLeft: 3,
    color: '#79869F',
  },
});

export default UserPost;