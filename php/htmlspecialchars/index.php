<html>
    <body>
        <?php
            $a = '<script type="text/javascript"> console.log("0")</script>';
            $b = htmlspecialchars($a);
            $c = html_entity_decode($b);
            $d = htmlspecialchars_decode($b);
            var_dump($a);
            var_dump($b);
            var_dump($c);
            var_dump($d);
            echo 'a'.$a;//执行
            echo 'b'.$b;
            echo 'c'.$c;//执行
            echo 'd'.$d;//执行
        ?>
    </body>
</html>