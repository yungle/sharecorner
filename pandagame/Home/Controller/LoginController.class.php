<?php
namespace Home\Controller;
use Think\Controller;


//Login
class LoginController extends Controller {

	//显示登陆页面
	public function index() {
		$this->display();
	}

	public function logout() {
		session('userid', null);
		$this->redirect(U('Login/index'));
	}

	//验证码
	public function verify() {
		
	}

	//登陆校验
	public function checkLogin() {

	}

	public function sms_code() {

	}


}	