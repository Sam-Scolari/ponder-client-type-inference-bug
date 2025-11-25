import { createClient } from "@ponder/client";
import * as schema from "./ponder.schema"; 

export const ponderClient = createClient("http://localhost:42069/sql", { schema }); 

ponderClient.db.query.account