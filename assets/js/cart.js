var btnAddToCart = $('.add-to-cart');
function toogleTOC(status){
    if (status){
        $('.toc-block').addClass('toc-hide')
    }else{
        $('.toc-block').removeClass('toc-hide')
    }
}
$(".btn-hide-toc").click(function (){
    let $this = $(this);
    if ($this.hasClass('is-hide')){
        toogleTOC(false)
        $this.text('ẩn')
        $this.removeClass('is-hide')
    }else{
        toogleTOC(true)
        $this.text('hiện')
        $this.addClass('is-hide')
    }
})
function loadCart() {
    $('.header-toolbar-icons').load(urlGetCartComponent);
    // $('html, body').animate({
    //     scrollTop: 0
    // }, 800);
}

function sendAjax(id, qty, type, isChild = false) {
    let url;
    if (type === "add") {
        url = urlAddToCart;
    }
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        data: {
            'id': id,
            'qty': qty,
            'isChild' : isChild
        }, error: function () {
            alert('Đã có lỗi xảy ra.');
        }, success: function (response) {
            if (response.success) {
                loadCart();
            } else {
                alert('Đã có lỗi xảy ra.');
            }
        }
    })
}

$('.add_cart').click(function () {
    let $this = $(this);
    let qty = 1;
    let type = $this.data('type');
    let id = $this.data('id');
    if (typeof attr !== typeof undefined && attr !== false) {
        sendAjax(attr, qty, 'add',true);
        $('.cart-success').addClass('cart-success-active')
        $('.cart-scroll').removeClass('d-none')
        setTimeout(function (){
            $('.cart-success').removeClass('cart-success-active')
        },2000)
        if (type == 'buynow'){
            setTimeout(function (){
                window.location.replace(base_url+"/gio-hang")
            },500)
        }
    }else{
        sendAjax(id, qty, 'add',false);
        $('.cart-success').addClass('cart-success-active')
        $('.cart-scroll').removeClass('d-none')
        setTimeout(function (){
            $('.cart-success').removeClass('cart-success-active')
        },2000)
        if (type == 'buynow'){
            setTimeout(function (){
                window.location.replace(base_url+"/gio-hang")
            },500)
        }
    }
})
$(".cart-scroll").click(function (){
    $('.mini-cart__ammount').trigger('click')
})
btnAddToCart.click(function () {
    let $this = $(this);
    let type = $this.data('type');
    let qty = $this.data('qty');
    let id = $this.data('id');
    let attr = $(this).attr('data-attribute-id');
    if (typeof attr !== typeof undefined && attr !== false) {
        sendAjax(attr, qty, 'add',true);
        $('.cart-success').addClass('cart-success-active')
        $('.cart-scroll').removeClass('d-none')
        setTimeout(function (){
            $('.cart-success').removeClass('cart-success-active')
        },2000)
        if (type == 'buynow'){
            setTimeout(function (){
                window.location.replace(base_url+"/gio-hang")
            },500)
        }
    }else{
        sendAjax(id, qty, 'add',false);
        $('.cart-success').addClass('cart-success-active')
        $('.cart-scroll').removeClass('d-none')
        setTimeout(function (){
            $('.cart-success').removeClass('cart-success-active')
        },2000)
        if (type == 'buynow'){
            setTimeout(function (){
                window.location.replace(base_url+"/gio-hang")
            },500)
        }
    }

})
$('.delete-item-cart').click(function () {
    let id = $(this).data('id');
    $.ajax({
        url: urlRemoveCartItem,
        type: 'post',
        data: {
            id: id
        },
        error: function () {
            alert('Đã có lỗi xảy ra');
        }, success(response) {
            if (response.success) {
                window.location.reload();
            } else {
                alert('Đã có lỗi xảy ra');
            }
        }
    })
});
$('.update-cart-btn').click(function () {
    let id = $(this).data('id');
    let type = $(this).data('type');
    $.ajax({
        url: urlUpdateCart,
        type: 'post',
        dataType: 'json',
        data: {
            id: id,
            type: type
        },
        success(response) {
            if (response.success) {
                window.location.reload();
            } else {
                alert('Đã có lỗi xảy ra');
            }
        }
    })
});
$('.mini-cart__content').on('click','.delete-item-cart',function () {
    let id = $(this).data('id');
    $.ajax({
        url: urlRemoveCartItem,
        type: 'post',
        data: {
            id: id
        },
        error: function () {
            alert('Đã có lỗi xảy ra');
        }, success(response) {
            if (response.success) {
                loadCart();
            } else {
                alert('Đã có lỗi xảy ra');
            }
        }
    })
})

