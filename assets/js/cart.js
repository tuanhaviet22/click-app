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
    $('.register-button .btn-block').load(urlGetCartComponent);
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
    let count = parseInt($('.mini-cart__count').text());
    let pro_name = $this.parents('.product-content').find('h4').text();
    count++;
    if (typeof attr !== typeof undefined && attr !== false) {
        sendAjax(attr, qty, 'add',true);
        $('.cart-success').addClass('cart-success-active').text(pro_name + ' đã được thêm vào giỏ hàng');
        $('.mini-cart__count').text(count);
        // $('.cart-scroll').removeClass('d-none')
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
        $('.cart-success').addClass('cart-success-active').text(pro_name + ' đã được thêm vào giỏ hàng')
        $('.mini-cart__count').text(count);
        // $('.cart-scroll').removeClass('d-none')
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
    let pro_name = $this.parents('.product-details-content').find('.product-details-name').text();
    let count = parseInt($('.mini-cart__count').text());
    count++;
    if (typeof attr !== typeof undefined && attr !== false) {
        sendAjax(attr, qty, 'add',true);
        $('.mini-cart__count').text(count);
        $('.cart-success').addClass('cart-success-active').text(pro_name + ' đã được thêm vào giỏ hàng')
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
        $('.cart-success').addClass('cart-success-active').text(pro_name + ' đã được thêm vào giỏ hàng')
        $('.cart-scroll').removeClass('d-none');
        $('.mini-cart__count').text(count);
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

$('input[name="checkout"]').change(function(){

    let type_checkout = $('input[name="checkout"]:checked').val();
    $('.note-order').remove();
    if(type_checkout == 1)
    {
        $('.tbl-product').fadeIn();
        $('.tbl-service').fadeOut();
    }else{
        $('.tbl-service').fadeIn();
        $('.tbl-product').fadeOut();
    }
    $('#order_type').val(type_checkout);
})


$('#checkout-form .btn-submit').click(function () {
    
    let order_customer = $('#order_customer').val();
    let order_address = $('#order_address').val();
    let order_phone = $('#order_phone').val();
    let order_note = $('#order_note').val();
    let order_email = $('#order_email').val();
    
    let province = $('.order-province').css('display');
    let order_province = $('#order_province').val();
    let country = $('.order-country').css('display');
    let order_country = $('#order_country').val();
        
    if(order_customer == '' || order_address == '' || order_phone == '' || ($("#list-pay-method input:checked").val() != 'cod' && (order_country == '' || order_province == '' || order_note == '' || order_email == '')))
    {
        if($("#list-pay-method input:checked").val() != 'cod')
        {
            alert("Bạn phải nhập tất cả những trường có dấu (*), email và mục ghi chú");
            return false;
        }
        else{
            alert("Bạn phải nhập tất cả những trường có dấu (*)");
            return false;
        }
    }
    
    var str = /\D/;
    if(order_phone.length != 10 || str.test(order_phone) == true){
        alert("Số điện thoại di động phải gồm 10 kí tự số từ 0-9");
        return false;
    }
    
    $(this).attr('type', 'submit');
})


$("#list-pay-method input").click(function(){
    $name = $(this).val();
    if($name != 'cod'){
        $('.order-province, .order-country').css('display', 'block');
    }else{
        $('.order-province, .order-country').css('display', 'none');
    }
});


// Add cart price

function sendAjaxPrice(id, key) {

    $.ajax({
        url: urlAddPriceToCart,
        type: 'post',
        dataType: 'json',
        data: {
            id : id,
            key: key
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

$('.btn-select-price').click(function(){
    let $this = $(this);
    let key = $this.data('id');
    let id = $this.parents('section').data('module');
    let attr = $(this).attr('data-attribute-id');
    let count = parseInt($('.mini-cart__count').text());
    let price_name = $this.parents('.price-item').find('.title-price').text();
    count++;
    if (typeof attr !== typeof undefined && attr !== false) {
        sendAjaxPrice(id, key, 'add',true);
        $('.mini-cart__count').text(count);
        $('.cart-success').addClass('cart-success-active').text(price_name + ' đã được thêm vào giỏ hàng');
        $('.cart-success').addClass('cart-success-active')
        $('.cart-scroll').removeClass('d-none')
        setTimeout(function (){
            $('.cart-success').removeClass('cart-success-active')
        },2000)
    }else{
        sendAjaxPrice(id, key, 'add',false);
        $('.mini-cart__count').text(count);
        $('.cart-success').addClass('cart-success-active').text(price_name + ' đã được thêm vào giỏ hàng');
        $('.cart-success').addClass('cart-success-active')
        $('.cart-scroll').removeClass('d-none')
        setTimeout(function (){
            $('.cart-success').removeClass('cart-success-active')
        },2000)
    }
});
$('.delete-item-cartPrice').click(function () {
    let id = $(this).data('id');
    $.ajax({
        url: urlRemoveCartPriceItem,
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
