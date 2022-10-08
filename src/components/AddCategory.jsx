import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => { /* extrae el valor del arrglo target */
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {                /* evita el refresh del navegador del formulario */
        event.preventDefault();                    /* evita el refresh del navegador del formulario */
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}