import { useState } from "react";
import StudentForm from "./StudentForm";

export default function App() {
  const [students] = useState([]);

  // useEffect(() => {
  //   getStudents();
  // }, []);

  // async function getStudents() {
  //   const response = await fetch("http://localhost:8080/students");
  //   const data = await response.json();
  //   setStudents(data);
  // }

  return (
    <>
      <StudentForm />
      <div>
        <h1>Hobbies improves Mental Health!</h1>
        {students.map((students) => {
          return (
            <div key={students.id}>
              <h2>
                {students.name} who is {students.age}
              </h2>
              <p>{students.name} spare time activities:</p>
              <ul>
                {students.hobbies.map((hobbies) => {
                  return <li key={hobbies}>{hobbies}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
