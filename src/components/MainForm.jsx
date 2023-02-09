import { useState, useEffect } from "react";
import Error from "./Error";
import Swal from 'sweetalert2'


const MainForm = ({ patients, setPatients, patient, setPatient }) => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [owner, setowner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setSex(patient.sex);
      setowner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);
    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, sex, owner, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const newPatient = {
      name,
      sex,
      owner,
      email,
      date,
      symptoms,
    };

    if (patient.id) {
      //Editando
      newPatient.id = patient.id;
      const patientsUpdated = patients.map((patientState) =>
        patientState.id === patient.id ? newPatient : patientState
      );
      setPatients(patientsUpdated);
      setPatient({});
      Swal.fire(
        'Paciente Editado!',
        'Presione Ok para continuar.',
        'success'
      )
    } else {
      //Nuevo Registro
      newPatient.id = generateId();
      setPatients([...patients, newPatient]);
      Swal.fire(
        'Paciente Agregado!',
        'Presione Ok para continuar.',
        'success'
      )
    }

    setName("");
    setSex("");
    setowner("");
    setEmail("");
    setDate("");
    setSymptoms("");
  };

  return (
    <div className="mx-3 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-3 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold"> Administralos</span>{" "}
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error>Todos los campos son obligatorios</Error>}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="name"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
            id="name"
            type="text"
            placeholder="Nombre de la mascota"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">
            Sexo de la Mascota
          </label>
          <select
            className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
            name="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="">-- Seleccione el Sexo --</option>
            <option value="hembra">Hembra</option>
            <option value="macho">Macho</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="owner"
          >
            Propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
            id="owner"
            type="text"
            placeholder="Nombre del propietario"
            value={owner}
            onChange={(e) => setowner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
            id="emil"
            type="email"
            placeholder="correo@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="date"
          >
            Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="symptoms"
          >
            Síntomas
          </label>
          <textarea
            id="symptoms"
            name="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={patient.id ? "Editar Paciente" : "Agregar Paciente"}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};

export default MainForm;
