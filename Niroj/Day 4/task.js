const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();

app.use(cors());

const consoleIp = async (req, res, next) => {
    throw new CustomError(500,"Ehhh boiii.")
  console.log(req.ip);
  next();
};

app.get("/status", consoleIp, async (req, res) => {
  return res.send(
    `
        <h1>Server is running.</h1>
        `,
  );
});

class CustomError extends Error{
    constructor(statusCode,message){
        super(message)
        this.statusCode = statusCode;
        this.message = message;
        this.isOperational = true
        Error.captureStackTrace(this, this.constructor)
    }
}

const globalErrorHandler = async (err, req, res, next) => {
    if(err.name == "ReferenceError"){
        return res.status(500).json({
            status:"failed",
            message: err.message,
            stack: err.stack
        })
    }
    else{
        return res.status(400).json({
            status:"failed",
            message: err.message
        })
    }
};

app.use(globalErrorHandler)

const server = http.createServer(app);

server.listen(5000, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("server started at port : 5000.");
});

