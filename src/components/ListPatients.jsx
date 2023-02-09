import Patient from "./Patient";

const ListPatients = ({ patients, setPatient, eliminatePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="mt-3 text-center mb-10">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">
              Pacientes y Consultas
            </span>
          </p>
          <div className="md: h-screen overflow-y-scroll">
            {patients.map((patient) => (
              <Patient
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                eliminatePatient={eliminatePatient}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="mt-3 text-center mb-10">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListPatients;
