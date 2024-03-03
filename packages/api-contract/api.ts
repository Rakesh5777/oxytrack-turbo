/* tslint:disable */
/* eslint-disable */
/**
 * Oxytrack API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "./configuration";
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "./common";
import type { RequestArgs } from "./base";
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from "./base";

/**
 *
 * @export
 * @interface Ambulance
 */
export interface Ambulance {
  /**
   * Id of the ambulance
   * @type {string}
   * @memberof Ambulance
   */
  id: string;
  /**
   * Name of the ambulance
   * @type {string}
   * @memberof Ambulance
   */
  ambulanceName: string;
  /**
   * Number of the ambulance
   * @type {string}
   * @memberof Ambulance
   */
  ambulanceNumber: string;
  /**
   * Email address of the ambulance
   * @type {string}
   * @memberof Ambulance
   */
  emailAddress?: string | null;
  /**
   * Description of the ambulance
   * @type {string}
   * @memberof Ambulance
   */
  description?: string | null;
  /**
   * list of contact ids
   * @type {Array<Contact>}
   * @memberof Ambulance
   */
  contacts?: Array<Contact>;
  /**
   * Created date of the ambulance
   * @type {Date}
   * @memberof Ambulance
   */
  createdAt: Date;
  /**
   * Status of the ambulance
   * @type {boolean}
   * @memberof Ambulance
   */
  active: boolean;
}
/**
 *
 * @export
 * @interface Contact
 */
export interface Contact {
  /**
   * Id of the contact
   * @type {string}
   * @memberof Contact
   */
  id: string;
  /**
   * Name of the contact
   * @type {string}
   * @memberof Contact
   */
  contactName: string;
  /**
   * Mobile number of the contact
   * @type {string}
   * @memberof Contact
   */
  mobileNumber: string;
  /**
   * Created date of the contact
   * @type {Date}
   * @memberof Contact
   */
  createdAt?: Date;
  /**
   * Status of the contact
   * @type {boolean}
   * @memberof Contact
   */
  active?: boolean;
}
/**
 *
 * @export
 * @interface ContactPage
 */
export interface ContactPage {
  /**
   * Page number
   * @type {number}
   * @memberof ContactPage
   */
  page: number;
  /**
   * Number of items per page
   * @type {number}
   * @memberof ContactPage
   */
  pageSize: number;
  /**
   * Total number of items
   * @type {number}
   * @memberof ContactPage
   */
  totalItemCount: number;
  /**
   * List of contacts
   * @type {Array<Contact>}
   * @memberof ContactPage
   */
  items: Array<Contact>;
}
/**
 *
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
  /**
   *
   * @type {ErrorResponseError}
   * @memberof ErrorResponse
   */
  error: ErrorResponseError;
  /**
   * Detailed description of the error
   * @type {string}
   * @memberof ErrorResponse
   */
  message: string;
}
/**
 * @type ErrorResponseError
 * Type of the http error
 * @export
 */
export type ErrorResponseError = Array<ErrorResponseErrorOneOfInner> | boolean | number | object | string;

/**
 * @type ErrorResponseErrorOneOfInner
 * @export
 */
export type ErrorResponseErrorOneOfInner = boolean | number | object | string;

/**
 *
 * @export
 * @interface MasterSignInRequest
 */
export interface MasterSignInRequest {
  /**
   * username of the master user
   * @type {string}
   * @memberof MasterSignInRequest
   */
  username: string;
  /**
   * password of the user
   * @type {string}
   * @memberof MasterSignInRequest
   */
  password: string;
  /**
   * Date and time of the user creation
   * @type {Date}
   * @memberof MasterSignInRequest
   */
  createdAt?: Date;
}
/**
 *
 * @export
 * @interface MasterUserSignIn200Response
 */
export interface MasterUserSignIn200Response {
  /**
   * JWT token
   * @type {string}
   * @memberof MasterUserSignIn200Response
   */
  token: string;
}
/**
 *
 * @export
 * @interface WritableAmbulance
 */
export interface WritableAmbulance {
  /**
   * Name of the ambulance
   * @type {string}
   * @memberof WritableAmbulance
   */
  ambulanceName: string;
  /**
   * Number of the ambulance
   * @type {string}
   * @memberof WritableAmbulance
   */
  ambulanceNumber: string;
  /**
   * Email address of the ambulance
   * @type {string}
   * @memberof WritableAmbulance
   */
  emailAddress?: string;
  /**
   * Description of the ambulance
   * @type {string}
   * @memberof WritableAmbulance
   */
  description?: string;
  /**
   * list of contact person ids
   * @type {Array<string>}
   * @memberof WritableAmbulance
   */
  contactIds: Array<string>;
  /**
   * Status of the ambulance
   * @type {boolean}
   * @memberof WritableAmbulance
   */
  active?: boolean;
}
/**
 *
 * @export
 * @interface WritableContact
 */
export interface WritableContact {
  /**
   * Name of the contact
   * @type {string}
   * @memberof WritableContact
   */
  contactName: string;
  /**
   * Mobile number of the contact
   * @type {string}
   * @memberof WritableContact
   */
  mobileNumber: string;
  /**
   * Status of the contact
   * @type {boolean}
   * @memberof WritableContact
   */
  active?: boolean;
}

/**
 * AmbulanceApi - axios parameter creator
 * @export
 */
export const AmbulanceApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create Ambulance
     * @param {WritableAmbulance} writableAmbulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAmbulance: async (writableAmbulance: WritableAmbulance, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'writableAmbulance' is not null or undefined
      assertParamExists("createAmbulance", "writableAmbulance", writableAmbulance);
      const localVarPath = `/customer/ambulance`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(writableAmbulance, localVarRequestOptions, configuration);

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * AmbulanceApi - functional programming interface
 * @export
 */
export const AmbulanceApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AmbulanceApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Create Ambulance
     * @param {WritableAmbulance} writableAmbulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createAmbulance(
      writableAmbulance: WritableAmbulance,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Ambulance>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createAmbulance(writableAmbulance, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["AmbulanceApi.createAmbulance"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * AmbulanceApi - factory interface
 * @export
 */
export const AmbulanceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = AmbulanceApiFp(configuration);
  return {
    /**
     *
     * @summary Create Ambulance
     * @param {WritableAmbulance} writableAmbulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAmbulance(writableAmbulance: WritableAmbulance, options?: any): AxiosPromise<Ambulance> {
      return localVarFp.createAmbulance(writableAmbulance, options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * AmbulanceApi - object-oriented interface
 * @export
 * @class AmbulanceApi
 * @extends {BaseAPI}
 */
export class AmbulanceApi extends BaseAPI {
  /**
   *
   * @summary Create Ambulance
   * @param {WritableAmbulance} writableAmbulance
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AmbulanceApi
   */
  public createAmbulance(writableAmbulance: WritableAmbulance, options?: RawAxiosRequestConfig) {
    return AmbulanceApiFp(this.configuration)
      .createAmbulance(writableAmbulance, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * ContactApi - axios parameter creator
 * @export
 */
export const ContactApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create Contact
     * @param {WritableContact} writableContact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createContact: async (writableContact: WritableContact, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'writableContact' is not null or undefined
      assertParamExists("createContact", "writableContact", writableContact);
      const localVarPath = `/contacts`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(writableContact, localVarRequestOptions, configuration);

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get all contacts
     * @param {GetAllContactsPageSizeEnum} pageSize Number of items per page
     * @param {number} page Page number
     * @param {string} [query] Search by contact name and number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllContacts: async (
      pageSize: GetAllContactsPageSizeEnum,
      page: number,
      query?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'pageSize' is not null or undefined
      assertParamExists("getAllContacts", "pageSize", pageSize);
      // verify required parameter 'page' is not null or undefined
      assertParamExists("getAllContacts", "page", page);
      const localVarPath = `/contacts`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (pageSize !== undefined) {
        localVarQueryParameter["pageSize"] = pageSize;
      }

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
      }

      if (query !== undefined) {
        localVarQueryParameter["query"] = query;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ContactApi - functional programming interface
 * @export
 */
export const ContactApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ContactApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Create Contact
     * @param {WritableContact} writableContact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createContact(
      writableContact: WritableContact,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WritableContact>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createContact(writableContact, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["ContactApi.createContact"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Get all contacts
     * @param {GetAllContactsPageSizeEnum} pageSize Number of items per page
     * @param {number} page Page number
     * @param {string} [query] Search by contact name and number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAllContacts(
      pageSize: GetAllContactsPageSizeEnum,
      page: number,
      query?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContactPage>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getAllContacts(pageSize, page, query, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["ContactApi.getAllContacts"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * ContactApi - factory interface
 * @export
 */
export const ContactApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = ContactApiFp(configuration);
  return {
    /**
     *
     * @summary Create Contact
     * @param {WritableContact} writableContact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createContact(writableContact: WritableContact, options?: any): AxiosPromise<WritableContact> {
      return localVarFp.createContact(writableContact, options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get all contacts
     * @param {GetAllContactsPageSizeEnum} pageSize Number of items per page
     * @param {number} page Page number
     * @param {string} [query] Search by contact name and number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllContacts(pageSize: GetAllContactsPageSizeEnum, page: number, query?: string, options?: any): AxiosPromise<ContactPage> {
      return localVarFp.getAllContacts(pageSize, page, query, options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * ContactApi - object-oriented interface
 * @export
 * @class ContactApi
 * @extends {BaseAPI}
 */
export class ContactApi extends BaseAPI {
  /**
   *
   * @summary Create Contact
   * @param {WritableContact} writableContact
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ContactApi
   */
  public createContact(writableContact: WritableContact, options?: RawAxiosRequestConfig) {
    return ContactApiFp(this.configuration)
      .createContact(writableContact, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get all contacts
   * @param {GetAllContactsPageSizeEnum} pageSize Number of items per page
   * @param {number} page Page number
   * @param {string} [query] Search by contact name and number
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ContactApi
   */
  public getAllContacts(pageSize: GetAllContactsPageSizeEnum, page: number, query?: string, options?: RawAxiosRequestConfig) {
    return ContactApiFp(this.configuration)
      .getAllContacts(pageSize, page, query, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * @export
 */
export const GetAllContactsPageSizeEnum = {
  NUMBER_10: 10,
  NUMBER_20: 20,
  NUMBER_50: 50,
  NUMBER_100: 100,
} as const;
export type GetAllContactsPageSizeEnum = (typeof GetAllContactsPageSizeEnum)[keyof typeof GetAllContactsPageSizeEnum];

/**
 * MasterUserApi - axios parameter creator
 * @export
 */
export const MasterUserApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Master User Sign In
     * @param {MasterSignInRequest} masterSignInRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    masterUserSignIn: async (masterSignInRequest: MasterSignInRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'masterSignInRequest' is not null or undefined
      assertParamExists("masterUserSignIn", "masterSignInRequest", masterSignInRequest);
      const localVarPath = `/masterUser/signIn`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(masterSignInRequest, localVarRequestOptions, configuration);

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * MasterUserApi - functional programming interface
 * @export
 */
export const MasterUserApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = MasterUserApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Master User Sign In
     * @param {MasterSignInRequest} masterSignInRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async masterUserSignIn(
      masterSignInRequest: MasterSignInRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MasterUserSignIn200Response>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.masterUserSignIn(masterSignInRequest, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath = operationServerMap["MasterUserApi.masterUserSignIn"]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * MasterUserApi - factory interface
 * @export
 */
export const MasterUserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = MasterUserApiFp(configuration);
  return {
    /**
     *
     * @summary Master User Sign In
     * @param {MasterSignInRequest} masterSignInRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    masterUserSignIn(masterSignInRequest: MasterSignInRequest, options?: any): AxiosPromise<MasterUserSignIn200Response> {
      return localVarFp.masterUserSignIn(masterSignInRequest, options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * MasterUserApi - object-oriented interface
 * @export
 * @class MasterUserApi
 * @extends {BaseAPI}
 */
export class MasterUserApi extends BaseAPI {
  /**
   *
   * @summary Master User Sign In
   * @param {MasterSignInRequest} masterSignInRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MasterUserApi
   */
  public masterUserSignIn(masterSignInRequest: MasterSignInRequest, options?: RawAxiosRequestConfig) {
    return MasterUserApiFp(this.configuration)
      .masterUserSignIn(masterSignInRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
