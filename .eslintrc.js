module.exports = {
  root: true,
  extends: ['prettier', 'prettier/react', '@react-native-community'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', {extensions: ['.js', '.jsx']}],
    'import/prefer-default-export': 'off',
  },
};
