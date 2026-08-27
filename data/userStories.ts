import { ImageSourcePropType } from 'react-native';

export interface UserStoryType {
  id: number;
  firstName: string;
  profileImage: ImageSourcePropType;
}

export const USER_STORIES: UserStoryType[] = [
  { id: 1, firstName: 'Joseph', profileImage: require('../assets/images/default_profile.png') },
  { id: 2, firstName: 'Angel', profileImage: require('../assets/images/default_profile.png') },
  { id: 3, firstName: 'White', profileImage: require('../assets/images/default_profile.png') },
  { id: 4, firstName: 'Olivier', profileImage: require('../assets/images/default_profile.png') },
  { id: 5, firstName: 'Nata', profileImage: require('../assets/images/default_profile.png') },
  { id: 6, firstName: 'Nicolas', profileImage: require('../assets/images/default_profile.png') },
  { id: 7, firstName: 'Nino', profileImage: require('../assets/images/default_profile.png') },
  { id: 8, firstName: 'Nana', profileImage: require('../assets/images/default_profile.png') },
  { id: 9, firstName: 'Adam', profileImage: require('../assets/images/default_profile.png') },
];