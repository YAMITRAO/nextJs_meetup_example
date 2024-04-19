import { MongoClient } from "mongodb";


async function handler(req, res){

    if(req.method === "POST"){
        const data = req.body;
       const client = await MongoClient.connect("mongodb+srv://goals2k24:YADAV12236@cluster0.tl7veys.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
       const db = client.db();

       const meetupsCollections = db.collection('meetups');

       const result = await meetupsCollections.insertOne(data);

       client.close();

       res.status(201).json({message:"Data inserted successfully"})
    }

}

export default handler;