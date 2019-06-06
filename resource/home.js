var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



function updateCode() {
  $('.code').text("export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'"
                  +"\n--color=fg:" + $('#fg').val() + ",bg:" + $('#bg').val() + ",hl:" + $('#hl').val()
                  +"fg+:" + $('#fgp').val() + ",bg+:" + $('#bgp').val() + ",hl+:" + $('#hlp').val()
                  +"\n--color=info:" + $('#info').val() + ",prompt:" + $('#prompt').val() + ",pointer:" + $('#pointer').val()
                  +"marker:" + $('#marker').val() + ",spinner:" + $('#spinner').val() + ",header:" + $('#header').val()
                  +"\n'");
  $('.code').html($('.code').html().replace(/\n/g,'<br/>'));
  
  //export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
};

function updateView() {
  $(".fg").css("color", $('#fg').val());
  $(".fgp").css("color", $('#fgp').val());
  $(".bg").css("background-color", $('#bg').val());
  $(".bgp").css("background-color", $('#bgp').val());
  $(".hl").css("color", $('#hl').val());
  $(".hlp").css("color", $('#hlp').val());
  $(".inf").css("color", $('#info').val());
  $(".pro").css("color", $('#prompt').val());
  $(".poi").css("color", $('#pointer').val());
  $(".mar").css("color", $('#marker').val());
  $(".spi").css("color", $('#spinner').val());
  $(".hea").css("color", $('#header').val());
}