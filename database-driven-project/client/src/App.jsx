import { useState, useEffect } from "react";
import react from "react";
import StudentForm from "./StudentForm";

export default function App(){
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    getStudents();
  },[]);
  async function getStudents() {
    const response = await fetch("http://localhost:8080/students");
    const data = await response.json();
    setStudents(data);
}

return (
  <div>
  <h1>Hobbies improve Mental Health!</h1>
  {students.map((students) => {
    return (
      <div key={students.id}>
      <h2>
      {students.name} who is {students.age}
      </h2>
      <p>{students.name} spare time activities:</p>
      <ul>
      {students.hobbies.map((hobbies)=> {
        return <li key={hobbies}>{hobbies}</li>;
      })}
        </ul> 
      </div>
    );
  })}
  <HobbiesForm/>
  </div>
};
}
