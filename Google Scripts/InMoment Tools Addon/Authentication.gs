function saveCredentialsForTesting(){
  var pw='';
  var props=PropertiesService.getUserProperties();
  props.setProperty('password',pw);
  props.setProperty('username','john.sanchez@maritzcx.com')
  props.setProperty('surveyEndpoint','https://sampleapi.allegiancetech.com');
  props.setProperty('caseEndpoint','https://caseapi.allegiancetech.com/CaseManagement.svc');
  props.setProperty('importEndpoint','https://dataimportapi.allegiancetech.com/api');
  props.setProperty('site','paychex.allegiancetech.com');
}
function testingClient(){
  var props=PropertiesService.getUserProperties();
  return imClient(props.getProperty('surveyEndpoint'),props.getProperty('caseEndpoint'),props.getProperty('importEndpoint'),props.getProperty('site'),props.getProperty('username'),props.getProperty('password'));
}
function unitTestMaritzCXLogin() {
 maritzCXLogin.login("https://caseapi.allegiancetech.com/CaseManagement.svc","paychex.allegiancetech.com","john.sanchez@maritzcx.com","Albinobean1!");
 Logger.log(maritzCXLogin.token);
 Logger.log(maritzCXLogin.endPoint);
}

function unitTestMaritzCXLoginToCase() {
 maritzCXLoginToCase.login();
 Logger.log(maritzCXLoginToCase.token);
 Logger.log(maritzCXLoginToCase.endPoint);
}

//var maritzCXLogin = {
//  token: '',
//  endPoint:' ',
//  login: function(endPoint,companyName,userName,passWord){
////    var companyName=getSite();
//    this.endPoint = endPoint;
//    if(this.endPoint.substring(0,8)!="https://"){this.endPoint="https://" + this.endPoint;}
////    userName = getUserName();
////    passWord = getPassword();
//    
//      var options =
//      {
//        "method" : "post",
//        "contentType" : "application/json",
//        "payload" : '{ "userName": "'+userName+'","password": "'+passWord+'","companyName": "'+companyName+'"}',
//        "muteHttpExceptions": true
//      };
//      
//      try {
//        var response = UrlFetchApp.fetch(this.endPoint+"/EmailImport.HttpService.svc/web/authenticate", options);
//      
//        if (response.getResponseCode()!=200) {
//          Logger.log(response.getResponseCode());
////          triggerAlerts("API (authenticate) returned HTTP error - HTTP:" +response.getResponseCode());
//          var resp=response.getContentText();
//          console.log(resp);
//          return resp;
//        } 
//        var json = response.getContentText();
//        var data = JSON.parse(json);
//         this.token = data["AuthenticateResult"];
// 
//      }
//      catch(err) {
//        Logger.log(err.message);
//      }
//  }
//};
var authorizedUsers=['john.sanchez@inmoment.com','stori.fearing@inmoment.com','dellapi'];
function isUserAuthorized(email){
  return authorizedUsers.indexOf(email.toLowerCase().replace('maritzcx.com','inmoment.com'))>=0;
}
var maritzCXLoginToCase = {
  token: '',
  endPoint:' ',
  login: function(endPoint,companyName,userName,passWord){
//    if(companyName==undefined || companyName==''){companyName=getSite();}
//    this.endPoint = getCaseEndPoint();
    userName='';
    if(authorizedUsers.indexOf(userName.toLowerCase())<0) return;
    if(this.endPoint.substring(0,8)!="https://"){this.endPoint="https://" + this.endPoint;}
//    var userName = getUserName();
//    var passWord = getPassword();
      
      var options =
      {
        "method" : "post",
        "contentType" : "application/json",
        "payload" : '{ "userName": "'+userName+'","password": "'+passWord+'","companyName": "'+companyName+'"}',
        "muteHttpExceptions": true
      };
      
      try {
        var response = UrlFetchApp.fetch(this.endPoint+"/authenticate", options);
      
        if (response.getResponseCode()!=200) {
          Logger.log(response.getResponseCode());
          triggerAlerts("API (authenticate) returned HTTP error - HTTP:" +response.getResponseCode());
          return;
        } 
        var json = response.getContentText();
        var data = JSON.parse(json);
         this.token = data["AuthenticateResult"].token;
 
      }
      catch(err) {
        Logger.log(err.message);
      }
  }
};
/*
* @param {string} endPoint
* @param {string} resource
* @param {string} method
* @param {object} payload
* @return {object} response object
*/
function PostMCXAPICall(endpoint,resource,payload){
  var options={
    method:'post',
    contentType:'application/json',
    muteHttpExceptions:true
  }
  if(payload){
    options['payload']=JSON.stringify(payload);
  }
  endpoint=endpoint.replace(/\/$/,'');
  resource=resource.replace(/^\//,'');
  var resp=UrlFetchApp.fetch(endpoint + '/' + resource,options);
  if(resp.getResponseCode()==200){
    return resp;
  } else {
    throw new Error(resp.getResponseCode() + ': ' + resp.getContentText());
  }
  
}
function testEmailLists(){
  getEmailListsBySurveyId("https://sampleapi.allegiancetech.com","ae934677-9e96-4399-99a2-a2c8e965340e",474);
}


/**
* @param {string} endPoint
* @param {string} token
* @param {number} surveyId
* @param {boolean} xmlIndent OPTIONAL
* @param {string} filterXml OPTIONAL
* @return {[Object]} EmailListObjects
*/
function getEmailListsBySurveyId(endPoint,token,surveyId,xmlIndent,filterXml) {
  var payload={
    token:token,
    surveyId:surveyId,
    xmlIndent:xmlIndent
  }
  var resp=PostMCXAPICall(endPoint,'/HttpService.svc/web/getEmailListsBySurveyId',payload);
  var json=resp.getContentText();
  if(json){
    var o=JSON.parse(json);
    var xml= o['GetEmailListsBySurveyIdResult'];
    
  } else {
    throw resp;
  }  
}
/**
* @param {string} endpoint
* @param {string} resource
* @param {object} payload
* @return {promise} promise object
*/
function mcxPostPromise(endpoint,resource,payload){
  return new Promise(function(resolve,reject){
    endpoint=endpoint.replace(/^\//,'');
    resource=resource.replace(/^\//,'');
//    var resp=UrlFetchApp.fetch(endpoint + '/' + resource,options);
    
    var resp=PostMCXAPICall(endpoint,resource,payload);
    if(resp.getResponseCode()==200){
      resolve(JSON.parse(resp.getContentText()));
    } else {
      reject(new Error(resp.getResponseCode() + ': ' + resp.getContentText()));
    }
  }); 
//  return promise;
}
function GetEmailListsBySurveyIdResult(xml){
  var emailLists=[];
  var document=XmlService.parse(xml)
  var root=document.getRootElement();
  var lists=root.getChildren('EmailLists');
  for(var i=0;i<lists.length;i++){
    var l=lists[i];
    var list=[];
    list['EmailListId']=getAttribute(l.getChild('EmailListId').getText());
    list['Description']=getAttribute(l.getChild('Description').getText());
    list['SurveyId']=getAttribute(l.getChild('SurveyId').getText());
    list['UploadedOn']=formatTimeStamp(getAttribute(l.getChild('UploadedOn').getText()));
    list['InvitedOn']=formatTimeStamp(getAttribute(l.getChild('InvitedOn').getText()));
    list['IsRolling']=getAttribute(l.getChild('IsRolling').getText());
  }
}
function surveyToken(client){
  var payload={
    userName:client.username,
    password:client.password,
    companyName:client.site
  };
  var resp=PostMCXAPICall(client.surveyEndpoint,'/EmailImport.HttpService.svc/web/authenticate',payload);
    if(resp.getResponseCode()==200){
      var o=JSON.parse(resp.getContentText());
      return o['AuthenticateResult'];
    } else {
      throw new Error(resp.getResponseCode() + ': ' + resp.getContentText());
    }
}
function surveyTokenPromise(client){
  var payload={
    userName:client.username,
    password:client.password,
    companyName:client.site
  };
  return mcxPostPromise(client.surveyEndpoint,'/EmailImport.HttpService.svc/web/authenticate',payload).then(function(result){
    client.surveyToken=result['AuthenticateResult'];
    return new Promise(function(resolve,reject){
      resolve(result['AuthenticateResult']);
    });
    
  });
}
function imClient(surveyEndpoint,caseEndpoint,importEndpoint,site,username,password){
  var client= {
    site:site,
    username:username,
    password:password,
    surveyEndpoint:surveyEndpoint,
    caseEndpoint:caseEndpoint,
    importEndpoint:importEndpoint,
    caseToken:'',
    surveyToken:''
    
//    tokenPromise:surveyTokenPromise(this)
  }
//  client.surveyToken=surveyToken(client);
  client.surveyTokenPromise=surveyTokenPromise(client);
  client.surveys=async function(){
    getSurveyList(client).then(function(result){return result;});
    return 
  }
  return client;

}

async function getSurveyList(client,filterXml){
  return client.surveyTokenPromise.then(function(result){
    var payload =  {
      token:result
    };
    var endpoint=client.surveyEndpoint;
    return mcxPostPromise(client.surveyEndpoint,"/EmailImport.HttpService.svc/web/getSurveyList",payload).then(function(result) {
      return new Promise(function(resolve,reject){
        var surveys=result["GetSurveyListResult"];
        for(var i=0;i<surveys.length;i++){
          var s=surveys[i];
          s.sourceName=s.Source==0 ? 'Desktop':'Bonfire';
          s.endDate=s.CutOffDate ? timeStampToDate(s.CutOffDate): timeStampToDate(s.InactiveDate);
          s.Link=function(prepop){
            var url='https://' + client.site + '/cgi-bin/qwebcorporate.dll?idx=' + s.SurveyCode;
            for(var ky in prepop){
              if(ky!='' && prepop[ky]!='' && ky && prepop[ky]){
                url+='&' + ky + '=' + prepop[ky];
              }
            }
            return url;
          }
          s.PreviewLink=function(prepop){
            var url=this.Link(prepop);
            return url.replace('?idx=' + s.SurveyCode,'?idx=' + s.SurveyCode + '&preview=1');
          }
          s.DesignPreviewLink=function(prepop){
            var url=this.PreviewLink(prepop);
            return url.replace('&preview=1', '&preview=1&design=1');
          }
          
        }
        client.surveys=surveys;
        resolve(surveys);
      });
    });
  });
  
}
function getClient(){
  imClient('https://sampleapi.allegiancetech.com','https://caseapi.allegiancetech.com/CaseManagement.svc','https://dataimportapi.allegiancetech.com/api','paychex.allegiancetech.com','92dd6dc5-95de-4945-909f-e8644fb361f8');
}
function testClient(){
  var pw=PropertiesService.getUserProperties().getProperty("password");
  var c= testingClient();
  var early=c.surveys();
  c.surveyPromise.then(function(result){
    var surveys=result;
    var s=surveys[0];
    var prepop={
      first:'John',
      last:'Sanchez'
    }
    var link=s.DesignPreviewLink(prepop);
    console.log(link);
  });
  var endpoint=c.surveyEndpoint;
//  token.then(x => console.log(x));
//  var surveys=c.surveys;
//  surveys.then(function(result){
//    resolve(result);
//    console.log(result.length)
//  });
}
