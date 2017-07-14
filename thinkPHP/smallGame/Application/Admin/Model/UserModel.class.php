<?php
namespace Admin\Model;
use Think\Model;
class UserModel extends Model {
    public function getUser(){
        // var_dump($_SESSION);
        return $this->where(array('id'=>array('EQ',$_SESSION['id'])))
                    ->field('name')
                    ->find();
    }
    public function getUserInfo(){
        return $this->order('login_time DESC')
                    ->select();
    }
    public function editUserInfo($editUserId){
        // var_dump(I('editUserId'));
        return $this->where(array('id'=>array('EQ',$editUserId)))->find();
    }
    public function updataUser(){
        $data['user_id'] = I('user_id');
        $data['name'] = I('name');
        $data['psw'] = I('psw');
        $data['sex'] = I('sex');
        $data['email'] = I ('email');
        $data['status'] = I('status');
        return $this->where(array('id'=>array('EQ',I('editUserId'))))
                    ->save($data);
        // var_dump(I('editUserId'));
        // return $result;
    }
    public function delUser(){
        return $this->where(array('id'=>array('EQ',I('editUserId'))))
                    ->delete();
    }
    public function addUser(){
        $detail = $this->create();
        $datail['id'] = I('id');
        $datail['user_id'] = I('user_id');
        $datail['name'] = I('name');
        $datail['psw'] = I('psw');
        $datail['sex'] = I('sex');
        $datail['email'] = I ('email');
        $datail['login_time'] = time();
        $datail['status'] = I('status');
        return $this->data($datail)
                    ->add();
    }
}