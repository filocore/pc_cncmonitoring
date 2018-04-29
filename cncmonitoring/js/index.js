
$(function(){

	var pageManager = {
		pageIndexList: ["1", "2", "3"],
		pageClass: {"1" : "page_control_one", "2": "page_control_two", "3" : "page_control_three"}
	};

	// page control 点击切换逻辑显示逻辑
	$(".page_control_item").on("click", function() {
		var index = $(this).attr("index");
		$("." + pageManager.pageClass[index]).attr("hidden", false);
		var list = pageManager.pageIndexList;
		for (var i = 1; i <= list.length; i ++) {
			if (index == i) continue;
			$("." + pageManager.pageClass[i]).attr("hidden", true);
		}
	});

	$("input:radio[name=simulation]").change(function() {
		var content = $(this).attr("content");
		alert(content);
	});

	$("select[id=order_choose]").change(function() {
		var option = $(this).val();
		alert(option);
	});
});




