<?php
namespace Home\Model;
use Think\Model;
class TalkModel extends BaseModel {
	public function Gettalk(){
		return $this->join('__USER__ ON __TALK__.pid = __USER__.user_id')
					->field('name,content,upload_time')
					->order('upload_time DESC')
					->where(array('data_status'=>1))
					->limit(4)
					->select();
		// var_dump($_SESSION);
	}
	public function addTalk(){
		$detail=$this->create();
        $detail['pid'] = $_SESSION['user_id'];
        $detail['content'] = I('content');
        $detail['upload_time'] = time();
        $result=$this->data($detail)
        			 ->add();
        // var_dump($detail);
        return $result;
	}
}