
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    Name: String,
    Number: String,
    Email: String,
},
{
    collection: "business"
});

const Model = mongoose.model("contacts", ContactSchema);

export default Model;
