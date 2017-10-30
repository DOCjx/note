<?php
  header("Content-Type:text/html;charset=utf-8");      //设置头部信息
  //isset()检测变量是否设置
  if(isset($_REQUEST['code'])){
    //strtolower()小写函数
    session_start();
    if(md5(strtolower($_REQUEST['code']))==$_SESSION['co']){
      //跳转页面
      echo "<script language=\"javascript\">";
      echo "alert('通过!".md5(strtolower($_REQUEST['code'])).'()'.$_SESSION['co']."');";
      echo "document.location=\"action.php\"";
      echo "</script>";
    }else{
      //提示以及跳转页面
      echo "<script language=\"javascript\">";
      echo "alert('输入错误!".md5(strtolower($_REQUEST['code'])).'()'.$_SESSION['co']."');";
      echo "document.location=\"action.php\"";
      echo "</script>";
    }
    exit();
  }
?>