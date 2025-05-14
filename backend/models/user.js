    import mongoose from 'mongoose'

    const userSchema = new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        adoptedPets: [{type: mongoose.Schema.Types.ObjectId,ref:'Pet'}]
    })

    const User=mongoose.model('User',userSchema);
    export default User;