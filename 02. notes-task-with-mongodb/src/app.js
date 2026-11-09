import express from 'express';
import NoteModel from './models/noteModel.js';

const app = express();
app.use(express.json());

// create notes
app.post('/notes', async (req, res) => {

    try {
        
        const data = req.body; 

        await NoteModel.create({
            title: data.title,
            description: data.description, 
        });

        res.status(200).json({
            message: 'notes add in db successfully!'
        });
        console.log('notes add in db successfully!');

    } catch (error) {
        console.log(error);
        console.log('error in creating notes');
    }

});

// fetched notes
app.get('/notes', async (req, res) => {

    try {

        const notes = await NoteModel.find();    
 
        res.status(200).json({
            message: "notes fetched successfully!",
            notes: notes
        });
        console.log('notes fetched successfully!');

    } catch (error) {
        console.log(error);
        console.log('error in fetching notes');
    }

});

// update note
app.patch('/notes/:id', async (req, res) => {

    try {

        const id = req.params.id;
        const data = req.body;

        const noteUpdate = await NoteModel.findOneAndUpdate(
            { '_id': id },
            // { 'description': data?.description },
            { 'title': data?.title }    
        );

        res.status(200).json({
            message: 'note update successfully!',
            note: noteUpdate
        });
        console.log('note update successfully!');

    } catch (error) {
        console.log(error);
        console.log('error in updating note')
    }

});

// delete note 
app.delete('/notes/:id', async (req, res) => {

    try {
        
        const id = req.params.id;
        await NoteModel.findOneAndDelete({
            '_id': id
        });

        res.status(200).json({
            message: "note deletd successfully!"
        });
        console.log("note deletd successfully!");

    } catch (error) {
        console.log(error);
        console.log('error in deleting note');
    }

});


export default app;