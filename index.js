import express from "express";
const app = new express();
let students = [
    {
        id: 1,
        name: "mohamed",
        cuntry: "tanta",
    },
    {
        id: 2,
        name: "akram",
        cuntry: "ashmone",
    },
    {
        id: 3,
        name: "ahmed",
        cuntry: "tanta",
    },
    {
        id: 4,
        name: "khaled",
        cuntry: "shpin",
    }
];
app.get("/students", (req, res) => {
    let output = "<ul>";
    students.forEach((ele , indx) => {
        const student = students[indx];
        output += `<li><a href="/students/${student.id}">${student.name}</a></li>`;
    });
    output += "</ul>";
    res.send(output);
});
app.get("/students/:id", (req , res) => {
    const id = req.params.id;

    const student = students.find((ele) => {
        return ele.id == id;
    });
    res.send(`
    <h4>${student.name}</h4>
    <div>${student.cuntry}</div>
    <div>${student.id}</div>
    `);
    
});
app.listen(5000);