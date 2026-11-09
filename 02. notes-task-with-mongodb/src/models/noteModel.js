import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    _id: { 
    type: mongoose.Schema.Types.ObjectId, 
    default: () => new mongoose.Types.ObjectId() // ✅ Yeh har naye note ke liye naya ID generate karega
    },
    title: { type: String, required: true },
    description: { type: String, required: true }
});

const NoteModel = mongoose.model('NoteModel', noteSchema);

export default NoteModel;