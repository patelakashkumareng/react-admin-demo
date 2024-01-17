import { useState, useCallback} from 'react'
import axios from 'axios';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (config) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.request({
        url: config.url,
        method: config.method ? config.method : 'GET',
        headers: config.headers ? config.headers : {},
        data: config.body ? JSON.stringify(config.body) : null
      }
      );

      const data = response.data;
      return data
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
    
  }, []);
  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp
