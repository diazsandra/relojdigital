$(document).ready(function(){
  console.log("Hola :D");
});

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var color = '#9E657D';
//Estilos a las líneas
ctx.strokeStyle = 'white';
ctx.lineWidth = 15;
ctx.lineCap = 'butt'; //tipo de línea
ctx.shadowBlur = 20;
ctx.shadowColor = 'white';

function degToRoad(degree){
	//Para dibujar la circunferencia
	var factor = Math.PI / 180;
	return factor * degree;
}

function pintarTiempo(){
	var now = new Date();
	//Para la fecha actual
	var hoy = now.toDateString();
	//Para la hora
	var tiempo = now.toLocaleTimeString();
	var hora = now.getHours();
	var minuto = now.getMinutes();
	var segundos = now.getSeconds();
	var milisegundos = now.getMilliseconds(); //Para que la transición sea mejor
	var nuevossegundos = segundos + (milisegundos / 1000);

	//BG 

	ctx.fillStyle = '#171319';
	ctx.fillRect(0, 0, 500, 500); //Hace el cambio de los segundos

	//Hora
	ctx.beginPath(); //Lugar en el que comienza el puntero
	ctx.arc(250 /*X*/,250/*Y*/,200,degToRoad(270),degToRoad((hora*15)-90)); //Para dar el tamaño del círculo-hora*15 porque 24*15 da 360, los grados del círculo
	ctx.stroke(); //Para cerrar el círculo

	//Minutos
	ctx.beginPath(); //Lugar en el que comienza el puntero
	ctx.arc(250,250,170,degToRoad(270),degToRoad((minuto*6)-90)); //Para dar el tamaño del círculo
	ctx.stroke(); //Para cerrar el círculo

	//Segundos
	ctx.beginPath(); //Lugar en el que comienza el puntero
	ctx.arc(250,250,140,degToRoad(270),degToRoad((segundos*6)-90)); //Para dar el tamaño del círculo
	ctx.stroke(); //Para cerrar el círculo

	//Día
	//Agrega día
	ctx.fillStyle = color;
	ctx.font = '20px Tahoma';
	ctx.fillText(hoy,170, 250);

	//Tiempo
	//Agrega el reloj
	ctx.fillStyle = color;
  	ctx.font = '20px Tahoma';
  	ctx.fillText(tiempo,170 ,280);
}; 

setInterval(pintarTiempo,40);


//Seleccionar países

moment.tz.add('America/Lima|LMT PET PEST|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6');
moment.tz.add('America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5');
moment.tz.add('America/Santiago|SMT CLT CLT CLST CLST|4G.K 50 40 40 30|010203131313131212421242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5');
moment.tz.add('Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6');


var banderas = [false, false, false, false];

function actualizaHora() {
	var now = moment();
	$('#horaMexico').text('México ' + now.format('HH:mm:ss'));
	$('#horaPeru').text('Perú ' + now.tz("America/Lima").format('HH:mm:ss'));
	$('#horaChicago').text('Chicago ' + now.tz("America/Chicago").format('HH:mm:ss'));
	$('#horaSantiago').text('Santiago ' + now.tz("America/Santiago").format('HH:mm:ss'));
	$('#horaParis').text('París ' + now.tz("Europe/Paris").format('HH:mm:ss'));
	$('#horaActual').text(new Date());

	setTimeout(actualizaHora, 1000);
}


$(document).ready(function(){

	ocultarTodos();
	actualizaHora();

	$(".checkbox").change(function() {
    	var indice = Number(this.value);
    	if(this.checked) {
    		banderas[indice] = true;
    	} else {
    		banderas[indice] = false;
    	}

    	horasInternacionales();
	});

});

function ocultarTodos() {
	$('#horaMexico').hide();
	$('#horaPeru').hide();
	$('#horaChicago').hide();
	$('#horaSantiago').hide();
	$('#horaParis').hide();
}

function horasInternacionales() {
	ocultarTodos();
	if (banderas[0]) {
		$('#horaMexico').show();	
	} 

	if (banderas[1]) {
		$('#horaPeru').show();	
	} 

	if (banderas[2]) {
		$('#horaChicago').show();	
	} 

	if (banderas[3]) {
		$('#horaSantiago').show();	
	} 

	if (banderas[4]) {
		$('#horaParis').show();	
	} 	

}


