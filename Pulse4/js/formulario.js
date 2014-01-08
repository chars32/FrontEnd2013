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
});