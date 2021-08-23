//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
//var key =
//"https://docs.google.com/spreadsheets/d/113QZOTS9JQ1WGfwjwQrOpErUBJTAnaBmdjP0_OjA53c/pubhtml?gid=489792061&single=true";
var key_conf = "1yvuCa__L7r0EJy6v6Jb17fvu-VdV80PbfAReR9Gy52I";
var key_peri = "1EBJ8OXGPHU58ukZAUfF9N7Cy8A8mbl-jjUjZL5Cg9xM";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns_conf = [{
  "data": "sigla",
  "title": "Siglas"
}, {
  "data": "conferencia",
  "title": "Conferências",
  "width": "50%"
}, {
  "data": "categoria",
  "title": "Categoria Infográfico",
  "className": "text-center"
}, {
  "data": "CE_Indicou",
  "title": "Comissão Especial Indicou",
  "className": "text-center",
  "render": function (data, type, full, meta) {
    if (data === 'nulo' || data === undefined){
        data = '-';
    }
    return data;
  }
},{
  "data": "h5",
  "title": "H5",
  "className": "text-center",
  "type": "html-num",
  "render": function (data, type, full, meta) {
    if (data === "nulo"){
      data = '-';
    }
    return data;
  }
}, {
  "data": "Qualis_Final",
  "title": "Estrato CAPES (calculado)",
  "className": "table-cell-bold-center",
  "render": function (data, type, full, meta) {
    if (data === 'nulo'){
      data = '-';
    }
    return data;
  }
}, {
  "data": "link",
  "title": "Google Scholar",
  "className": "text-center",
  "render": function (data, type, full, meta) {
    if (data === 'nulo'){
      data = 'Sem Link';
    } else if(data === 'Induzidos manualmente'){
        data = 'Induzidos manualmente';
    } else {
      data = '<a target="_blank" href="' + data + ' "class="button">Link</a>';
    }
    return data;
  }
}];

var columns_peri = [{
  "data": "issn",
  "title": "ISSN",
  "render": function (data, type, full, meta) {
    if (data === 'nulo'){
      data = '-';
    }
    return data;
  }
}, {
  "data": "periodico",
  "title": "Periódico",
  "width": "50%"
}, {
  "data": "percentil",
  "title": "Highest percentile Scopus (%)",
  "className": "text-center",
  "type": "html-num",
  "render": function (data, type, full, meta) {
    if (data === 'nulo'){
      data = '-';
    }
    return data;
  }
}, {
  "data": "Ajuste_SBC",
  "title": "Ajuste SBC",
  "className": "text-center",
  "render": function (data, type, full, meta) {
    if (data === 'nulo'){
      data = '-';
    } else if (data != ''){
      data = 'sim';
    }
    return data;
  }
}, {
  "data": "Qualis_Final",
  "title": "Estrato CAPES (calculado)",
  "className": "table-cell-bold-center",
  "render": function (data, type, full, meta) {
    if (data === 'nulo'){
      data = '-';
    }
    return data;
  }
}, {
  "data": "link_scopus",
  "title": "Scopus",
  "className": "text-center",
  "render": function (data, type, full, meta) {
    if (data === 'nulo'){
      data = 'Sem Link';
    } else{
      data = '<a target="_blank" href="' + data + ' "class="button">Link</a>';
    }
    return data;
  }
}];

var language = document.querySelector('#tabs')

console.log('language: '+ language)

$(document).ready(function() {

  var myVar;
  function loading() {
    myVar = setTimeout(showPage, 4000);
  }
  function showPage() {
    document.getElementById("loader").style.display = "none";
  }

  function initializeParserObjectConf() {
    const spreadsheetId = key_conf
    const parser = new PublicGoogleSheetsParser()
    parser.parse(spreadsheetId).then((items) => {
      writeTableConf(items)
      console.log(items)
    })
  }

  function initializeParserObjectPeri() {
    const spreadsheetId = key_peri
    const parser = new PublicGoogleSheetsParser()
    parser.parse(spreadsheetId).then((items) => {
      writeTablePeri(items)
    })
  }

  loading();
  initializeParserObjectConf();
  initializeParserObjectPeri();

  function writeTableConf(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#planilha-conferencias').html(
      '<table id="tableConferencias" class="table table-striped table-bordered" style="width:100%">'
    );

    //initialize the DataTable object and put settings in
    $("#tableConferencias").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns_conf,
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

  function writeTablePeri(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#planilha-periodicos').html(
      '<table id="tablePeriodicos" class="table table-striped table-bordered" style="width:100%">'
    );

    //initialize the DataTable object and put settings in
    $("#tablePeriodicos").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns_peri,
      "paging":   false,
      "order": [
        [1, "asc"]
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