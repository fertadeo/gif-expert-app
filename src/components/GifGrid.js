import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItems } from './GifGridItems';


export const GifGrid = ({ category }) => {

   
    
    const { data:images, loading} = useFetchGifs( category ); 

    //  useEffect( () => {
    //     getGifs( category)
    //     .then( setImages); 
    // }, [category])

 

    return (

        <> 
        
            <h3> { category }</h3>

            { loading && <p className=" animate__animated animate__flash"> Loading</p> }
        <div className="grids  animate__animated animate__fadeIn">
        
            { 
            images.map( img => (
           <GifGridItems
            key={ img.id }
            {...img} />
            
            ))
            }
            
        
        </div>
        
        
        
        </>
    )
}
