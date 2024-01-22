import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

let cached = (global as any).mongoose || { conn: null, promise: null};
//initialized a cached variable: attempt to retreive a mongoose property from the global object. In nodejs global object provides space to store global variables. Cached variable holds a cached connection to db

export const connectToDatabase = async  () => {
    if (cached.conn) return cached.conn;
    //connection runs for the first time

    if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        //connects to preexisting connection or create a new connection. (This is for serverless conenctions. Manage each invocation of a database connection)
        dbName: 'wordsandstring',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn
}