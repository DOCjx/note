define(function(require,exports,module){
      var event = require('event');
      var route = require('route'); 
      

      exports.init = function(){
      	  // console.log('archive/talk/init');
          	  var tpl1 = require('v/tpl_nav').navTop();

          	  var css1 = require('/public/css/css_nav');
         
              var js1 = require('/public/js/navTop');

      	  //要加tpl和css前缀
              $(HY.rootDom).html(css1+tpl1);
              js1.navInit("hide");
                       
      }
})