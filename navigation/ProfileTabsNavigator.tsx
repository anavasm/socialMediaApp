import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileTabTitle from '../components/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent';

export const TABS = {
  PHOTOS: 'Photos',
  VIDEOS: 'Videos',
  SAVED: 'Saved',
} as const;

export type RootMaterialTopTabParamList = {
  [TABS.PHOTOS]: undefined;
  [TABS.VIDEOS]: undefined;
  [TABS.SAVED]: undefined;
};

const ProfileTabs = createMaterialTopTabNavigator<RootMaterialTopTabParamList>();

const renderPhotosTabTitle = ({ focused }: { focused: boolean }) => (
  <ProfileTabTitle title={TABS.PHOTOS} isFocused={focused} />
);

const renderVideosTabTitle = ({ focused }: { focused: boolean }) => (
  <ProfileTabTitle title={TABS.VIDEOS} isFocused={focused} />
);

const renderSavedTabTitle = ({ focused }: { focused: boolean }) => (
  <ProfileTabTitle title={TABS.SAVED} isFocused={focused} />
);

export const ProfileTabsNavigator = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: 'transparent' },
        tabBarStyle: { zIndex: 0 },
      }}
    >
      <ProfileTabs.Screen
        name={TABS.PHOTOS}
        options={{ tabBarLabel: renderPhotosTabTitle }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={TABS.VIDEOS}
        options={{ tabBarLabel: renderVideosTabTitle }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={TABS.SAVED}
        options={{ tabBarLabel: renderSavedTabTitle }}
        component={ProfileTabContent}
      />
    </ProfileTabs.Navigator>
  );
};

export default ProfileTabsNavigator;