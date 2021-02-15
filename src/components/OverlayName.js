import React from "react"

const OverlayName = ({ credentials, setCredentials, inputName, setInputName }) => {
    const inputTextHandler = (e) =>{
        setInputName(e.target.value);
    }
    const setNameHandler = (e) =>{
        e.preventDefault();
        if(inputName!=='')
            setCredentials({name: inputName , valid: 1})
        else
            window.alert("Please enter name to proceed.")
    }

    return (
        <div className={`getNameContainer ${(credentials.valid === 1) ? 'getNameContainerIfNameExists' : ''}`}>
            <h1>Get Started.</h1>
            <span>Enter your name.</span>
            <form>
                <input onChange={inputTextHandler} maxLength="12" type="text"/>
                <button onClick={setNameHandler}>Go</button>
            </form>
        </div>
    )
}

export default OverlayName
