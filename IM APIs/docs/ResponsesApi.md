# InMomentPublicRestApi.ResponsesApi

All URIs are relative to *http://localhost/api/rest/1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createResponse**](ResponsesApi.md#createResponse) | **POST** /response/import/single/{organizationId} | Create a survey response
[**deleteResponse**](ResponsesApi.md#deleteResponse) | **DELETE** /response/delete/{organizationId}/{responseId} | Delete a survey response
[**getBulkUnitCounts**](ResponsesApi.md#getBulkUnitCounts) | **POST** /spitRate/BulkUnitCounts | Get bulk response counts
[**getETLResponse**](ResponsesApi.md#getETLResponse) | **GET** /etl/surveyresponses/{responseID} | Get survey response by ID
[**getETLResponseIds**](ResponsesApi.md#getETLResponseIds) | **GET** /etl/surveyresponses/ids/{startDate}/{endDate}/{orgId} | Get survey response IDs
[**getETLResponses**](ResponsesApi.md#getETLResponses) | **POST** /etl/surveyresponses/batch/{verbose} | Get survey responses by IDs
[**getResponse**](ResponsesApi.md#getResponse) | **GET** /surveyresponses/{responseID} | Get survey response by ID
[**getResponseIds**](ResponsesApi.md#getResponseIds) | **GET** /surveyresponses/ids/{startDate}/{endDate}/{orgId} | Get survey response IDs
[**getResponseIdsByAccount**](ResponsesApi.md#getResponseIdsByAccount) | **GET** /surveyresponses/account/ids/{startDate}/{endDate}/{orgId}/{accountId} | Get survey response IDs by loyalty number
[**getResponses**](ResponsesApi.md#getResponses) | **POST** /surveyresponses/batch/{verbose} | Get survey responses by IDs
[**getUnitSpitRateCount**](ResponsesApi.md#getUnitSpitRateCount) | **GET** /spitRate/UnitCount/{organizationId}/{feedbackChannelId}/{periodBeginDate}/{unitNumber}/{lastSpitRateDate} | Get response counts
[**importResponsesByPrompt**](ResponsesApi.md#importResponsesByPrompt) | **POST** /surveyresponses/importByPrompt/bulk/{orgId} | Import response with prompt answers
[**updateResponse**](ResponsesApi.md#updateResponse) | **POST** /surveyresponses/update/single/{responseId} | Update response by ID
[**updateResponses**](ResponsesApi.md#updateResponses) | **POST** /surveyresponses/update/bulk/{orgId}/{beginDate}/{endDate} | Update responses by criteria
[**updateSurveyResponseIncident**](ResponsesApi.md#updateSurveyResponseIncident) | **POST** /response/incident/update/{organizationId}/{responseId} | Update survey response incident
[**upsertResponse**](ResponsesApi.md#upsertResponse) | **POST** /surveyresponses/upsert/single/{orgId} | Upsert response



## createResponse

> createResponse(organizationId, responseDTO)

Create a survey response

Create a survey response

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let organizationId = 789; // Number | 
let responseDTO = new InMomentPublicRestApi.ResponseDTO(); // ResponseDTO | 
apiInstance.createResponse(organizationId, responseDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**|  | 
 **responseDTO** | [**ResponseDTO**](ResponseDTO.md)|  | 

### Return type

null (empty response body)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteResponse

> deleteResponse(organizationId, responseId)

Delete a survey response

Delete a survey response

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let organizationId = 789; // Number | 
let responseId = 789; // Number | 
apiInstance.deleteResponse(organizationId, responseId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**|  | 
 **responseId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBulkUnitCounts

> [SpitRateCountDTO] getBulkUnitCounts(inlineObject1)

Get bulk response counts

The response rate api allows you to get survey response count information for specific time periods. This information that can then be used to adjust survey invitation frequency (aka. spit rate) for individual units, allowing more accurate targeting of a desired number of responses within a specific time frame.

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let inlineObject1 = new InMomentPublicRestApi.InlineObject1(); // InlineObject1 | 
apiInstance.getBulkUnitCounts(inlineObject1, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | 

### Return type

[**[SpitRateCountDTO]**](SpitRateCountDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getETLResponse

> ResponseDTO getETLResponse(responseID)

Get survey response by ID

Get survey response by ID

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let responseID = 789; // Number | 
apiInstance.getETLResponse(responseID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **responseID** | **Number**|  | 

### Return type

[**ResponseDTO**](ResponseDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getETLResponseIds

> [Number] getETLResponseIds(startDate, endDate, orgId, opts)

Get survey response IDs

Get survey response IDs for a given organization between the start and end date provided.

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let orgId = 789; // Number | 
let opts = {
  'useUnitTZ': true, // Boolean | 
  'includeDeleted': true // Boolean | 
};
apiInstance.getETLResponseIds(startDate, endDate, orgId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**|  | 
 **endDate** | **Date**|  | 
 **orgId** | **Number**|  | 
 **useUnitTZ** | **Boolean**|  | [optional] 
 **includeDeleted** | **Boolean**|  | [optional] 

### Return type

**[Number]**

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getETLResponses

> [ResponseDTO] getETLResponses(verbose, requestBody)

Get survey responses by IDs

Get survey responses for a collection of response IDs.

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let verbose = true; // Boolean | Retrieve verbose response data. This means that limited additional information about linked metadata entities will be included in the response (Ex: Gateway Alias, instead of just Gateway ID).
let requestBody = [null]; // [Number] | 
apiInstance.getETLResponses(verbose, requestBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verbose** | **Boolean**| Retrieve verbose response data. This means that limited additional information about linked metadata entities will be included in the response (Ex: Gateway Alias, instead of just Gateway ID). | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

[**[ResponseDTO]**](ResponseDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getResponse

> ResponseDTO getResponse(responseID)

Get survey response by ID

Get survey response by ID

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let responseID = 789; // Number | 
apiInstance.getResponse(responseID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **responseID** | **Number**|  | 

### Return type

[**ResponseDTO**](ResponseDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResponseIds

> [Number] getResponseIds(startDate, endDate, orgId, opts)

Get survey response IDs

Get survey response IDs for a given organization between the start and end date provided.

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let orgId = 789; // Number | 
let opts = {
  'useUnitTZ': true, // Boolean | 
  'includeDeleted': true // Boolean | 
};
apiInstance.getResponseIds(startDate, endDate, orgId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**|  | 
 **endDate** | **Date**|  | 
 **orgId** | **Number**|  | 
 **useUnitTZ** | **Boolean**|  | [optional] 
 **includeDeleted** | **Boolean**|  | [optional] 

### Return type

**[Number]**

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResponseIdsByAccount

> [Number] getResponseIdsByAccount(startDate, endDate, orgId, accountId)

Get survey response IDs by loyalty number

Get survey response IDs with a loyalty number for a organization within the start and end date provided.

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let orgId = 789; // Number | 
let accountId = "accountId_example"; // String | loyalty number
apiInstance.getResponseIdsByAccount(startDate, endDate, orgId, accountId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**|  | 
 **endDate** | **Date**|  | 
 **orgId** | **Number**|  | 
 **accountId** | **String**| loyalty number | 

### Return type

**[Number]**

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResponses

> [ResponseDTO] getResponses(verbose, requestBody)

Get survey responses by IDs

Get survey responses for a collection of response IDs.

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let verbose = true; // Boolean | Retrieve verbose response data. This means that limited additional information about linked metadata entities will be included in the response (Ex: Gateway Alias, instead of just Gateway ID).
let requestBody = [null]; // [Number] | 
apiInstance.getResponses(verbose, requestBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verbose** | **Boolean**| Retrieve verbose response data. This means that limited additional information about linked metadata entities will be included in the response (Ex: Gateway Alias, instead of just Gateway ID). | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

[**[ResponseDTO]**](ResponseDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getUnitSpitRateCount

> SpitRateCountDTO getUnitSpitRateCount(organizationId, feedbackChannelId, periodBeginDate, unitNumber, lastSpitRateDate)

Get response counts

The response rate api allows you to get survey response count information for specific time periods. This information that can then be used to adjust survey invitation frequency (aka. spit rate) for individual units, allowing more accurate targeting of a desired number of responses within a specific time frame.

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let organizationId = 789; // Number | 
let feedbackChannelId = 789; // Number | 
let periodBeginDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let unitNumber = 789; // Number | 
let lastSpitRateDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 
apiInstance.getUnitSpitRateCount(organizationId, feedbackChannelId, periodBeginDate, unitNumber, lastSpitRateDate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**|  | 
 **feedbackChannelId** | **Number**|  | 
 **periodBeginDate** | **Date**|  | 
 **unitNumber** | **Number**|  | 
 **lastSpitRateDate** | **Date**|  | 

### Return type

[**SpitRateCountDTO**](SpitRateCountDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importResponsesByPrompt

> ApiResultDTO importResponsesByPrompt(orgId, UNKNOWN_BASE_TYPE)

Import response with prompt answers

Requires that the requester has access to the organization referenced and the location for the offer. Supports client credential authentication tokens.

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityClient
let IdentityClient = defaultClient.authentications['IdentityClient'];
IdentityClient.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let orgId = 789; // Number | The organization ID to import the response into.
let UNKNOWN_BASE_TYPE = new InMomentPublicRestApi.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | Response with prompt answers
apiInstance.importResponsesByPrompt(orgId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | **Number**| The organization ID to import the response into. | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| Response with prompt answers | 

### Return type

[**ApiResultDTO**](ApiResultDTO.md)

### Authorization

[IdentityClient](../README.md#IdentityClient), [IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateResponse

> ApiResultDTO updateResponse(responseId, updateParametersDTO)

Update response by ID

Update a specific response by adding, changing or removing answers to prompts. This allows for errors or inaccuracies in historical data to be corrected, or for additional information to be associated with a particular response that was not available when the response was originally collected. Supports client credential authentication tokens.

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityClient
let IdentityClient = defaultClient.authentications['IdentityClient'];
IdentityClient.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let responseId = 789; // Number | The sql ID of the response to be updated.
let updateParametersDTO = new InMomentPublicRestApi.UpdateParametersDTO(); // UpdateParametersDTO | 
apiInstance.updateResponse(responseId, updateParametersDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **responseId** | **Number**| The sql ID of the response to be updated. | 
 **updateParametersDTO** | [**UpdateParametersDTO**](UpdateParametersDTO.md)|  | 

### Return type

[**ApiResultDTO**](ApiResultDTO.md)

### Authorization

[IdentityClient](../README.md#IdentityClient), [IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateResponses

> ApiResultDTO updateResponses(orgId, beginDate, endDate, UNKNOWN_BASE_TYPE)

Update responses by criteria

Update prompt answers on a collection of responses which match the response  criteria. This allows for errors or inaccuracies in historical data to be corrected, or for additional information to be associated with a particular response that was not available when the response was originally collected. Supports client credential authentication tokens. Only responses with &#39;exclusionReason&#39; of &#39;NONE&#39; and &#39;complete&#39; of &#39;true&#39; can be updated.

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityClient
let IdentityClient = defaultClient.authentications['IdentityClient'];
IdentityClient.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let orgId = 789; // Number | The organization ID for the response criteria.
let beginDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Beginning of the date range for the response criteria.
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | End of the date range for the response criteria.
let UNKNOWN_BASE_TYPE = new InMomentPublicRestApi.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.updateResponses(orgId, beginDate, endDate, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | **Number**| The organization ID for the response criteria. | 
 **beginDate** | **Date**| Beginning of the date range for the response criteria. | 
 **endDate** | **Date**| End of the date range for the response criteria. | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**ApiResultDTO**](ApiResultDTO.md)

### Authorization

[IdentityClient](../README.md#IdentityClient), [IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSurveyResponseIncident

> updateSurveyResponseIncident(organizationId, responseId, inlineObject2)

Update survey response incident

Update survey response incident. Allows you to add history items to the incident workflow on a response.

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let organizationId = 789; // Number | 
let responseId = 789; // Number | 
let inlineObject2 = new InMomentPublicRestApi.InlineObject2(); // InlineObject2 | 
apiInstance.updateSurveyResponseIncident(organizationId, responseId, inlineObject2, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**|  | 
 **responseId** | **Number**|  | 
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | 

### Return type

null (empty response body)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## upsertResponse

> UpsertApiResultDTO upsertResponse(orgId, upsertParametersDTO)

Upsert response

Update response by UUID, ID or External ID in this order of precedence. If UUID or ID is supplied and response is not found, a 400 is returned. Otherwise if no response is found and UUID or ID has not been supplied, the response will be created. 

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: IdentityClient
let IdentityClient = defaultClient.authentications['IdentityClient'];
IdentityClient.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: IdentityUser
let IdentityUser = defaultClient.authentications['IdentityUser'];
IdentityUser.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.ResponsesApi();
let orgId = 789; // Number | ID of the organization
let upsertParametersDTO = new InMomentPublicRestApi.UpsertParametersDTO(); // UpsertParametersDTO | 
apiInstance.upsertResponse(orgId, upsertParametersDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | **Number**| ID of the organization | 
 **upsertParametersDTO** | [**UpsertParametersDTO**](UpsertParametersDTO.md)|  | 

### Return type

[**UpsertApiResultDTO**](UpsertApiResultDTO.md)

### Authorization

[IdentityClient](../README.md#IdentityClient), [IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

