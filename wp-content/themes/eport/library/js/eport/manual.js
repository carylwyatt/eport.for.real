
$('.left-off-canvas-toggle').on('click',function(e){
	console.log(e);

	$('.off-canvas-wrap').foundation('offcanvas', 'toggle', 'move-right');	
});
