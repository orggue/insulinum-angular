'use strict';

$(document).on('ready',function(){
    // NProgress.configure({ ease: 'ease', speed: 500 });
    NProgress.start();
});

$(window).on('load',function(){
    NProgress.done();
});