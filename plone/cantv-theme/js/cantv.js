site = $(location).attr('pathname');
submenu_hogares = ['Telefonia', 'Internet', 'Televison', 'Promociones', 'Compras', 'Pagos y Fact'];
submenu_emp_priv = ['Voz', 'Movil', 'Internet', 'TV', 'Datos', 'TI'];

$(document).ready(function(){
    if (site.match(/Plone$/gi)) {
        for (i in submenu_hogares) {
            $( "#submenu-left" ).append( '<li><a class="btn" href="http://localhost:8081/Plone/'+submenu_hogares[i].toLowerCase()+'">'+submenu_hogares[i]+'</a></li>' );
        }
    }
    if (site.match(/empresas-privadas/gi)) {
        for (i in submenu_hogares) {
           $( "#submenu-left" ).append( '<li><a class="btn" href="http://localhost:8081/Plone/empresas-privadas/'+submenu_emp_priv[i].toLowerCase()+'">'+submenu_emp_priv[i]+'</a></li>' );
        }
    }
});
