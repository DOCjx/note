define(function(require, exports, module) {
	exports.init = function (){
		console.log(0);
	};
	exports.nav = function (topicList,cb) {
		var NavArr = node_merge(topicList);
		cb(NavArr);
	} 
 
	function node_merge(topicList,pid){
		if (!pid) var pid = 0;
		var arr = [];
		topicList.forEach(function (v) {			
			if (v['pid'] == pid) {
				v['children'] = node_merge(topicList,v['id']);
                if(v['children'].length <=3){
                    arr.push(v);
                }else {
                    v['children'].splice(3,15);
                    arr.push(v);
                }

			}
		});
		return arr; 
	} 
});