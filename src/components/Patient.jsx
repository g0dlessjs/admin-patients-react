import React from "react";
import Swal from "sweetalert2";

const Patient = ({ patient, setPatient, eliminatePatient }) => {
  const { name, sex, owner, email, date, symptoms, id } = patient;

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto.!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Bórrarlo!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Borrado!", "el paciente ha sido eliminado.", "warning");
        eliminatePatient(id);
      }
    });
  };

  return (
    <div
      className={`${
        sex === "macho" ? "bg-blue-200" : "bg-pink-200"
      } mx-3 mb-3 shadow-md px-5 py-10 rounded-xl`}
    >
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case text-2xl">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sexo: {""}
        <span className="font-normal normal-case">{sex}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: {""}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          onClick={() => setPatient(patient)}
          className="py-2 px-10 bg-indigo-600 h:bg-indigo-700 text-white uppercase font-bold rounded-lg "
          type="button"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="py-2 px-10 bg-red-600 h:bg-red-700 text-white uppercase font-bold rounded-lg"
          type="button"
        >
          Eliminar
        </button>
        {/* <button
          
          className="py-2 px-10 bg-green-600 h:bg-green-700 text-white uppercase font-bold rounded-lg"
          type="button"
        >
          Terminar
        </button> */}
      </div>
    </div>
  );
};

export default Patient;
