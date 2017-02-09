<?php
namespace Home\Model;
use Think\Model;

class JoinModel extends Model {		
	public function getUser(){
		$users = $this->where(array('status'=>array('EQ',1)))
                ->field('id,sno,name,sex,class,phone,QQ,mail,status')
		        ->select();
		// var_dump($users);

		return $users;
	}
	public function getPhoneNum($id){
		
		$phoneNum = $this->where(array('id'=>array('EQ',$id)))
                ->field('phone')
		        ->find()['phone'];
		// var_dump($users);

		return $phoneNum;
	}
}