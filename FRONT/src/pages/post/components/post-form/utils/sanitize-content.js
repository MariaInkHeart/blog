export const sanizeContent = (content) =>
	content
		.replace(/ +/, " ")
		.replaceAll("&nbsp;", " ")
		.replaceAll("<div><br></div>", "\n")
		.replaceAll("<div>", "\n")
		.replaceAll("<br>", "")
		.replaceAll("</div>", "");
