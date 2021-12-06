import { MongoClient } from "mongodb"

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        // case 'GET': {
        //     return getPosts(req, res);
        // }

        case 'POST': {
            return addSong(req, res);
        }

        // case 'PUT': {
        //     return updatePost(req, res);
        // }

        // case 'DELETE': {
        //     return deletePost(req, res);
        // }
    }
}

async function addSong(req, res) {

    try {
        // connect to the database
        const client = await MongoClient.connect(process.env.MONGODB_URI)
        const db = client.db()

        // add the post
        await db.collection('songs').insertOne(JSON.parse(req.body))

        // return a message
        return res.json({
            message: 'Song added successfully',
            success: true,
        })
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}