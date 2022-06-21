import mongoose, { Schema } from 'mongoose';

const reqString = {
  type: String,
  required: true,
}

const reqNumber = {
  type: Number,
  required: true,
}

const userinfoSchema = new Schema(
  {
    user_Id: reqString,
    user_Name: reqString,
    user_Roles: reqString,
    user_Invites: reqString,
    user_Attendances: reqString,
    user_Messages: reqString,
    user_Voices: reqString,
    user_Posts: reqNumber,
    user_Points: reqNumber,
  }
)

export default mongoose.model('users', userinfoSchema);