import mongoose from 'mongoose';
const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(() => console.log('MongoDB is successfully connected'))
    .catch((err) => {
      console.error('failed to connect with MongoDB');
      console.error(err);
    });
};

export default connectDB;
