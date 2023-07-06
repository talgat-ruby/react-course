import { Express } from "express-serve-static-core";
import { Model } from "../../src/model";

declare module "express-serve-static-core" {
  interface Locals extends Express.Locals {
    model: Model;
  }
}
