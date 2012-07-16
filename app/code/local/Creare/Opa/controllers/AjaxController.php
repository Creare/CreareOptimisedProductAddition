<?php

class Creare_Opa_AjaxController extends Mage_Core_Controller_Front_Action
{
	
	public function indexAction()
	{
		$dbread = Mage::getSingleton('core/resource')->getConnection('core_read');
		$sql = $dbread->query("SELECT * FROM catalog_product_entity WHERE attribute_set_id != '10' AND sku != '' ORDER BY CAST(sku AS SIGNED) DESC");	
		$res = $sql->fetch();
		
		echo $res["sku"];
	}
	
}