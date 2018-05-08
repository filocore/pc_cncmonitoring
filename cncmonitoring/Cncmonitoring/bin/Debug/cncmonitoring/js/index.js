
$(function(){

	var pageManager = {
		pageIndexList: ["1", "2", "3"],
		pageClass: {"1" : "page_control_one", "2": "page_control_two", "3" : "page_control_three"}
	};

		var modelDesList = ["主轴箱沿着与床身的结合面上下摆动", "主轴箱沿着主轴箱和床身的结合面左右摆动", "主轴箱沿着与床身的结合面向 Z 轴正方向平动", "主轴箱体沿着 X 方向前后摆动", "刀架左右摆动，尾座部分沿着床身的方向平动", "与第五阶模态类似，尾座的平动幅度更加明显."];
	var modelImgList = ["model1.jpg", "model2.jpg", "model3.jpg", "model4.jpg", "model5.jpg", "model6.jpg"];
	var rateList = ["69.809Hz", "117.35Hz", "126.41Hz", "155.73Hz", "229.33Hz", "244.09Hz"];

	var workingIndex = 1;
	var frequency = 60;
	var workingPoint = "X";

	var pageType = 1;

	$(function init() {
		var input = $(".simulation_category_item").find("input").eq(0);
		input.prop("checked", "true");
		setOrderShowing(0);
	})

	function initData() {
		workingIndex = 1;
		frequency = 60;
		workingPoint = "X";
	}

	// page control 点击切换逻辑显示逻辑
	$(".page_control_item").on("click", function() {
		// 选中样式
		$(this).addClass("active").siblings().removeClass("active");
		
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
		var index = $(this).attr("index");
		var orderSelected = $(".order_selected");
		var workingSelected = $(".working_selected");
		var resonantSelected = $(".resonant_frequency_selected");
		var pointSelected= $(".point_selected");
		var naturalFrequency = $(".natural_frequency");
		var modelDescriptions = $(".model_descriptions");
		orderSelected.attr("hidden", true);
		workingSelected.attr("hidden", true);
		resonantSelected.attr("hidden", true);
		pointSelected.attr("hidden", true);
		naturalFrequency.attr("hidden",  true);
		modelDescriptions.attr("hidden", true);

		pageType = index;
		switch(index) {
			case "1":
			orderSelected.attr("hidden", false);
			naturalFrequency.attr("hidden", false);
			modelDescriptions.attr("hidden", false);
			setOrderShowing(0);
			break;
			case "2":
			workingSelected.attr("hidden", false);
			resonantSelected.attr("hidden", false);
			initData();
			setHarmonicShowing();
			break;
			case "3":
			workingSelected.attr("hidden", false);
			pointSelected.attr("hidden", false);
			initData();
			setFrequencyShowing();
			break;
			default:
			break;
		}
	});

	$("select[id=order_choose]").change(function() {
		var option = $(this).val();
		var index = option - 1;
		setOrderShowing(index);
	});

	$("select[id=working_choose]").change(function() {
		var option = $(this).val();
		workingIndex = option;
		if (pageType == 2) {
			setHarmonicShowing();
		} else if (pageType == 3) {
			setFrequencyShowing();
		}
	});

	$("select[id=resonant_frequency_choose]").change(function() {
		frequency = $(this).val();
		setHarmonicShowing();
	});

	$("select[id=working_point]").change(function() {
		workingPoint = $(this).val();
		setFrequencyShowing();
	})

	function setOrderShowing (index) {
		$(".model_descriptions_content").text(modelDesList[index]);
		$(".graphical_display_img").attr("src", "resources/img/model/" + modelImgList[index]);
		$(".natural_frequency").find("input").val(rateList[index]);
	}

	function setHarmonicShowing () {
		$(".graphical_display_img").attr("src", "resources/img/harmonic/" + workingIndex + "/" + frequency + ".jpg");
	}

	function setFrequencyShowing() {
		$(".graphical_display_img").attr("src", "resources/img/frequency/" + workingIndex + "/" + workingPoint + ".jpg");
	}
});




