import slugify from 'slugify';
import useFetch from './useFetch';

const useLocalData = (url) => {

  const key = slugify(url);

  const fromLocalStorage = window.localStorage.getItem(key);

  const dataFromLocalStorage = fromLocalStorage ? JSON.parse(fromLocalStorage) : null;

  const { data, loading } = useFetch(url);

  if (data) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  return {
    data: data || dataFromLocalStorage,
    loading: loading && !dataFromLocalStorage
  };
};

export default useLocalData;