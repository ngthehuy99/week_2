let dirFile = "https://codepen.io/rblinzler/pen/PoEqMYm.js";
let currentPage = 1;
let pages = 0;

init();

$(".btn").on("mousedown", function () {
  $(this).addClass("down");
});

$(".btn").on("mouseup", function () {

  $(this).removeClass("down");
  $(".btn").removeClass("active");
  if($(this).hasClass("scroll")) {
    scrollBtn($(this));
  } else {
    $(this).addClass("active");
    scrollPage($(this).attr("page"));
  }

});

$(".btn").on("mouseleave", function () {
  $(this).removeClass("down");
});

function scrollPage(nextPage) {

  $(".page-container").removeClass("page-" + currentPage);
  $(".page-container").addClass("page-" + nextPage);

  $(".page").removeClass("paused").removeClass("active");
  $("#page-" + nextPage).addClass("active");
  currentPage = nextPage;
  console.log(nextPage);
}

function scrollBtn(btn) {

  $(".scroll").toggleClass("disabled");
  if (btn.attr("page") == "prev") {

    $(".buttons").removeClass("next-buttons");
    $(".buttons").addClass("prev-buttons");

  } else if (btn.attr("page") == "next") {

    $(".buttons").addClass("next-buttons");
    $(".buttons").removeClass("prev-buttons");

  }
}


function init() {

    loadJSON(function (response) {
  
      let dir_data = JSON.parse(response);
      pages = Math.ceil(dir_data.length / 8);
  
      for(let p = 1; p <= pages; p++) {
  
        let newPage =
            "<div class='page' id='page-" + p + "'>" +
            "<div class='header'><span>100 DAYS CSS CHALLENGE</span></div>" +
            "<div class='content'>";
  
        let day = "";
        let m = ((p - 1) * 10);
        for(let i = 0; i < 10; i++) {
  
          day = "";
          let d = i + m;
          if(d < dir_data.length) {
            day = 
              "<div class='day'>" +
              "<a target='_blank' href='" + dir_data[d].codepen + "'>" +
              "<span>" + dir_data[d].title + "</span>" + 
              "<img class='thumb' src='" + dir_data[d].thumb + "'>" +
              "</a>" +
              "</div>";
          }
  
          newPage += day;
        }
  
        newPage += "</div></div>";
        $(".page-container").append(newPage);   
      }
  
      $("#page-1").addClass("paused");
  
    });
  
  }
  
  function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
  
    xobj.overrideMimeType("application/json");
  
    xobj.open("GET", dirFile, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }