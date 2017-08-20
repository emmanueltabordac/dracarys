<?php

Class Inicio{
	
	private $elements;
	private $module;
	private $info;
	private $security;
	
	function __construct(){
		
		$this->module = array_pop(explode("/", dirname(__FILE__)));
		$this->elements = array();	
	}
	
	private function chargeElement(){
		
		//Start Information Module
// 		$params=array();
		$params['element']='Information';
		$params['id']='infor';
		$params['security']= $this->security;
		$params['module']=$this->module;
		$params['title']='Juego Marcela';
		array_push($this->elements, $params);
		unset($params);
		//End Information Module
		
		$divPrincipal = '<div class="zonaJuego" style="background-color:#FF0000;"></div>';
				
		//Start Form
		$params=array();
		$params['element']='Form';
		$params['id']='formregistro';
		$params['class']='default';
		$params['action']='index.php?url=inicio/pg/sininformacion';
		$params['method']='post';
		$params['content']=array($divPrincipal);
		array_push($this->elements, $params);
		unset($params);
		//End Form
		
	}
	
	public function getElement($info, $security){
		$this->info = $info;
		$this->security = $security;
		$this->chargeElement();
		return $this->elements;
	}
}

?>
