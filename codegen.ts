
import type { CodegenConfig } from '@graphql-codegen/cli';
import path from 'path';

const config: CodegenConfig = {
  overwrite: true,
  // schema: "http://localhost:4000",
  schema: "https://spacex-production.up.railway.app/",
  documents: path.resolve(__dirname, "src/gql/query/*.graphql"),
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
