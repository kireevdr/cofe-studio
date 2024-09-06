'use strict';


import base from 'components/page/page'
import header from 'components/page-header/page-header'
import form from 'static/js/base/send-form'
import basic from 'components/b-basic/b-basic'

$(document).ready(function() {
    base();
    header();
    form();
    basic();

    $("body").css("opacity", "1").addClass("body-ready");
})
