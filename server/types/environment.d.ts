export {};

declare global {
  namespace nodeJs {
    interface ProcessEnv {
      APP_PORT: number;
      MONGO_URL?: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
