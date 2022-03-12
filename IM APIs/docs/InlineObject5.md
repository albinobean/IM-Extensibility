# InMomentPublicRestApi.InlineObject5

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gatewayAlias** | **String** | The alias of an outbound survey gateway. | 
**callerId** | **String** | Caller ID for phone campaigns. Required if there is no default configured on the campaign. | [optional] 
**phoneNumber** | **String** | Phone number to recieve call or SMS if gateway has phone or SMS campaign | [optional] 
**secondaryPhoneNumber** | **String** |  | [optional] 
**email** | **String** | Email to be used if gateway has email campaign | [optional] 
**mergeBindings** | [**[SurveyInitOutboundMergeBindings]**](SurveyInitOutboundMergeBindings.md) | Set of key values to used when generating texts (email subject, email body, sms body, etc) | [optional] 
**parameters** | [**[SurveyInitOutboundParameters]**](SurveyInitOutboundParameters.md) |  | [optional] 


