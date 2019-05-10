//表单验证-电脑端
$(function () {

    var ok1 = false;
    var ok2 = false;
    var ok3 = false;
    var ok4 = false;
    // 验证用户名
    $('input[id="name"]').blur(function () {
        if ($(this).val() == '') {
            $(this).next().html('&#xe606;').removeClass('state2').addClass('state1');
        } else if ($(this).val().length >= 2 && $(this).val().length <= 12) {
            $(this).next().html('&#xe645;').removeClass('state1').addClass('state2');
            ok1 = true;
        } else {
            $(this).next().html('&#xe606;').removeClass('state2').addClass('state1');
        }

    });

    //验证手机号
    $('input[id="phone"]').blur(function () {
        if ($(this).val() == '') {
            $(this).next().html('&#xe606;').removeClass('state2').addClass('state1');
        } else if ($(this).val().search(/^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/) == -1) {
            $(this).next().html('&#xe606;').removeClass('state2').addClass('state1');
        } else {
            $(this).next().html('&#xe645;').removeClass('state1').addClass('state2');
            ok2 = true;
        }

    });

    //验证需求
    $('input[id="needs"]').blur(function () {
        if ($(this).val() == '') {
            $(this).next().html('&#xe606;').removeClass('state2').addClass('state1');
        } else {
            $(this).next().html('&#xe645;').removeClass('state1').addClass('state2');
            ok3 = true;
        }

    });
    //验证留言
    $('textarea[id="message"]').blur(function () {
        if ($(this).val() == '') {
            $(this).next().html('&#xe606;').removeClass('state2').addClass('state1');
        } else {
            $(this).next().html('&#xe645;').removeClass('state1').addClass('state2');
            ok4 = true;
        }

    });

    //提交按钮,所有验证通过方可提交
    $('.submit').click(function () {
        if (ok1 && ok2 && ok3 && ok4) {
            $('form').submit();
            alert("提交成功");
        } else {
            alert("信息输入有误");
            return false;
        }
    });

});

//表单验证-手机端
$(function () {

    var ok1 = false;
    var ok2 = false;
    var ok3 = false;
    var ok4 = false;
    // 验证用户名
    $('input[id="name_m"]').blur(function () {
        if ($(this).val() == '') {
            $(this).next().html('&#xe606;').removeClass('state2').addClass('state1');
        } else if ($(this).val().length >= 2 && $(this).val().length <= 12) {
            $(this).next().html('&#xe645;').removeClass('state1').addClass('state2');
            ok1 = true;
        } else {
            $(this).next().html('&#xe606;').removeClass('state2').addClass('state1');
        }

    });

    //验证手机号
    $('input[id="phone_m"]').blur(function () {
        if ($(this).val() == '') {
            $(this).next().html('&#xe606;').removeClass('state2').addClass('state1');
        } else if ($(this).val().search(/^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/) == -1) {
            $(this).next().html('&#xe606;').removeClass('state2').addClass('state1');
        } else {
            $(this).next().html('&#xe645;').removeClass('state1').addClass('state2');
            ok2 = true;
        }

    });

    //验证需求
    $('input[id="needs_m"]').blur(function () {
        if ($(this).val() == '') {
            $(this).next().html('&#xe606;').removeClass('state2').addClass('state1');
        } else {
            $(this).next().html('&#xe645;').removeClass('state1').addClass('state2');
            ok3 = true;
        }

    });
    //验证留言
    $('textarea[id="message_m"]').blur(function () {
        if ($(this).val() == '') {
            $(this).next().html('&#xe606;').removeClass('state2').addClass('state1');
        } else {
            $(this).next().html('&#xe645;').removeClass('state1').addClass('state2');
            ok4 = true;
        }

    });

    //提交按钮,所有验证通过方可提交
    $('.submit_m').click(function () {
        if (ok1 && ok2 && ok3 && ok4) {
            $('form').submit();
            alert("提交成功");
        } else {
            alert("信息输入有误");
            return false;
        }
    });

});