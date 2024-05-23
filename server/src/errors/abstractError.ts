export type AbstractErrorContent = {
  message: string;
  context?: Record<string, unknown>;
};

export abstract class AbstractError extends Error {
  abstract readonly statusCode: number;
  abstract readonly errors: AbstractErrorContent[];
  abstract readonly logging: boolean;

  constructor(message?: string, error?: Error) {
    super(message || error?.message);

    if (error) {
      super.name = error.name;
      super.stack = error.stack;
    } else {
      this.name = new.target.name;
    }

    Object.setPrototypeOf(this, AbstractError.prototype);
  }
}
