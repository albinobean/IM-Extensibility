/**
 * InMoment Public REST API
 * Welcome to the InMoment Public REST API. Access is restricted to clients of InMoment. Contact your InMoment account manager for more information or visit [https://inmoment.com/](https://inmoment.com/) to learn what InMoment can do for you.   To help you get started, application client libraries for some popular languages and frameworks have been included below. - [csharp-dotnet2](/api/documentation/client/csharp-dotnet2.zip) - [go](/api/documentation/client/go.zip) - [java](/api/documentation/client/java.zip) - [javascript](/api/documentation/client/javascript.zip) - [php](/api/documentation/client/php.zip) - [python](/api/documentation/client/python.zip) - [typescript-angular](/api/documentation/client/typescript-angular.zip) - [typescript-angularjs](/api/documentation/client/typescript-angularjs.zip) - [typescript-jquery](/api/documentation/client/typescript-jquery.zip) - [typescript-node](/api/documentation/client/typescript-node.zip)  Additionally you can use many opensource tools to generate libraries yourself using the [OpenApi 3.0 Spec](/api/documentation/openapi.json)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@inmoment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiException from '../model/ApiException';
import ApiResultDTO from '../model/ApiResultDTO';
import InlineObject1 from '../model/InlineObject1';
import InlineObject2 from '../model/InlineObject2';
import ResponseByPromptDTO from '../model/ResponseByPromptDTO';
import ResponseDTO from '../model/ResponseDTO';
import SpitRateCountDTO from '../model/SpitRateCountDTO';
import UNKNOWN_BASE_TYPE from '../model/UNKNOWN_BASE_TYPE';
import UpdateParametersDTO from '../model/UpdateParametersDTO';
import UpsertApiResultDTO from '../model/UpsertApiResultDTO';
import UpsertParametersDTO from '../model/UpsertParametersDTO';

/**
* Responses service.
* @module api/ResponsesApi
* @version 1.0.0
*/
export default class ResponsesApi {

    /**
    * Constructs a new ResponsesApi. 
    * @alias module:api/ResponsesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createResponse operation.
     * @callback module:api/ResponsesApi~createResponseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a survey response
     * Create a survey response
     * @param {Number} organizationId 
     * @param {module:model/ResponseDTO} responseDTO 
     * @param {module:api/ResponsesApi~createResponseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createResponse(organizationId, responseDTO, callback) {
      let postBody = responseDTO;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createResponse");
      }
      // verify the required parameter 'responseDTO' is set
      if (responseDTO === undefined || responseDTO === null) {
        throw new Error("Missing the required parameter 'responseDTO' when calling createResponse");
      }

      let pathParams = {
        'organizationId': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityUser', 'Legacy'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/response/import/single/{organizationId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteResponse operation.
     * @callback module:api/ResponsesApi~deleteResponseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a survey response
     * Delete a survey response
     * @param {Number} organizationId 
     * @param {Number} responseId 
     * @param {module:api/ResponsesApi~deleteResponseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteResponse(organizationId, responseId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteResponse");
      }
      // verify the required parameter 'responseId' is set
      if (responseId === undefined || responseId === null) {
        throw new Error("Missing the required parameter 'responseId' when calling deleteResponse");
      }

      let pathParams = {
        'organizationId': organizationId,
        'responseId': responseId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityUser', 'Legacy'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/response/delete/{organizationId}/{responseId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBulkUnitCounts operation.
     * @callback module:api/ResponsesApi~getBulkUnitCountsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SpitRateCountDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get bulk response counts
     * The response rate api allows you to get survey response count information for specific time periods. This information that can then be used to adjust survey invitation frequency (aka. spit rate) for individual units, allowing more accurate targeting of a desired number of responses within a specific time frame.
     * @param {module:model/InlineObject1} inlineObject1 
     * @param {module:api/ResponsesApi~getBulkUnitCountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SpitRateCountDTO>}
     */
    getBulkUnitCounts(inlineObject1, callback) {
      let postBody = inlineObject1;
      // verify the required parameter 'inlineObject1' is set
      if (inlineObject1 === undefined || inlineObject1 === null) {
        throw new Error("Missing the required parameter 'inlineObject1' when calling getBulkUnitCounts");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityUser', 'Legacy'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [SpitRateCountDTO];
      return this.apiClient.callApi(
        '/spitRate/BulkUnitCounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getETLResponse operation.
     * @callback module:api/ResponsesApi~getETLResponseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get survey response by ID
     * Get survey response by ID
     * @param {Number} responseID 
     * @param {module:api/ResponsesApi~getETLResponseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseDTO}
     */
    getETLResponse(responseID, callback) {
      let postBody = null;
      // verify the required parameter 'responseID' is set
      if (responseID === undefined || responseID === null) {
        throw new Error("Missing the required parameter 'responseID' when calling getETLResponse");
      }

      let pathParams = {
        'responseID': responseID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityUser', 'Legacy'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponseDTO;
      return this.apiClient.callApi(
        '/etl/surveyresponses/{responseID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getETLResponseIds operation.
     * @callback module:api/ResponsesApi~getETLResponseIdsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Number>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get survey response IDs
     * Get survey response IDs for a given organization between the start and end date provided.
     * @param {Date} startDate 
     * @param {Date} endDate 
     * @param {Number} orgId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.useUnitTZ 
     * @param {Boolean} opts.includeDeleted 
     * @param {module:api/ResponsesApi~getETLResponseIdsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Number>}
     */
    getETLResponseIds(startDate, endDate, orgId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getETLResponseIds");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getETLResponseIds");
      }
      // verify the required parameter 'orgId' is set
      if (orgId === undefined || orgId === null) {
        throw new Error("Missing the required parameter 'orgId' when calling getETLResponseIds");
      }

      let pathParams = {
        'startDate': startDate,
        'endDate': endDate,
        'orgId': orgId
      };
      let queryParams = {
        'useUnitTZ': opts['useUnitTZ'],
        'includeDeleted': opts['includeDeleted']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityUser', 'Legacy'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['Number'];
      return this.apiClient.callApi(
        '/etl/surveyresponses/ids/{startDate}/{endDate}/{orgId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getETLResponses operation.
     * @callback module:api/ResponsesApi~getETLResponsesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ResponseDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get survey responses by IDs
     * Get survey responses for a collection of response IDs.
     * @param {Boolean} verbose Retrieve verbose response data. This means that limited additional information about linked metadata entities will be included in the response (Ex: Gateway Alias, instead of just Gateway ID).
     * @param {Array.<Number>} requestBody 
     * @param {module:api/ResponsesApi~getETLResponsesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ResponseDTO>}
     */
    getETLResponses(verbose, requestBody, callback) {
      let postBody = requestBody;
      // verify the required parameter 'verbose' is set
      if (verbose === undefined || verbose === null) {
        throw new Error("Missing the required parameter 'verbose' when calling getETLResponses");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling getETLResponses");
      }

      let pathParams = {
        'verbose': verbose
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityUser', 'Legacy'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [ResponseDTO];
      return this.apiClient.callApi(
        '/etl/surveyresponses/batch/{verbose}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getResponse operation.
     * @callback module:api/ResponsesApi~getResponseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get survey response by ID
     * Get survey response by ID
     * @param {Number} responseID 
     * @param {module:api/ResponsesApi~getResponseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseDTO}
     */
    getResponse(responseID, callback) {
      let postBody = null;
      // verify the required parameter 'responseID' is set
      if (responseID === undefined || responseID === null) {
        throw new Error("Missing the required parameter 'responseID' when calling getResponse");
      }

      let pathParams = {
        'responseID': responseID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityUser', 'Legacy'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponseDTO;
      return this.apiClient.callApi(
        '/surveyresponses/{responseID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getResponseIds operation.
     * @callback module:api/ResponsesApi~getResponseIdsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Number>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get survey response IDs
     * Get survey response IDs for a given organization between the start and end date provided.
     * @param {Date} startDate 
     * @param {Date} endDate 
     * @param {Number} orgId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.useUnitTZ 
     * @param {Boolean} opts.includeDeleted 
     * @param {module:api/ResponsesApi~getResponseIdsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Number>}
     */
    getResponseIds(startDate, endDate, orgId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getResponseIds");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getResponseIds");
      }
      // verify the required parameter 'orgId' is set
      if (orgId === undefined || orgId === null) {
        throw new Error("Missing the required parameter 'orgId' when calling getResponseIds");
      }

      let pathParams = {
        'startDate': startDate,
        'endDate': endDate,
        'orgId': orgId
      };
      let queryParams = {
        'useUnitTZ': opts['useUnitTZ'],
        'includeDeleted': opts['includeDeleted']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityUser', 'Legacy'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['Number'];
      return this.apiClient.callApi(
        '/surveyresponses/ids/{startDate}/{endDate}/{orgId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getResponseIdsByAccount operation.
     * @callback module:api/ResponsesApi~getResponseIdsByAccountCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Number>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get survey response IDs by loyalty number
     * Get survey response IDs with a loyalty number for a organization within the start and end date provided.
     * @param {Date} startDate 
     * @param {Date} endDate 
     * @param {Number} orgId 
     * @param {String} accountId loyalty number
     * @param {module:api/ResponsesApi~getResponseIdsByAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Number>}
     */
    getResponseIdsByAccount(startDate, endDate, orgId, accountId, callback) {
      let postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getResponseIdsByAccount");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getResponseIdsByAccount");
      }
      // verify the required parameter 'orgId' is set
      if (orgId === undefined || orgId === null) {
        throw new Error("Missing the required parameter 'orgId' when calling getResponseIdsByAccount");
      }
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getResponseIdsByAccount");
      }

      let pathParams = {
        'startDate': startDate,
        'endDate': endDate,
        'orgId': orgId,
        'accountId': accountId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityUser', 'Legacy'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['Number'];
      return this.apiClient.callApi(
        '/surveyresponses/account/ids/{startDate}/{endDate}/{orgId}/{accountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getResponses operation.
     * @callback module:api/ResponsesApi~getResponsesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ResponseDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get survey responses by IDs
     * Get survey responses for a collection of response IDs.
     * @param {Boolean} verbose Retrieve verbose response data. This means that limited additional information about linked metadata entities will be included in the response (Ex: Gateway Alias, instead of just Gateway ID).
     * @param {Array.<Number>} requestBody 
     * @param {module:api/ResponsesApi~getResponsesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ResponseDTO>}
     */
    getResponses(verbose, requestBody, callback) {
      let postBody = requestBody;
      // verify the required parameter 'verbose' is set
      if (verbose === undefined || verbose === null) {
        throw new Error("Missing the required parameter 'verbose' when calling getResponses");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling getResponses");
      }

      let pathParams = {
        'verbose': verbose
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityUser', 'Legacy'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [ResponseDTO];
      return this.apiClient.callApi(
        '/surveyresponses/batch/{verbose}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUnitSpitRateCount operation.
     * @callback module:api/ResponsesApi~getUnitSpitRateCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpitRateCountDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get response counts
     * The response rate api allows you to get survey response count information for specific time periods. This information that can then be used to adjust survey invitation frequency (aka. spit rate) for individual units, allowing more accurate targeting of a desired number of responses within a specific time frame.
     * @param {Number} organizationId 
     * @param {Number} feedbackChannelId 
     * @param {Date} periodBeginDate 
     * @param {Number} unitNumber 
     * @param {Date} lastSpitRateDate 
     * @param {module:api/ResponsesApi~getUnitSpitRateCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SpitRateCountDTO}
     */
    getUnitSpitRateCount(organizationId, feedbackChannelId, periodBeginDate, unitNumber, lastSpitRateDate, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getUnitSpitRateCount");
      }
      // verify the required parameter 'feedbackChannelId' is set
      if (feedbackChannelId === undefined || feedbackChannelId === null) {
        throw new Error("Missing the required parameter 'feedbackChannelId' when calling getUnitSpitRateCount");
      }
      // verify the required parameter 'periodBeginDate' is set
      if (periodBeginDate === undefined || periodBeginDate === null) {
        throw new Error("Missing the required parameter 'periodBeginDate' when calling getUnitSpitRateCount");
      }
      // verify the required parameter 'unitNumber' is set
      if (unitNumber === undefined || unitNumber === null) {
        throw new Error("Missing the required parameter 'unitNumber' when calling getUnitSpitRateCount");
      }
      // verify the required parameter 'lastSpitRateDate' is set
      if (lastSpitRateDate === undefined || lastSpitRateDate === null) {
        throw new Error("Missing the required parameter 'lastSpitRateDate' when calling getUnitSpitRateCount");
      }

      let pathParams = {
        'organizationId': organizationId,
        'feedbackChannelId': feedbackChannelId,
        'periodBeginDate': periodBeginDate,
        'unitNumber': unitNumber,
        'lastSpitRateDate': lastSpitRateDate
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityUser', 'Legacy'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SpitRateCountDTO;
      return this.apiClient.callApi(
        '/spitRate/UnitCount/{organizationId}/{feedbackChannelId}/{periodBeginDate}/{unitNumber}/{lastSpitRateDate}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the importResponsesByPrompt operation.
     * @callback module:api/ResponsesApi~importResponsesByPromptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResultDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import response with prompt answers
     * Requires that the requester has access to the organization referenced and the location for the offer. Supports client credential authentication tokens.
     * @param {Number} orgId The organization ID to import the response into.
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE Response with prompt answers
     * @param {module:api/ResponsesApi~importResponsesByPromptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResultDTO}
     */
    importResponsesByPrompt(orgId, UNKNOWN_BASE_TYPE, callback) {
      let postBody = UNKNOWN_BASE_TYPE;
      // verify the required parameter 'orgId' is set
      if (orgId === undefined || orgId === null) {
        throw new Error("Missing the required parameter 'orgId' when calling importResponsesByPrompt");
      }
      // verify the required parameter 'UNKNOWN_BASE_TYPE' is set
      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling importResponsesByPrompt");
      }

      let pathParams = {
        'orgId': orgId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityClient', 'IdentityUser', 'Legacy'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiResultDTO;
      return this.apiClient.callApi(
        '/surveyresponses/importByPrompt/bulk/{orgId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateResponse operation.
     * @callback module:api/ResponsesApi~updateResponseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResultDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update response by ID
     * Update a specific response by adding, changing or removing answers to prompts. This allows for errors or inaccuracies in historical data to be corrected, or for additional information to be associated with a particular response that was not available when the response was originally collected. Supports client credential authentication tokens.
     * @param {Number} responseId The sql ID of the response to be updated.
     * @param {module:model/UpdateParametersDTO} updateParametersDTO 
     * @param {module:api/ResponsesApi~updateResponseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResultDTO}
     */
    updateResponse(responseId, updateParametersDTO, callback) {
      let postBody = updateParametersDTO;
      // verify the required parameter 'responseId' is set
      if (responseId === undefined || responseId === null) {
        throw new Error("Missing the required parameter 'responseId' when calling updateResponse");
      }
      // verify the required parameter 'updateParametersDTO' is set
      if (updateParametersDTO === undefined || updateParametersDTO === null) {
        throw new Error("Missing the required parameter 'updateParametersDTO' when calling updateResponse");
      }

      let pathParams = {
        'responseId': responseId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityClient', 'IdentityUser', 'Legacy'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiResultDTO;
      return this.apiClient.callApi(
        '/surveyresponses/update/single/{responseId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateResponses operation.
     * @callback module:api/ResponsesApi~updateResponsesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResultDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update responses by criteria
     * Update prompt answers on a collection of responses which match the response  criteria. This allows for errors or inaccuracies in historical data to be corrected, or for additional information to be associated with a particular response that was not available when the response was originally collected. Supports client credential authentication tokens. Only responses with 'exclusionReason' of 'NONE' and 'complete' of 'true' can be updated.
     * @param {Number} orgId The organization ID for the response criteria.
     * @param {Date} beginDate Beginning of the date range for the response criteria.
     * @param {Date} endDate End of the date range for the response criteria.
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ResponsesApi~updateResponsesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResultDTO}
     */
    updateResponses(orgId, beginDate, endDate, UNKNOWN_BASE_TYPE, callback) {
      let postBody = UNKNOWN_BASE_TYPE;
      // verify the required parameter 'orgId' is set
      if (orgId === undefined || orgId === null) {
        throw new Error("Missing the required parameter 'orgId' when calling updateResponses");
      }
      // verify the required parameter 'beginDate' is set
      if (beginDate === undefined || beginDate === null) {
        throw new Error("Missing the required parameter 'beginDate' when calling updateResponses");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling updateResponses");
      }
      // verify the required parameter 'UNKNOWN_BASE_TYPE' is set
      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling updateResponses");
      }

      let pathParams = {
        'orgId': orgId,
        'beginDate': beginDate,
        'endDate': endDate
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityClient', 'IdentityUser', 'Legacy'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiResultDTO;
      return this.apiClient.callApi(
        '/surveyresponses/update/bulk/{orgId}/{beginDate}/{endDate}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSurveyResponseIncident operation.
     * @callback module:api/ResponsesApi~updateSurveyResponseIncidentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update survey response incident
     * Update survey response incident. Allows you to add history items to the incident workflow on a response.
     * @param {Number} organizationId 
     * @param {Number} responseId 
     * @param {module:model/InlineObject2} inlineObject2 
     * @param {module:api/ResponsesApi~updateSurveyResponseIncidentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateSurveyResponseIncident(organizationId, responseId, inlineObject2, callback) {
      let postBody = inlineObject2;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateSurveyResponseIncident");
      }
      // verify the required parameter 'responseId' is set
      if (responseId === undefined || responseId === null) {
        throw new Error("Missing the required parameter 'responseId' when calling updateSurveyResponseIncident");
      }
      // verify the required parameter 'inlineObject2' is set
      if (inlineObject2 === undefined || inlineObject2 === null) {
        throw new Error("Missing the required parameter 'inlineObject2' when calling updateSurveyResponseIncident");
      }

      let pathParams = {
        'organizationId': organizationId,
        'responseId': responseId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityUser', 'Legacy'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/response/incident/update/{organizationId}/{responseId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the upsertResponse operation.
     * @callback module:api/ResponsesApi~upsertResponseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpsertApiResultDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upsert response
     * Update response by UUID, ID or External ID in this order of precedence. If UUID or ID is supplied and response is not found, a 400 is returned. Otherwise if no response is found and UUID or ID has not been supplied, the response will be created. 
     * @param {Number} orgId ID of the organization
     * @param {module:model/UpsertParametersDTO} upsertParametersDTO 
     * @param {module:api/ResponsesApi~upsertResponseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UpsertApiResultDTO}
     */
    upsertResponse(orgId, upsertParametersDTO, callback) {
      let postBody = upsertParametersDTO;
      // verify the required parameter 'orgId' is set
      if (orgId === undefined || orgId === null) {
        throw new Error("Missing the required parameter 'orgId' when calling upsertResponse");
      }
      // verify the required parameter 'upsertParametersDTO' is set
      if (upsertParametersDTO === undefined || upsertParametersDTO === null) {
        throw new Error("Missing the required parameter 'upsertParametersDTO' when calling upsertResponse");
      }

      let pathParams = {
        'orgId': orgId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['IdentityClient', 'IdentityUser', 'Legacy'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UpsertApiResultDTO;
      return this.apiClient.callApi(
        '/surveyresponses/upsert/single/{orgId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
