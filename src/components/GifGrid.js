import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {
  //uso mi customHooks
  const { data: images, loading } = useFetchGifs(category);

  /* const [images, setImages] = useState([]);
  //se ejecuta cuando el componente es renderizado por primera vez
  //es igual al didMountComponent
  useEffect(() => {
    //GetGifs(category).then((img) => setImages(img));
    //si el primer argumento es pasado como el primer parametro es igual al de abajo
    GetGifs(category).then(setImages);
  }, [category]); //se ejecuta el useEffect cada q se actualize category
 */

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'> {category} </h3>
      {loading && <p className='animate__animated animate__flash'>Loading</p>}
      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
