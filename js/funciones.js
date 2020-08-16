$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover()
});

$('.carousel').carousel({
  interval: 1500
});

$('#inicioSesion').on('show.bs.modal',function(e){
  /* $('#btnUno').removeClass('btn btn-primary');
  $('#btnUno').addClass('btn-outline-success'); */
  $('#btnUno').prop('disabled',true);
  $('#btnDos').prop('disabled',true);

});

$('#inicioSesion').on('shown.bs.modal',function(e){
  console.log("El modal esta Mostrando");
});

$('#inicioSesion').on('hide.bs.modal',function(e){
    $('#btnUno').prop('disabled',false);
  $('#btnDos').prop('disabled',false);
  console.log("El modal esta Mostrado");
  console.log("botones Desactivados");
});

$('#inicioSesion').on('hidden.bs.modal',function(e){
  });

$('#registro').on('show.bs.modal',function(e){
  /* $('#btnUno').removeClass('btn btn-primary');
  $('#btnUno').addClass('btn-outline-success'); */
  $('#btnUno').prop('disabled',true);
  $('#btnDos').prop('disabled',true);

});

$('#registro').on('shown.bs.modal',function(e){
});

$('#registro').on('hide.bs.modal',function(e){
    $('#btnUno').prop('disabled',false);
  $('#btnDos').prop('disabled',false);
  console.log("El modal esta Oculto");
  console.log("botones Activos");
});

$('#registro').on('hidden.bs.modal',function(e){
  });

