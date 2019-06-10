$(function() {
  $(".form-control").change(function() {
    updateCode();
    updateView();
  });
});

function updateCode() {
  $('.code').text("export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'" + getColorOptions() + "'");
  $('.code').html($('.code').html().replace(/\n/g, '<br/>'));
};

function updateView() {
  updateColorView($(".fg"), "color", $('#fg').val());
  updateColorView($(".bg"), "background-color", $('#bg').val());
  $(".fgp").css("color", $('#fgp').val());
  $(".bgp").css("background-color", $('#bgp').val());
  $(".hl").css("color", $('#hl').val());
  $(".hlp").css("color", $('#hlp').val());
  $(".inf").css("color", $('#info').val());
  $(".pro").css("color", $('#promp').val());
  $(".poi").css("color", $('#pointer').val());
  $(".mar").css("color", $('#marker').val());
  $(".spi").css("color", $('#spinner').val());
  $(".hea").css("color", $('#header').val());
}

function getColorText(ele) {
  if (ele.val()) {
    return ele.val();
  }
  return -1;
}

function updateColorView(ele, styleType, val) {
  if (val) {
    ele.css(styleType, val);
  }
}

function setDefault(ele) {
  $(ele).val("")
  updateCode();
}

function resetToDefault() {
  $('#fg').val(fg.defaultValue);
  $('#bg').val(bg.defaultValue);
  $('#hl').val(hl.defaultValue);
  $('#fgp').val(fgp.defaultValue);
  $('#bgp').val(bgp.defaultValue);
  $('#hlp').val(hlp.defaultValue);
  $('#info').val(info.defaultValue);
  $('#promp').val(promp.defaultValue);
  $('#pointer').val(pointer.defaultValue);
  $('#marker').val(marker.defaultValue);
  $('#spinner').val(spinner.defaultValue);
  $('#header').val(header.defaultValue);

  updateCode();
  updateView();
}

function applyToFzf() {
  let message = {"name": "sendCode"};
  message.payload = getColorOptions();
  astilectron.sendMessage(message, function(message) {
      // Check error
      if (message.name === "error") {
          asticode.notifier.error(message.payload);
          return
      }            
  })
  
  $("#apply-btn").popover('show');
  setTimeout(function() {
    $("#apply-btn").popover('destroy');
  }, 1000);
}

function getColorOptions() {
  return "\n --color=fg:" + getColorText($('#fg')) + ",bg:" + getColorText($('#bg')) + ",hl:" + $('#hl').val() +
  "\n --color=fg+:" + $('#fgp').val() + ",bg+:" + $('#bgp').val() + ",hl+:" + $('#hlp').val() +
  "\n --color=info:" + $('#info').val() + ",prompt:" + $('#prompt').val() + ",pointer:" + $('#pointer').val() +
  "\n --color=marker:" + $('#marker').val() + ",spinner:" + $('#spinner').val() + ",header:" + $('#header').val()
}