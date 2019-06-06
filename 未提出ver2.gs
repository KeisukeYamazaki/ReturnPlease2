function ReturnPlease2() {
  var　spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  
  const area = ["D4:AA18", "D24:AA38", "D44:AA58", "AF4:BC18", "AF24:BC38", "BH4:CE18", "BH24:CE38"];
  var list_r = 0;
  var list_c = 0;
  var list = sheet.getRange("A100:L101").getValues();
  
  for(var i = 0; i < area.length; i++) {
    switch(i) {
      case 0:
        list[list_r][list_c] = "＜中３＞"
        list_r += 1;
        list[list_r] = ["",""];
        break;
      case 3:
        list[list_r][list_c] = "＜中2＞"
        list_r += 1;
        list[list_r] = ["",""];
        break;
      case 5:
        list[list_r][list_c] = "＜中1＞"
        list_r += 1;
        list[list_r] = ["",""];
        break;
    }
    var data = sheet.getRange(area[i]).getValues();
    outerLoop:
    for(var j = 0; j < data.length; j++) {
      list_c = 0;
      if(data[j][0] =="") {
        break;
      } else {
        for(var k = 13; k < 24; k++) {
          if(data[j][k] =="") {
            switch (k) {
              case 13:
                if(list_c == 0) {
                  list_c = 1
                }
                list[list_r][list_c] = "英語";
                list_c += 1;
                break
              case 14:
                if(list_c == 0) {
                  list_c = 1
                }
                list[list_r][list_c] = "数学";
                list_c += 1;
                break
              case 15:
                if(list_c == 0) {
                  list_c = 1
                }
                list[list_r][list_c] = "国語";
                list_c += 1;
                break
              case 16:
                if(list_c == 0) {
                  list_c = 1
                }
                list[list_r][list_c] = "理科";
                list_c += 1;
                break
              case 17:
                if(list_c == 0) {
                  list_c = 1
                }
                list[list_r][list_c] = "社会";
                list_c += 1;
                break
              case 19:
                if(list_c == 0) {
                  list_c = 1
                }
                list[list_r][list_c] = "音楽";
                list_c += 1;
                break
              case 20:
                if(list_c == 0) {
                  list_c = 1
                }
                list[list_r][list_c] = "美術";
                list_c += 1;
                break
              case 21:
                if(list_c == 0) {
                  list_c = 1
                }
                list[list_r][list_c] = "保体";
                list_c += 1;
                break
              case 22:
                if(list_c == 0) {
                  list_c = 1
                }
                list[list_r][list_c] = "技術";
                list_c += 1;
                break
              case 23:
                if(list_c == 0) {
                  list_c = 1
                }
                list[list_r][list_c] = "家庭";
                list_c += 1;
                break
            }
          }
        }
        if(list[list_r][1] != "") {
          list[list_r][0] = data[j][0];
          list_r += 1;
          list[list_r] = ["",""];
        }
      }
    }   
  }
  
  var r = sheet.getLastRow() + 3;
  var c = 4;
  for(i = 0; i < list.length; i++) {
    for(j = 0; j < list[i].length; j++) {
      sheet.getRange(r,c).setValue(list[i][j]);
      c += 1;
    } 
    r += 1;
    c = 4;
  }
}