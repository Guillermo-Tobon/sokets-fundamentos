var socket = io();

//on => Escuchar sucesos
socket.on('connect', function(){
  console.log('Conectado al servidor');
});

//on => Escuchar sucesos
socket.on('disconnect', function(){
  console.log('Perdimos conexión con el servidor');
});

//emit => Enviar o emitir información
socket.emit('enviarMensaje', {
  usuario: 'memo',
  mensaje: 'Hola mundo'
}, function(resp){
  console.log('Respuesta server: ', resp);
});


//Escuchar información del server
socket.on('enviarMensaje', function(mensaje){
  console.log('Servidor => ',mensaje);
});