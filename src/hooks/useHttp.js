import { useState, useCallback} from 'react'
import axios from 'axios';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null)

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
      setResponse(data)
      return data
    } catch (err) {
      setError(err.response.data.message || err.message || "Something went wrong!");
      setResponse(err.response.data);
    } finally {
      setIsLoading(false);
    }
    
  }, []);
  return {
    isLoading,
    error,
    response,
    sendRequest
  }
}

export default useHttp
