const interceptors = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `KakaoAK ${process.env.REACT_APP_API_KEY}`;
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  );

  return instance;
};

export default interceptors;
