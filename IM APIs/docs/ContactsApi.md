# InMomentPublicRestApi.ContactsApi

All URIs are relative to *http://localhost/api/rest/1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactCreateContact**](ContactsApi.md#contactCreateContact) | **POST** /contact/createContact | Create contact
[**contactFindByChangesSince**](ContactsApi.md#contactFindByChangesSince) | **GET** /contact/changes/{orgId}/{timestamp} | Get contacts modified after timestamp
[**contactUpdateContact**](ContactsApi.md#contactUpdateContact) | **POST** /contact/update | Update contact
[**contactUpsertContact**](ContactsApi.md#contactUpsertContact) | **POST** /contact/upsert | Upsert contact
[**getContactByContactId**](ContactsApi.md#getContactByContactId) | **GET** /contact/single/{contactId} | Get contact by ID



## contactCreateContact

> ApiResultDTO contactCreateContact(contactDTO)

Create contact

Create a contact. The request ID field must be null or not included. Requester must have access to the organization required by the body.

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

let apiInstance = new InMomentPublicRestApi.ContactsApi();
let contactDTO = new InMomentPublicRestApi.ContactDTO(); // ContactDTO | 
apiInstance.contactCreateContact(contactDTO, (error, data, response) => {
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
 **contactDTO** | [**ContactDTO**](ContactDTO.md)|  | 

### Return type

[**ApiResultDTO**](ApiResultDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## contactFindByChangesSince

> [ContactDTO] contactFindByChangesSince(orgId, timestamp, opts)

Get contacts modified after timestamp

Get contacts modified after timestamp for the given organization ID.

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

let apiInstance = new InMomentPublicRestApi.ContactsApi();
let orgId = 789; // Number | ID of the organization
let timestamp = new Date("2013-10-20T19:20:30+01:00"); // Date | UTC timestamp
let opts = {
  'limit': 100 // Number | 
};
apiInstance.contactFindByChangesSince(orgId, timestamp, opts, (error, data, response) => {
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
 **timestamp** | **Date**| UTC timestamp | 
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**[ContactDTO]**](ContactDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactUpdateContact

> ApiResultDTO contactUpdateContact(contactDTO)

Update contact

Update an existing contact. All fields not supplied remain unchanged. Requester must have access to the organization of the contact being updated.

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

let apiInstance = new InMomentPublicRestApi.ContactsApi();
let contactDTO = new InMomentPublicRestApi.ContactDTO(); // ContactDTO | 
apiInstance.contactUpdateContact(contactDTO, (error, data, response) => {
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
 **contactDTO** | [**ContactDTO**](ContactDTO.md)|  | 

### Return type

[**ApiResultDTO**](ApiResultDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## contactUpsertContact

> ApiResultDTO contactUpsertContact(contactDTO)

Upsert contact

Update a contact if an contact ID is supplied. All fields not supplied remain unchanged. If no ID is supplied, the contact will be created. Any values in creationTime or lastModifiedTime will be ignored. Requester must have access to the organization required by the body.

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

let apiInstance = new InMomentPublicRestApi.ContactsApi();
let contactDTO = new InMomentPublicRestApi.ContactDTO(); // ContactDTO | 
apiInstance.contactUpsertContact(contactDTO, (error, data, response) => {
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
 **contactDTO** | [**ContactDTO**](ContactDTO.md)|  | 

### Return type

[**ApiResultDTO**](ApiResultDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getContactByContactId

> ContactDTO getContactByContactId(contactId)

Get contact by ID

Retrieve a single contact by its unique identifier

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

let apiInstance = new InMomentPublicRestApi.ContactsApi();
let contactId = "contactId_example"; // String | 
apiInstance.getContactByContactId(contactId, (error, data, response) => {
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
 **contactId** | **String**|  | 

### Return type

[**ContactDTO**](ContactDTO.md)

### Authorization

[IdentityUser](../README.md#IdentityUser), [Legacy](../README.md#Legacy)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

