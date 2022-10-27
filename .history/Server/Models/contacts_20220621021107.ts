//import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose.schema

//create a schema that matches the data
const ContactSchema = new Schema({
    Name: String,
    Number: String,
    Email: String,
},
{
    collection: "business"
});

//create model using the schema
const Model = mongoose.model("contacts", ContactSchema);

//export the model, this makes the file a module
export default Model;
