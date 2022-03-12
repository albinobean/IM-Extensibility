# InMomentPublicRestApi.RequestsApi

All URIs are relative to *http://localhost/api/rest/1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**initiateInboundPhoneSurvey**](RequestsApi.md#initiateInboundPhoneSurvey) | **POST** /survey/init/inbound/phone | Initiate inbound phone survey request
[**initiateInboundSurvey**](RequestsApi.md#initiateInboundSurvey) | **POST** /survey/init/inbound | Initiate inbound survey request
[**initiateOutboundSurvey**](RequestsApi.md#initiateOutboundSurvey) | **POST** /survey/init/outbound | Initiate outbound survey request



## initiateInboundPhoneSurvey

> ApiResultDTO initiateInboundPhoneSurvey(inlineObject3)

Initiate inbound phone survey request

An inbound phone survey request informs the InMoment platform of your intent to transfer a phone call into a phone survey hosted by the InMoment platform. This request temporarily reserves a phone number that the current call can be transferred to.

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

let apiInstance = new InMomentPublicRestApi.RequestsApi();
let inlineObject3 = new InMomentPublicRestApi.InlineObject3(); // InlineObject3 | 
apiInstance.initiateInboundPhoneSurvey(inlineObject3, (error, data, response) => {
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
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | 

### Return type

[**ApiResultDTO**](ApiResultDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## initiateInboundSurvey

> ApiResultDTO initiateInboundSurvey(inlineObject4)

Initiate inbound survey request

Used for a delayed entry into the system. Send key metrics about each user that may take the survey (phone/web) and then give them a unique key to enter at the beginning of the survey. When they enter their key, details will be appended to the responses they give.

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

let apiInstance = new InMomentPublicRestApi.RequestsApi();
let inlineObject4 = new InMomentPublicRestApi.InlineObject4(); // InlineObject4 | 
apiInstance.initiateInboundSurvey(inlineObject4, (error, data, response) => {
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
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | 

### Return type

[**ApiResultDTO**](ApiResultDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## initiateOutboundSurvey

> ApiResultDTO initiateOutboundSurvey(inlineObject5)

Initiate outbound survey request

Outbound survey requests allow you to extend an invitation to a customer to participate in a survey hosted by the InMoment survey system. This invitation can be send to the customer via one of the following methods, depending on the configuration of the outbound campaign in the InMoment platform: SMS (Text Message), Email, Phone call.  The request may be rejected if it violates contact limits configured on the campaign.

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

let apiInstance = new InMomentPublicRestApi.RequestsApi();
let inlineObject5 = new InMomentPublicRestApi.InlineObject5(); // InlineObject5 | 
apiInstance.initiateOutboundSurvey(inlineObject5, (error, data, response) => {
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
 **inlineObject5** | [**InlineObject5**](InlineObject5.md)|  | 

### Return type

[**ApiResultDTO**](ApiResultDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

