function doGet() {

  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Student Attendance Portal');

}

function getAttendance() {

  var sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheets()[0];

  var data = sheet.getDataRange().getDisplayValues();

  var headers = data.shift();

  var records = data.map(row => {

    var student = {};

    headers.forEach((header, index) => {
      student[header] = row[index];
    });

    return student;

  });

  return records;

}
