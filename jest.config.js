module.exports = {
  setupFiles: ['./setupTests.js', 'jest-canvas-mock'],
  setupFilesAfterEnv: [
    'jest-expect-subclass',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/test/mocks/styleMock.js',
    '\\.(gif|ttf|eot|svg|png|mp3|ogg|wav)$': '<rootDir>/test/mocks/fileMock.js',
  },
};
