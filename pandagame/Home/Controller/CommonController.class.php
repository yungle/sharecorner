<?php

namespace Home\Controller;
use Think\Controller;

//公共类
class CommonController extends Controller {
	
	//初始化
	public function _initialize() {
		if (!session('userid')) {
			redirect(U('Login/index'));
		}
	}
}