import { useState, useEffect } from 'react';
// React Docs ~ useState
// The only argument to the useState() Hook is the initial state.
// Unlike with classes, the state doesn’t have to be an object.
// We can keep a number or a string if that’s all we need
// useState returns a pair of values: the current state and a function that updates it.
// This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState
// React Docs ~ useEffect
// You can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
// By default, it runs both after the first render and after every update.
import { API_KEY } from '../constants.js';

// Create variable to use API_Key in createApiUrl()
const getKey = API_KEY

/**
 * Given the name of a city and an optional options object, produce a string
 * of the appropiate OpenWeatherMap API url to get the desired data.
 */
const createApiUrl = (city = 'Vancouver', units = 'standard', API_KEY = getKey) => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${API_KEY}`;
}

function UseWeatherData() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(createApiUrl())
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                console.log(`There is an error with your API call: ${error}`)
                setIsLoaded(true);
                setError(error);
            }
          )
      }, [])
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div><p>TBD</p></div>
        );
      }
}
  
export { UseWeatherData };
  