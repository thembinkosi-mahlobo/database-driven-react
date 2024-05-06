import { useState } from "react";

export default function StudentForm() {
  const [form, setForm] = useState({ Name: "", Email: "", Age: 0 });
  //   const [myForm, setFormValues] = useState({ name: ", email:", age: 0 });

  //   function myForm() {
  //     const [formValues, setFormValues] = useState({
  //       name: "",
  //       email: "",
  //       age: "",
  //     });

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8080/students", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  // function handleInputChange(event) {
  //   setForm({
  //     ...formValues,
  //     [event.target.value]: event.target.value,
  //   });
  // }

  return (
    <form>
      <h3>Add a new student</h3>
      <p>
        Having a hobby or doing activities in your spare time is great for your
        MH.
      </p>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="Name"
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          name="Email"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          name="Age"
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
      </label>
      <label>
        <input type="submit" placeholder="Submit" onSubmit={handleSubmit} />
      </label>
      <button>Add Student</button>
      <button>Insert Hobby</button>
    </form>
  );
}
