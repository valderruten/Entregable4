import axios from "axios";
import { useState } from "react";
import swal from "sweetalert2";

const useCrud = () => {
  const [users, setUsers] = useState();

  const getAllUsers = () => {
    const URL = "https://users-crud.academlo.tech/users/";
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const createNewUser = (data) => {
    const URL = "https://users-crud.academlo.tech/users/";
    axios
      .post(URL, data)
      .then(
        (res) => getAllUsers(),
        swal.fire({
          title: "Successful registration!",
          text: "The user was successfully registered!",
          icon: "success",
          button: "OK",
        })
      )
      .catch((err) => console.log(err));
  };

  const deleteUserById = (id) => {
    swal.fire({title: " ❌Delete user❌ ",
    text: "¿Delete?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: "Yes, Delete!",
    cancelButtonText: "No!",
}).then(resultado => {
  if (resultado.value) {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
     
    axios
      .delete(URL)
      .then(() => getAllUsers(),swal.fire(
        'Deleted!',
        'This user has been deleted.',
        'success'
      ))
      .catch((err) => console.log(err));
      
  }else{swal.fire({
    icon:"error",
    title:"Action canceled!",
    text:"This user has not been deleted!"}
  )}})};

  const updateUserById = (id, data) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .put(URL, data)
      .then(
        (res) => getAllUsers(),
        swal.fire({
          title: "Updating Successful!",
          text: "The user was successfully updated!",
          icon: "success",
          button: "OK",
        })
      )
      .catch((err) => console.log(err));
  };
  return { users, createNewUser, getAllUsers, deleteUserById, updateUserById };
};

export default useCrud;
