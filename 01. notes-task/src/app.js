// create server in this file
import express from 'express';

const app = express();

const notes = [];

app.use(express.json());   // frontend s jo data aa rha h usko read krne k liye


// POST METHOD /notes : create notes
app.post('/notes', (req, res) => {

    notes.push(req.body);  // ntes array m push        
    console.log(req.body);
    
    // user ko message send
    res.status(201).json({
        message: "notes created successfully!",
        code: 201
    });

});


// GET METHOD /notes : fetching notes
app.get('/notes', (req, res) => {

    // user ko message send
    res.status(200).json({
        message: "notes fetched successfully!",
        code: 200,
        notes: notes
    });

});


// DELETE METHOD /notes/:index : delete particular note
app.delete('/notes/:index', (req, res) => {

    const index = req.params.index - 1;       // dynamic index access krene k liye
    delete notes [ index ];                   // delete particular note from notea array   

    // user ko message send
    res.status(200).json({
        message: "notes deleted successfully!",
        code: 200
    });

});


// PATCH METHOD /notes/:index : edit notes
app.patch('/notes/:index', (req, res) => {

    const index = req.params.index - 1;
    
    const description = req.body.description;  // descriotion key access  
    notes [ index ].description = description; // descriotion edit

    const title = req.body.title;              // title key access
    notes [ index ].title = title;             // title edit       
    console.log(notes[index]);
    

    // user ko message send
    res.status(200).json({
        message: "notes edit successfully!",
        code: 200
    })

});


export default app;