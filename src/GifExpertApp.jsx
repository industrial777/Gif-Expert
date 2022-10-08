import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;               /* si la categoria no existe salta */
        setCategories([ newCategory, ...categories ]);                /* si la categoria no existe insserta */
    }
    

    return (
        <>
            <h1>GifExpertApp</h1>
    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }
        </>
    )
}