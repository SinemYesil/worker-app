import {useState, useEffect} from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";
import React from "react";

function App() {
    const[workers, setWorkers] = useState([]);
    useEffect(() => {
        localStorage.setItem("workers",JSON.stringify(workers));
    })
    return (
        <React.Fragment>
            <h1 className="text-center mt-6 text-3xl">Maaş Otomasyonu</h1>
            <AddWorker setWorkers={setWorkers} />
            <WorkerList workers={workers} setWorkers={setWorkers} />
        </React.Fragment>
    );
}

export default App;
