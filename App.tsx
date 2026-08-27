import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Title from './components/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { getFontFamily } from './assets/fonts/helper';
import UserStory from './components/UserStory';
import { USER_STORIES } from './data/userStories';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
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
      <View style={styles.header}>
        <Title>Let's Explore</Title>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color="#022150" />
          <View style={styles.messageNumberContainer}>
            <Text style={styles.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.userStoriesContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={USER_STORIES}
          renderItem={({ item }) => <UserStory {...item} />}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.storiesListContent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
  },
  iconContainer: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    width: 14,
    height: 14,
    borderRadius: 7,
    position: 'absolute',
    right: 8,
    top: 8,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 8,
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoriesContainer: {
    marginTop: 20
  },
  storiesListContent: {
    paddingHorizontal: 28,
  },
});

export default App;
