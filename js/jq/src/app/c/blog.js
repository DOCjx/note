 define(function(require, exports, module){

    var event = require('event');
    var route = require('route');
    var service = require('../m/blog');
	var tpl = require('../v/tpl_blog');
	var blogTools = require('../c/blogTools');

    exports._init = function(){
    	// console.log('archive/blog/_init', '模块前置');
		var body = tpl.body();
		var css = require('/public/css/css_blog');
		var nav = require('../v/tpl_nav').navTop();
		var cssnav = require('/public/css/css_nav');
		var jsnav = require('/public/js/navTop');
		var js = require('/public/js/blog').init();
		var footer = require('v/tpl_footer').footer();
		var cssfooter = require('/public/css/css_footer');
		var jsfooter = require('/public/js/anli');

		$(HY.rootDom).html(cssnav+nav+css+body+cssfooter+footer);
		jsnav.navInit("hide");
		service.getTopicList(function (topicList) {
    		service.getUserList(function (userList) {
    			topicList = topicList.sort(function (a, b) {
	                return a.priority - b.priority;
	            });
	            arrTopics = [];
	            topicList.forEach(function (item) {
	            	arrTopic = [];
	            	if( item.pid==0 ) {
	            		arrTopic.push(item.name);
	            		arrTopic.push(item.id);
	            		arrTopics.push(arrTopic);
	            	}
	            });
	            // console.log(arrTopics);
				service.getDetails(function(detail){
		            blogTools.articleSort(detail, 'create_time', 'desc', function(details){
		                // console.log(detail);
		                blogTools.articleCut(details, 200, function(detailsCuted){
		                    blogTools.timeToStr(detailsCuted, function(detailsStrTime){
		                        blogTools.isStrCut(detailsStrTime, 'title', 8, function(details){
	                                var arrTitle = [];
	                                for(var i=0;i<5&&i<details.length;i++){
	                                	var arrSide = [];
	                                	arrSide.push(details[i].title);
	                                	arrSide.push(details[i].create_time);
	                                	arrSide.push(details[i].id);
	                                	arrTitle.push(arrSide);
	                                }
	                                // $("#article").html(tpl.article({details:arrAll}));
	                                // console.log(arrSide);
						    		var navSide = require('../v/tpl_navSide').navSide({topicList: arrTopics,userList: userList,arrTitle: arrTitle});
									var cssSide = require('/public/css/css_navSide');
									var jsSide = require('/public/js/navSide')._init();
									$(".rightNav").html(cssSide+navSide);
		                        });
		                    });
		                }); 
		            });
		        });

			});
    	}); 
    };
	exports.init = function(){                                                                                                                                                 
		// console.log('archive/blog/init');
		service.getDetails(function(detail){
        	blogTools.articleSort(detail, 'create_time', 'desc', function(details){
                blogTools.articleCut(details, 200, function(detailsCuted){
                    blogTools.timeToStr(detailsCuted, function(detailsStrTime){
                        blogTools.isStrCut(detailsStrTime, 'title', 10, function(details){
                            blogTools.isStrCut(details, 'content', 200, function(details){
                            	$(".navLeft").html("");
                                $("#article").html(tpl.article({details:details}));
                                var pageSum = Math.ceil(details.length/5);
								$(".navFooter").html(tpl.navFooter({pageSum: pageSum}));
                            });
                        });
                    });
                });
            });
        });
	};
    exports.articleList = function(){
        var topicId = route.getParams('topicId') - 0;
        var indexId = route.getParams('indexId') - 0;
        // console.log(indexId);
        if( topicId ) {
        	var id = topicId;
        	var key = 'category_id';
        	blogTools.getNavLeft(topicId, indexId);
        } else if( indexId ){
        	var id = indexId;
        	var key = 'index_id';
        	blogTools.getNavLeft(topicId, indexId);
        }else{
        	var id = route.getParams('userId') - 0;
        	var key = 'user_id';
        	$(".navLeft").html("");
        }
        service.getDetails(function(detail){
        	blogTools.articleSort(detail, 'create_time', 'desc', function(details){
	            blogTools.getDetailsByField(details, key, id, function(details){
	                // console.log(details);
	                blogTools.articleCut(details, 200, function(detailsCuted){
	                    blogTools.timeToStr(detailsCuted, function(detailsStrTime){
	                        blogTools.isStrCut(detailsStrTime, 'title', 10, function(details){
	                            blogTools.isStrCut(details, 'content', 200, function(details){
	                                $("#article").html(tpl.article({details:details}));
	                                var pageSum = Math.ceil(details.length/5);
									$(".navFooter").html(tpl.navFooter({pageSum: pageSum}));
	                            });
	                        });
	                    });
	                });
	            });
	        });
        });
    };
 }); 