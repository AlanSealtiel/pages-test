import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['Batman'])

    const handleAdd = () => {
        setCategories([...categories, 'ASAM']);
    }

    return (
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
