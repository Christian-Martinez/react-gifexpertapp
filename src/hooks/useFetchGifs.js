import { useState, useEffect } from 'react';
import { GetGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    GetGifs(category).then((imgs) =>
      setState({
        data: imgs,
        loading: false,
      })
    );
  }, [category]); //se ejecuta el useEffect cada q se actualize category

  return state;
};
