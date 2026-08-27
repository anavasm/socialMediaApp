import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getFontFamily } from '../assets/fonts/helper';
import UserProfileImage from './UserProfileImage';
import { UserStoryType } from '../data/userStories';

const UserStory: React.FC<UserStoryType> = ({ firstName, profileImage }) => {
    return (
        <View style={styles.container}>
            <UserProfileImage profileImage={profileImage} imageDimensions={65}/>
            <Text style={styles.firstName}>{firstName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        alignItems: 'center',
    },
    firstName: {
        fontFamily: getFontFamily('Inter', '500'),
        fontSize: 14,
        color: '#022150',
        marginTop: 8,
        textAlign: 'center',
    },
});

export default UserStory;