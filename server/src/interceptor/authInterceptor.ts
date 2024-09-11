import { Request, Response, NextFunction } from 'express';

export const authInterceptor = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
 
  if (token !== 'valid-token') { 
    return res.status(403).json({ message: 'Invalid token' });
  }

  next();
}; 
