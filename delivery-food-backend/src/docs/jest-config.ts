import type {Config} from '@jest/types';

  export default async (): Promise<Config.InitialOptions> => {
    return {
        clearMocks: true,
        coverageProvider: "v8",
        moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
      
        roots: ["<rootDir>"],
      
        testMatch: ["**/tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
        transform: {
          "^.+\\.(ts|tsx)$": "ts-jest",
    }
  }}