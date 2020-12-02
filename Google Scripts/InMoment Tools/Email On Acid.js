var sandbox=false;
var EoAToken='oiukjlnsdoinnsoidjw';
var WB=SpreadsheetApp.getActive();
function EmailOnAcidAuthToken(){
  if(sandbox) return Utilities.base64Encode('sandbox:sandbox');
  var token=PropertiesService.getDocumentProperties().getProperty(EoAToken);
  if(token){
    return token;
  } else {
    var ui=SpreadsheetApp.getUi();
    var username=ui.prompt('Email on Acid API Key',"Enter your API Key",ui.ButtonSet.OK_CANCEL).getResponseText();
    var pw=ui.prompt('Email on Acid Password',"Enter your password",ui.ButtonSet.OK_CANCEL).getResponseText();
    token=Utilities.base64EncodeWebSafe(username + ':' + pw);
    if(token){
      PropertiesService.getDocumentProperties().setProperty(EoAToken,token);
      return token;
    }
  }
}
function resetCredentials(){
  PropertiesService.getDocumentProperties().deleteProperty(EoAToken);
}
function testAuth(){
  var token = EmailOnAcidAuthToken();
  var headers={
    authorization: 'Basic ' + token
  };

  var options={
    headers: headers,
    method: "get",
    muteHttpExceptions: true
  };
  var resp = UrlFetchApp.fetch('https://api.emailonacid.com/v5/auth',options);
  
  if(resp.getResponseCode()==200){
    var json=resp.getContentText();
    var o=JSON.parse(json);
    return o['success'];
  } else {
    return false;
  }
}
function createEmailOnAcidTest(subject,html,clients,imageBlocking) {
  var token = EmailOnAcidAuthToken();
  var headers={
    accept: 'application/json',
    authorization: APIToken()
  };

  var options={
    headers: headers,
    method: "post",
    contentType: 'application/json',
    "muteHttpExceptions": true,
    subject:subject,
    html:html,
    clients:clients,
    image_blocking:imageBlocking
  };
  var resp = UrlFetchApp.fetch('https://api.emailonacid.com/v5/email/tests',options);
  if(resp.getResponseCode()==200){
    var content=resp.getContentText();
    try {
      var dataAll = JSON.parse(content); 
    }
    catch (err) {
      SpreadsheetApp.getUi().alert(content);
      return;
    }
    return(dataAll["id"]);
  }
}
function getEmailOnAcidResults(testId){
  var token = EmailOnAcidAuthToken();
  var headers={
    accept: 'application/json',
    authorization: APIToken()
  };

  var options={
    headers: headers,
    method: "post",
    contentType: 'application/json',
    "muteHttpExceptions": true
  };
  var resp = UrlFetchApp.fetch(Utilities.formatString('https://api.emailonacid.com/v5/email/tests/%f/results', testId),options);
  if(resp.getResponseCode()==200){
    var content=resp.getContentText();
    try {
      var dataAll = JSON.parse(content); 
    }
    catch (err) {
      SpreadsheetApp.getUi().alert(content);
      return;
    }
    return(dataAll); //Object with the client names as parameters holding an object
//    var exampleResponse={
//      "outlook03": {
//        "id": "outlook03",
//        "display_name": "Outlook 2003",
//        "client": "Outlook 2003",
//        "os": "Windows",
//        "category": "Application",
//        "screenshots": {
//          "default": "<url>",
//          "no_images": "<url>"
//        },
//        "thumbnail": "<url>",
//        "full_thumbnail": "<url>",
//        "status": "Processing",
//        "status_details": {
//          "submitted": 1468789495,
//          "attempts": 1
//        }
//      },
//      "iphone6p_9":{...}
//    }
  }
}

function getAvailableClients(){
  var token = EmailOnAcidAuthToken();
  var headers={
    accept: 'application/json',
    authorization: 'Basic ' + token
  };

  var options={
    headers: headers,
    method: "get",
    contentType: 'application/json',
    "muteHttpExceptions": true
  };
  var resp = UrlFetchApp.fetch('https://api.emailonacid.com/v5/email/clients',options);
  if(resp.getResponseCode()==200){
    var content=resp.getContentText();
    try {
      var dataAll = JSON.parse(content); 
    }
    catch (err) {
      SpreadsheetApp.getUi().alert(content);
      return;
    }
    return(dataAll['clients']);
  }
}
function updateClients(){
  var clients=getAvailableClients();
  var WS=WB.getSheetByName('Email Clients');
  clearSheet(WS.getName(),2);
  console.log(clients);
  for(var c in clients){
    var client=clients[c];
    WS.appendRow([client.id,client.client,client.os,client.category,client.rotate,client.image_blocking,client.default])
  }
  WS.getRange(2,5,WS.getLastRow()-1,4).insertCheckboxes(); //Add an extra column for the INCLUDE field
  
}
