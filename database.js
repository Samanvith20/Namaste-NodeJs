MONGODB_URI="mongodb+srv://yervala:samanvith@cluster0.glwkn.mongodb.net/" 


const{MongoClient}=require("mongodb")

const client=new MongoClient(MONGODB_URI)

const dbname="test"

const collectionName="users"

async function run(){
    try{
        await client.connect()
        console.log("Connected to the database")
        const database=client.db(dbname)
        const collection=database.collection(collectionName)
        
    }catch(error){
        console.error(error)
    }finally{
        await client.close()
    }
}
run().
then(()=>{
    console.log("Connected to the database")
})
.catch((error)=>{
    console.error(error)
})