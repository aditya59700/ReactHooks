import React, { useState } from 'react';

const UseStateHooks2 = () => {
    const [emps, setEmp] = useState([
        {
            id: 10,
            name: "Nikhil",
            salary: "83937",
            skill: "SQL"
        },
        {
            id: 20,
            name: "Aditya",
            salary: "180937",
            skill: "React"
        },
        {
            id: 30,
            name: "Om",
            salary: "63937",
            skill: "Asp Dot Net"
        }
    ]);

    // Function to double the salary of all employees
    const doubleSalary = () => {
        setEmp(emps.map(emp => ({
            ...emp,
            salary: (parseInt(emp.salary) * 2).toString() // Doubling the salary
        })));
    };

    return (
        <div>
            {emps.map((emp) => (
                <h2 key={emp.id}>{emp.name} - {emp.salary}</h2>
            ))}
            <button onClick={doubleSalary}>Double the salary</button>
        </div>
    );
}

export default UseStateHooks2;
