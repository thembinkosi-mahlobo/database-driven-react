import { useState } from "react";

export default function StudentForm() {
  const [form, setForm] = useState({ name: "", email: "", age: 0 });

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

  return (
    <form>
      <h3>Add a new student</h3>
      <p>
        Having a hobby or doing activities in your spare time is great for your
        MH.
      </p>
      <label>
        UserName:
        <input name="name" placeholder="Name" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input
          name="email"
          type="email"
          placeholder="address"
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          name="age"
          type="number"
          placeholder="Age"
          onChange={handleChange}
        />
      </label>
      <label>
        <input type="submit" placeholder="Submit" onChange={handleSubmit} />
      </label>
      <button>Add Student</button>
      <button>Insert Hobby</button>
    </form>
  );
}
