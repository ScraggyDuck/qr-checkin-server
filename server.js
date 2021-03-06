require('dotenv').config();
const app = require('./app');
const connectDB = require('./src/utils/db');

// 0) HANDLE UNCAUGHT EXCEPTION
process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});


// 1) CONNECT DATABASE
connectDB();

// 2) SETTING PORT AND LISTEN SEVER
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(
        `Server is running on port ${PORT}!`
    );
});

// 3) HANDLE UNHANDLED REJECTION!
process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});