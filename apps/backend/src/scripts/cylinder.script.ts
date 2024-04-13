import { Cylinder, CylinderSizeEnum, CylinderTypeEnum, WritableCylinder } from "@oxytrack/api-contract";
import { prisma } from "../index";

export const createCylinder = async (cylinderData: WritableCylinder): Promise<Cylinder> => {
  const cylinder = await prisma.cylinders.create({
    data: {
      cylinderId: cylinderData.cylinderId,
      type: cylinderData.type,
      size: cylinderData.size,
      purchaseDate: cylinderData.purchaseDate ?? "",
    },
  });

  return cylinder;
};

export const getCylinders = async (
  page: number,
  pageSize: number,
  query?: string,
  type?: CylinderTypeEnum[],
  size?: CylinderSizeEnum[],
): Promise<Cylinder[]> => {
  let where = {};
  if (query) {
    where = {
      cylinderId: {
        contains: query,
        mode: "insensitive",
      },
    };
  }

  if (type) {
    where = {
      ...where,
      type: {
        in: type,
      },
    };
  }

  if (size) {
    where = {
      ...where,
      size: {
        in: size,
      },
    };
  }

  return await prisma.cylinders.findMany({
    where,
    skip: page * pageSize,
    take: pageSize,
  });
};

export const getCylindersCount = async (query?: string, type?: CylinderTypeEnum[], size?: CylinderSizeEnum[]): Promise<number> => {
  let where = {};
  if (query) {
    where = {
      cylinderId: {
        contains: query,
        mode: "insensitive",
      },
    };
  }

  if (type) {
    where = {
      ...where,
      type: {
        in: type,
      },
    };
  }

  if (size) {
    where = {
      ...where,
      size: {
        in: size,
      },
    };
  }

  return await prisma.cylinders.count({
    where,
  });
};
