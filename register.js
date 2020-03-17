$(function(){
    var $user=$('#user'),
        $phone=$('#phone'),
        $pwd=$('#pwd'),
        $test=$('#test')
        $testnumber=$('#testnumber'),
        $register=$('#register');
    
    $register.click(function(){
        if(!validate('#user')||!validate('#phone')||!validate('#pwd')||!validate('#test')
           ||!validateUser('#user')||!validatePhone('#phone')||!validatePwd('#pwd')||!validateTest('#test')) return;
        
        alert('注册成功');
    })
    
    $user.focusout(function(){
        if(!validateUser('#user')) $user.select();
    })

    $phone.focusout(function(){
        if(!validatePhone('#phone'))$phone.select();
    })

    $pwd.focusout(function(){
        if(!validatePwd('#pwd'))$pwd.select();
    })

    $test.focusout(function(){
        if(!validateTest('#test'))$test.select();
    })
    function validate(field){
        var $data=$(field),
            $msg=$(field+'-validation-message');

        if($data.val()===''){
            $msg.html('不能为空!');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
    }

    function validateUser(field){
        var $data=$(field),
            $msg=$(field+'-validation-message');
        
        if(/[^\u4E00-\u9FA5\w]/.test($data.val())){
            $msg.html('用户名仅支持中英文，数字和下划线且不能为纯数字!');
            $data.select();
            return false;
        }
        if(!/\D/.test($data.val())){
            $msg.html('用户名仅支持中英文，数字和下划线且不能为纯数字!');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
    }
    function validatePhone(field){
        var $data=$(field),
            $msg=$(field+'-validation-message');
        
        if(!/^1[3,4,5,7,8][0-9]{9}$/.test($data.val())){
            $msg.html('手机号格式不正确');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
        
    }

    function validatePwd(field){
        var $data=$(field),
            $msg=$(field+'-validation-message');
        
        if(!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,14}$/ .test($data.val())){
            $msg.html('密码设置不符合要求');
            $data.select();
            return false;
        }
        if(!/^[^\u4E00-\u9FA5\uF900-\uFA2D\u0020]{8,14}$/.test($data.val())){
            $msg.html('密码设置不符合要求');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
    }

    function validateTest(field){
        var $data=$(field),
            $msg=$(field+'-validation-message');
        if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4}$/.test($data.val())){
            $msg.html('验证码错误');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
    }

    $testnumber.click(function(){
        var timer,num=59,
            $msg=$('#test-validation-message');
        timer=setInterval(function(){
            num--;
            if(num===0){
                clearInterval(timer);
                $testnumber.removeAttr('disabled');
                $testnumber.val('获取验证码');
                $msg.html('请求超时，请稍后再试')
            }else{
                $testnumber.attr("disabled","disabled");
                $testnumber.val('重新获取('+num+'s)');
                $msg.html('');
            }
        },1000)
    })
})