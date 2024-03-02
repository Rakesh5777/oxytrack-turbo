import { Prisma } from "@oxytrack/database";

export function getErrorFieldsFromError(
  error: Prisma.PrismaClientKnownRequestError,
): string {
  return (error.meta!.target! as String[]).join(", ");
}

export function getCauseFromError(
  error: Prisma.PrismaClientKnownRequestError,
): string {
  return JSON.stringify(error.meta)
    .replace('{"cause":', "")
    .replace("}", "")
    .replace('"', "")
    .replace('"', "");
}
