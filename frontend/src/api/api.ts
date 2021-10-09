/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Count
 */
export interface Count {
    /**
     * 
     * @type {string}
     * @memberof Count
     */
    date: string;
    /**
     * 
     * @type {number}
     * @memberof Count
     */
    id: number;
}
/**
 * 
 * @export
 * @interface CountCreate
 */
export interface CountCreate {
    /**
     * 
     * @type {string}
     * @memberof CountCreate
     */
    date: string;
}
/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    detail?: Array<ValidationError>;
}
/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidationError
     */
    loc: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    msg: string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    type: string;
}

/**
 * CountApi - axios parameter creator
 * @export
 */
export const CountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Count
         * @param {CountCreate} countCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCount: async (countCreate: CountCreate, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'countCreate' is not null or undefined
            assertParamExists('createCount', 'countCreate', countCreate)
            const localVarPath = `/count/`;
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

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(countCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Read Counts
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readCounts: async (skip?: number, limit?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/count/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
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
 * CountApi - functional programming interface
 * @export
 */
export const CountApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CountApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Count
         * @param {CountCreate} countCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCount(countCreate: CountCreate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Count>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCount(countCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Read Counts
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readCounts(skip?: number, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Count>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.readCounts(skip, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CountApi - factory interface
 * @export
 */
export const CountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CountApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Count
         * @param {CountCreate} countCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCount(countCreate: CountCreate, options?: any): AxiosPromise<Count> {
            return localVarFp.createCount(countCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Read Counts
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readCounts(skip?: number, limit?: number, options?: any): AxiosPromise<Array<Count>> {
            return localVarFp.readCounts(skip, limit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CountApi - object-oriented interface
 * @export
 * @class CountApi
 * @extends {BaseAPI}
 */
export class CountApi extends BaseAPI {
    /**
     * 
     * @summary Create Count
     * @param {CountCreate} countCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountApi
     */
    public createCount(countCreate: CountCreate, options?: any) {
        return CountApiFp(this.configuration).createCount(countCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Read Counts
     * @param {number} [skip] 
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountApi
     */
    public readCounts(skip?: number, limit?: number, options?: any) {
        return CountApiFp(this.configuration).readCounts(skip, limit, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Ping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pingGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
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
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Ping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pingGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pingGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
         * @summary Ping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pingGet(options?: any): AxiosPromise<any> {
            return localVarFp.pingGet(options).then((request) => request(axios, basePath));
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
     * @summary Ping
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public pingGet(options?: any) {
        return DefaultApiFp(this.configuration).pingGet(options).then((request) => request(this.axios, this.basePath));
    }
}

