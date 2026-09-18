module.exports = {
  preset: '@react-native/jest-preset',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|react-native-tab-view|react-native-safe-area-context|react-native-screens|@react-native-masked-view|react-native-gesture-handler|react-native-reanimated|react-native-pager-view|react-native-svg|@fortawesome|@testing-library)/)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp)$': '<rootDir>/__mocks__/fileMock.js',
  },
};