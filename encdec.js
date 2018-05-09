function encodeText() {
	var textToDecode = document.getElementById('textToDecode');
	if (textToDecode.value == "")
	{
		alert("Please Insert Text");
	}
	else{
		var txt_enc = encodeURIComponent(textToDecode.value);
		textToDecode.value = txt_enc;
	}
}
function decodeText() {
    var textToEncode = document.getElementById('textToDecode');
		if (textToEncode.value == "")
	{
		alert("Please Insert Text");
	}
	else{
		var txt_dec = decodeURIComponent(textToEncode.value);
		textToEncode.value = txt_dec;
	}
}

function clearText(){
	var textToEncode = document.getElementById('textToDecode');
	textToEncode.value = "";
}