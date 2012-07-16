/*
	
	Creare OPA
	
	
*/

function doOptimiseProductAddition(){
	
	var params = "";
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			document.getElementById('status').selectedIndex = 1;
			document.getElementById('tax_class_id').selectedIndex = 2;
			document.getElementById('inventory_stock_availability').selectedIndex = 0;
			document.getElementById('inventory_is_qty_decimal').selectedIndex = 1;
			if(ajaxRequest.responseText != ""){
				document.getElementById('sku').value = parseInt(ajaxRequest.responseText)+1;
			}
		} else {
			document.getElementById('sku').value = '';	
		}
	}
	ajaxRequest.open("POST", '/opa/ajax/', true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.setRequestHeader("Content-length", params.length);
	ajaxRequest.setRequestHeader("Connection", "close");
	ajaxRequest.send(params);
			
}