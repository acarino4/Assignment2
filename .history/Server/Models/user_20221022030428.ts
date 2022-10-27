//Step1- Import Mongoose
import mongoose, {PassportLocalSchema} from "mongoose";
import _ from "passport-local-mongoose";
const Schema = mongoose.Schema; // alias for mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose';


//Step2- create a schema that matches the data
const UserSchema = new Schema
({
    DisplayName: String,
    username: String,
    EmailAddress: String,
    Created:
    {
        type: Date,
        default: Date.now()
    },
    Updated:
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

declare global
{
    export type UserDocument = mongoose.Document &
    {
        username: String,
        EmailAddress: String,
        DisplayName: String
    }
}


// step 3 - plugin the passport local mongoose module
UserSchema.plugin(passportLocalMongoose);

//step4 - create a model using schema
const Model = mongoose.model("User", UserSchema as PassportLocalSchema);

//step5- export the model-> this makes the file a module
export default Model;