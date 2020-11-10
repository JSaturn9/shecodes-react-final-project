import './App.css';
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
    
    <Weather defaultCity="New York" />
    
     <footer>
       This project was coded by Joanna Saturn and is open-sourced on {""}
     <a href="https://github.com/JSaturn9/shecodes-react-final-project" target= "_blank">GitHub</a> 
     </footer>
     </div>
    </div>
  );
}


