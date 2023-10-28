const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {  
    await client.connect();
    console.log("You successfully connected to MongoDB!");
  } catch (err) {  
    console.log(err);
  } 
}

module.exports = {
  run,
  client
};