import app from './src/app.js';
import mongoDB_Connect from './src/db/db.js';

const port = 3000;

async function startServer() {
    try {
        
        await mongoDB_Connect();
        
        app.listen(port, () => {
            console.log(`server is running on port ${port}`);
        })

    } catch (error) {
        console.error(error);
        console.log("error in start server");
         
    }
}

startServer()