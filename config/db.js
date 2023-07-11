import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        const conn = await mongoose.connect(uri, { useNewUrlParser: true });
        console.log(
            ` Connected to Mongodb ${mongoose.connection.host}`.bgMagenta.white
        );
    } catch (error) {
        console.log(`MongoDB Error ${error}`.bgRed.white);
    }
};

export default connectDB;
