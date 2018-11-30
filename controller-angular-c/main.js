
app = angular.module('inicio', []);
app.controller('mainController', function($scope, $http) {
    var counter=0;
    $scope.idremove=-1;
    $scope.guardar=function(){
        console.log('entro de neuvo')
        var arraytipos = new Array();
        var requerido = new Array();
        var array_reglas_name=new Array();
        var array_temporal = new Array();
        var array_argumentos = new Array();
        var arreglo_imprimir=[]
        var conteo=0;
        for (var i = 0; i < counter; i++) {
            var array_gral= {};
            var array_temporal = new Array();
            var arreglo=[]
            
            //console.log(arreglo)
            $(".numero"+i).each(function(index) {
                if($(this).attr("name")!=""){
                    var arreglo_reglas={};
                    arreglo_reglas['regla']=($(this).val());
                    var arreglo_temp_argumento=[];
                    var cont_reglas=0;
                    if(eliminados.indexOf(conteo)!=-1){
                        $(".num"+(parseInt(conteo)+1)).each(function(index) {
                            console.log($(this).val())
                            
                                var arreglo_argumentos={};
                                arreglo_argumentos['argumento']=($(this).attr("name"));
                                arreglo_argumentos['valor']=($(this).val());
                                arreglo_temp_argumento[cont_reglas]=arreglo_argumentos;
                                cont_reglas=cont_reglas+1;
                            
                        });
                        conteo++;
                    }else{
                        $(".num"+conteo).each(function(index) {
                            console.log($(this).val())
                            
                                var arreglo_argumentos={};
                                arreglo_argumentos['argumento']=($(this).attr("name"));
                                arreglo_argumentos['valor']=($(this).val());
                                arreglo_temp_argumento[cont_reglas]=arreglo_argumentos;
                                cont_reglas=cont_reglas+1;
                            
                        });
                }
                    conteo=conteo+1;
                    arreglo_reglas['argumentos']=arreglo_temp_argumento;
                    arreglo.push(arreglo_reglas)
            }
            });
            array_reglas_name[i]=arreglo
            arraytipos[i]=$("#name"+i).val();
            requerido[i]=$("#requerido"+i).val();
            array_gral["nombre"]=arraytipos[i];
            array_gral["requerido"]=requerido[i];
            array_gral["argumentos"]=array_reglas_name[i];
            arreglo_imprimir.push(array_gral);
            //console.log('comienza chequeo de datos'+JSON.stringify(array_reglas_name[i]))
            //console.log('nombre'+JSON.stringify(arraytipos[i]))
            //console.log('comienza chequeo de datos'+JSON.stringify(array_reglas_name[i]))
            
         }
         console.log(JSON.stringify(arreglo_imprimir))
    }

    $scope.add = function(){
       
            var texto='<tr id="row'+counter+'">'
            +'<td>'
            +'<input type="text" class="form-control" id="name'+counter+'">'
            +'</td>'
            + '<td class="text-center">'
                +'<input type="checkbox" id="requerido'+counter+'" class="fom-control Requerido">'
            +'</td>'
            +'<td class="text-right">'              
                +'<input type="button" class="btn btn-success" onclick=verifica('+counter+') value="Agregar regla">'
                +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i data-toggle="modal"  data-target="#exampleModalCenter" class="fas fa-trash-alt btn eliminar" onclick="remover='+counter+'" style="font-size:22px"></i>'
                +'<div id="contador'+counter+'"></div>'  
                +'</td>'+
        '</tr>';
        $("#contenedor").append(texto);
        counter++;
 };
});

