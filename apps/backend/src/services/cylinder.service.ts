import { CylinderPage, CylinderSizeEnum, CylinderTypeEnum } from "@oxytrack/api-contract";
import { getCylinders, getCylindersCount } from "../scripts/cylinder.script";

export const getCylinderPage = async (
  pageIndex: number,
  pageSize: number,
  query?: string,
  type?: CylinderTypeEnum[],
  size?: CylinderSizeEnum[],
): Promise<CylinderPage> => {
  const cylinders = await getCylinders(pageIndex, pageSize, query, type, size);
  const cylindersCount = await getCylindersCount(query, type, size);
  return { items: cylinders, totalItemCount: cylindersCount, pageSize, pageIndex };
};
