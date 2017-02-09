<?php
namespace Admin\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
    	$userName = D('User')->getUser();
    	$this->assign('userName',$userName['name']);
    	$userInfo = D('User')->getUserInfo();
    	$this->assign('userInfo',$userInfo);
    	// var_dump($userInfo);
        $this->display();
    }
    public function editUser(){
    	$userName = D('User')->getUser();
    	$this->assign('userName',$userName['name'])->assign('flag',I('flag'));
    	$userInfo = D('User')->editUserInfo(I('editUserId'));
    	$this->assign('userInfo',$userInfo);
    	// var_dump($userInfo);
    	if( !empty($_SESSION['id'] ) ){
            $this->display();
        } else {
            $this->redirect('Home/Index/userLogin');
        }
    }
    public function updataUser(){
    	$result = D('User')->updataUser();
    	if( $result!==FALSE ){
            $this->success('更新成功！',U('Index/index'));
        } else {
            $this->error('更新失败！',U('Index/index'));
        }
    }
    public function delUser(){
    	$result = D('User')->delUser();
    	if( $result ){
            $this->success('删除成功！',U('Index/index'));
        } else {
            $this->error('删除失败！',U('Index/index'));
        }
    }
    public function addUser(){
    	$result = D('User')->addUser();
    	if( $result ){
            $this->success('增加成功！',U('Index/index'));
        } else {
            $this->error('增加失败！',U('Index/index'));
        }
    }
    public function detail(){
        $userName = D('User')->getUser();
        $this->assign('userName',$userName['name']);
	    if( I('flag') ){	
	    	$data = D('Data')->getGameData();
	    	$this->assign('data',$data);
    		$this->assign('page',D('Data')->dataPage());
	    	$this->display();
	    } else {
	    	$this->redirect('Home/Index/index');
	    }
    }
    public function doData(){
    	$status = I('status');
    	$doData = D('Data')->doData($status);
        if( $doData!==FALSE ){
            $this->success('删除/恢复成功！');
        } else {
            $this->error('删除失败！');
        }
    }
}