
// 观察期dialog
function observeDialog(str){
	var oberveDialogHtml = '<div class="dialog observe-dialog" id="observe-dialog" type="0">'+
								'<div class="dialog-contain">'+
									'<div class="dialog-head clearfix">'+
										'观察期'+
										'<span class="head-close-icon close-dialog-btn">╳</span>'+
									'</div>'+
									'<div class="dialog-body">'+
										'<div class="table-div">'+
											'<table class="table" cellpadding="0" cellspacing="0">'+
												'<thead>'+
													'<tr>'+
														'<td>编号</td>'+
														'<td>姓名</td>'+
														'<td>注射时间</td>'+
														'<td>已注射(Min)</td>'+
														'<td>选择</td>'+
													'</tr>'+
												'</thead>'+
												'<tbody>'+str+'</tbody>'+
											'</table>'+
										'</div>'+
									'</div>'+
									'<div class="dialog-foot clearfix">'+
										'<div class="dialog-error-info">'+
											'<span class="error-icon">'+
												'<img src="../../aitmgmt/public/img/public/error.png" />'+
											'</span>'+
											'<i class="error-text"></i>'+
										'</div>'+
										'<div class="dialog-btn-box clearfix">'+
											'<div class="dialog-btn main-btn">选择</div>'+
											'<div class="dialog-btn sub-btn close-dialog-btn">关闭</div>'+
										'</div>'+
									'</div>'+
								'</div>'+
							'</div>'; 
	$("body").append(oberveDialogHtml);
}

// 搜索患者dialog
function searchDialog(str){
	var searchDialogHtml = '<div class="dialog search-result-dialog" id="search-result-dialog" type="0">'+
								'<div class="dialog-contain">'+
									'<div class="dialog-head clearfix">'+
										'搜索结果'+
										'<span class="head-close-icon close-dialog-btn">╳</span>'+
									'</div>'+
									'<div class="dialog-body">'+
										'<div class="table-div">'+
											'<table class="table search-result-table" cellpadding="0" cellspacing="0">'+
												'<thead>'+
													'<tr>'+
														'<td>编号</td>'+
														'<td>姓名</td>'+
														'<td>操作</td>'+
													'</tr>'+
												'</thead>'+
												'<tbody>'+str+'</tbody>'+
											'</table>'+
										'</div>'+
									'</div>'+
									'<div class="dialog-foot clearfix">'+
										'<div class="dialog-error-info">'+
											'<span class="error-icon">'+
												'<img src="../../aitmgmt/public/img/public/error.png" />'+
											'</span>'+
											'<i class="error-text"></i>'+
										'</div>'+
										'<div class="dialog-btn-box clearfix">'+
											'<div class="dialog-btn main-btn">选择</div>'+
											'<div class="dialog-btn sub-btn close-dialog-btn">关闭</div>'+
										'</div>'+
									'</div>'+
								'</div>'+
							'</div>'; 
	$("body").append(searchDialogHtml);
}

// 未搜索患者dialog
function noSearchPatient(){
	var noSearchPatientHtml = '<div class="dialog search-result-dialog no-search-dialog" id="no-search-dialog" type="0">'+
								'<div class="dialog-contain">'+
									'<div class="dialog-head clearfix">搜索结果<span class="head-close-icon close-dialog-btn">╳</span></div>'+
									'<div class="dialog-body">'+
										'<div class="no-patient">'+
											'<span class="img">'+
												'<img src="../../aitmgmt/public/img/public/blank.png">'+
											'</span>'+
											'<div class="no-patient-word">未搜索到患者</div>'+
										'</div>'+
									'</div>'+
									'<div class="dialog-foot clearfix">'+
										'<div class="dialog-btn sub-btn close-dialog-btn">关闭</div>'+
									'</div>'+
								'</div>'+
							'</div>';
	$("body").append(noSearchPatientHtml);
}

// 未选择患者dialog
//function oneBtnDialog("请先搜索并选择患者！"){
function oneBtnDialog(text){
	var noPatientHtml = '<div class="dialog remind-dialog-public one-btn-dialog" id="no-patient-dialog" type="0">'+
							'<div class="dialog-contain">'+
								'<div class="dialog-head clearfix">温馨提醒<span class="head-close-icon close-dialog-btn">╳</span></div>'+
								'<div class="dialog-body">'+
									'<div class="remind-con clearfix">'+
										'<span class="remind-icon">'+
											'<img src="../../aitmgmt/public/img/login/warning.png">'+
										'</span>'+
										'<div class="remind-words">'+text+'</div>'+
									'</div>'+
								'</div>'+
								'<div class="dialog-foot clearfix">'+
									'<div class="dialog-btn sub-btn close-dialog-btn">关闭</div>'+
								'</div>'+
							'</div>'+
						'</div>';
	$("body").append(noPatientHtml);
}

// 删除患者dialog
function delectPatientdialog(delectId){
	var delectHtml = '<div class="dialog delect-patient-dialog" id="delect-patient-dialog" type="0">'+
						'<div class="dialog-contain">'+
							'<div class="dialog-head clearfix">'+
								'删除患者'+
								'<span class="head-close-icon close-dialog-btn">╳</span>'+
							'</div>'+
							'<div class="dialog-body">'+
								'<div class="margin-b-20">删除后该患者所有数据将不再保留,请谨慎操作！如需删除,请输入该账号登录密码！</div>'+
								'<div class="other clearfix">'+
									'<span class="other-name">登录密码</span>'+
									'<div class="input">'+
										'<!--<span class="placeholder" placeholder="必填">限50个字</span>-->'+
										'<input type="password" delectId="'+delectId+'" id="delect-password">'+
									'</div>'+
								'</div>'+
							'</div>'+
							'<div class="dialog-foot clearfix">'+
								'<div class="dialog-error-info">'+
									'<span class="error-icon">'+
										'<img src="../../aitmgmt/public/img/public/error.png">'+
									'</span>'+
									'<i class="error-text"></i>'+
								'</div>'+
								'<div class="dialog-btn-box clearfix">'+
									'<div class="dialog-btn main-btn">确定</div>'+
									'<div class="dialog-btn sub-btn close-dialog-btn">关闭</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>';
	$("body").append(delectHtml);
}

// 蓝牙提醒dialog
function blueboothRemindDialog(remindText){
	var blueboothHtml = '<div class="dialog remind-dialog-public bluebooth-remind-dialog" id="bluebooth-remind-dialog" type="0">'+
							'<div class="dialog-contain">'+
								'<div class="dialog-head clearfix">'+
									'温馨提醒'+
									'<span class="head-close-icon close-dialog-btn">╳</span>'+
								'</div>'+
								'<div class="dialog-body">'+
									'<div class="remind-con clearfix">'+
										'<span class="remind-icon">'+
											'<img src="../../aitmgmt/public/img/login/warning.png">'+
										'</span>'+
										'<div class="remind-words">'+remindText+'</div>'+
									'</div>'+
								'</div>'+
								'<div class="dialog-foot clearfix">'+
									'<div class="dialog-btn-box clearfix">'+
										'<div class="dialog-btn main-btn">刷新</div>'+
										'<div class="dialog-btn sub-btn close-dialog-btn">关闭</div>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>';
	$("body").append(blueboothHtml);
}

// 提醒dialog
function remindDialog(remindText){
	var remindHtml = '<div class="dialog remind-dialog-public remind-dialog" id="remind-dialog" type="0">'+
						'<div class="dialog-contain">'+
							'<div class="dialog-head clearfix">'+
								'温馨提醒'+
								'<span class="head-close-icon close-dialog-btn">╳</span>'+
							'</div>'+
							'<div class="dialog-body">'+
								'<div class="remind-con clearfix">'+
									'<span class="remind-icon">'+
										'<img src="../../aitmgmt/public/img/login/warning.png">'+
									'</span>'+
									'<div class="remind-words">'+remindText+'</div>'+
								'</div>'+
							'</div>'+
							'<div class="dialog-foot clearfix">'+
								'<div class="dialog-btn-box clearfix">'+
									'<div class="dialog-btn main-btn">刷新</div>'+
									'<div class="dialog-btn sub-btn close-dialog-btn">关闭</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>';
	$("body").append(remindHtml);
}

// 忽略患者dialog
function ignoreRequestDialog(remindText,id){
	var remindHtml = '<div class="dialog remind-dialog-public ignore-request-dialog" id="ignore-request-dialog" type="0">'+
						'<div class="dialog-contain">'+
							'<div class="dialog-head clearfix">'+
								'温馨提醒'+
								'<span class="head-close-icon close-dialog-btn">╳</span>'+
							'</div>'+
							'<div class="dialog-body">'+
								'<div class="remind-con clearfix">'+
									'<span class="remind-icon">'+
										'<img src="../../aitmgmt/public/img/login/warning.png">'+
									'</span>'+
									'<div class="remind-words">'+remindText+'</div>'+
								'</div>'+
							'</div>'+
							'<div class="dialog-foot clearfix">'+
								'<div class="dialog-btn-box clearfix">'+
									'<div class="dialog-btn main-btn" patientId="'+id+'">确定</div>'+
									'<div class="dialog-btn sub-btn close-dialog-btn">关闭</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>';
	$("body").append(remindHtml);
}

// 登录超时dialog
function timeOutDialog(){
	var timeOutHtml = '<div class="dialog remind-dialog-public login-timeout-dialog" id="login-timeout-dialog" type="0">'+
						'<div class="dialog-contain">'+
							'<div class="dialog-head clearfix">'+
								'登录超时'+
								'<span class="head-close-icon close-dialog-btn">╳</span>'+
							'</div>'+
							'<div class="dialog-body">'+
								'<div class="remind-con clearfix">'+
									'<span class="remind-icon">'+
										'<img src="../../aitmgmt/public/img/login/warning.png">'+
									'</span>'+
									'<div class="remind-words">登录超时！请重新登录</div>'+
								'</div>'+
							'</div>'+
							'<div class="dialog-foot clearfix">'+
								'<div class="dialog-btn-box clearfix">'+
									'<div class="dialog-btn main-btn" id="re-login">登录</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>';
	$("body").append(timeOutHtml);
	$("#re-login").click(function () {
		window.location.href = '../pages/login.html';
    });
}

// 蓝牙设备dialog
//function blueboothDialog(){
//	var btStr = getBTRows();
//  var deviceStr = getDeviceRows();
//
//	var blueboothHtml = '<div class="dialog bluetooth-dialog" id="bluetooth-dialog" type="0">'+
//							'<div class="dialog-contain">'+
//								'<div class="dialog-head clearfix">'+
//									'连接设备'+
//									'<span class="head-close-icon close-dialog-btn">╳</span>'+
//								'</div>'+
//								'<div class="dialog-body">'+
//									'<div class="margin-b-20">可连接设备</div>'+
//									'<div class="table-div margin-b-20">'+
//										'<table class="table can-connect-table" cellpadding="0" cellspacing="0">'+
//											'<thead>'+
//												'<tr>'+
//													'<td>设备名称</td><td>状态</td><td>操作</td>'+
//												'</tr>'+
//											'</thead>'+
//											'<tbody>'+btStr+'</tbody>'+
//										'</table>'+
//									'</div>'+
//									'<div class="margin-b-20">已连接设备</div>'+
//									'<div class="table-div">'+
//										'<table class="table connected-table" cellpadding="0" cellspacing="0">'+
//											'<thead>'+
//												'<tr>'+
//													'<td>设备名称</td><td>状态</td><td>操作</td>'+
//												'</tr>'+
//											'</thead>'+
//											'<tbody>'+deviceStr+'</tbody>'+
//										'</table>'+
//									'</div>'+
//								'</div>'+
//								'<div class="dialog-foot clearfix">'+
//									'<div class="dialog-btn-box clearfix">'+
//										'<div class="dialog-btn main-btn" id="refresh">刷新</div>'+
//										'<div class="dialog-btn sub-btn close-dialog-btn">关闭</div>'+
//									'</div>'+
//								'</div>'+
//							'</div>'+
//						'</div>';
//	$("body").append(blueboothHtml);
//	$("#refresh").click(function () {
//      StartDiscovery();
//  });
//}

// 操作反馈dialog
function operationFeedBackDialog(text, duration){
	if(duration == null) duration = 3000;
	var feedBackHtml = '<div class="dialog operation-dialog" id="operation-dialog">'+
						'<div class="operation-toast">'+text+'</div>'+
					'</div>';
	$("body").append(feedBackHtml);
	setTimeout(function(){
		$("#operation-dialog").remove();
	},duration);
}

