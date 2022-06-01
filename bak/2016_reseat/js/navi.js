/*»ó´Ü navi*/
$(function() {
	$("#lnb_menu").hover(
		function() { $("#lnb_dd").stop(true,true).slideDown("fast"); },
		function() { $("#lnb_dd").stop(true,true).delay(100).slideUp("fast"); }
	);
	$("#lnb_dd").hover(
		function() { $(this).stop(true,true); },
		function() { $("#lnb_dd").stop(true,true).delay(100).slideUp("fast"); }
	);
}); 

/*¿ÞÂÊ navi*/
$(document).ready(function(){   
	$('#snb_navi > li > a').mouseenter(function(){     
		if ($(this).attr('class') != 'active'){       
			$('#snb_navi li ul').slideUp();       
			$(this).next().slideToggle();       
			$('#snb_navi li a').removeClass('active');       
			$(this).addClass('active');     
		}   
	}); 

	$('#snb_navi').mouseleave(function(){     
		$('#snb_navi li ul').slideUp();
	}); 
});