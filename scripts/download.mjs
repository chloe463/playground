// @ts-check
import axios from "axios";
import dotenv from "dotenv";
import { getIntrospectionQuery } from "graphql";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();

const host = process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URI || "http://localhost:4000";
const url = `${host}/graphql`;

const response = await axios({
  url,
  method: "POST",
  data: {
    query: getIntrospectionQuery(),
  },
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outFile = join(__dirname, "../schema.json");


writeFileSync(outFile, JSON.stringify(response.data.data, null, 2), "utf-8");
