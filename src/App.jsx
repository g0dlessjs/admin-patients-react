import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainForm from "./components/MainForm";
import ListPatients from "./components/ListPatients";

function App() {
  const [patients, setPatients] = useState(() => JSON.parse(localStorage.getItem('patients')) || []);
  const [patient, setPatient] = useState({});


  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const eliminatePatient = (id) => {
    const patientsUpdated = patients.filter((patient) => patient.id !== id);
    setPatients(patientsUpdated);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <MainForm
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <ListPatients
          patients={patients}
          setPatient={setPatient}
          eliminatePatient={eliminatePatient}
        />
      </div>
    </div>
  );
}

export default App;
