/*Datos de Formulario A*/

$(document).ready(function(){
    $('#boton_enviar_a').click(function(e){
        e.preventDefault();
        let nombre = $('#nombre').val();
        let apellido = $('#apellido').val();
        let edad = $('#edad').val();
        $.ajax({
            url:"serve.php",
            type:"POST",
            data:{
            "nom":nombre,
            "ape":apellido,
            "ed":edad
            }
        })
        .done(function(res){
            $('#resultado').html(res);
        });
    });
});
    
/*Validar Formulario A */
function validar(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;

    if (nombre==""){
        $('#alert').html("Debe ingresar un nombre").slideDown(500);
        $('#nombre').focus();
        return false;
    }
    else{
        $('#alert').html('').slideUp(300);
    }

}


/*Datos de Formulario B*/

$(document).ready(function(){
    $('#boton_enviar_b').click(function(e){
        e.preventDefault();
        let nombre_curso = $('#nombre_b').val();
        let materias = $('#cant_materias').val();
        let categorias = $('#categoria_b').val();
        $.ajax({
            url:"serveb.php",
            type:"POST",
            data:{
            "nom_curso":nombre_curso,
            "mate":materias,
            "cate":categorias
            }
        })
        .done(function(res){
            $('#resultado_b').html(res);
        });
    });
});





/*Validar Formulario B */

function validar_b(){
    var nombre_b = document.getElementById("nombre_b").value;
    var categoria_b = document.getElementById("categoria_b").value;
    var num_materias = document.getElementById("cant_materias").value;
    

    /* Alertas*/
    if (nombre_b==""){
        $('#alert_b').html("Ingrese un nombre de Curso").slideDown(500);
        $('#nombre_b').focus();
        return false;
    }
    else{
        $('#alert_b').html('').slideUp(300);
    }

    if (categoria_b == "Elija una categoría"){
        $('#alert_b').html("Ingrese una categoría").slideDown(500);
        $('#categoria_b').focus();
        return false;
    }
    else{
        $('#alert_b').html('').slideUp(300);
    }

    /* condicionales*/
    if (num_materias == 2 | num_materias == 4){
        $('#alert_b').html("Nivel Básico").slideDown(500);
        return false;
    }
    if (num_materias == 6 | num_materias == 8){
        $('#alert_b').html("Nivel Intermedio").slideDown(500);
        return false;
    }
    if (num_materias >= 10 ){
        $('#alert_b').html("Nivel Avanzado").slideDown(500);
        return false;
    }



}
