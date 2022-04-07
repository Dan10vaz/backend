import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const db = await mongoose.connect("mongodb+srv://dan20051995:dan20051995@cluster0.mnzoj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    const url = `${db.connection.host}:${db.connection.port}`;
    console.log(`MongoDB conectado en: ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}
export default conectarDB;