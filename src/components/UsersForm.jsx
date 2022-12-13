import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/usersForm.css";

const UsersForm = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  setCloseForm,
}) => {
  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    if (updateInfo) {
      updateUserById(updateInfo.id, data);
      setUpdateInfo();
    } else {
      createNewUser(data);
    }
    setCloseForm(true);

    reset({
      email: "",
      last_name: "",
      first_name: "",
      password: "",
      birthday: "",
    });
  };
  let fecha=new Date()
  let anio=fecha.getFullYear()-18
  let month =fecha.getMonth()+1
  let fecMax=anio +'-'+  month  +'-'+fecha.getDate()
  
     return (
    
    <form autoComplete="off" className="form" onSubmit={handleSubmit(submit)}>
      <div onClick={() => {
        setCloseForm(true)
        setUpdateInfo()
        reset({
          email: "",
          last_name: "",
          first_name: "",
          password: "",
          birthday: "",
        });
        
      }} className="form__x">
        1❌1
      </div>
      <h2 className="form__title">
        {updateInfo ? "Update User" : "Create User"}
      </h2>
      <div className="form__div">
        <label className="form__label" htmlFor="first_name">
          First Name
        </label>
        <input
          className="form__input"
          type="text"
          id="first_name"
          {...register("first_name", {
            required: "First Name is required!!",
            minLength: {
              value: 3,
              message: "First Name must be at least 3 characters",
            },
            maxLength: {
              value: 15,
              message: "First Name can only have a maximum 15 characters",
            },
            pattern: {
              value: /^[A-Za-z ]+$/i,
              message: "only letters",
            },
          })}
        />
        <span className="form__span">{errors.first_name?.message}</span>
      </div>

      <div className="form__div">
        <label className="form__label" htmlFor="last_name">
          Last name
        </label>
        <input
          className="form__input"
          type="text"
          id="last_name"
          {...register("last_name", {
            required: "Last Name is required!!",
            minLength: {
              value: 3,
              message: "Last Name must be at least 3 characters",
            },
            maxLength: {
              value: 25,
              message: "Last Name can only have a maximum 25 characters",
            },
            pattern: {
              value: /^[A-Za-z ]+$/i,
              message: "only letters",
            },
          })}
        />
        <span className="form__span">{errors.last_name?.message}</span>
      </div>

      <div className="form__div">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required!!",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
        />
        <span className="form__span">{errors.email?.message}</span>
      </div>

      <div className="form__div">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required!!",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        <span className="form__span">{errors.password?.message}</span>
      </div>

      <div className="form__div">
        <label className="form__label" htmlFor="birthday">
          Birthday
        </label>
        <input   
          className="form__input"
          type="date"   max={fecMax} 
          id="birthday"
          {...register("birthday", { required: true })}
        />
        
 
 
        {errors.birthday && (
          <span className="form__span">Date of Birth required!!</span>
        )}
      </div>
      <button className="form__btn">Submit</button> 
    </form>
    
  );
};
export default UsersForm;
