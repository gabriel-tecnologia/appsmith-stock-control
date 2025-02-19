export default {

	printTag () {
		const filePath = DocumentViewer1.docUrl;
		const iframe = document.createElement('iframe');
		console.log(iframe);
		iframe.src = filePath;
		iframe.style.display = 'none';
		document.body.appendChild(iframe);
		window.print();

		iframe.onload = function() {
			window.frames[0].focus();
			window.frames[0].print();
			document.body.removeChild(iframe);
		};
	}
}