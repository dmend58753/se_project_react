// Weather condition images mapping
import dayClear from '../assets/Day/day.png';
import dayCloudy from '../assets/Day/cloudy.png';
import dayRainy from '../assets/Day/rainy.png';
import daySnowy from '../assets/Day/snowy.png';
import dayFog from '../assets/Day/fog.png';
import dayStormy from '../assets/Day/stormy.png';
import dayDefault from '../assets/Day/default.png';
import nightClear from '../assets/night/clear.png';
import nightCloudy from '../assets/night/cloud.png';
import nightRainy from '../assets/night/rain.png';
import nightSnowy from '../assets/night/snow.png';
import nightFog from '../assets/night/fog.png';
import nightStormy from '../assets/night/stormy.png';
import nightDefault from '../assets/night/default.png';

const weatherConditionImages = {
  day: {
    clear: dayClear,
    cloudy: dayCloudy,
    rainy: dayRainy,
    snowy: daySnowy,
    fog: dayFog,
    stormy: dayStormy,
    default: dayDefault,
  },
  night: {
    clear: nightClear,
    cloudy: nightCloudy,
    rainy: nightRainy,
    snowy: nightSnowy,
    fog: nightFog,
    stormy: nightStormy,
    default: nightDefault,
  }
};

export default weatherConditionImages;
// src/utils/constants.js

export const API_KEY = "9a725a18868590d172c104cca80b618a"; 

export const coordinates = {
  lat: 28.585559,    
  lon: -81.212872  
};