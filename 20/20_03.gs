function myFunction20_03_01() {
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperties({'猫': 'にゃーご', '馬': 'ひひーん'});
    
  const properties = scriptProperties.getProperties();
  for (const key in properties) console.log(key, properties[key]);
}

function myFunction20_03_02() {
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.deleteAllProperties();

  console.log(scriptProperties.getProperties()); //{}
}

function myFunction20_03_03() {
  const scriptProperties = PropertiesService.getScriptProperties();
  let count = Number(scriptProperties.getProperty('COUNT'));

  if (count) {
    count++;
    scriptProperties.setProperty('COUNT', count.toString());
  } else {
    scriptProperties.setProperty('COUNT', '1');
  }

  console.log(scriptProperties.getProperty('COUNT'));
}

function myFunction20_03_04() {
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.deleteProperty('COUNT');

  console.log(scriptProperties.getProperties()); //{}
}

function myFunction20_03_05() {
  const userProperties = PropertiesService.getUserProperties();
  const spreadSheetId = userProperties.getProperty('SPREAD_SHEET_ID');
  
  if (spreadSheetId) {
    throw('既にスプレッドシートが存在しています: ' + spreadSheetId);
  } else {
    const ssName = `スタッフ別(${Session.getActiveUser().getEmail()})`;
    const ss = SpreadsheetApp.create(ssName);
    userProperties.setProperty('SPREAD_SHEET_ID', ss.getId());
  }
}
