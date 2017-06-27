<?php
namespace Home\Controller;
use Think\Controller;


//乐园管理
class GardenManage extends CommonController {

	//返回游戏大厅
	public function index() {
		$this->display(U('Index/index'));
	}

	//我的乐园
	public function myGarden() {
		$this->display();
	}

	//朋友乐园
	public function friendGarden() {
		$this->display();
	}

	//开发新乐园
	public function createNewGarden() {
		$this->display();
	}
}	