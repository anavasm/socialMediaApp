import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import ProfileTabsNavigator from '../../navigation/ProfileTabsNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { getFontFamily } from '../../assets/fonts/helper';
import { Routes } from '../../navigation/routes';
import { RootStackParamList } from '../../navigation/MainNavigation';

type Props = DrawerScreenProps<RootStackParamList, Routes.Profile>;

const ProfileScreen: React.FC<Props> = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <View style={styles.profileImageContent}>
            <Image
              source={require('../../assets/images/default_profile.png')}
              style={styles.profileImage}
            />
          </View>
        </View>
        <Text style={styles.userName}>Emmanuel Robertsen</Text>
        <View style={styles.statsContainer}>
          <View>
            <Text style={styles.statAmount}>45</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statDivider} />
          <View>
            <Text style={styles.statAmount}>30M</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statDivider} />
          <View>
            <Text style={styles.statAmount}>100</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
        </View>
        <View style={styles.tabContainer}>
          <ProfileTabsNavigator />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    padding: 4,
    borderRadius: 55,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  userName: {
    fontSize: 20,
    fontFamily: getFontFamily('Inter', '600'),
    textAlign: 'center',
    marginTop: 20,
  },
  statAmount: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 20,
    color: '#022150',
    textAlign: 'center',
  },
  statLabel: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 16,
    color: '#79869F',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E9EFF1',
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#E9EFF1',
  },
  tabContainer: {
    flex: 1,
    minHeight: 400
  }
});

export default ProfileScreen;
