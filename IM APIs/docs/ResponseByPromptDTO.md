# InMomentPublicRestApi.ResponseByPromptDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**surveyId** | **Number** | The unique identifier of the survey being responded to. | [optional] 
**surveyGatewayId** | **Number** | The unique identifier of the gateway (endpoint) used to collect the response. | [optional] 
**externalId** | **String** | The unique identifier that your system associated with this particular response. Limited to 30 characters. | [optional] 
**unitExternalId** | **String** | The unique identifier your system associates with the unit this response was collected for. This must correspond to a configured unit external ID within the InMoment platform. | [optional] 
**offerCode** | **String** | The offer code (or entry code) used by the respondent to gain access to the survey. | [optional] 
**offerId** | **Number** | The unique identifier of the offer the response was collected in response to. | [optional] 
**beginTime** | **Date** | The begin time of the response, in the time zone that the response was collected in. | [optional] 
**mode** | **Number** |  | [optional] [default to 3]
**answers** | [**[ResponseByPromptDTOAnswers]**](ResponseByPromptDTOAnswers.md) |  | [optional] 
**scores** | [**[ResponseByPromptDTOScores]**](ResponseByPromptDTOScores.md) |  | [optional] 
**responseSource** | **String** | The name of the external response source the survey originates from. | [optional] 
**complete** | **Boolean** | Describes this response as containing a complete set of data. | [optional] [default to true]
**exclusionReason** | **String** | Describes if the data should be excluded for the specified reason. | [optional] [default to &#39;NONE&#39;]



## Enum: ExclusionReasonEnum


* `NONE` (value: `"NONE"`)

* `BLACKLISTED` (value: `"BLACKLISTED"`)

* `GATEWAY_REPEAT_LIMIT_PER_RESPONDENT` (value: `"GATEWAY_REPEAT_LIMIT_PER_RESPONDENT"`)

* `OVERAGE` (value: `"OVERAGE"`)

* `IP_REPEAT_LIMIT_PER_RESPONDENT` (value: `"IP_REPEAT_LIMIT_PER_RESPONDENT"`)

* `OFFENSIVE_LANGUAGE` (value: `"OFFENSIVE_LANGUAGE"`)

* `SPEEDER` (value: `"SPEEDER"`)

* `DELETED` (value: `"DELETED"`)

* `LAG_TIME` (value: `"LAG_TIME"`)

* `INVALID_ANSWER` (value: `"INVALID_ANSWER"`)

* `DIGITAL_FINGERPRINT_REPEAT_LIMIT_PER_RESPONDENT` (value: `"DIGITAL_FINGERPRINT_REPEAT_LIMIT_PER_RESPONDENT"`)

* `LOYALTY_NUMBER_REPEAT_LIMIT_PER_RESPONDENT` (value: `"LOYALTY_NUMBER_REPEAT_LIMIT_PER_RESPONDENT"`)

* `FRAUD` (value: `"FRAUD"`)

* `PROBABILITY_THROTTLE` (value: `"PROBABILITY_THROTTLE"`)

* `TIME_THROTTLE` (value: `"TIME_THROTTLE"`)

* `REPEAT_LIMIT_PER_RESPONDENT` (value: `"REPEAT_LIMIT_PER_RESPONDENT"`)

* `PERSONAL_IDENTIFYING_INFORMATION_LIMIT_PER_RESPONDENT` (value: `"PERSONAL_IDENTIFYING_INFORMATION_LIMIT_PER_RESPONDENT"`)

* `BLANK_TOMBSTONE_LIMIT_PER_RESPONDENT` (value: `"BLANK_TOMBSTONE_LIMIT_PER_RESPONDENT"`)

* `EXCLUSION_PERIOD` (value: `"EXCLUSION_PERIOD"`)

* `CERT_CODE_REPEAT_LIMIT_PER_RESPONDENT` (value: `"CERT_CODE_REPEAT_LIMIT_PER_RESPONDENT"`)

* `VIDEO_RESPONSE_LIMIT_PER_RESPONDENT` (value: `"VIDEO_RESPONSE_LIMIT_PER_RESPONDENT"`)

* `CONTACT_LIMIT_PER_RESPONDENT` (value: `"CONTACT_LIMIT_PER_RESPONDENT"`)

* `REPEAT_LIMIT_PER_REQUEST` (value: `"REPEAT_LIMIT_PER_REQUEST"`)




