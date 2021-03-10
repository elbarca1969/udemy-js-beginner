$(function() {
	// リサイズ時の処理
	var resize = function() {
		// 操作対象の要素を得る
		var $target = $(".col-xs-3");

		// 横幅を得る
		var w = $target.width();

		$target
		.height(w)	// 高さを横幅と同じに
		.css("font-size", Math.floor(w * 0.66) + "px")
			// フォントサイズを指定
		.css("line-height", w + "px");
			// 行の高さを要素の高さと同じに
	};

	// ウィンドウがリサイズされた際にリサイズを実行
	$(window).resize(resize);

	// 初回リサイズ実行
	resize();
});
