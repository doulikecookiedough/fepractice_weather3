import { useState, useEffect } from 'react';
import { API_KEY } from '../constants.js';

/**
 * Create variable to use API_Key in createApiUrl()
 */ 
const getKey = API_KEY

/**
 * This variable forms the endpoint to retrieve data from OpenWeatherMap API
 */ 
const createApiUrl = (city = 'Vancouver', units = 'metric', API_KEY = getKey) => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${API_KEY}`;
}

/**
 * This function returns true when the order index of the passed parameter is divisible by 8
 */
const segmentIndex = (_, i) => i % 8 === 0;

/**
 * This custom hook pings OpenWeatherAPI (https://openweathermap.org/) to retrieve weather data
 * The 5-Day weather forecast comes with 40 data points, split by 3 hour segments
 * @param {*} city 
 * @param {*} units standard (Kelvin), metric (C), imperial(F)
 * @returns 
 */
function useWeatherData(city, units) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoading] = useState(true);
    const [items, setItems] = useState();

    const endpointURL = createApiUrl(city, units)

    useEffect(() => {
        fetch(endpointURL)
          .then(res => res.json())
          .then(
            (data) => {
                // Format data, start by filtering for 5 days
                const weatherArray = data.list.filter(segmentIndex).map((k) => {
                    const { dt_txt, main, weather } = k;
                    // Format day text (ex. Tues)
                    const date = new Date(dt_txt).toLocaleDateString('en-US', {
                      weekday: 'short',
                    });
                    // Format icon value (ex. 11)
                    const icon = weather[0].icon.slice(0, -1);
                    // Format min temp
                    const min = main.temp_min.toFixed();
                    // Format max temp
                    const max = main.temp_max.toFixed();
                    
                    return { date, icon, min, max };
                });

                setIsLoading(false);
                // Set state of items
                setItems(weatherArray);
                // console.log(weatherArray)
            },
            (error) => {
                setIsLoading(false);
                setError(error);
            }
          )
      }, [endpointURL])

      return {
        items,
        loading: isLoaded,
        error,
      };
}
  
export { useWeatherData };
  