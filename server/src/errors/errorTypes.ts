import CustomError from './customError';

export class TokenError extends CustomError {
  constructor(params?: { error?: Error; context?: Record<string, unknown> }) {
    const { error, context } = params || {};
    super({ error, context, code: 401, message: 'Invalid Token' });
  }
}

export class AuthenticationHeaderError extends CustomError {
  constructor(params?: { error?: Error; context?: Record<string, unknown> }) {
    const { error, context } = params || {};
    super({ error, context, code: 401, message: 'Incorrect Authentication method, use Basic' });
  }
}

export class UserPassMissingError extends CustomError {
  constructor(params?: { error?: Error; context?: Record<string, unknown> }) {
    const { error, context } = params || {};
    super({ error, context, code: 401, message: 'Incorrect Authentication, username and password must be provided' });
  }
}

export class IncorrectPasswordError extends CustomError {
  constructor(params?: { error?: Error; context?: Record<string, unknown> }) {
    const { error, context } = params || {};
    super({ error, context, code: 401, message: 'Incorrect Password' });
  }
}

export class UserNotFoundError extends CustomError {
  constructor(params?: { error?: Error; context?: Record<string, unknown> }) {
    const { error, context } = params || {};
    super({ error, context, code: 404, message: 'User not found!' });
  }
}

export class UsernameCollisionError extends CustomError {
  constructor(params?: { error?: Error; context?: Record<string, unknown> }) {
    const { error, context } = params || {};
    super({ error, context, code: 409, message: 'Username already in use' });
  }
}

export class GenericUnauthorizedError extends CustomError {
  constructor(params?: { error?: Error; context?: Record<string, unknown> }) {
    const { error, context } = params || {};
    super({ error, context, code: 409, message: 'Unauthorized' });
  }
}
