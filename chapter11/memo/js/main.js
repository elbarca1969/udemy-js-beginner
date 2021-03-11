$(function() {
	// テンプレートのHTML文字列
	var template = $("#template").html();

	// クッキーの名前
	var cookie_name = "memo-app";

	// 新規メモを末尾に追加
	var appendNewMemo = function(ttl, bdy) {
		// 「%s」を、ttl と bdy の文字列に置換
		var html = template.replace("%s", ttl).replace("%s", bdy);

		// 末尾に追加
		$("#memoArea").append(html);
	};


	// 追加処理
	var add = function() {
		// タイトルと本文を取り出し
		var ttl = $("#title").val();
		var bdy = $("#body").val();

		// 新規メモを末尾に追加
		appendNewMemo(ttl, bdy);

		// メモをクッキーに保存
		saveMemo();
	};

	// ［追加］ボタンのイベントを登録
	$("#btnAdd").click(add);
});
