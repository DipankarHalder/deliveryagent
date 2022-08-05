import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUri = 'https://dev-api.jucify.in';
const deliveryBaseUri = `${baseUri}/delivery-agent`;

export const ServicesManager = axios.create({
  baseURL: deliveryBaseUri,
  responseType: 'json',
  withCredentials: true,
});

export const defaultImage =
  'https://ui-avatars.com/api/?format=svg&size=250&background=283593&font-size=0.40&color=ffffff&name=';
export const accessBasedToken = async () => AsyncStorage.getItem('AccessToken');
