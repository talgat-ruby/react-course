import { Request, Response } from "express";
import * as process from "process";

const handler = (req: Request, res: Response) => {
  const sessionCookie = req.cookies[process.env.SESSION_COOKIE ?? ""];

  if (!sessionCookie) {
    res.status(401).end();
    return;
  }

  res.app.locals.model.getUserById(
    { $id: Number(sessionCookie) },
    (
      err: Error | null,
      row: { id: number; email: string; password: string } | null,
    ) => {
      if (err) {
        res.status(400).json({ error: err });
        return;
      }

      if (!row) {
        res.status(404).json({ error: "invalid user" });
        return;
      }

      res.status(200).json({ data: row });
    },
  );
};

export default handler;
