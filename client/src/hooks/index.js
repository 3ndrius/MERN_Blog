import React, { useState, useEffect } from "react";
import API from "../helpers/API";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await API.get("/posts")
        setData(response);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return { data, isLoading };
};


// export const useAuthFetch = (name, email, password) => {
//     const [granted, setGranted] = useState(false)

//     useEffect(() => {
//         const tryAuth = async () => {
//             try {
//               const config = { headers: { "Content-Type": "application/json" } };
//               const body = { name, email, password };
//               const response = await API.post("/register", body, config) 
//             } catch (e) {
//                 console.log("Error", e)
//             }
//         };
//         tryAuth();
//     }, [])
//     return {granted};
// }
