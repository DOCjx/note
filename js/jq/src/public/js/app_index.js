define(function (require, exports, module) {
	// console.log(module);
	exports.liu = function(){
		//alert(123);
        $(document).ready(function () {
           // alert(123);
            $('.catedialog').hover(function () {
                $('.curbg').delay(400).show(1);
            }, function () {
                $('.curbg').delay(300).hide(0);
            });
        });
    }
})