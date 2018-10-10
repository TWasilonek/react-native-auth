import { AsyncStorage } from 'react-native';

const APP_PREFIX = '@REACT_NATIVE_AUTH';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(`${APP_PREFIX}:${key}`, value);
    console.log('user saved', await AsyncStorage.getItem(`${APP_PREFIX}:${key}`));
  } catch (error) {
    console.log('Error saving data', error);
  }
};

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(`${APP_PREFIX}:${key}`);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    console.log('Error retriving data', error);
    return null;
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(`${APP_PREFIX}:${key}`);
  } catch (error) {
    console.log('Error removing data', error);
  }
};

export default {};
