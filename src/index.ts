import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import './database';

function main(){
    app.listen(process.env.PORT);
    console.log('Server running on port 3000')
}

main();
