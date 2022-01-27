import './App.css';
import {useEffect, useState} from "react"
import Form from './components/Form';

function App() {
  const [api, setapi] = useState(null);

  useEffect(() => {
    const url = "https://www.gov.uk/bank-holidays.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setapi(json)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="container">
      
      <h1 className="text-center">
        Filter
      </h1>
      
      {api ? <Form data = {api}/> : "Error in Fetching"}

    </div>
  );
}

export default App;
