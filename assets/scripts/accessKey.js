//Upon loading
window.onload = onloadFunc;
//Variables
var title;
//What actually happens when page finishes loading
function onloadFunc() {
	//Checking passkey
	checkPass();
	//Cloak with PDF favi
	generate();
	changeTitle();
}	
//Checkng pass key
function checkPass(){
	if(window.localStorage.getItem('accessLevel') == 'slurp.derp'){
		//Allow into NovaHaven
		bar("Welcome to NovaSlurp!");
	}
	else{
		//Create a dummy pdf document if no bookletmark
		document.body.innerHTML = '<div id=\'holderPDF\'><iframe id=\"randomPDF\"' + ' src=\"assets/images/blank.pdf\"' + '>' + '</iframe>' + '<div id=\'errorPDF\'>Oops!<br>There was a problem previewing this document.</div></div>';
	}
}
function generate(){
	var fileName = ["Nova", "PDF", "Algebra", "Demo", "Book", "Haven", "download", "um", "source", "HTML,CSS,JS_Practices", "Learn_Coding", "Introduction_to_Mathematics", "lightNovel", "Cool"];
	var randFirst = Math.floor(Math.random()*fileName.length); 
	//Will implement more file types with favicons in the future
	//var fileExtensions = [".pdf", ".docx", ".gif", ".jpg"];
	//var randSecond = Math.floor(Math.random()*fileName.length); 
	title = fileName[randFirst] + '.pdf';
}
function changeTitle(){
	var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon'; 
	link.rel = 'shortcut icon'; 
	/*
	link.href = 'data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAADAxeYA3+DcAH55ewDg4uIA2+L9AKeorADl5+gAzNDjAJaXlQCsrKYAdlrbAC8x+wD6/v8AMTH7AJiYmACChocA/P7/AISDhwDp6+sAAQD6AP/+/wAAAf0AgH+xAO7w8QCfoJ4Aop2eAJ+i/QDV2/IApZ6hAPL09ADd5ewA9/b6AJOTkwDk5uYAUkbgAKiqqgCEgH8A6OTpAPn/+gCDhIIA+/39AOrn6QD9/f0A1NfVAP//+gDX1tIA//39AOnr7ADn6vIA1tjYANjY2ACLiYgAjI2LAN7c2wDz8PIA9fDyAJCPkQDh4eEA9vf1AMvQ0wBGQfYA9vj4ANDOzQCqrasA6OnnANXT0wD+//sAhoSDAP/9/gCYmZ0AytfxAAED/ACdnpoAiYmJAHt5xQCen50AnqCgANzc3ADv8vAAoqCgAPH18ADz8/MABQG4AN/h4gDy9/YA4uDfAFc/zQDQzNEAlJCVAKepqQDl5eUAMADYAP34+QD6/PwAnIn9AMjR8gD8+v8AmJmVAPz9/wDr6egA/v3/AP/9/wD///wAAAD9AAIA/QA2M/sAYkvWAKirygDZ2NoA2tzdAIuMigAwM70AAAC2AAMAtgD08vEA9fb0APX39wDz+vcAkJKTAF8y5gD8//0A6+npAP7//QDr6uwAAAD+AAAC+wDR4NgAAgD+AHdm3wCIiIgAAAK0AKGdogAEALcA9PLyAAcAtwDCyugAz83NAJOSlADk5OQAlJOXAJeVlADo5ecA+/v7APr//gCurKsAeFzdAP3//gA1MvoA///+AAIB+QB2V/IA6+3tAAMC/ADt7e0A2NriAAIAuAD09fMA4+DiAJGPlQD69/kA+fj8AP76+QD6//8A+///AK6srAD9//8ANwnSAP///wA4IMYA3NvdAO/x8QAoC74Ap6enAOfk5gD6+voA5ujpAC40+QBXVs4A6OvpANXV1QD//v0A7ejpAIiDhQACAfsAAQL+AImKiADt7vIAiYuLAJ+gnADU4OQAxNDQAMrI3ACopqUAqaqoAKurqwAuMv0A09XWAPz+/gD+/v4AAAD5AP/+/gCMh4kAn52dAAABtQB4eHgAdW3vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZZTIWIk0uUkzucmBDyQCzCylxcp7KSmvBoqKOQFtMm6lpXpIErJjJVqtA51VTWy7pS6nwB6rqL61eUCNUzs1IKeUo6w6G2pKX5khfocWqTinp8VZoB+9sW9rClZbppqMxrTIwV0uVBo8RndeAAcvDqfGkiN6tMgEIoAwdFCcuginxacJo2W0dZGWKI5cPR1FlKUqBbR6ZGDNvyZEKJ8XGWaGgsuEm3Fwy3KLQye2EWFiaLjHlbd9R1I3wqKul4grlBOYFX98fGdxUT+hc1ctNqVpDQsLw5OwFSikOj5BTqWUDJSexo94yEIQkMSzqqcUxXpkvBhLTINPdhwxhaWUpwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='; 
	*/
	document.title=title;
	document.getElementsByTagName('head')[0].appendChild(link);
}



