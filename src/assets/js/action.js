
function changeTag(nodeName) {
 //console.info(document.getElementById("tabSd").innerText = nodeName+"配置");
/* $("#liGd").removeAttr("class");
 $("#liSd").addClass("active");
 
 $("#sd").removeAttr("class");
 $("#sd").addClass("tab-pane active");*/
}


//关闭node配置卡
function closeDiv(){
	tools = document.getElementById("tools");
	tools.style.display = "none";
}


function copyMenuDis(menuId){
	console.info(menuId);
	$("#"+menuId).remove();
}

//保存配置区域所属ID
function saveConfigId(id){
	$("#nodeId").val(id);
}

//保存node配置到该node下
function saveConfig(evt){
	var nodeId= $("#nodeId").val();
	alert("配置保存成功！");
	closeDiv();
	
}