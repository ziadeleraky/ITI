import { useState } from "react";
import Form from "../Form/Form";
import Students from "../Students/Students";
import "./Root.css";

function Root() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ziad Eleraky", age: 24 },
    { id: 2, name: "Ahmed Ashraf", age: 21 },
    { id: 3, name: "Mahmoud Mohamed", age: 21 },
    { id: 4, name: "Sara Mohamed", age: 21 },
    { id: 5, name: "Noor Ashraf", age: 21 },
  ]);

  return (
    <div className="container">
      <Form setStudent={setStudents} />
      <Students studentsData={students} />
    </div>
  );
}

export default Root;
