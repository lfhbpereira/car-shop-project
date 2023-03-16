import { NextFunction, Request, Response } from 'express';

import HttpException from '../utils/HttpException';

export default class HandleError {
  public static err(err: HttpException, _req: Request, res: Response, _next: NextFunction) {
    const { status, message } = err;

    return res.status(status || 500).json({ message });
  }
}
