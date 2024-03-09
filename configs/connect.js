const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connect() {
    try {
        await client.connect(process.env.MONGODB_DBNAME);
        console.log('Connected to MongoDB');
        return client.db();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

module.exports = connect;