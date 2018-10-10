module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true
  },
  plugins: ['react', 'jsx-a11y', 'import', 'jest'],
  globals: {
    shallow: false,
    render: false,
    mount: false
  },
  rules: {
    'react/jsx-filename-extension': [2, {
      extensions: ['.js']
    }],
    'no-unused-expressions': [2, {
      allowTaggedTemplates: true
    }]
  }
};
