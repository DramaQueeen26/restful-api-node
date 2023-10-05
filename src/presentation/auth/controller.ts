import { Request, Response } from "express";

export class AuthController {

  constructor() {}
  
  loginUser = (req: Request, res: Response) => {

    return res.json({message: 'Login works!'})

  }

  registerUser = (req: Request, res: Response) => {

    return res.json({message: 'Register works!'})

  }

  validateEmail = (req: Request, res: Response) => {

    return res.json({message: 'ValidateEmail works!'})

  }

}