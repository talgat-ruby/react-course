import { Request, Response } from "express";
import process from "process";

const handler = (req: Request, res: Response) => {
  const sessionCookie = req.cookies[process.env.SESSION_COOKIE ?? ""];

  if (!sessionCookie) {
    res.status(401).end();
    return;
  }

  delete req.cookies[process.env.SESSION_COOKIE ?? ""];
  res.status(201).end();
};

export default handler;
