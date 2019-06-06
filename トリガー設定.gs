function setTrigger(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var sht = sheet.getSheets()[0];
  var date = sht.getRange("F1").getValue();
  var setTime = new Date(date.getYear(), date.getMonth(), date.getDate() - 7);
  var today = new Date(); 
  var endDate = new Date(date.getYear(), date.getMonth(), date.getDate() + 7);
  
  if(today == setTime) {
    ScriptApp.newTrigger('ReturnPlease_all').timeBased().everyDays(1).atHour(10).create()  
  }
  
  if(today == endDate){
    var triggers = ScriptApp.getProjectTriggers();
    for(var i=0; i < triggers.length; i++) {
      if (triggers[i].getHandlerFunction() == 'ReturnPlease_all') {
      ScriptApp.deleteTrigger(triggers[i]);
      }
    }
  }
  
}