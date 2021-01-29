$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
function cartDrpdownExpand() {
    $('#cartDropdown').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).siblings('.mini-cart__dropdown-menu').addClass('open').slideToggle(500);
        if ($('.dropdown-menu').hasClass('show')) {
            $('.dropdown-menu').removeClass('show').slideUp(500);
        }
    });
    $('#cart-close').on('click', function (e) {
        e.preventDefault();
        $('.mini-cart__dropdown-menu').removeClass('open').slideUp(500);
    })
    $('.mini-cart__dropdown-menu').on('click', function (e) {
        e.stopPropagation();
    });
    $('.dropdown-toggle').on('click', function () {
        if ($('.mini-cart__dropdown-menu').hasClass('open')) {
            $('.mini-cart__dropdown-menu').slideUp(500);
        }
    });
}
