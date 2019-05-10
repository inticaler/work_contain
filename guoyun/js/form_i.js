//表单验证
$(function () {

    var ok1 = false;
    var ok2 = false;
    var ok3 = false;
    // 验证用户名
    $('input[id="iname"]').blur(function () {
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
    $('input[id="iphone"]').blur(function () {
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
    $('input[id="ineeds"]').blur(function () {
        if ($(this).val() == '') {
            $(this).next().html('&#xe606;').removeClass('state2').addClass('state1');
        } else {
            $(this).next().html('&#xe645;').removeClass('state1').addClass('state2');
            ok3 = true;
        }

    });

    //提交按钮,所有验证通过方可提交
    $('.isubmit').click(function () {
        if (ok1 && ok2 && ok3) {
            $('form').submit();
            alert("提交成功");
        } else {
            alert("信息输入有误");
            return false;
        }
    });

});