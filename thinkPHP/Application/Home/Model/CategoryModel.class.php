<?php
namespace Home\Model;
use Think\Model;
class CategoryModel extends BaseModel {
	public function category(){
		$result = $this->where(array('status'=>array('EQ',1)))
					   ->select();
		foreach ($result as $val) {
			if($val['pid']==0){
			    foreach ($result as $v) {
			    	if($val['id']==$v['pid']){
			    		$val['c'][]=$v;
			    	}
			    }
			    $nav[]=$val;
			}
		}
		// var_dump($result);
		// var_dump($nav);
		return $nav;
	}
}