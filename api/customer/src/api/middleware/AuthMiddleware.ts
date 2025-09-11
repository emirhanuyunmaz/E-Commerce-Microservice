import { NextFunction, Request, Response } from 'express';
import { jwtDecode } from '../../utils';

export async function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  const { token } = req.headers;
  // console.log("TT:",token);

  if (token) {
    const isAuthorized = await jwtDecode({ token: token as string });
    console.log('isAuthorized:::::', isAuthorized);

    if (isAuthorized) {
      console.log('Email:::', isAuthorized.email);

      req.headers.email = isAuthorized.email;
      return next();
    } else {
      return res.status(401).json({ message: 'Not Authorized' });
    }
  } else {
    return res.status(401).json({ message: 'Not Authorized' });
  }
}
