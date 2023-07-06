import { Request, Response } from "express";

const handler = (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.app.locals.model.getUser(
    { $email: email, $password: password },
    (
      err: Error | null,
      row: { id: number; email: string; password: string } | null,
    ) => {
      if (err) {
        res.status(401).json({ error: err });
        return;
      }

      if (!row) {
        res.status(401).json({ error: "invalid user" });
        return;
      }

      res.cookie(process.env.SESSION_COOKIE ?? "", row.id);
      res.status(201).end();
    },
  );
};

export default handler;
