//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
//var key =
  //"https://docs.google.com/spreadsheets/d/113QZOTS9JQ1WGfwjwQrOpErUBJTAnaBmdjP0_OjA53c/pubhtml?gid=489792061&single=true";
var key = "1yvuCa__L7r0EJy6v6Jb17fvu-VdV80PbfAReR9Gy52I";
//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [{
  "data": "sigla",
  "title": "Siglas"
}, {
  "data": "conferencia",
  "title": "Conferências"
}, {
  "data": "categoria",
  "title": "Categoria Infográfico"
}, {
  "data": "CE_Indicou",
  "title": "Comissão Especial Indicou",
  "render": function (data, type, full, meta) {
    if (data === 'nulo'){
      data = "";
    }
    return data;
  }
},{
  "data": "h5",
  "title": "H5"
}, {
  "data": "Qualis_Final",
  "title": "Extrato CAPES"
}, {
  "data": "data-atualizacao",
  "title": "Última Atualização Automática",
  "render": function (data, type, full, meta) {
    if (data === 'nulo'){
      data = "";
    }
    return data;
  }
}, {
  "data": "link",
  "data2": "h5",
  "title": "Google Scholar",
  "render": function (data, type, full, meta) {
    if (data === 'nulo'){
      data = 'Sem Link'
    } else{
      data = '<a target="_blank" href="' + data + ' "class="button">Link</a>';
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
