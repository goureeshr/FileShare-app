import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://goureeshrnambiar:blast%40123@cluster0.l0ss33n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const DB_connection = async() => {
    try {
       await mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
       console.log("Database created successfully")
    } catch(error) {
        console.error("Error while connecting to DB",error.message)
    }
}
export default DB_connection;