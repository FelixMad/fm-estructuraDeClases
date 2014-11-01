$(document).ready(function(){
    var langSectionWebserie = "Añadir enlace de webserie";
    var langSectionArticulo = "Añadir enlace de articulo";
    var langSectionWES = "Administrar WebseriESpain";

    var langWebserie = "Webserie";
    var langTitulo = "Titulo";
    var langTemporada = "Temporada";
    var langCapitulo = "Capítulo";
    var langParte = "Parte";
    var langX = "x";
    var langAlmohadilla = "#";
    var langCategoria = "Categoria";
    var langDistribucion = "Distribución";
    var langMail = "Mail";
    var langEsDeWES = "Es de WebseriESpain";
    var langAceptar = "Aceptar";
    var langCancelar = "Cancelar";
    var langBuscar = "Buscar";
    var langPagar = "Pagar";
    var langAnterior = "Anterior";
    var langSiguiente = "Siguiente";
    var langMusica = "Musica";

    var langOff = "Off";
    var langOn = "On";
    var langVistaAvanzada = "Vista avanzada";
    var langEnviando = "Enviando";
    var langCapitulosAnteriores = "Capítulos anteriores";
    var langPrecargando = "Precargando";
    var langLogIncorporaciones = "Log incorporaciones";

    $('#we-section-enlaceWebserie h2').text(langSectionWebserie);
    $('#we-section-enlaceArticulo h2').text(langSectionArticulo);
    $('#we-section-adminWES h2').text(langSectionWES);

    $('.we-lang-webserie').text(langWebserie);
    $('.we-lang-titulo').text(langTitulo);
    $('.we-lang-temporada').text(langTemporada);
    $('.we-lang-capitulo').text(langCapitulo);
    $('.we-lang-parte').text(langParte);
    $('.we-lang-x').text(langX);
    $('.we-lang-Almohadilla').text(langAlmohadilla);
    $('.we-lang-categoria').text(langCategoria);
    $('.we-lang-distribucion').text(langDistribucion);
    $('.we-lang-capitulosAnteriores').text(langCapitulosAnteriores);
    $('.we-lang-mail').text(langMail);
    $('.we-lang-esDeWES').text(langEsDeWES);

    $('.lang-aceptar').not('.we-noText').append(langAceptar); 
    $('.lang-cancelar').not('.we-noText').append(langCancelar);
    $('.lang-buscar').not('.we-noText').append(langBuscar);
    $('.lang-pagar').not('.we-noText').append(langPagar);
    $('.lang-anterior').not('.we-noText').append(langAnterior);
    $('.lang-siguiente').not('.we-noText').append(langSiguiente);
    $('.lang-musica').not('.we-noText').append(langMusica);




    $('.we-lang-off').text(langOff);
    $('.we-lang-on').text(langOn);
    $('.we-lang-vistaAvanzada').text(langVistaAvanzada);
    $('.we-lang-enviando').text(langEnviando);
    
    $('.we-lang-precargando').text(langPrecargando);
    $('.we-lang-logIncorporaciones').text(langLogIncorporaciones);
})


