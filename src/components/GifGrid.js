import React from 'react' // , { useState, useEffect }
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GiftGridItem } from './GiftGridItem';


export const GifGrid = ({category}) => {
    const {data, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="card animate__animated animate__flash">{category}</h3>
            {loading && <p>Loading...</p>}
            <div className="card-grid">
                {
                    data.map(img => 
                        <GiftGridItem 
                            key={img.id}
                            // img={img} 
                            {...img}
                        />
                    )
                }
            </div>
        </>
    )
}
