import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0 p-3 mb-2 bg-dark text-white">
          <div className="col-md-8 form-banner ">
            <img
              src="./assets/images/banner2.jpg"
              class="rounded-end-circle"
              alt="registerImage"
            />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Registration"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
