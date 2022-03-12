# InMomentPublicRestApi.ResponseDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**surveyGatewayId** | **Number** |  | [optional] 
**surveyGatewayName** | **String** |  | [optional] 
**surveyGatewayAlias** | **String** |  | [optional] 
**surveyGatewayDnis** | **String** |  | [optional] 
**surveyId** | **Number** |  | [optional] 
**surveyName** | **String** |  | [optional] 
**surveyDescription** | **String** |  | [optional] 
**externalId** | **String** |  | [optional] 
**externalCallRecordingId** | **String** |  | [optional] 
**lastModTime** | **Date** |  | [optional] 
**beginTime** | **Date** |  | [optional] 
**dateOfService** | **Date** |  | [optional] 
**redemptionCode** | **String** |  | [optional] 
**employeeCode** | **String** |  | [optional] 
**loyaltyNumber** | **String** |  | [optional] 
**minutes** | **Number** |  | [optional] 
**complete** | **Boolean** |  | [optional] [default to false]
**read** | **Boolean** |  | [optional] [default to false]
**incidentManagementState** | **String** |  | [optional] 
**ani** | **String** |  | [optional] 
**ipAddress** | **String** |  | [optional] 
**cookieUID** | **String** |  | [optional] 
**offerId** | **Number** |  | [optional] 
**offerName** | **String** |  | [optional] 
**offerCode** | **String** |  | [optional] 
**unitId** | **Number** |  | [optional] 
**unitExternalId** | **String** |  | [optional] 
**unitName** | **String** |  | [optional] 
**organizationId** | **Number** |  | [optional] 
**organizationName** | **String** |  | [optional] 
**assignedUserId** | **Number** |  | [optional] 
**assignedUserName** | **String** |  | [optional] 
**assignedUserEmail** | **String** |  | [optional] 
**exclusionReason** | **String** |  | [optional] [default to &#39;NONE&#39;]
**mode** | **String** |  | [optional] 
**answers** | [**[AnswerDTO]**](AnswerDTO.md) |  | [optional] 
**incidents** | [**[IncidentDTO]**](IncidentDTO.md) |  | [optional] 
**alerts** | [**[AlertDTO]**](AlertDTO.md) |  | [optional] 
**scores** | [**[ResponseDTOScores]**](ResponseDTOScores.md) |  | [optional] 
**tags** | [**[TagDTO]**](TagDTO.md) |  | [optional] 
**url** | **String** |  | [optional] 
**tagsString** | **String** |  | [optional] 
**socialReview** | [**ResponseDTOSocialReview**](ResponseDTOSocialReview.md) |  | [optional] 
**contactId** | **String** |  | [optional] 
**contact** | [**ContactDTO**](ContactDTO.md) |  | [optional] 



## Enum: ExclusionReasonEnum


* `NONE` (value: `"NONE"`)

* `BLACKLISTED` (value: `"BLACKLISTED"`)

* `GATEWAY_REPEAT_LIMIT_PER_RESPONDENT` (value: `"GATEWAY_REPEAT_LIMIT_PER_RESPONDENT"`)

* `OVERAGE` (value: `"OVERAGE"`)

* `IP_REPEAT_LIMIT_PER_RESONDENT` (value: `"IP_REPEAT_LIMIT_PER_RESONDENT"`)

* `OFFENSIVE_LANGUAGE` (value: `"OFFENSIVE_LANGUAGE"`)

* `SPEEDER` (value: `"SPEEDER"`)

* `DELETED` (value: `"DELETED"`)

* `LAG_TIME` (value: `"LAG_TIME"`)

* `INVALID_ANSWER` (value: `"INVALID_ANSWER"`)

* `DIGITAL_FINGERPRINT_REPEAT_LIMIT_PER_RESONDENT` (value: `"DIGITAL_FINGERPRINT_REPEAT_LIMIT_PER_RESONDENT"`)

* `LOYALTY_NUMBER_REPEAT_LIMIT_PER_RESONDENT` (value: `"LOYALTY_NUMBER_REPEAT_LIMIT_PER_RESONDENT"`)

* `FRAUD` (value: `"FRAUD"`)

* `PROBABILITY_THROTTLE` (value: `"PROBABILITY_THROTTLE"`)

* `TIME_THROTTLE` (value: `"TIME_THROTTLE"`)

* `REPEAT_LIMIT_PER_RESPONDENT` (value: `"REPEAT_LIMIT_PER_RESPONDENT"`)

* `PERSONAL_IDENTIFYING_INFORMATION_LIMIT_PER_RESPONDENT` (value: `"PERSONAL_IDENTIFYING_INFORMATION_LIMIT_PER_RESPONDENT"`)

* `BLANK_TOMBSTONE_LIMIT_PER_RESPONDENT` (value: `"BLANK_TOMBSTONE_LIMIT_PER_RESPONDENT"`)

* `EXCLUSION_PERIOD` (value: `"EXCLUSION_PERIOD"`)

* `CERT_CODE_REPEAT_LIMIT_PER_RESPONDENT` (value: `"CERT_CODE_REPEAT_LIMIT_PER_RESPONDENT"`)

* `CONTACT_LIMIT_PER_RESPONDENT` (value: `"CONTACT_LIMIT_PER_RESPONDENT"`)




