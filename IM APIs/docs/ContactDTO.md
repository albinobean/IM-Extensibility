# InMomentPublicRestApi.ContactDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the contact. Must be null on create. | [optional] 
**organizationId** | **Number** | Organization ID of the contact. | 
**accountId** | **Number** | Account ID of the contact. | [optional] 
**name** | [**ContactDTOName**](ContactDTOName.md) |  | [optional] 
**email** | **String** | E-mail address of the contact. | [optional] 
**phone** | **String** | Phone number of the contact. | [optional] 
**loyaltyNumber** | **String** | Loyalty number of the contact. | [optional] 
**salesforceId** | **String** | Salesforce ID of the contact. | [optional] 
**facebookId** | **String** | Facebook ID of the contact. | [optional] 
**twitterId** | **String** | Twitter ID of the contact. | [optional] 
**address** | [**ContactDTOAddress**](ContactDTOAddress.md) |  | [optional] 
**fields** | [**[ContactDTOFields]**](ContactDTOFields.md) | A list of custom contact fields. This list must contain no duplicate fields (i.e two fields with the same fieldId). | [optional] 
**creationTime** | **String** | Creation time of the contact. | [optional] 
**lastModifiedTime** | **String** | Last modification time of the contact. | [optional] 


