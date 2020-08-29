import { useState, useEffect } from "react";
import API from "../helpers/API";

export const useFetch = (postId="") => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await API.get(`/posts/${postId}`)
        setResponse(res);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return { response, isLoading };
};


