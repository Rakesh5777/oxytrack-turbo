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
 * @interface ContactPerson
 */
export interface ContactPerson {
    /**
     * Name of the contact person
     * @type {string}
     * @memberof ContactPerson
     */
    'contactName': string;
    /**
     * Mobile number of the contact person
     * @type {string}
     * @memberof ContactPerson
     */
    'mobileNumber': string;
    /**
     * Status of the contact person
     * @type {boolean}
     * @memberof ContactPerson
     */
    'active'?: boolean;
}
/**
 * 
 * @export
 * @interface CreateAmbulance
 */
export interface CreateAmbulance {
    /**
     * Name of the ambulance
     * @type {string}
     * @memberof CreateAmbulance
     */
    'ambulanceName': string;
    /**
     * Number of the ambulance
     * @type {string}
     * @memberof CreateAmbulance
     */
    'ambulanceNumber': string;
    /**
     * Email address of the ambulance
     * @type {string}
     * @memberof CreateAmbulance
     */
    'emailAddress': string;
    /**
     * Description of the ambulance
     * @type {string}
     * @memberof CreateAmbulance
     */
    'description': string;
    /**
     * 
     * @type {ContactPerson}
     * @memberof CreateAmbulance
     */
    'contactPerson': ContactPerson;
    /**
     * Status of the ambulance
     * @type {boolean}
     * @memberof CreateAmbulance
     */
    'active'?: boolean;
}
/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * Status code of the response
     * @type {number}
     * @memberof ErrorResponse
     */
    'statusCode': number;
    /**
     * Type of the http error
     * @type {string}
     * @memberof ErrorResponse
     */
    'error': string;
    /**
     * Detailed description of the error
     * @type {string}
     * @memberof ErrorResponse
     */
    'message': string;
}
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
     * @type {string}
     * @memberof MasterSignInRequest
     */
    'createdAt'?: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Ambulance
         * @param {CreateAmbulance} createAmbulance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAmbulance: async (createAmbulance: CreateAmbulance, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createAmbulance' is not null or undefined
            assertParamExists('createAmbulance', 'createAmbulance', createAmbulance)
            const localVarPath = `/customer/ambulance/create`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createAmbulance, localVarRequestOptions, configuration)

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
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Ambulance
         * @param {CreateAmbulance} createAmbulance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAmbulance(createAmbulance: CreateAmbulance, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateAmbulance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAmbulance(createAmbulance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.createAmbulance']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Master User Sign In
         * @param {MasterSignInRequest} masterSignInRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async masterUserSignIn(masterSignInRequest: MasterSignInRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MasterSignInRequest>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.masterUserSignIn(masterSignInRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.masterUserSignIn']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Ambulance
         * @param {CreateAmbulance} createAmbulance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAmbulance(createAmbulance: CreateAmbulance, options?: any): AxiosPromise<CreateAmbulance> {
            return localVarFp.createAmbulance(createAmbulance, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Master User Sign In
         * @param {MasterSignInRequest} masterSignInRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        masterUserSignIn(masterSignInRequest: MasterSignInRequest, options?: any): AxiosPromise<MasterSignInRequest> {
            return localVarFp.masterUserSignIn(masterSignInRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Create Ambulance
     * @param {CreateAmbulance} createAmbulance 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createAmbulance(createAmbulance: CreateAmbulance, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).createAmbulance(createAmbulance, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Master User Sign In
     * @param {MasterSignInRequest} masterSignInRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public masterUserSignIn(masterSignInRequest: MasterSignInRequest, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).masterUserSignIn(masterSignInRequest, options).then((request) => request(this.axios, this.basePath));
    }
}



