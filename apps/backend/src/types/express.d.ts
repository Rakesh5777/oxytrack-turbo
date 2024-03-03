import { operations } from "@oxytrack/api-contract/dist/api";
import { Request, Response } from "express";

import { Send } from "express-serve-static-core";

export type Mime = `${string}/${string}`;

export type Payload = {
  content: Record<Mime, any>;
};

export type OperationData = {
  parameters?: {
    query?: Record<string, any>;
    path?: Record<string, any>;
  };
  requestBody?: Payload;
  responses: Record<number, Payload>;
};

export type Operation = Record<string, OperationData>;

export type JsonPayload<T> = {
  content: {
    "application/json": T;
  };
};

export type JsonOr<T extends Payload> = T extends JsonPayload<infer U> ? U : never;

type R500 = { 500: Payload };
type R400 = { 400: Payload };
type R404 = { 404: Payload };
type R200 = { 200: Payload };
type R201 = { 201: Payload };
type R202 = { 202: Payload };
type R203 = { 203: Payload };
type R204 = { 204: Payload };
type R205 = { 205: Payload };

// export type ResponseReturnType<T extends Record<number, Payload>> = {[P in keyof T]: T[P][]}

export type ResponseReturnType<T> = T extends R200
  ? JsonOr<T[200]> | E400<T> | E404<T> | E500<T>
  : T extends R201
    ? JsonOr<T[201]> | E400<T> | E404<T> | E500<T>
    : T extends R202
      ? JsonOr<T[202]> | E400<T> | E404<T> | E500<T>
      : T extends R203
        ? JsonOr<T[203]> | E400<T> | E404<T> | E500<T>
        : T extends R204
          ? JsonOr<T[204]> | E400<T> | E404<T> | E500<T>
          : T extends R205
            ? JsonOr<T[205]> | E400<T> | E404<T> | E500<T>
            : never;

export type E400<T> = T extends R400 ? T | JsonOr<T[400]> : never;

export type E404<T> = T extends R404 ? T | JsonOr<T[404]> : never;

export type E500<T> = T extends R500 ? T | JsonOr<T[500]> : never;

export type ExpressRequest<T extends Operation> = {
  [P in keyof T]: Request<
    T[P]["parameters"] extends {} ? T[P]["parameters"]["path"] : never,
    any,
    T[P]["requestBody"] extends {} ? JsonOr<T[P]["requestBody"]> : never,
    T[P]["parameters"] extends {} ? T[P]["parameters"]["query"] : never,
    any
  >;
};

export type ExpressResponse<T extends Operation> = {
  [P in keyof T]: ResponseReturnType<T[P]["responses"]>;
};

export type TypedRequest = ExpressRequest<Omit<operations, never>>;
export type Responses = ExpressResponse<Omit<operations, never>>;

export interface TypedResponse<T> extends Response {
  json: Send<T, this>;
}
