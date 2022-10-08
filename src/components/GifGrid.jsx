
 import { GifItem } from './GifItem';
 import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );      /* custom hook useFetchGifs, se crea un hook personalizado */
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )     /* {isLoading? (<h2>Cargando</h2>): null}   esta es otra forma */
            }            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={image.id}    /* la imagen debe ser unica por eso se exige colocar el key */
                            { ...image }   /* se manda el arrglo completo a GitItem */
                        />
                    ))
                }
                
            </div>
        </>
    )

}