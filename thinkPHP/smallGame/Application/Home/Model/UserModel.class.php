<?php
namespace Home\Model;
use Think\Model;
class UserModel extends BaseModel {
    public function getUser(){
        $user = $this->where(array('id'=>array('EQ',$_SESSION['id'])))
                     ->field('name')
                     ->find();
        // var_dump($user);
        return $user;
    }
    public function checkLogin($user_id,$psw){
        $userinfo = $this->where(array('user_id'=>$user_id,'psw'=>$psw,'status'=>array('NEQ',0)))
                         ->field('id,status,user_id')
                         ->find();
            // var_dump($userinfo);
        if( $userinfo ){
            session('id',$userinfo['id']);
            session('status',$userinfo['status']);
            session('user_id',$userinfo['user_id']);
        }
        return $userinfo;
    
    }
    public function unFindUser(){
        return empty($this->where(array('user_id'=>array('EQ',I('user_id'))))->find());
    }
    public function addUser(){
        $detail=$this->create();
        $detail['user_id'] = I('user_id');
        $detail['name'] = I('name');
        $detail['psw'] = I('psw');
        $detail['sex'] = I('sex');
        $detail['email'] = I('email');
        $detail['login_time'] = time();
        $result=$this->data($detail)
                     ->add();
        // var_dump($detail['user_id']);
        return $result;
    }
}