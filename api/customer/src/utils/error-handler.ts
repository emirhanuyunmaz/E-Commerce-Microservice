import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { createLogger, transports } from 'winston';
import { app_error } from './app-error';
const LogErrors = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'app_logger.log' }),
  ],
});

class ErrorLogger {
  constructor() {}

  async logError(err: any) {
    console.log('============= START ERROR LOGGER ============');
    LogErrors.log({
      private: true,
      level: 'error',
      message: `${new Date()} - ${JSON.stringify(err)}`,
    });
    console.log('============= END ERROR LOGGER ============');
    return false;
  }

  isTrustError(error: any) {
    if (error instanceof app_error.AppError) {
      return error.isOperational;
    } else {
      return false;
    }
  }
}

const ErrorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorLogger = new ErrorLogger();

  process.on('uncaughtException', (reason, promise) => {
    console.log(reason, 'UNHANDLED');
    throw reason; // need to take care
  });

  process.on('uncaughtException', (error) => {
    if (errorLogger.isTrustError(err)) {
      // Process start | need restart
    }
  });

  if (err) {
    await errorLogger.logError(err);
    if (errorLogger.isTrustError(err)) {
      if (err.errorStack) {
        const errorDescription = err.errorStack;
        return res.status(err.statusCode).json({ message: errorDescription });
      }
      return res.status(err.statusCode).json({ message: err.message });
    } else {
      // Process exit
      // Terriablly Wrong With Flow Need Restart
    }
    return res.status(err.statusCode).json({ message: err.message });
  }
  next();
};
module.exports = ErrorHandler;
