// custom js for sidenav

function openNav() {
    document.getElementById("Side-nav").style.width = "250px";
}

function closeNav() {
    document.getElementById("Side-nav").style.width = "0";
}

//Js for carousel
$('.related-videos').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/prev.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./img/next.png'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });