// Generated by Xata Codegen 0.23.2. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "job",
    columns: [
      { name: "company", type: "string" },
      { name: "title", type: "string" },
      { name: "jobLink", type: "string" },
      { name: "geography", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Job = InferredTypes["job"];
export type JobRecord = Job & XataRecord;

export type DatabaseSchema = {
  job: JobRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Vladimir-Fomin-s-workspace-dd9j5a.us-east-1.xata.sh/db/nodejs-api-with-rapidpi-typescript-xata",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
