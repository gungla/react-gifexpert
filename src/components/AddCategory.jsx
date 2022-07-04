import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, SetInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        SetInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        //setCategories( categories => [ inputValue, ...categories ]);
        SetInputValue('');
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
