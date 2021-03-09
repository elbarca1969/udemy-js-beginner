$(function() {
	// テキストをコピー
	var copyText = function() {
		// テキストを取得
		var name = $("#name").val();

		// テキストを設定
		$("#name2").val(name);

		// コンソールに出力
		console.log("text", name);
	};

	// チェックボックスをコピー
	var copyCheckbox = function() {
		// チェックされているかを取得
		var chck = $("#chck").prop("checked");

		// チェックを設定
		$("#chck2").prop("checked", chck);

		// on/off 関係なく値を得る
		var chckVal = $("#chck").val();

		// コンソールに出力
		console.log("checkbox", chck, chckVal);
	};

	// チェック済みチェックボックスの値を出力
	var dumpCheckbox = function() {
		$("input[type=checkbox]:checked").each(function() {
			// idを得る
			var id = $(this).attr("id");

			// on/off 関係なく値を得る
			var chckVal = $(this).val();

			// コンソールに出力
			console.log("dump checkbox", id, chckVal);
		});
	};

	// ラジオボタンをコピー
	var copyRadio = function() {
		// チェックされている値を取得
		var sex = $("input[name=sex]:checked").val();

		// チェックを反映
		$("input[name=sex2]").val([sex]);

		// コンソールに出力
		console.log("radio", sex);
	};
});

