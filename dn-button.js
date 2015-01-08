/* Designer News submit button script. version 0.1 by Paul Dessert*/

(function (w) {
  "use strict";
	//Gather DOM elements and define variables
	var pageTitle = document.getElementsByTagName("title")[0].innerHTML;
	var pageURL = window.location.href;
	var submitURL = "https://news.layervault.com/submit";
	var fullURL = submitURL + "?title=" + encodeURIComponent(pageTitle) + "&url=" + encodeURIComponent(pageURL);
<<<<<<< HEAD
	
	var linkStyles = {
		background: '#f8f8f8',
		textDecoration: 'none',
		verticalAlign: 'text-bottom',
		padding: '5px',
		borderRadius: '5px',
		border: '1px #d2d2d2 solid',
		color: '#5e6878'
	};

	var spanStyles = {
		fontWeight: 'normal',
		height: '20px',
		minWidth: '20px',
		padding: '1px 2px 1px 5px',
		textAlign: 'center',
		lineHeight: '20px',
		fontFamily: '"lucida grande",verdana,sans-serif',
		fontSize: '11px'
	};
	
	var imgStyles = { verticalAlign: 'middle' };
	var dnImage, dnSpan, dnLink;
	var buttons = document.querySelectorAll("a[name=dn-share-button]");

	for (var i = 0; i < buttons.length; i++) {
		dnLink = buttons[i];

		dnImage = document.createElement("img");
=======

  var dnLinks = document.querySelectorAll("a.dn-share-button");

  [].forEach.call(dnLinks, function(dnLink) {

		var dnImage = document.createElement("img");
>>>>>>> f91330dad01de6c1d56086757dc1766a57c63335
		dnLink.href = fullURL;

		//Get the DN image loaded and set parameters
		dnImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6%2FNlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw%2FeHBhY2tldCBiZWdpbj0i77u%2FIiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2BIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCOTgwMEM1QTZFMjE2ODExODA4M0QxNjlCN0M3MjU0MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUU0N0Y3RDA1M0MxMUUzODgxQkRDMkZEQ0M4MjQ4QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUU0N0Y3QzA1M0MxMUUzODgxQkRDMkZEQ0M4MjQ4QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNjFiMTE0Yy02NTEyLTQ1YTgtYmU2MS1mMDVhZWEwNDFmZmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qjk4MDBDNUE2RTIxNjgxMTgwODNEMTY5QjdDNzI1NDIiLz4gPC9yZGY6RGVzY3JpcHRpb24%2BIDwvcmRmOlJERj4gPC94OnhtcG1ldGE%2BIDw%2FeHBhY2tldCBlbmQ9InIiPz7iVnuhAAAGQklEQVR42tybaUxcVRTHD0PTUqClsbRlqSCiyKaiZUmhtCzSlIhigRZbYozxA1GxRJN%2B8ItW%2BsEEMS3ikrZpTUzT2hpqjK2x2MoiS8EpQVqKmrBk2AQBxyn76jkzdygwy7tv5j2YmZP8Q3jce9%2F58c67y3n3Or36xnsgk3mgdqIiUWGoAJQvahPKnZUZQalRvah2VAtKiapD%2FSeHU2skbm87KhuVgYpBOQuUd2eietGLrs%2Bi6lFXUN%2BiVFI5qJCond2oH1CdqCJULAesOXNmbRSxJ09t77EF4ARUFaoSlWYlpDl4aruC3SthNYC9UedR5ah4WDmLZ%2Fc8z3xYEeADqFZUDqye5TAfDsgJvBZVgrrMeuDVNg%2FmC%2Fm0TmrgDagfUXlge0Y%2BlaEekgp4C3tvksF2jUaJX5ivVgFT2PyE2gG2b0%2Bjrgu9bgqBd5YG%2FmfBfuwZ5vNaS4BPoJLA%2FiyJ%2BS4KmLr7N8F%2BjXw%2FyAtME%2FzTYP92is3RBYFL2IrG3o0YPhUCTkTtB8ex%2FcuH0%2BXABeB4dswUMA3euxwQeBdjMwA%2BCo5rR5cDb0Xtc2DgfYxxIcVzGDjSPVnpe8HHa6vZMuMTk9Db1w9Dw2q4pWw2P0OIj4bw0KAl166VVUBbR7fg%2FWdnZ2F6ahIuXL4CIxOCwGsY40k9ZCZXP7%2FRFfz9tguWCw4K1P58ITUZautvI0SV0XLr17sYtJe2dze8X1AIm7cZ3odgl5efmxqH9rYueDQwSMgtYjypgAfZReGllZO4fIGLyzpI2hMLr2S%2FyF3Hz88Psl5Khb%2F%2BuMtdp6W5EVSdbULFiNGDCLgTbk4KyzJCEU%2BFQkYa%2F%2BoyLe15iAgNFAXd3KSEblWnuSLaxKBCzGrI2BNWqVTQ2tq6IFMWtzMK%2FH09uQHy89%2BGMc0QN%2FT8%2FDw0NdZDX2%2BXuWKRRPAkN7CzIfCZM2chPfPQgpJTUuHiN5eM1k9JjOMG8PT0hHfy8%2BDP1ruioBt%2Fq4OBv3tNFQkjggBuYIVw5Hf19MEHBR8ZhQ4JCQF%2Fn83cABTa2ZnpoqDn5uZA2VADg%2F%2F0G%2FtzAAH78AI7OTlxhyRBDw4OGoZ2XKwoAArth329tXWmcBjiMRqyGuqqYHjI4P6%2BCjlXRj%2FfuGlw7fHHdEMWAWjUw9yhTTYzPcV9bx10Jaj%2FXXKPjQTsLhfwvZZ7Btfc3NweTFLGRw3%2Bbqzj04e2WJuenob62krQaNT6SxsUYGPW9HszXL16zWhoL%2F5n8Rq9BreqK2B05L72VwIekct5Dw%2FL8vUnij8zeP8ptGlSYolNTk5AbXU5jI2OjBCwWi7gyMgdRp8gT09fXFwiqS8T42NQV1Nxn4B75YClnjU6Osrgek93D1f9S6XfGw1tawyfcD8Bd8gB%2B9XZU%2BDq6rrkOoXp6XNfWxXaVloHrZZoQMy2tIXk5CQIDQtd%2BN3by0v7ZJfDmhqmeEL7%2BPEPpQJuIeDb1rSQkMD3YZ6GG5qMiDUK7ZiYaO3QJIEpKaRrQbenQjajBUbekXctrk%2BhTW1YacRYR8C0W6ZOLlilUgmvvZ6rDU9LjeoWfvyJta4Qo1qf8SgFjozlzMwMd%2Fi2tbVDfX2DNiSlsLKbldoFyaGXLe5uSrXrAbZPixJFPUJ5LTGTfhszelL0CWlAP7UcAN23VbP2REg4BAWH2yPwdca4JC9dyFPTTqEX2BYDU2qx2gGhqxmbATDZMd5W7Ah6yaxlOTBNhb5zIGhiuWEOmOyImBWUDUOrGQsIAdN3jlwxLdsodC5jWWLOEVFGt0rSvuVtqCje1j236L75DA0O2ALsl6ZGHVPA2sUN6DZzPmJn0NQj55haH5jLaVGKMAt1x47Cm3zNYL6DWGDtw0I9R5kZO4C%2Bw3wdMleIJ2tJ8UmL3nIbhv4VdBvHBd8l3jStBpWK%2BtwGob9ApaCGeQqLyUvTdw76BHAQRJw4kRFaw3x5i%2FkGUgPrjU6ZhKAurCL0RVQw80WUWfrloY91%2FYkrvOCoAd3m0cPMB1gpYL1VsLGaOgxKIs%2FJAD3H2k5gWZlyaxyW6qBWJZMfe69oLKSDV87GoMkEMic0aWgA3d5nOtcg2UEtqU%2BmkWNFTIuP4tEuA%2FrwTnseNiG0O4PWH8WjbHsHG0tlPYr3vwADAPKe%2FvrppqMMAAAAAElFTkSuQmCC";
<<<<<<< HEAD
		dnImage.width = "20";
		dnImage.height = "20";
		applyStyles(dnImage, imgStyles);
		
=======
		dnImage.width = "21";
		dnImage.height = "21";

>>>>>>> f91330dad01de6c1d56086757dc1766a57c63335
		//Define styles for button
		dnSpan = document.createElement('span');
		applyStyles(dnSpan, spanStyles);

		dnLink.appendChild(dnSpan);
<<<<<<< HEAD
		applyStyles(dnLink, linkStyles);
		dnSpan.innerHTML = "Submit";
		
		//Insert the image in the DOM
		dnLink.insertBefore(dnImage, dnLink.firstChild);
	}

	function applyStyles(node, styles) {
		for (prop in styles) {
			if (!styles.hasOwnProperty(prop)) continue;
			node.style[prop] = styles[prop];
		}
	}
})();
=======
		dnSpan.innerHTML = "submit";
		style.type = 'text/css';
		style.innerHTML = '.dn-share-button span { display: inline-block; content: "submit"; background: #fff; border: 1px solid #d1d1d1; font-weight: normal; margin-left: 5px; min-width: 20px; padding: 1px 2px 1px 2px; text-align: center; line-height: 14px; font-family: "lucida grande",verdana,sans-serif; font-size: 11px; position: relative; top: -2px; color: black } a.dn-share-button { text-decoration: none; vertical-align: text-bottom; display: inline-block;} .dn-share-button img {vertical-align: sub;} a.dn-share-button span {position: relative; background: #fff; border: 1px solid #d1d1d1; } a.dn-share-button span:after, a.dn-share-button span:before {right: 100%; top: 50%; border: solid transparent; content: " "; height: 0; width: 0; position: absolute; pointer-events: none; } a.dn-share-button span:after {border-color: rgba(255, 255, 255, 0); border-right-color: #fff; border-width: 2px; margin-top: -2px; } a.dn-share-button span:before {border-color: rgba(209, 209, 209, 0); border-right-color: #d1d1d1; border-width: 3px; margin-top: -3px; }';
		document.getElementsByTagName('head')[0].appendChild(style);

		//Insert the image in the DOM
		dnLink.insertBefore(dnImage, dnLink.firstChild);
	});
})(window);
>>>>>>> f91330dad01de6c1d56086757dc1766a57c63335
