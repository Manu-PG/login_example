import { AbstractError } from './abstractError';

export default class CustomError extends AbstractError {
  private static readonly _statusCode = 400;
  private readonly _code: number;
  private readonly _logging: boolean;
  private readonly _context: Record<string, unknown>;

  constructor(params?: {
    code?: number;
    message?: string;
    logging?: boolean;
    context?: Record<string, unknown>;
    error?: Error;
  }) {
    const { code, message, logging, error } = params || {};

    super(message || 'Bad request', error);
    this._code = code || CustomError._statusCode;
    this._logging = logging || false;
    this._context = params?.context || {};

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  get errors() {
    return [{ message: this.message, context: this._context }];
  }

  get statusCode() {
    return this._code;
  }

  get logging() {
    return this._logging;
  }
}
