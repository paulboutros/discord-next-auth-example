import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {}
 
let mongoClient; // this becomes our cached connection
if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
  }


  export async function connectToDataBase(){
    try{
      if (mongoClient ){
         return  { mongoClient } // Wrap the mongoClient in an object; 
        }
        mongoClient = await ( new MongoClient(uri, options)).connect();
        console.log("Just Connected!"); 
         return { mongoClient }; // Wrap the mongoClient in an object

    }catch(e){
       Console.error(e);
    }  
    
  }
   