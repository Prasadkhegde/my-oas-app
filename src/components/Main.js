import React, { useEffect, useState } from "react";
import Axios from "axios";
import ViewUniversity from "./ViewUniversity";
import ViewCollege from "./ViewCollege";
import ViewCourse from "./ViewCourse";
import ViewBranch from "./ViewBranch";
import ViewProgram from "./ViewProgram";
import ViewProgramScheduled from "./ViewProgramScheduled";
import AddUniversity from "./AddUniversity";
import AddCollege from "./AddCollege";
import AddCourse from "./AddCourse";
import AddBranch from "./AddBranch";
import AddProgram from "./AddProgram";
import AddProgramScheduled from "./AddprogramScheduled";
import AddPayment from "./AddPayment";

export default function Main() {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost/3000/addlogin").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);

  return (
    <div>
      {role == "Admin" && <ViewUniversity />}
      {role == "Admin" && <ViewCollege />}
      {role == "Admin" && <ViewCourse />}
      {role == "Admin" && <ViewBranch />}
      {role == "Admin" && <ViewProgram />}
      {role == "Admin" && <ViewProgramScheduled />}
      {role == "Admin" && <ViewPayment />}

      {role == "Student" && <AddUniversity />}
      {role == "Student" && <AddCollege />}
      {role == "Student" && <AddCourse />}
      {role == "Student" && <AddBranch />}
      {role == "Student" && <AddProgram />}
      {role == "Student" && <AddProgramScheduled />}
      {role == "Student" && <AddPayment />}
    </div>
  );
}
