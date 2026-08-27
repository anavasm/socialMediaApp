import { useEffect, useRef, useState } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Title from './components/Title';
import UserStory from './components/UserStory';
import { getFontFamily } from './assets/fonts/helper';
import { USER_STORIES } from './data/userStories';
import type { UserStoryType } from './data/userStories';

const PAGE_SIZE = 4;

const paginate = (data: UserStoryType[], page: number, pageSize: number) => {
  const startIndex = (page - 1) * pageSize;
  return data.slice(startIndex, startIndex + pageSize);
};

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
  const [currentPage, setCurrentPage] = useState(1);
  const [userStoriesRenderData, setUserStoriesRenderData] = useState<
    UserStoryType[]
  >([]);
  // Synchronous guard flag to prevent multiple triggers on scroll without triggering re-renders
  const isFetchingRef = useRef(false);

  useEffect(() => {
    const initialData = paginate(USER_STORIES, 1, PAGE_SIZE);
    setUserStoriesRenderData(initialData);
  }, []);

  const handleFetchMoreStories = () => {
    if (
      isFetchingRef.current ||
      userStoriesRenderData.length >= USER_STORIES.length
    ) {
      return;
    }

    const nextPage = currentPage + 1;
    const contentToAppend = paginate(USER_STORIES, nextPage, PAGE_SIZE);

    if (contentToAppend.length > 0) {
      isFetchingRef.current = true;
      setUserStoriesRenderData(prevData => [...prevData, ...contentToAppend]);
      setCurrentPage(nextPage);
      isFetchingRef.current = false;
    }
  };

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
          horizontal
          showsHorizontalScrollIndicator={false}
          data={userStoriesRenderData}
          renderItem={({ item }) => <UserStory {...item} />}
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={handleFetchMoreStories}
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
    marginTop: 20,
  },
  storiesListContent: {
    paddingHorizontal: 28,
  },
});

export default App;
