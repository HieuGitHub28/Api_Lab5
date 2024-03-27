const mongoose = require('mongoose');

const uri ='mongodb+srv://phamhieu28042004:FRKsrxuCZBBbwZwe@cluster0.dgaxwcr.mongodb.net/Lab5_AND103';

const connect = async ()=>{
    try {
        await mongoose.connect(uri);
        console.log('Kết nối thành công!');
    } catch (err ) {
        console.log('Kết nối thất bại!');
        console.log(err);
    }
}
module.exports={connect};