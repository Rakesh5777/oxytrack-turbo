import { Ambulance, WritableAmbulance } from "@oxytrack/api-contract";
import { createAmbulanceTransaction, getAmbulanceDetailsById } from "../../scripts/ambulance.script";

export const createAmbulance = async (ambulanceData: WritableAmbulance): Promise<Ambulance> => {
  const ambulanceId = await createAmbulanceTransaction(ambulanceData);
  return (await getAmbulanceDetailsById(ambulanceId)) as Ambulance;
};
