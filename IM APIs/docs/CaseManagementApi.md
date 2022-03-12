# InMomentPublicRestApi.CaseManagementApi

All URIs are relative to *http://localhost/api/rest/1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**caseGetCases**](CaseManagementApi.md#caseGetCases) | **GET** /case/org/{orgId}/cases | Get case data
[**caseGetCasesWithFilter**](CaseManagementApi.md#caseGetCasesWithFilter) | **POST** /case/org/{orgId}/cases | Get case data with filter



## caseGetCases

> PublicKasePage caseGetCases(orgId, opts)

Get case data

Get case data for a given organization and date range. Request is paginated.

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

let apiInstance = new InMomentPublicRestApi.CaseManagementApi();
let orgId = 789; // Number | 
let opts = {
  'pageIndex': 0, // Number | 
  'pageSize': 10 // Number | 
};
apiInstance.caseGetCases(orgId, opts, (error, data, response) => {
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
 **pageIndex** | **Number**|  | [optional] [default to 0]
 **pageSize** | **Number**|  | [optional] [default to 10]

### Return type

[**PublicKasePage**](PublicKasePage.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## caseGetCasesWithFilter

> PublicKasePage caseGetCasesWithFilter(orgId, opts)

Get case data with filter

Get case data for a given organization and date range. Request is paginated.

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

let apiInstance = new InMomentPublicRestApi.CaseManagementApi();
let orgId = 789; // Number | 
let opts = {
  'pageIndex': 0, // Number | 
  'pageSize': 10, // Number | 
  'inlineObject': new InMomentPublicRestApi.InlineObject() // InlineObject | 
};
apiInstance.caseGetCasesWithFilter(orgId, opts, (error, data, response) => {
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
 **pageIndex** | **Number**|  | [optional] [default to 0]
 **pageSize** | **Number**|  | [optional] [default to 10]
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**PublicKasePage**](PublicKasePage.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

