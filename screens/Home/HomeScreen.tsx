import { useEffect, useRef, useState } from 'react';
import type { RootStackParamList } from '../../navigation/MainNavigation';
import type { StackScreenProps } from '@react-navigation/stack';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import Title from '../../components/Title';
import UserStory from '../../components/UserStory';
import UserPost from '../../components/UserPost';
import { getFontFamily } from '../../assets/fonts/helper';
import { USER_STORIES, UserStoryType } from '../../data/userStories';
import { USER_POSTS, UserPostType } from '../../data/userPosts';

const PAGE_SIZE = 4;
const POSTS_PAGE_SIZE = 2;

const paginate = <T,>(data: T[], page: number, pageSize: number): T[] => {
  const startIndex = (page - 1) * pageSize;
  return data.slice(startIndex, startIndex + pageSize);
};

type Props = StackScreenProps<RootStackParamList>;

export const HomeScreen : React.FC<Props> = () => {
  const insets = useSafeAreaInsets();

  const [currentPage, setCurrentPage] = useState(1);
  const [userStoriesRenderData, setUserStoriesRenderData] = useState<
    UserStoryType[]
  >([]);
  const isFetchingRef = useRef(false);

  const [currentPostsPage, setCurrentPostsPage] = useState(1);
  const [userPostsRenderData, setUserPostsRenderData] = useState<
    UserPostType[]
  >([]);
  const isFetchingPostsRef = useRef(false);

  useEffect(() => {
    const initialData = paginate(USER_STORIES, 1, PAGE_SIZE);
    setUserStoriesRenderData(initialData);

    const initialPosts = paginate(USER_POSTS, 1, POSTS_PAGE_SIZE);
    setUserPostsRenderData(initialPosts);
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

  const handleFetchMorePosts = () => {
    if (
      isFetchingPostsRef.current ||
      userPostsRenderData.length >= USER_POSTS.length
    ) {
      return;
    }

    const nextPage = currentPostsPage + 1;
    const contentToAppend = paginate(USER_POSTS, nextPage, POSTS_PAGE_SIZE);

    if (contentToAppend.length > 0) {
      isFetchingPostsRef.current = true;
      setUserPostsRenderData(prevData => [...prevData, ...contentToAppend]);
      setCurrentPostsPage(nextPage);
      isFetchingPostsRef.current = false;
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
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Title>Let's Explore</Title>
              <TouchableOpacity style={styles.iconContainer} >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size={20}
                  color="#022150"
                />
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
          </>
        }
        data={userPostsRenderData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <UserPost {...item} />}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={handleFetchMorePosts}
      />
    </View>
  );
};

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

export default HomeScreen;