import React from "react";

const students = [
    {
        id: 1,
        name: "임",
    },
    {
        id: 2,
        name: "승",
    },
    {
        id: 3,
        name: "우",
    },
    {
        id: 4,
        name: "림",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;
