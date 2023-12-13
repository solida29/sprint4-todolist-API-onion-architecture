import express from "express";
import { Request, Response, NextFunction } from "express";

const app = express();

const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  console.log(req.headers);

  if (!authHeader) {
    res.status(401).json({ error: new Error("Invalid request!") });
    res.setHeader("WWW-Authenticate", "Basic");
    return next();
  }

  const auth = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");
  const user = auth[0];
  const pass = auth[1];

  if (user === process.env.USERNAME && pass === process.env.PASSWORD) {
    // If Authorized user
    next();
  } else {
    res.status(401).json({ error: new Error("Invalid request!") });
    res.setHeader("WWW-Authenticate", "Basic");
    return next();
  }
};
