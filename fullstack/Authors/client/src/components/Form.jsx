import React, { useState } from "react";

const Form = (props) => {
  const { initialName, errors, onSubmitProp } = props;
  const [name, setName] = useState(initialName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProp({ name });
    setName(initialName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{width: "400px"}} className="mx-auto">
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className='form-control mt-3' placeholder="Enter name"/>
        { errors["name"] ? 
            <p style={{ color: "red" }} className="mt-3"> {errors["name"]} </p>
            :""
          }
        <button type="submit" className="btn btn-success mt-3">Submit</button>
      </form>
    </div>
  );
};

export default Form;
