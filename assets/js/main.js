var sectionHeight = function () {
  var total = $(window).height(),
    $section = $('section').css('height', 'auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height', 'auto');
  }
}

$(window).resize(sectionHeight);

$(function () {
  // find the main menu item and add the ul.pageContent to it
  const currentPath = window.location.pathname;
  if(currentPath != '/') {
    var addHere = null;
    $("nav ul.mainMenu li").each(function () {
      const li = $(this);
      var a = li.find('a').first();
      if (a.attr('href') == currentPath) {
        addHere = li;
      }
    });
    if (addHere == null) {
      addHere = $('#lastOne');
    }
    // create the in-page menu and add it
    var menu = $("<span>");
    $("section h1, section h2, section h3").each(function () {
      menu.append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + "'>" + $(this).text() + "</a></li>");
      $(this).attr("id", $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
      $("nav ul li:first-child a").parent().addClass("active");
    });
    addHere.after(menu);
  }

  $("#myTopnavMenu").on("click", function () {
    $("#myTopnav").toggleClass("responsive");
  });

  $("nav ul.mainMenu li").on("click", "a", function (event) {
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({ scrollTop: position }, 100);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });

  sectionHeight();

  $('img').on('load', sectionHeight);
});