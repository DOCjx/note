<?php
namespace Home\Model;
use Think\Model;
class NumModel extends BaseModel {
	public function num(){
		$num = $this->select();
		foreach ($num as $k=>$val) {
			$result[] = explode('/',$val['content']);
		}
		// dump($num);
		// dump($result);
		return $result;
	}
}