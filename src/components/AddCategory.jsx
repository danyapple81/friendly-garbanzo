import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('One Punch');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit }>
            <input type="text" placeholder="Buscar gifs" value={ inputValue } onChange={ onInputChange } />
        </form>
    );
}

