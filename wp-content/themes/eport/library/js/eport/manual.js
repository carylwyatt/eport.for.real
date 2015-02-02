$( document ).ready(function() {
	$('.left-off-canvas-toggle').on('click',function(e){
		e.preventDefault();
		console.log(e);

		$('.off-canvas-wrap').foundation('offcanvas', 'toggle', 'move-right');	
	});
});
