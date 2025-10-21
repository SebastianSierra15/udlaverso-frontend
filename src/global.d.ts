declare global {
  interface ApiError {
    response?: {
      status?: number;
      data?: {
        error?: string;
        mensaje?: string;
      };
    };
    message?: string;
  }
}

export {};
