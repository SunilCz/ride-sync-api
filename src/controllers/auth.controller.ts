import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  static async register(req: Request, res: Response) {
    const { username, email, phone, password } = req.body;

    try {
      await AuthService.registerUser(username, email, phone, password);
      res.status(201).json({ message: 'User registered successfully.' });
    } catch (error: any) {
      console.log('ERROR: ', error);
      res.status(500).json({ message: error.message });
    }
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const token = await AuthService.loginUser(email, password);
      res.status(200).json({ token });
    } catch (error: any) {
      console.log('ERROR: ', error);
      res.status(500).json({ message: error.message });
    }
  }
}
