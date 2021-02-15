import React, {useState, useEffect} from "react"
import OverlayName from "./components/OverlayName"
import Header from "./components/Header"
import TodosSection from "./components/TodosSection"
export default function App() {
  const [inputText, setInputText] = useState("");
  const [inputName, setInputName] = useState("");
  const [todos, setTodos] = useState([]);
  const [credentials, setCredentials] = useState([]);
  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    saveLocal();
  }, [todos, credentials]);

  const saveLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("credentials", JSON.stringify(credentials));
  };

  const getLocal = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos)
    }
    if(localStorage.getItem("credentials") === null){
      localStorage.setItem("credentials", JSON.stringify([]));
    }
    else{
      let localCreds = JSON.parse(localStorage.getItem("credentials"));
      setCredentials(localCreds);
    }
  }
  return (
    <div className="App">
        <OverlayName credentials={credentials} setCredentials={setCredentials} inputName={inputName} setInputName={setInputName} />
        <Header inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} credentials={credentials} />
        <TodosSection todos={todos} setTodos={setTodos} />
    </div>
  );
}
