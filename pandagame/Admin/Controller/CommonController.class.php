<?php

namespace \Admin\Controller;
use Think\Controller;

class CommonController extends Controller {
	//初始化操作
	public function _initialize() {
		if(!session('sp_user')) {
			$this->redirect('Admin/Login/index');
		}
		$weekDay = 86400 * 7;
		$loseTime = time() - $weekDay;

		$writeFile = F('lock_start', '', './Public/data/');
	}
}