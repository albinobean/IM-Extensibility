# InMomentPublicRestApi.SurveyMetadataApi

All URIs are relative to *http://localhost/api/rest/1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metadataGetDataField**](SurveyMetadataApi.md#metadataGetDataField) | **GET** /metadata/datafield/{dataFieldId} | Get data field by ID
[**metadataGetGateway**](SurveyMetadataApi.md#metadataGetGateway) | **GET** /metadata/gateway/{gatewayId} | Get survey gateway by ID
[**metadataGetGatewayParams**](SurveyMetadataApi.md#metadataGetGatewayParams) | **GET** /metadata/gatewayParams/{gatewayId} | Get survey gateway params by ID
[**metadataGetGatewaysByIds**](SurveyMetadataApi.md#metadataGetGatewaysByIds) | **GET** /metadata/gateways | Get survey gateways by IDs
[**metadataGetGatewaysByOrgId**](SurveyMetadataApi.md#metadataGetGatewaysByOrgId) | **GET** /metadata/gateways/{orgId} | Get survey gateways by organization ID
[**metadataGetOffer**](SurveyMetadataApi.md#metadataGetOffer) | **GET** /metadata/offer/{offerId} | Get offer by ID
[**metadataGetSurvey**](SurveyMetadataApi.md#metadataGetSurvey) | **GET** /metadata/survey/{surveyId} | Get survey by ID
[**metadataGetUnit**](SurveyMetadataApi.md#metadataGetUnit) | **GET** /metadata/unit/{unitId} | Get unit by ID
[**metadataGetUser**](SurveyMetadataApi.md#metadataGetUser) | **GET** /metadata/user/{userId} | Get user by ID



## metadataGetDataField

> DataFieldDTO metadataGetDataField(dataFieldId)

Get data field by ID

Get data field by ID

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

let apiInstance = new InMomentPublicRestApi.SurveyMetadataApi();
let dataFieldId = 789; // Number | 
apiInstance.metadataGetDataField(dataFieldId, (error, data, response) => {
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
 **dataFieldId** | **Number**|  | 

### Return type

[**DataFieldDTO**](DataFieldDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## metadataGetGateway

> GatewayDTO metadataGetGateway(gatewayId)

Get survey gateway by ID

Get survey gateway by ID

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

let apiInstance = new InMomentPublicRestApi.SurveyMetadataApi();
let gatewayId = 789; // Number | 
apiInstance.metadataGetGateway(gatewayId, (error, data, response) => {
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
 **gatewayId** | **Number**|  | 

### Return type

[**GatewayDTO**](GatewayDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## metadataGetGatewayParams

> WebSurveyGatewayDTO metadataGetGatewayParams(gatewayId)

Get survey gateway params by ID

Get survey gateway params by ID

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

let apiInstance = new InMomentPublicRestApi.SurveyMetadataApi();
let gatewayId = 789; // Number | 
apiInstance.metadataGetGatewayParams(gatewayId, (error, data, response) => {
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
 **gatewayId** | **Number**|  | 

### Return type

[**WebSurveyGatewayDTO**](WebSurveyGatewayDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## metadataGetGatewaysByIds

> [WebSurveyGatewayDTO] metadataGetGatewaysByIds(gatewayIds)

Get survey gateways by IDs

Get survey gateways by IDs

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

let apiInstance = new InMomentPublicRestApi.SurveyMetadataApi();
let gatewayIds = [null]; // [Number] | 
apiInstance.metadataGetGatewaysByIds(gatewayIds, (error, data, response) => {
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
 **gatewayIds** | [**[Number]**](Number.md)|  | 

### Return type

[**[WebSurveyGatewayDTO]**](WebSurveyGatewayDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## metadataGetGatewaysByOrgId

> [WebSurveyGatewayDTO] metadataGetGatewaysByOrgId(orgId)

Get survey gateways by organization ID

Get survey gateways by organization ID

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

let apiInstance = new InMomentPublicRestApi.SurveyMetadataApi();
let orgId = 789; // Number | 
apiInstance.metadataGetGatewaysByOrgId(orgId, (error, data, response) => {
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

### Return type

[**[WebSurveyGatewayDTO]**](WebSurveyGatewayDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## metadataGetOffer

> OfferDTO metadataGetOffer(offerId)

Get offer by ID

Get offer by ID

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

let apiInstance = new InMomentPublicRestApi.SurveyMetadataApi();
let offerId = 789; // Number | 
apiInstance.metadataGetOffer(offerId, (error, data, response) => {
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
 **offerId** | **Number**|  | 

### Return type

[**OfferDTO**](OfferDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## metadataGetSurvey

> SurveyDTO metadataGetSurvey(surveyId)

Get survey by ID

Get survey by ID

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

let apiInstance = new InMomentPublicRestApi.SurveyMetadataApi();
let surveyId = 789; // Number | 
apiInstance.metadataGetSurvey(surveyId, (error, data, response) => {
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
 **surveyId** | **Number**|  | 

### Return type

[**SurveyDTO**](SurveyDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## metadataGetUnit

> UnitDTO metadataGetUnit(unitId)

Get unit by ID

Get unit by ID

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

let apiInstance = new InMomentPublicRestApi.SurveyMetadataApi();
let unitId = 789; // Number | 
apiInstance.metadataGetUnit(unitId, (error, data, response) => {
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
 **unitId** | **Number**|  | 

### Return type

[**UnitDTO**](UnitDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## metadataGetUser

> UserAccountDTO metadataGetUser(userId)

Get user by ID

Get user by ID

### Example

```javascript
import InMomentPublicRestApi from 'in_moment_public_rest_api';
let defaultClient = InMomentPublicRestApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: Legacy
let Legacy = defaultClient.authentications['Legacy'];
Legacy.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new InMomentPublicRestApi.SurveyMetadataApi();
let userId = 789; // Number | 
apiInstance.metadataGetUser(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**UserAccountDTO**](UserAccountDTO.md)

### Authorization

[Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

