<?php
namespace Home\Model;
use Think\Model;
class DataModel extends BaseModel {
        public function addData1(){
            $detail = $this->create();
            $detail['result'] = $_SESSION['result'];
                $detail['updata_time'] = time();
                $detail['game_name'] = '心灵感应';
                $detail['pid'] = $_SESSION['user_id'];
                $result = $this->data($detail)
                       ->add();
        // var_dump($_SESSION);
        // var_dump($detail);
    }
    public function addData($game_result){
        $detail = $this->create();
        $detail['result'] = $game_result;
                $detail['updata_time'] = time();
                $detail['game_name'] = '猜数字';
                $detail['pid'] = $_SESSION['user_id'];
                $detail['times'] = $_SESSION['times'];
                $result = $this->data($detail)
                    ->add();
        // var_dump($_SESSION);
        // var_dump($detail);
    }
        public function getGameData($game_type){
                return $this->where(array('pid'=>array('EQ',$_SESSION['user_id']),'status'=>array('EQ',1),'game_name'=>array('EQ',$game_type)))
                            ->field('game_name,updata_time,times,result')
                            ->page($_GET['p'],c('DATA_NUM'))
                            ->order('updata_time DESC')
                            ->select();
                // var_dump($return);
        }
        public function dataPage($game_type){
                $count = $this->where(array('pid'=>array('EQ',$_SESSION['user_id']),'status'=>array('EQ',1),'game_name'=>array('EQ',$game_type)))
                              ->count();
                $Page = new\Think\Page($count,c('DATA_NUM'));
                $Page->setConfig('theme','%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% %HEADER% ');
                $Page->setConfig('prev','上一页');
                $Page->setConfig('next','下一页');
                $show=$Page->show();
                return $show;
        }
}