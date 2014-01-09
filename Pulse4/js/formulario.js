$(function() {
	$('.publicar').on('click', mostrarFormulario);

	function mostrarFormulario() {
		$('form').slideToggle();
	}

	$('form').on('submit', procesarFormulario);

	function procesarFormulario(ev){
		ev.preventDefault();
		var titulo = $('input[name=titulo]').val();
		var autor = $('input[name=autor]').val();
		var tag = $('input[name=tag ]').val();

		var template = '<article class="post"> \
			<div class="descripcion"> \
				<figure class="imagen"> \
					<img src="img/imagen.jpg"> \
				</figure> \
				<div class="detalles"> \
					<h2 class="titulo"> \
						'+titulo+' \
					</h2> \
					<p class="autor"> \
						por <a href="#">'+autor+'</a> \
					</p> \
					<a href="#" class="tag"> \
						'+tag+' \
					</a> \
					<p class="fecha"> \
						hace <strong>0</strong> min \
					</p> \
				</div> \
			</div> \
			<div class="acciones"> \
				<div class="votos"> \
					<a href="#" class="up"> \
					</a> \
					<span class="total"> \
						0 \
					</span> \
					<a href="#" class="down"> \
					</a> \
				</div> \
				<div class="datos"> \
					<a href="#" class="comentarios"> \
						0 \
					</a> \
					<a href="#" class="estrellita"> \
					</a> \
				</div> \
			</div> \
		</article>';

		//$('.posts').prepend(template); <--Manera Normal

		//manera fancy
		$('.posts').prepend($(template).fadeIn(function(){ 
			$(this).css('display', 'inline-block');
		}));

		$('input[type=text]').val('');
		$('form').slideUp();
	}

	//Closure devolviendo una funcion creada
		function crearSizer(pixels){
			return function(){
				$('body').css('font-size', pixels+'px')
			}
		}

		$('.sizer').each(function(i, link){
			var pixels = $(link).prop('hash').substring(1); //esto sirve para poder sacar el valor sin el simbolo "#"
			$(link)
				.css('font-size', pixels+'px') //aqui cambiamos el tamaño de las 'A' segun el valor de su href sin "#"
				.on('click', crearSizer(pixels)); //cambiamos el tamaño del body con la funcion crearSizer, previamente definida
		});

	//Privacidad del codigo
		function crearContador(valorInicial){
			var contador = valorInicial || 0;
			return {    //-----------Estos son los closures -----------
				up : function() {
					return ++contador;
				},
				down : function() {
					return --contador;
				}       // ----------Aqui terminan closeres -----------
			};
		};

		$('.total').each(function(i, elem) {
			var contTotal = crearContador(elem.innerHTML); //INNERHTML sirve para tomar el valor embebido en el html por default
			$(elem)
				.siblings('.up')   //siblings son elementos que son hermanos en html5, dependen del mismo padre
					.on('click', function(ev){
						ev.preventDefault();
						$(elem).html(contTotal.up());
					})
				.siblings('.down')
					.on('click', function(ev){
						ev.preventDefault();
						$(elem).html(contTotal.down());
					});
		});
});