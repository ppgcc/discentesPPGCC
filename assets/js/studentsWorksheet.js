//Edit 'key' and 'columns' to connect your spreadsheet

var key = "1_dgUcS3U7U56oRvKCfAk5Pfdq5UpK6cxhlOQDyhatVU";

var columns = [{
  "data": "aluno",
  "title": "Student"
}, {
  "data": "curso-en",
  "title": "Course"
}, {
  "data": "orientador",
  "title": "Advisor"
}, {
  "data": "grupo-en",
  "title": "Research Group/Laboratory"
}, {
  "data": "email",
  "title": "Contact",
  "render": function (data, type, full, meta) {
    if (data === ''){
      data = ''
    } else{
      data = '<a target="_blank" href="mailto:' + data + ' "class="button">Email</a>';
    }
    return data;
  }
}, {
  "data": "lattes",
  "title": "Lattes",
  "render": function (data, type, full, meta) {
    if (data === ''){
      data = ''
    } else{
      data = '<a target="_blank" href="' + data + ' "class="button">Lattes</a>';
    }
    return data;
  }
}];

$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#planilha').html(
      '<table id="mySelection" class="table table-striped table-bordered" style="width:100%">'
    );

    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "paging":   false,
      "order": [
        [0, "asc"]
      ], //order on second column
      "pagingType": "simple", //no page numbers
        //uncomment these options to simplify your table
        "paging": true
        //"searching": false,
        //"info": false
    });
    $('div.dataTables_filter input').focus()
  }



});
//end of writeTable
