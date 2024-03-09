const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://root:DqiA5rxsPr6qMDK0@cluster0.eqnsp5v.mongodb.net/trolyphapluat-mongo?retryWrites=true&w=majority&appName=Cluster0'; // Provide your MongoDB URI
const dbName = 'trolyphapluat-mongo';
const collectionName = 'process';

async function updateData() {
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const dataToUpdate = [];
        let successCount = 0;

        for (const item of dataToUpdate) {
            try {
                const result = await collection.updateOne(
                    { "maThuTuc": parseFloat(item.maThuTuc) },
                    { $set: { "trichdanccpl": item.trichdanccpl } }
                );
                if (result.modifiedCount > 0) {
                    successCount++;
                    console.log(`Updated document with maThuTuc ${item.maThuTuc}`);
                }
            } catch (error) {
                console.error(`Error occurred while updating document with maThuTuc ${item.maThuTuc}:`, error);
            }
        }

        console.log(`Successfully updated ${successCount} documents`);
    } finally {
        await client.close();
    }
}

updateData().catch(console.error);
