$(".content-block").each(function() {
    let more = $(this).find(".show-more");
    let hide = $(this).find(".moree");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Загрузить еще" : "Скрыть");
    });
});

/* анимация при скролинге
*/

$(window).scroll(function() {
    $(".animate").each(function() {
        let pos = $(this).offset().top;
        let winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("Main");
        }
    });
});