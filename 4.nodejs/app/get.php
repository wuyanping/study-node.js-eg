<?php 
//一获取授权code值
$code = $_GET["code"];

$appid="wx8c0da0d7875bb9d1";
$secret="4abe519e78ccf9ca1846e785ba11bd13";
//二根据code值获取access_token
$url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.$appid.'&secret='.$secret.'&code='.$code.'&grant_type=authorization_code';
$str = file_get_contents($url);
$json = json_decode($str);
// var_dump($json);
$access_token_w = $json->access_token;
// 用户openID
$openid = $json->openid;

//获取用户信息地址
$url = 'https://api.weixin.qq.com/sns/userinfo?access_token='.$access_token_w.'&openid='.$openid.'&lang=zh_CN';

//获取接口信息
$user = file_get_contents($url);
//把获取的信息转为JSON对象
$obj = json_decode($user);

//输出表格显示获取到的信息
// echo "<table>";
// echo "<tr>
// 	<td><img style='width:50px' src='{$obj->headimgurl}' /></td>
// 	<td>{$obj->nickname}</td>
// 	<td>".($obj->sex==1?"男":"女")."</td>	
// 	<td>{$obj->city}</td>
// </tr>";
// echo "</table>";
// 
// 连主库
$sex=$obj->sex==1?"男":"女";
$conn = mysqli_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB);
$conn->query("set names utf-8");
$sql="INSERT INTO user (name,headimg,sex,city,score) VALUE ('{$obj->nickname}','{$obj->headimgurl}','{$sex}','{$obj->city}',100)";
$conn->query($sql);
if (mysqli_affected_rows($conn)>0) {
	# code...
	echo '{"error":0}';
}else{
	echo '{"error":1}';
}

// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8c0da0d7875bb9d1&redirect_uri=http%3A%2F%2F1.wenxin6.applinzi.com%2Fsq%2Fcode.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect

// http%3A%2F%2Fwenxin6.applinzi.com%2Fweixin2%2Fsample.php
// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8c0da0d7875bb9d1&redirect_uri=http%3A%2F%2Fwenxin6.applinzi.com%2Fweixin2%2Fsample.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect

 ?>