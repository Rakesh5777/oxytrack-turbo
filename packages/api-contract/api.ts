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


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface AdditionalRecord
 */
export interface AdditionalRecord {
    /**
     * Id of the additional record
     * @type {string}
     * @memberof AdditionalRecord
     */
    'id'?: string;
    /**
     * Id of the customer
     * @type {string}
     * @memberof AdditionalRecord
     */
    'customerId'?: string;
    /**
     * 
     * @type {AdditionalRecordKey}
     * @memberof AdditionalRecord
     */
    'key': AdditionalRecordKey;
    /**
     * Value of the entity requirement
     * @type {string}
     * @memberof AdditionalRecord
     */
    'value': string;
}
/**
 * @type AdditionalRecordKey
 * Key of the entity requirement
 * @export
 */
export type AdditionalRecordKey = AmbulanceRequirement | HospitalRequirement | LaboratoryRequirement;

/**
 * 
 * @export
 * @enum {string}
 */

export const AmbulanceRequirement = {
    AmbulanceNumber: 'ambulanceNumber'
} as const;

export type AmbulanceRequirement = typeof AmbulanceRequirement[keyof typeof AmbulanceRequirement];


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
    'id': string;
    /**
     * Name of the contact
     * @type {string}
     * @memberof Contact
     */
    'contactName': string;
    /**
     * Mobile number of the contact
     * @type {string}
     * @memberof Contact
     */
    'mobileNumber': string;
    /**
     * Status of the contact
     * @type {boolean}
     * @memberof Contact
     */
    'active': boolean;
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
    'page': number;
    /**
     * Number of items per page
     * @type {number}
     * @memberof ContactPage
     */
    'pageSize': number;
    /**
     * Total number of items
     * @type {number}
     * @memberof ContactPage
     */
    'totalItemCount': number;
    /**
     * List of contacts
     * @type {Array<Contact>}
     * @memberof ContactPage
     */
    'items': Array<Contact>;
}
/**
 * 
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     * Id of the customer
     * @type {string}
     * @memberof Customer
     */
    'id'?: string;
    /**
     * Type of the customer
     * @type {string}
     * @memberof Customer
     */
    'type': CustomerTypeEnum;
    /**
     * Name of the customer
     * @type {string}
     * @memberof Customer
     */
    'name': string;
    /**
     * Number of the customer
     * @type {string}
     * @memberof Customer
     */
    'number': string;
    /**
     * Email address of the customer
     * @type {string}
     * @memberof Customer
     */
    'emailAddress'?: string | null;
    /**
     * Address of the customer
     * @type {string}
     * @memberof Customer
     */
    'address'?: string | null;
    /**
     * Description of the customer
     * @type {string}
     * @memberof Customer
     */
    'description'?: string | null;
    /**
     * list of entities
     * @type {Array<EntityRequirments>}
     * @memberof Customer
     */
    'entityRequirements': Array<EntityRequirments>;
    /**
     * list of contact ids
     * @type {Array<Contact>}
     * @memberof Customer
     */
    'contacts'?: Array<Contact>;
    /**
     * Additional records of the customer
     * @type {Array<AdditionalRecord>}
     * @memberof Customer
     */
    'additionalRecords'?: Array<AdditionalRecord>;
    /**
     * Created date of the customer
     * @type {Date}
     * @memberof Customer
     */
    'createdAt'?: Date;
    /**
     * Status of the customer
     * @type {boolean}
     * @memberof Customer
     */
    'active'?: boolean;
}

export const CustomerTypeEnum = {
    Hospital: 'HOSPITAL',
    Ambulance: 'AMBULANCE',
    Laboratory: 'LABORATORY',
    Household: 'HOUSEHOLD'
} as const;

export type CustomerTypeEnum = typeof CustomerTypeEnum[keyof typeof CustomerTypeEnum];

/**
 * 
 * @export
 * @interface EntityRequirments
 */
export interface EntityRequirments {
    /**
     * Id of the additional record
     * @type {string}
     * @memberof EntityRequirments
     */
    'id'?: string;
    /**
     * Id of the customer
     * @type {string}
     * @memberof EntityRequirments
     */
    'customerId'?: string;
    /**
     * Key of the entity requirement
     * @type {string}
     * @memberof EntityRequirments
     */
    'key': EntityRequirmentsKeyEnum;
    /**
     * Value of the entity requirement
     * @type {string}
     * @memberof EntityRequirments
     */
    'value': string;
}

export const EntityRequirmentsKeyEnum = {
    Volume: 'volume',
    Frequency: 'frequency'
} as const;

export type EntityRequirmentsKeyEnum = typeof EntityRequirmentsKeyEnum[keyof typeof EntityRequirmentsKeyEnum];

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
    'error': ErrorResponseError;
    /**
     * Detailed description of the error
     * @type {string}
     * @memberof ErrorResponse
     */
    'message': string;
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
 * @enum {string}
 */

export const HospitalRequirement = {
    HospitalBeds: 'hospitalBeds'
} as const;

export type HospitalRequirement = typeof HospitalRequirement[keyof typeof HospitalRequirement];


/**
 * 
 * @export
 * @enum {string}
 */

export const LaboratoryRequirement = {
    TestSamples: 'testSamples'
} as const;

export type LaboratoryRequirement = typeof LaboratoryRequirement[keyof typeof LaboratoryRequirement];


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
    'username': string;
    /**
     * password of the user
     * @type {string}
     * @memberof MasterSignInRequest
     */
    'password': string;
    /**
     * Date and time of the user creation
     * @type {Date}
     * @memberof MasterSignInRequest
     */
    'createdAt'?: Date;
}
/**
 * 
 * @export
 * @interface MasterUserDetails
 */
export interface MasterUserDetails {
    /**
     * Master User ID
     * @type {string}
     * @memberof MasterUserDetails
     */
    'id'?: string;
    /**
     * Master User Username
     * @type {string}
     * @memberof MasterUserDetails
     */
    'username'?: string;
    /**
     * Master User Email
     * @type {string}
     * @memberof MasterUserDetails
     */
    'email'?: string;
    /**
     * Date and time of the user creation
     * @type {Date}
     * @memberof MasterUserDetails
     */
    'createdAt'?: Date;
    /**
     * First Name of the user
     * @type {string}
     * @memberof MasterUserDetails
     */
    'firstName'?: string;
    /**
     * Last Name of the user
     * @type {string}
     * @memberof MasterUserDetails
     */
    'lastName'?: string;
    /**
     * Mobile Number of the user
     * @type {string}
     * @memberof MasterUserDetails
     */
    'mobileNumber'?: string;
    /**
     * Active status of the user
     * @type {boolean}
     * @memberof MasterUserDetails
     */
    'active'?: boolean;
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
    'token': string;
    /**
     * Master User ID
     * @type {string}
     * @memberof MasterUserSignIn200Response
     */
    'id': string;
    /**
     * Master User Username
     * @type {string}
     * @memberof MasterUserSignIn200Response
     */
    'username': string;
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
    'contactName': string;
    /**
     * Mobile number of the contact
     * @type {string}
     * @memberof WritableContact
     */
    'mobileNumber': string;
    /**
     * Status of the contact
     * @type {boolean}
     * @memberof WritableContact
     */
    'active'?: boolean;
}
/**
 * 
 * @export
 * @interface WritableCustomer
 */
export interface WritableCustomer {
    /**
     * Type of the customer
     * @type {string}
     * @memberof WritableCustomer
     */
    'type': WritableCustomerTypeEnum;
    /**
     * Name of the customer
     * @type {string}
     * @memberof WritableCustomer
     */
    'name': string;
    /**
     * Number of the customer
     * @type {string}
     * @memberof WritableCustomer
     */
    'number': string;
    /**
     * Email address of the customer
     * @type {string}
     * @memberof WritableCustomer
     */
    'emailAddress'?: string | null;
    /**
     * Address of the customer
     * @type {string}
     * @memberof WritableCustomer
     */
    'address'?: string | null;
    /**
     * Description of the customer
     * @type {string}
     * @memberof WritableCustomer
     */
    'description'?: string | null;
    /**
     * list of entities
     * @type {Array<EntityRequirments>}
     * @memberof WritableCustomer
     */
    'entityRequirement'?: Array<EntityRequirments> | null;
    /**
     * list of contact ids
     * @type {Array<string>}
     * @memberof WritableCustomer
     */
    'contactIds'?: Array<string> | null;
    /**
     * Additional records of the customer
     * @type {Array<AdditionalRecord>}
     * @memberof WritableCustomer
     */
    'additionalRecord'?: Array<AdditionalRecord> | null;
    /**
     * Status of the customer
     * @type {boolean}
     * @memberof WritableCustomer
     */
    'active'?: boolean;
}

export const WritableCustomerTypeEnum = {
    Hospital: 'HOSPITAL',
    Ambulance: 'AMBULANCE',
    Laboratory: 'LABORATORY',
    Household: 'HOUSEHOLD'
} as const;

export type WritableCustomerTypeEnum = typeof WritableCustomerTypeEnum[keyof typeof WritableCustomerTypeEnum];


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
            assertParamExists('createContact', 'writableContact', writableContact)
            const localVarPath = `/contacts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(writableContact, localVarRequestOptions, configuration)

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
        getAllContacts: async (pageSize: GetAllContactsPageSizeEnum, page: number, query?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'pageSize' is not null or undefined
            assertParamExists('getAllContacts', 'pageSize', pageSize)
            // verify required parameter 'page' is not null or undefined
            assertParamExists('getAllContacts', 'page', page)
            const localVarPath = `/contacts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContactApi - functional programming interface
 * @export
 */
export const ContactApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContactApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Contact
         * @param {WritableContact} writableContact 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createContact(writableContact: WritableContact, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WritableContact>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createContact(writableContact, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContactApi.createContact']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
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
        async getAllContacts(pageSize: GetAllContactsPageSizeEnum, page: number, query?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContactPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllContacts(pageSize, page, query, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContactApi.getAllContacts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ContactApi - factory interface
 * @export
 */
export const ContactApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContactApiFp(configuration)
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
        return ContactApiFp(this.configuration).createContact(writableContact, options).then((request) => request(this.axios, this.basePath));
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
        return ContactApiFp(this.configuration).getAllContacts(pageSize, page, query, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetAllContactsPageSizeEnum = {
    NUMBER_10: 10,
    NUMBER_20: 20,
    NUMBER_50: 50,
    NUMBER_100: 100
} as const;
export type GetAllContactsPageSizeEnum = typeof GetAllContactsPageSizeEnum[keyof typeof GetAllContactsPageSizeEnum];


/**
 * CustomerApi - axios parameter creator
 * @export
 */
export const CustomerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Customer
         * @param {WritableCustomer} writableCustomer 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomer: async (writableCustomer: WritableCustomer, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'writableCustomer' is not null or undefined
            assertParamExists('createCustomer', 'writableCustomer', writableCustomer)
            const localVarPath = `/customer`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(writableCustomer, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CustomerApi - functional programming interface
 * @export
 */
export const CustomerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Customer
         * @param {WritableCustomer} writableCustomer 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCustomer(writableCustomer: WritableCustomer, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Customer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomer(writableCustomer, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CustomerApi.createCustomer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CustomerApi - factory interface
 * @export
 */
export const CustomerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomerApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Customer
         * @param {WritableCustomer} writableCustomer 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomer(writableCustomer: WritableCustomer, options?: any): AxiosPromise<Customer> {
            return localVarFp.createCustomer(writableCustomer, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CustomerApi - object-oriented interface
 * @export
 * @class CustomerApi
 * @extends {BaseAPI}
 */
export class CustomerApi extends BaseAPI {
    /**
     * 
     * @summary Create Customer
     * @param {WritableCustomer} writableCustomer 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerApi
     */
    public createCustomer(writableCustomer: WritableCustomer, options?: RawAxiosRequestConfig) {
        return CustomerApiFp(this.configuration).createCustomer(writableCustomer, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * MasterUserApi - axios parameter creator
 * @export
 */
export const MasterUserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Master User Details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        masterUserDetails: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/masterUser/details`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Master User Sign In
         * @param {MasterSignInRequest} masterSignInRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        masterUserSignIn: async (masterSignInRequest: MasterSignInRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'masterSignInRequest' is not null or undefined
            assertParamExists('masterUserSignIn', 'masterSignInRequest', masterSignInRequest)
            const localVarPath = `/masterUser/signIn`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(masterSignInRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MasterUserApi - functional programming interface
 * @export
 */
export const MasterUserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MasterUserApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Master User Details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async masterUserDetails(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MasterUserDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.masterUserDetails(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MasterUserApi.masterUserDetails']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Master User Sign In
         * @param {MasterSignInRequest} masterSignInRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async masterUserSignIn(masterSignInRequest: MasterSignInRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MasterUserSignIn200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.masterUserSignIn(masterSignInRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MasterUserApi.masterUserSignIn']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MasterUserApi - factory interface
 * @export
 */
export const MasterUserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MasterUserApiFp(configuration)
    return {
        /**
         * 
         * @summary Master User Details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        masterUserDetails(options?: any): AxiosPromise<MasterUserDetails> {
            return localVarFp.masterUserDetails(options).then((request) => request(axios, basePath));
        },
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
     * @summary Master User Details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MasterUserApi
     */
    public masterUserDetails(options?: RawAxiosRequestConfig) {
        return MasterUserApiFp(this.configuration).masterUserDetails(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Master User Sign In
     * @param {MasterSignInRequest} masterSignInRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MasterUserApi
     */
    public masterUserSignIn(masterSignInRequest: MasterSignInRequest, options?: RawAxiosRequestConfig) {
        return MasterUserApiFp(this.configuration).masterUserSignIn(masterSignInRequest, options).then((request) => request(this.axios, this.basePath));
    }
}



