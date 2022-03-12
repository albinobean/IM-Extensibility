# InMomentPublicRestApi.ResponseCheckpointsApi

All URIs are relative to *http://localhost/api/rest/1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInitialAllCheckpoint**](ResponseCheckpointsApi.md#getInitialAllCheckpoint) | **GET** /responses/all/checkpoint/{orgId}/{beginDateTime}/{verbose} | Initialize survey response checkpoint for completed responses
[**getInitialCheckpoint**](ResponseCheckpointsApi.md#getInitialCheckpoint) | **GET** /responses/checkpoint/{orgId}/{beginDateTime}/{verbose} | Initialize survey response checkpoint
[**getSyncBatch**](ResponseCheckpointsApi.md#getSyncBatch) | **PUT** /responses/batch | Get survey responses with checkpoint
[**getV2InitialCheckpoint**](ResponseCheckpointsApi.md#getV2InitialCheckpoint) | **GET** /responses/v2/checkpoint/{organizationId}/{initialCheckpointDate}/{completedOnly}/{verbose} | Initialize survey response checkpoint
[**getV2SyncBatch**](ResponseCheckpointsApi.md#getV2SyncBatch) | **PUT** /responses/v2/batch | Get survey responses with checkpoint



## getInitialAllCheckpoint

> Blob getInitialAllCheckpoint(orgId, beginDateTime, verbose)

Initialize survey response checkpoint for completed responses

Initialize survey response checkpoint for completed responses

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

let apiInstance = new InMomentPublicRestApi.ResponseCheckpointsApi();
let orgId = 789; // Number | 
let beginDateTime = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let verbose = true; // Boolean | 
apiInstance.getInitialAllCheckpoint(orgId, beginDateTime, verbose, (error, data, response) => {
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
 **orgId** | **Number**|  | 
 **beginDateTime** | **Date**|  | 
 **verbose** | **Boolean**|  | 

### Return type

**Blob**

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInitialCheckpoint

> Blob getInitialCheckpoint(orgId, beginDateTime, verbose)

Initialize survey response checkpoint

Initialize survey response checkpoint

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

let apiInstance = new InMomentPublicRestApi.ResponseCheckpointsApi();
let orgId = 789; // Number | 
let beginDateTime = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let verbose = true; // Boolean | 
apiInstance.getInitialCheckpoint(orgId, beginDateTime, verbose, (error, data, response) => {
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
 **orgId** | **Number**|  | 
 **beginDateTime** | **Date**|  | 
 **verbose** | **Boolean**|  | 

### Return type

**Blob**

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSyncBatch

> SyncBatch getSyncBatch(body)

Get survey responses with checkpoint

Get survey responses with checkpoint

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

let apiInstance = new InMomentPublicRestApi.ResponseCheckpointsApi();
let body = null; // Blob | 
apiInstance.getSyncBatch(body, (error, data, response) => {
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
 **body** | **Blob**|  | 

### Return type

[**SyncBatch**](SyncBatch.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getV2InitialCheckpoint

> SyncBatchCheckpoint getV2InitialCheckpoint(organizationId, initialCheckpointDate, completedOnly, verbose)

Initialize survey response checkpoint

Initialize survey response checkpoint. Checkpoints contained in response batches contain information identifying what responses have already been processed and what responses remain to be processed. Checkpoints contain state data in a binary format for both security and bandwidth consideration. Any alteration of checkpoint data will result in the checkpoint being rejected as invalid, so care must be taken to not inadvertently alter or append to the checkpoint.

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

let apiInstance = new InMomentPublicRestApi.ResponseCheckpointsApi();
let organizationId = 789; // Number | 
let initialCheckpointDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let completedOnly = true; // Boolean | Return only completed responses. false = return all responses including incomplete responses.
let verbose = true; // Boolean | Retrieve verbose response data. This means that limited additional information about linked metadata entities will be included in the response (Ex: Gateway Alias, instead of just Gateway ID).
apiInstance.getV2InitialCheckpoint(organizationId, initialCheckpointDate, completedOnly, verbose, (error, data, response) => {
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
 **initialCheckpointDate** | **Date**|  | 
 **completedOnly** | **Boolean**| Return only completed responses. false &#x3D; return all responses including incomplete responses. | 
 **verbose** | **Boolean**| Retrieve verbose response data. This means that limited additional information about linked metadata entities will be included in the response (Ex: Gateway Alias, instead of just Gateway ID). | 

### Return type

[**SyncBatchCheckpoint**](SyncBatchCheckpoint.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV2SyncBatch

> SyncBatch getV2SyncBatch(syncBatchCheckpoint)

Get survey responses with checkpoint

Get survey responses with checkpoint. A new checkpoint is returned with each response batch, and that checkpoint must be provided to the export service when requesting the next response batch. An equivalent (but not necessarily identical) response batch can be re-requested by re-using a checkpoint. However, due to the nature of the change detection algorithm some of the responses contained in the previous response batch may not be present and additional responses may be included.

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

let apiInstance = new InMomentPublicRestApi.ResponseCheckpointsApi();
let syncBatchCheckpoint = new InMomentPublicRestApi.SyncBatchCheckpoint(); // SyncBatchCheckpoint | 
apiInstance.getV2SyncBatch(syncBatchCheckpoint, (error, data, response) => {
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
 **syncBatchCheckpoint** | [**SyncBatchCheckpoint**](SyncBatchCheckpoint.md)|  | 

### Return type

[**SyncBatch**](SyncBatch.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

