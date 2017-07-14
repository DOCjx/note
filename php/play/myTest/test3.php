<?php
/* 默认输出十行，用T(值)的形式可改变输出行数 */
class T{
  private $num;
  public function __construct($var=10) {
    if ($var<3) die("值太小啦！");
    $this->num=$var;
  }
  public function display(){
    $n=10;
    $arr=array();
  //$arr=array_fill(0,$n+1,array_fill(0,$n+1,0));
    $arr[1]=array_fill(0,3,0);
    $arr[1][1]=1;
    // echo str_pad("&nbsp;",$n*12,"&nbsp;");
    printf("%3d",$arr[1][1]);
    echo "<br/>";
    for($i=2;$i<=$n;$i++){
      $arr[$i]=array_fill(0,($i+2),0);
      for($j=1;$j<=$i;$j++){
        if($j==1);
          // echo str_pad("&nbsp;",($n+1-$i)*12,"&nbsp;");
        printf("%3d",$arr[$i][$j]=$arr[$i-1][$j-1]+$arr[$i-1][$j]);
        // echo "&nbsp;&nbsp;";
      }
      echo"<br/>";
    }
  }
}
$yh=new T(); //$yh=new T(数量);
$yh->display();
?>
