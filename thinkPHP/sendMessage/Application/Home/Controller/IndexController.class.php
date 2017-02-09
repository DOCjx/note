<?php
namespace Home\Controller;
use Think\Controller;
use Org\Alidayu\Client;
use Org\Alidayu\App;
use Org\Alidayu\Requests\AlibabaAliqinFcSmsNumSend;

class IndexController extends Controller {
    public function index(){
        $users = D('Join')->getUser();
        // var_dump($users);
        $this->assign('users',$users);
        $this->show();
    }
    public function send(){
    	$counter = 0;
    	$success = 0;
        $userId = I('userId');
    	$config = [
			'app_key'     => '',
		    'app_secret'  => '',
		    'freeSign'	  => '',
		    'templateCode'=> '',
		    'mes'		  => [//模板内的变量
		    	'message'=>'mes',
		    ],
		];
		$client = new Client(new App($config));
		$req    = new AlibabaAliqinFcSmsNumSend();
		if( !empty($userId) ){
	        foreach ($userId as $k => $v) {
	        	$phoneNum =  D('Join')->getPhoneNum($v);
	        	//dump($phoneNum);
	        	$req->setRecNum($phoneNum)
				    ->setSmsParam($config['mes'])
				    ->setSmsFreeSignName($config['freeSign'])
				    ->setSmsTemplateCode($config['templateCode']);
				//print_r($client->execute($req));
				$result = $client->execute($req);
		       	$mes = $result->result->success?'<span class="text-success">发送成功</span>':'<span class="text-warning">'.$result->sub_msg.'</span>';
		       	//dump($mes);
		       	$data['mail']=$mes;
		       	$counter++;
		       	$result->result->success&&$success++;
		       	M('Join')->where(array('id'=>array('EQ',$v)))->save($data);
	        }
	    }
		$this->success('总共'.$counter.'条，发送成功'.$success.'条', 'Index/index');
		
        //stdClass Object
		//(
		//    [result] => stdClass Object
		//        (
		//            [err_code] => 0
		//            [model] => 105856106754^1107945849326
		//            [success] => 1
		//        )
//
		//    [request_id] => rxnm8akp5cxk
		//)

		//stdClass Object
		//(
		//    [code] => 15
		//    [msg] => Remote service error
		//    [sub_code] => isv.MOBILE_NUMBER_ILLEGAL
		//    [sub_msg] => 号码格式错误
		//    [request_id] => 2msfmby48v6f
		//)
    }
}