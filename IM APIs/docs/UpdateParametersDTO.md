# InMomentPublicRestApi.UpdateParametersDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**[UpdateParametersDTOValues]**](UpdateParametersDTOValues.md) |  | [optional] 
**dateOfSurvey** | **Date** | Date of survey in the timezone of the location of the response. Can be in the format of either \&quot;M/dd/yyyy h:mm:ss a\&quot; (where a is AM or PM) or a ISO 8601 date time. | [optional] 
**updateScore** | **Boolean** | Recalculate response scores. | [optional] [default to false]
**forceUpdate** | **Boolean** | Force update of prompt answer even if the value has not changed. (Useful for triggering prompt events) | [optional] [default to false]
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




