<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends BaseController {
    public function index(){
        $this->display();
    }
    public function userLogin(){
        $userName = D('User')->getUser();
        $this->assign('session',$_SESSION['id'])
             ->assign('userName',$userName['name']);
        $this->display();
    }
    public function login(){
        $user_id = I('user_id');
        $psw = I('psw');
        $result = D('User')->checkLogin($user_id,$psw);
        // var_dump($user_id,$psw);
        if( $result ){
            $this->success('登入成功！','Index/index');
        } else {
            $this->error('用户名不存在或密码错误！');
        }
        // var_dump($_SESSION);
    }
    public function logout(){
        if( !empty($_SESSION['id']) ){
            session_unset();
            session_destroy();
            $this->success('已安全退出！','Index/index');
        } else {
            $this->redirect('userLogin');
        }
    }
    public function addUser(){
        $this->display();
    }
    public function doUser(){
        $userInfo = D('User')->unFindUser();
        // var_dump($userInfo);
        if($userInfo){
            $addUser = D('User')->addUser();
        }
        if( $addUser ){
            $this->success('注册成功！','Index/index',3);
        } else {
            $this->error('用户名已存！');
        }
    }
    public function category(){
        $cId = I('id');
        switch ( $cId ) {
            case 1:
                $this->redirect('index');
                break;
            case 3:
                $this->redirect('record');
                break;
            case 4:
                $this->redirect('game');
                break;
            case 5:
                $this->redirect('game1');
                break;
        }
    }
    public function record(){
        $data = D('Data')->getGameData('猜数字');
        $data1 = D('Data')->getGameData('心灵感应');
        $this->assign('data',$data);
        $this->assign('data1',$data1);
        $this->assign('page',D('Data')->dataPage('猜数字'));
        $this->assign('page1',D('Data')->dataPage('心灵感应'));
        if( !empty($_SESSION['id']) ){
            if( $_SESSION['status']==2 ){
                $this->redirect('Admin/Index/index');
            } else {
                $this->display();
            }
        } else {
            $this->redirect('userLogin');
        }
    }
    public function addTalk(){
        if( !empty($_SESSION['id']) ){
            $addTalk = D('Talk')->addTalk();
            if( $addTalk ){
                $this->success('评论成功！','Index/index',3);
            } else {
                $this->error('评论失败！');
            }
        } else {
            $this->redirect('userLogin');
        }
    }
    public function game1(){
        $num = D('Num')->num();
        foreach ($num as $key => $value) {
            shuffle($num[$key]);
        }
        $this->assign('num',$num);
        session('0',(int)I('card0'));
        session('1',(int)I('card1'));
        session('2',(int)I('card2'));
        session('3',(int)I('card3'));
        session('4',(int)I('card4'));
        $result = (int)I('card4').(int)I('card3').(int)I('card2').(int)I('card1').(int)I('card0');
        $this->assign('result',bindec("$result"));
        $this->assign('session',$_SESSION);
        session('result',bindec("$result"));
        if(isset($_POST['sub'])) D('Data')->addData1();
        // var_dump($_POST);
        if( !empty($_SESSION['id']) ){
            $this->display();
        } else {
            $this->redirect('userLogin');
        }
    }
    public function game(){
        $input = I('input');
        $sub = I('sub');
        if( !empty(sub)&&!empty($input) ){
                session('input',$input);
                if( isset($_SESSION['have']) ){
                    session('have',--$_SESSION['have']);
                } else {
                    session('have','4');
                    session('answer',rand(1,10));
                }
                $used = 5-$_SESSION['have'];
                session('times',$used);
                if( $_SESSION['have']>=1 ){
                    if( $input==$_SESSION['answer'] ){
                        $info = '<font color="green">你赢了！输入数字再玩一次！</font>';
                        D('Data')->addData('赢');
                        unset($_SESSION['have']);
                        unset($_SESSION['answer']);
                        unset($_SESSION['input']);
                    } elseif( $input>$_SESSION['answer'] ) {
                        $info = '<font color="red">太大了！你用了 '.$used.' 次机会！</font>';
                    } elseif( $input<$_SESSION['answer'] ) {
                        $info = '<font color="red">太小了！你用了 '.$used.' 次机会！</font>';
                    } 
                } else {
                    $info = '<font color="red">你输了！输入数字再玩一次！</font>';
                    D('Data')->addData('输');
                    unset($_SESSION['have']);
                    unset($_SESSION['answer']);
                    unset($_SESSION['input']);
                }
        } else {
            $info = '<font color="green">输入1-10中的任意一个即可开始游戏！</font>';
        }
        // var_dump($_SESSION);
        // var_dump($input);
        $this->assign('input',$_SESSION['input'])
             ->assign('session',$_SESSION)
             ->assign('info',$info);
        if( !empty($_SESSION['id']) ){
            $this->display();
        } else {
            $this->redirect('userLogin');
        }
    }
}