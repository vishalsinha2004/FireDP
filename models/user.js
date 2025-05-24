const mongoose = require('mongoose');

//mongoose.connect("mongodb://127.0.0.1:27017/testapp1");
const uri = "mongodb+srv://user1:Q8X83qYfVrbcZCpL@cluster0.z4v1tyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//mongodb+srv://user1:<db_password>@cluster0.z4v1tyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect(uri);
const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String,
})

module.exports = mongoose.model('User', userSchema);