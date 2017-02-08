<?php
namespace Home\Controller;
use Think\Controller;
class BaseController extends Controller {
	public function _initialize(){
		$nav = D('Category')->category();
		$talk = D('talk')->getTalk();
		// var_dump($talk);
		$this->assign('nav',$nav)
			 ->assign('talk',$talk)
			 ->assign('session',$_SESSION['id']);
	}
}