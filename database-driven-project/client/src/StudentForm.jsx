import React from "react";
import { useState } from "react";

export default function StudentForm(){
    constant [form,setForm] = useState({name:"",email:"", age:0});

    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:8080/students",{
            methode: "POST",
            body:JSON.stringify(form),
            headers: {
                "Content-Type":"application/json",
            },
        });
    }

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value});
    }
    <form>
        <h3> Add a new student</h3>
        <p> Having a hobby or doing activities in you spare time is great for you MH</p>
        <input name="name" placeholder="Name" onChange={handleChange}/>
        <input name="email" type="email" placeholder="address"  onChange={handleChange}/>
        <input name="age" type="number" placeholder="Age" onChange={handleChange} />
        <button>Add Student</button>
        </form>
};
}

