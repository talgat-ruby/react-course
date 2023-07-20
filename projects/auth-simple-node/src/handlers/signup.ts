import { Request, Response } from "express";

const handler = (req: Request, res: Response) => {
  console.log("SIGN UP!", req);

  const { email, password } = req.body;

  console.log(email, password);

  res.app.locals.model.addUser(
    { $email: email, $password: password },
    (err: Error | null) => {
      console.log("err", err);
      if (err) {
        res.status(401).json({ error: err });
        return;
      }

      res.status(201).end();
    },
  );
};

export default handler;
