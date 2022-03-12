# InMomentPublicRestApi.PublicKasePageContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**owner** | [**PublicKaseEmployee**](PublicKaseEmployee.md) |  | [optional] 
**status** | **String** |  | [optional] 
**expired** | **Boolean** |  | [optional] [default to false]
**overdue** | **Boolean** |  | [optional] [default to false]
**escalated** | **Boolean** |  | [optional] [default to false]
**responseId** | **Number** |  | [optional] 
**creationTime** | **Number** | Creation time as a unix timestamp | [optional] 
**lastModifiedTime** | **Number** | Last modified time as a unix timestamp | [optional] 
**closedTime** | **Number** | Closed time as a unix timestamp | [optional] 
**closedBy** | [**PublicKaseEmployee**](PublicKaseEmployee.md) |  | [optional] 
**closedSurveyResponse** | [**PublicKasePageClosedSurveyResponse**](PublicKasePageClosedSurveyResponse.md) |  | [optional] 
**history** | [**[PublicKasePageHistory]**](PublicKasePageHistory.md) |  | [optional] 


