$('.features-Work ul li ').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active')
if($(this).data('class') === 'all'){
    $('.Shufel_images .col-sm-3 ').css('opacity','1')
}
else{
    $('.Shufel_images .col-sm-3 ').css('opacity','.08')
$($(this).data('class')).parent().css('opacity','1')
}




if($(this).data('class') === 'all'){
    $('.imgs_imgs .col-sm-3').css('opacity','1')
}else{
    $('.imgs_imgs .col-sm-3 ').css('opacity','.08')
    $($(this).data('class')).parent().css('opacity','1')
}
})