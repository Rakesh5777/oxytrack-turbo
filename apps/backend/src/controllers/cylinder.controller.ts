import { createCylinder } from "../scripts/cylinder.script";
import { getCylinderPage } from "../services/cylinder.service";
import { Responses, TypedRequest, TypedResponse } from "../types/express";

export const createCylinderHandler = async (req: TypedRequest["createCylinder"], res: TypedResponse<Responses["createCylinder"]>) => {
  const { type, size, purchaseDate, cylinderId } = req.body;
  const createdCylinder = await createCylinder({
    type,
    size,
    purchaseDate,
    cylinderId,
  });
  return res.status(201).json({ ...createdCylinder });
};

export const getCylindersHandler = async (req: TypedRequest["getAllCylinders"], res: TypedResponse<Responses["getAllCylinders"]>) => {
  const { pageIndex, pageSize, query, type, size } = req.query;
  const cylinders = await getCylinderPage(pageIndex, pageSize, query, type, size);
  return res.status(200).json(cylinders);
};
