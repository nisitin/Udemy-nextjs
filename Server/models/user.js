import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        trim: "true",
        required: true
    },
    email: {
        type: String,
        trim: "true",
        unique: true,
        required: true
    },
    picture: String,
    string_account_id: "",
    strip_seller: {},
    stripe_session: {},
}, { timestamps: true }
)

//最初の引数はユーザーモデル
export default mongoose.model('User', userSchema)