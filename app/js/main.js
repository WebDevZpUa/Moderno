$(function () {
  let mixer = mixitup(".products__inner-box");
  $(".rate-star").rateYo({
    rating: 5,
    readOnly: true,
    rating: 4.2,
    starWidth: "12px",
  });
  $(".product-slider__inner").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,
  });
});
