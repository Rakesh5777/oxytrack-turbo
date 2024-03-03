import { DefaultApi } from "@oxytrack/api-contract";
import { Configuration } from "@oxytrack/api-contract/configuration.js";

const configuration = new Configuration({
  basePath: "http://localhost:3000/api/v1",
});

const oxyTrackApi = new DefaultApi(configuration);

export default oxyTrackApi;