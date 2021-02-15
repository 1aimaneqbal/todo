import React from 'react'
const Header = ({ inputText, setInputText, todos, setTodos, credentials }) => {
    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    };
    const submitHandler = (e) =>{
        e.preventDefault();
        if(inputText!==""){
            setTodos([
                ...todos, 
                {text: inputText, completed: false, id: Math.random() * 1000 }
            ]);
        }
        else{
            window.alert("Cannnot add empty task.")
        }
        setInputText("");
    };
    return (
        <div>
            <div className="titleheader">
                <h1>{credentials.name}'s Todo List</h1>
            </div>
            <div className="formheader">
                <form>
                    <input value={inputText} onChange={inputTextHandler} maxLength="50" type="text" required />
                    <button onClick={submitHandler}>
                        <i className="far fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Header
