//панель поиска на сайте
$('.nnn-header__search').hover(
  function () {
    clearTimeout();
    $(this).addClass('active')
  }, function () {
    var self = this
    setTimeout(function() {
        $(self).removeClass('active');
      },1000);
  }
)



//главное меню
$('.header__hamb').on('click', function () {
  $(this).toggleClass('active');
  $('.top-adv').toggleClass('active');
  $('.mainmenu').toggleClass('active');
  $('.overlay').toggleClass('active');
  $('.mainmenu__regionplate').removeClass('active');
  $('body').toggleClass('modal-open');
});
$('.overlay, .mainmenu__links a, .mainmenu__btns button, .header__hamb.active').on('click', function () {
  $('.top-adv').removeClass('active');
  $('.mainmenu__regionplate').removeClass('active');
  $('.header__hamb').removeClass('active');
  $('.mainmenu').removeClass('active');
  $('.overlay').removeClass('active');
  $('body').removeClass('modal-open');
});

$('#id__region').on('click', function () {
  $('.mainmenu__regionplate').toggleClass('active');
});
$('.overlay, .regionplate_tabs a, .header__hamb.active').on('click', function () {
  $('.mainmenu__regionplate').removeClass('active');
});



//фикс шапки
$('header').hcSticky({
  stickTo: 'body',
  followScroll: false
});

//фикс блока правой колонки
$('.sticked').hcSticky({
  stickTo: '.wrap--twocolumn',
  top: 100,
  followScroll: false
});

//слайдер Каталога
$window = $(window);
$slick_slider = $('#slider-idx_catalog');
settings = {
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
      }
    }
  ]
}
$slick_slider.slick(settings);

$('#slider-idx_catalog').on('setPosition', function () {
  $(this).find('.catalog__item').height('auto');
  var slickTrack = $(this).find('.slick-track');
  var slickTrackHeight = $(slickTrack).height();
  $(this).find('.catalog__item').css('height', slickTrackHeight + 'px');
});

$window.on('resize', function() {
  if ($window.width() < 576) {
    if ($slick_slider.hasClass('slick-initialized'))
      $slick_slider.slick('unslick');
    return
  }
  if ( ! $slick_slider.hasClass('slick-initialized'))
    return $slick_slider.slick(settings);
});



// слайдер итема
$('.itemslider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.itemslider-nav',
  arrows: true,
  fade: true,
  infinite: true,
  loop: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});
$('.itemslider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.itemslider-for',
  dots: false,
  arrows: false,
  centerMode: true,
  infinite: true,
  loop: true,
  focusOnSelect: true
});


//переключение иконок
function toggleIconTools(e) {
  $(e.target)
    .prev('.tools__header')
    .find('.i--down')
    .toggleClass('i--up');
}
$('#id_filter').on('hidden.bs.collapse', toggleIconTools);
$('#id_filter').on('shown.bs.collapse', toggleIconTools);

function toggleIconMore(e) {
  $(e.target)
    .next('.b-more')
    .find('.i--swdown')
    .toggleClass('i--swup')
}
$('#id_swmodel-all').on('hidden.bs.collapse', toggleIconMore);
$('#id_swmodel-all').on('shown.bs.collapse', toggleIconMore);
$('#id_tools-all').on('hidden.bs.collapse', toggleIconMore);
$('#id_tools-all').on('shown.bs.collapse', toggleIconMore);



// слайдер миникартинок
$('.slidepics .pics_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 0,
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: false
});
$('.slidepics').hover(function(){
  let picId = '#' + $(this).attr('id');
  $(picId+' .hoverbar1').hover(function () {
      $(picId+' .pics_slide').slick('slickGoTo', 0);
    }, function () {}
  );
  $(picId+' .hoverbar2').hover(function () {
      $(picId+' .pics_slide').slick('slickGoTo', 1);
    }, function () {}
  );
  $(picId+' .hoverbar3').hover(function () {
      $(picId+' .pics_slide').slick('slickGoTo', 2);
    }, function () {}
  );
  $(picId+' .hoverbar4').hover(function () {
      $(picId+' .pics_slide').slick('slickGoTo', 3);
    }, function () {}
  );
}, function () {

});



//описание в рекламе
var trinote,
    tritimeoutId;

$('.block-tribanner').hover(function() {
    $('.tribanner__note').fadeOut();
    trinote = '#' + $(this).attr('id') + ' .tribanner__note';
    clearTimeout(tritimeoutId);
    $(trinote).slideDown(180);
  },
  function () {
    tritimeoutId = setTimeout($.proxy($(trinote),'fadeOut'), 100);
  });

$(trinote).mouseenter(function(){
  clearTimeout(tritimeoutId);
}).mouseout(function(){
  $('.tribanner__note').hide();
});



//переключение показать телефон
$('.b_phoneview').on('click', function () {
  $('#' + $(this).attr('id') + ' span').hide();
  $('#' + $(this).attr('id')).css({
    "background-color": "#ffffff",
    "padding": "0.6rem 0.5rem 0.4rem 0.5rem"
  });
  $('#' + $(this).attr('id') + ' a').fadeIn();
});


// валидация форм
(function () {
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


// выбрать все check/uncheck cab
checked = false
$('.cab_checkall').on('click', function () {
  var aa= document.getElementById('id_cab');
  if (checked == false){
    checked = true
  }
  else{
    checked = false
  }
  for (var i =0; i < aa.elements.length; i++){
    aa.elements[i].checked = checked;
  }
});



// программинг Сообщения

function adjustGridMessages() {
  const grid = $(".grid-messages__messtopic");
  if ($(window).width() <= (992 - 17)) {
    grid.addClass("collapsed");
    $(".grid-messages").removeClass("opened");
    grid.find(".block-messtopic").hide();
    grid.find(".block-messtopic.active").show();
  } else {
    grid.removeClass("collapsed");
    grid.find(".block-messtopic").show();
    grid.css("height", "auto");
  }
  if ($(".block-messtopic.active").length === 0) {
    grid.removeClass("collapsed");
    $(".grid-messages").addClass("opened");
    grid.find(".block-messtopic").show();
  }
}
adjustGridMessages()
$(window).on("resize", adjustGridMessages);


$(document).on("click", ".block-messtopic", function () {
  const grid = $(this).closest(".grid-messages__messtopic");
  const messages = $(".grid-messages");

  if ($(window).width() <= (992 - 17) && grid.hasClass("collapsed")) {
    grid.removeClass("collapsed");
    messages.addClass("opened");
    grid.find(".block-messtopic").show();
    return;
  }

  grid.find(".block-messtopic").removeClass("active");
  $(this).addClass("active");

  $(".block-messchat").css("display", "block");

  const inputSection = $(".grid-messages__messinput");
  if ($(this).hasClass("sys")) {
    inputSection.addClass("disabled");
    inputSection.find("input, button").attr("disabled", true);
  } else {
    inputSection.removeClass("disabled");
    inputSection.find("input, button").attr("disabled", false);
  }

  if ($(window).width() <= (992 - 17)) {
    messages.removeClass("opened");
    grid.addClass("collapsed");
    grid.find(".block-messtopic").hide();
    grid.find(".block-messtopic.active").show();
  } else {
    messages.addClass("opened");
  }
});



