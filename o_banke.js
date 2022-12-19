$(".content-block").each(function() {
    let more = $(this).find(".show-more");
    let hide = $(this).find(".moree");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
    });
});