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

	
	// メモをクッキーに保存
	var saveMemo = function() {
		var memoArr = [];
		$("#memoArea .memo-group").each(function() {
			// タイトルと本文を取得
			var $this = $(this);
			var ttl = $this.find(".memo-title").val();
			var bdy = $this.find(".memo-body").val();

			// エンコード
			ttl = encodeURI(ttl);
			bdy = encodeURI(bdy);

			// オブジェクトを作成して配列に格納
			var obj = {ttl: ttl, bdy: bdy};
			memoArr.push(obj);
		});

		// 保存用の名前と値
		var cookie_value = JSON.stringify(memoArr);

		// クッキーに保存
		Cookies.set(cookie_name, cookie_value);
	};

	// ［追加］ボタンのイベントを登録
	$("#btnAdd").click(add);
});
