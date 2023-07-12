import React, { useState } from "react";

const Form = () => {
  const inialFormData = {
    name: "aa",
    email: "bb",
    password: "cc",
    terms: true,
  };
  const changeHandler = (e) => {
    console.log("change triggered", e.target.name);
  };

  const [formData, setFormData] = useState(inialFormData);

  return (
    <form>
      <div>
        <label htmlFor="name"> İsim ve Soyisim</label>
        <input
          onChange={changeHandler}
          type="text"
          name="name"
          value={formData.name}
        />
      </div>
      <div>
        <label htmlFor="email"> Eposta</label>
        <input
          onChange={changeHandler}
          type="email"
          name="email"
          value={formData.email}
        />
      </div>
      <div>
        <label htmlFor="password"> Şifre</label>
        <input
          onChange={changeHandler}
          type="password"
          name="password"
          value={formData.password}
        />
      </div>
      <div>
        <label htmlFor="terms"> Kullanım Şartları</label>
        <input
          onChange={changeHandler}
          type="checkbox"
          name="terms"
          checked={formData.terms}
        />
      </div>
    </form>
  );
};
export default Form;
