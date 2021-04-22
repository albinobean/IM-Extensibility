// const emailListFile=[69,109,97,105,108,44,81,117,101,115,116,105,111,110,49,44,81,117,101,115,116,105,111,110,50,10,117,115,101,114,64,100,111,109,97,105,110,46,99,111,109,44,65,44,66];
// const mappingFile=[60,63,120,109,108,32,118,101,114,115,105,111,110,61,34,49,46,48,34,32,101,110,99,111,100,105,110,103,61,34,117,116,102,45,56,34,32,63,62,10,60,69,109,97,105,108,76,105,115,116,77,97,112,112,105,110,103,68,101,102,105,110,105,116,105,111,110,32,83,117,114,118,101,121,67,111,100,101,61,34,54,87,51,52,83,71,34,32,78,97,109,101,61,34,77,121,32,69,109,97,105,108,32,76,105,115,116,34,32,68,101,108,105,109,105,116,101,114,61,34,44,34,32,68,117,112,108,105,99,97,116,101,82,117,108,101,61,34,49,34,62,10,32,32,60,78,111,116,105,102,105,99,97,116,105,111,110,69,109,97,105,108,65,100,100,114,101,115,115,101,115,62,10,32,32,32,32,60,78,111,116,105,102,105,99,97,116,105,111,110,69,109,97,105,108,65,100,100,114,101,115,115,62,117,115,101,114,64,110,111,116,105,102,99,97,116,105,111,110,100,111,109,97,105,110,46,99,111,109,60,47,78,111,116,105,102,105,99,97,116,105,111,110,69,109,97,105,108,65,100,100,114,101,115,115,62,10,32,32,60,47,78,111,116,105,102,105,99,97,116,105,111,110,69,109,97,105,108,65,100,100,114,101,115,115,101,115,62,10,32,32,60,83,121,115,116,101,109,70,105,101,108,100,77,97,112,112,105,110,103,115,62,10,32,32,32,32,60,83,121,115,116,101,109,70,105,101,108,100,77,97,112,112,105,110,103,32,83,121,115,116,101,109,70,105,101,108,100,78,97,109,101,61,34,69,109,97,105,108,65,100,100,114,101,115,115,34,32,70,105,108,101,70,105,101,108,100,78,97,109,101,61,34,69,109,97,105,108,34,62,60,47,83,121,115,116,101,109,70,105,101,108,100,77,97,112,112,105,110,103,62,10,32,32,60,47,83,121,115,116,101,109,70,105,101,108,100,77,97,112,112,105,110,103,115,62,10,32,32,60,80,114,101,112,111,112,81,117,101,115,116,105,111,110,77,97,112,112,105,110,103,115,62,10,32,32,32,32,60,80,114,101,112,111,112,81,117,101,115,116,105,111,110,77,97,112,112,105,110,103,32,70,105,108,101,67,111,108,117,109,110,78,97,109,101,61,34,81,117,101,115,116,105,111,110,49,34,32,81,117,101,115,116,105,111,110,84,97,103,61,34,112,108,97,99,101,104,111,108,100,101,114,83,104,111,114,116,34,62,60,47,80,114,101,112,111,112,81,117,101,115,116,105,111,110,77,97,112,112,105,110,103,62,10,32,32,32,32,60,80,114,101,112,111,112,81,117,101,115,116,105,111,110,77,97,112,112,105,110,103,32,70,105,108,101,67,111,108,117,109,110,78,97,109,101,61,34,81,117,101,115,116,105,111,110,50,34,32,81,117,101,115,116,105,111,110,84,97,103,61,34,112,108,97,99,101,104,111,108,100,101,114,76,111,110,103,34,62,60,47,80,114,101,112,111,112,81,117,101,115,116,105,111,110,77,97,112,112,105,110,103,62,10,32,32,60,47,80,114,101,112,111,112,81,117,101,115,116,105,111,110,77,97,112,112,105,110,103,115,62,10,60,47,69,109,97,105,108,76,105,115,116,77,97,112,112,105,110,103,68,101,102,105,110,105,116,105,111,110,62];

const eml=bundle.inputData.emailAddress;
const surveyCode=bundle.inputData.surveyCode;
const listName=bundle.inputData.listName;
const prepops=bundle.inputData.prepop; //dictionary
const firstName=bundle.inputData.firstName;
const lastName=bundle.inputData.lastName;
const authKey=bundle.inputData.authKey;
const lang=bundle.inputData.language;
const mappingFile=createMappingFile();
const emailListFile=createEmailListFile();
const options = {
  url: 'https://sampleapi.allegiancetech.com/HttpService.svc/web/newEmailListV2',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  params: {},
  body: {
    'token': bundle.authData.AuthenticateResult,
    'emailListFile': emailListFile,
    'mappingFile':mappingFile,
    'emailListName': bundle.inputData.Name
  }
};

return z.request(options)
  .then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
function str2ab(str) {
  str=str.replace(',','\,').replace(/‘|’/,"'").replace(/“|”/,'"');
  var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);
  for (var i=0, strLen=str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  const vals=bufView.toString();
  return vals.split(',').filter(function(itm){
    return parseInt(itm)<256;
  }).map(function(val){
      return parseInt(val);
  });
      
}
function createEmailListFile(){
  let hdrs=['Email'];
  let vals=[eml];
  
  if(firstName){
    hdrs.push('FirstName');
    vals.push(firstName);
  }
  if(lastName){
    hdrs.push('LastName');
    vals.push(lastName);
  }
  if(lang){
    hdrs.push('Language');
    vals.push(lang);
  }
  if(authKey){
    hdrs.push('AuthKey');
    vals.push(authKey);
  }
  for(let key in prepops){
    if(prepops.hasOwnProperty(key) && prepops[key].length>0){
      hdrs.push(key);
      vals.push(prepops[key]);
    }
  }
  const template= `${hdrs.join(',')}\n${vals.map(function(val){
    return '"' + val.replace(/"/g,'""') + '"'; //Wrap contents in quotes and escape quote characters
  }).join(',')}`
  return str2ab(template);
}
function createMappingFile(){
  let prepopVals='';
  for(let key in prepops){
    if(prepops.hasOwnProperty(key) && prepops[key].length>0){
      prepopVals += `\n    <PrepopQuestionMapping FileColumnName="${key}" QuestionTag="${key}"></PrepopQuestionMapping>`;
    }
  }
  const sfFirstName=firstName ? `\n    <SystemFieldMapping SystemFieldName="FirstName" FileFieldName="FirstName"></SystemFieldMapping>` : ''; '';
  const sfLastName=lastName ? `\n    <SystemFieldMapping SystemFieldName="LastName" FileFieldName="LastName"></SystemFieldMapping>` : '';
  const sfLanguage=lang ? `\n    <SystemFieldMapping SystemFieldName="Language" FileFieldName="Language"></SystemFieldMapping>` : '';
  const sfAuthKey=authKey ? `\n    <SystemFieldMapping SystemFieldName="AuthenticationKey" FileFieldName="AuthKey"></SystemFieldMapping>` : '';
  const template= `
  '<?xml version="1.0" encoding="utf-8" ?>
<EmailListMappingDefinition SurveyCode="${surveyCode}" Name="${listName}" Delimiter="," DuplicateRule="1">
  <NotificationEmailAddresses>
    <NotificationEmailAddress>user@notifcationdomain.com</NotificationEmailAddress>
  </NotificationEmailAddresses>
  <SystemFieldMappings>
    <SystemFieldMapping SystemFieldName="EmailAddress" FileFieldName="Email"></SystemFieldMapping>${sfFirstName}${sfLastName}${sfLanguage}${sfAuthKey}
  </SystemFieldMappings>
  <PrepopQuestionMappings>${prepopVals}
  </PrepopQuestionMappings>
</EmailListMappingDefinition>`
  return str2ab(template);
}