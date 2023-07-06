import { Request, Response } from "express";

const handler = (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.app.locals.model.addUser(
    { $email: email, $password: password },
    (err: Error | null) => {
      if (err) {
        res.status(401).json({ error: err });
        return;
      }

      res.status(201).end();
    },
  );
};

export default handler;
