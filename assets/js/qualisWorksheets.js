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
    "title": "Acronyms"
  }, {
    "data": "conferencia",
    "title": "Conferences",
    "width": "50%"
  }, {
    "data": "categoria",
    "title": "Infographic Category",
    "className": "text-center"
  }, {
    "data": "CE_Indicou",
    "title": "Special Commission Indicated",
    "className": "text-center",
    "render": function (data, type, full, meta) {
      if (data === 'nulo'){
        data = '-';
      } else if (data === 'Relevante') {
        data = "Relevant"
      }
      return data;
    }
  }, {
    "data": "h5",
    "title": "H5",
    "className": "text-center",
    "type": "html-num",
    "render": function (data, type, full, meta) {
      if (data === 'nulo'){
        data = '-';
      }
      return data;
    }
  }, {
    "data": "Qualis_Final",
    "title": "CAPES Stratum (calculated)",
    "className": "table-cell-bold-center",
    "render": function (data, type, full, meta) {
      if (data === 'nulo'){
        data = '-';
      }
      return data;
    }
  },/* {
    "data": "data-atualizacao",
    "title": "Last Automatic Update",
    "render": function (data, type, full, meta) {
      if (data === 'link sem info h5'){
        data = "link without info h5";
      } else if (data === 'não se aplica'){
          data = "not applicable";
      } else {
        dt = moment(data, "DD/MM/YYYY");
        data = dt.format("YYYY-MM-DD");
      }
      return data;
    }
  },*/ {
    "data": "link",
    "title": "Google Scholar",
    "className": "text-center",
    "render": function (data, type, full, meta) {
      if (data === 'nulo'){
        data = 'No Link'
      } else if (data === 'Induzidos manualmente'){
        data = 'Manually induced'
      } else{
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
        data = '-'
      }
      return data;
    }
  }, {
    "data": "periodico",
    "title": "Journal",
    "width": "50%"
  }, {
    "data": "percentil",
    "title": "Highest percentile Scopus (%)",
    "className": "text-center",
    "type": "html-num",
    "render": function (data, type, full, meta) {
      if (data === 'nulo'){
        data = '-'
      }
      return data;
    }
  }, {
    "data": "Ajuste_SBC",
    "title": "SBC Adjustment",
    "className": "text-center",
    "render": function (data, type, full, meta) {
      if (data === 'nulo'){
        data = '-'
      } else if (data != ''){
        data = 'yes'
      }
      return data;
    }
  }, {
    "data": "Qualis_Final",
    "title": "CAPES Stratum (calculated)",
    "className": "table-cell-bold-center",
    "render": function (data, type, full, meta) {
      if (data === 'nulo'){
        data = '-'
      }
      return data;
    }
  }, /*{
    "data": "data-atualizacao",
    "title": "Last Automatic Update",
    "render": function (data, type, full, meta) {
      if (data === 'nulo'){
        data = '';
      } else {
        dt = moment(data, "DD/MM/YYYY");
        data = dt.format("YYYY-MM-DD");
      }
      return data;
    }
  },*/ {
    "data": "link_scopus",
    "title": "Scopus",
    "className": "text-center",
    "render": function (data, type, full, meta) {
      if (data === 'nulo'){
        data = 'No Link'
      } else{
        data = '<a target="_blank" href="' + data + ' "class="button">Link</a>';
      }
      return data;
    }
  }];

  var language = document.querySelector('#tabs')

  console.log('language: '+ language)

  $(document).ready(function() {

    function initializeTabletopObjectConf() {
      Tabletop.init({
        key: key_conf,
        callback: function(data, tabletop) {
          writeTableConf(data); //call up datatables function
        },
        simpleSheet: true,
        debug: false
      });
    }

    function initializeTabletopObjectPeri() {
      Tabletop.init({
        key: key_peri,
        callback: function(data, tabletop) {
          writeTablePeri(data); //call up datatables function
        },
        simpleSheet: true,
        debug: false
      });
    }

    initializeTabletopObjectConf();
    initializeTabletopObjectPeri();

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
