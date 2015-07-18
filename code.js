function emailsend () //���������� e-mail ��� ���������� ������� ���������� � if
{
  var sovpadenieDat = in_array(reminder (), perebor_dat());
  if(sovpadenieDat > -1) 
  {
    MailApp.sendEmail(
                      "1777510@mail.ru",
                       perebor_dat()[in_array(reminder (), perebor_dat())] + " ������� �������� " + vozvrat_temy()[in_array(reminder (), perebor_dat())],                             
                      '������! ������� ���������� � ���� ������: https://docs.google.com/spreadsheets/d/1TLY22BHVyzA4kLPyG3eQ4Phia2O675Vuywj9ZseVeOI/edit#gid=12 \r\n���� ����� ����������� ���� ��������.'
                     )
  }
} 
 
function reminder ()  //���������� � ������� ���� 3 ���. ������������ �� ����, � ������ �� �� ��������� � ���������� ������� perebor_dat() �����������
{
  var dates = new Date()
  var reminderMonth = dates.getMonth()+1;
  var reminderDate = dates.getDate() +3 ;
  var reminderYear = '2015';
  return reminderDate + "." + reminderMonth 	+ "." + reminderYear;
}

function perebor_dat() //���������� ������ ����������������� �������� ������������ �� ������� ����� � ��������� A2:Z2. �������� � ��������� �������� �� ����� AA2, AB2 ��� ��� ���� �������� ������ �� ��������
{
  var kolonkaplus = [];
  for (var i=65; i<=90; i++)
  {
    kolonkaplus.push(Utilities.formatDate(new Date(SpreadsheetApp.getActiveSheet().getRange(String.fromCharCode(i)+'2').getValues()), "GMT+3", "d.M.yyyy"));
  }
  return kolonkaplus;
}

function vozvrat_temy() //���������� ������ ����������������� �������� ������������ �� ������� ����� � ��������� A1:Z1. �������� � ��������� �������� �� ����� AA1, AB1 ��� ��� ���� �������� ������ �� ��������
{
  var kolonkaplus = [];
  for (var i=65; i<=90; i++)
  {
    kolonkaplus.push(SpreadsheetApp.getActiveSheet().getRange(String.fromCharCode(i)+'1').getValues());
  }
  return kolonkaplus;
}

function in_array(value, array) //��������� ������ �� ������� � ��� ��������
{
  for(var i = 0; i < array.length; i++) 
  {
    if(array[i] == value) return i;
  }
  return -1;
}