// remove unuse stuff
$('#logo').remove();

// change menu
$('#menu')[0].setAttribute('style', 'margin:10px;');
for(var k =0; k < 4; k++) {
	$('#menu > a')[k].setAttribute('class', 'btn btn-info');
}

// change fieldset
if( $('fieldset').size() != 0 ){
	$('fieldset')[0].setAttribute('class', 'well');
	$('fieldset')[0].setAttribute('style', '');
}