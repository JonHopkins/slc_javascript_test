// my-script.js
document.addEventListener("DOMContentLoaded", function() { 
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    
    var messageToShow;
    var debugMode=true;
    
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://gds.blog.gov.uk", true);
	
	xhr.onreadystatechange = function() {
  		if (xhr.readyState == 4) {
  	  		
  			var GDSDocument = document.implementation.createHTMLDocument("GDSBlog");
  			GDSDocument.documentElement.innerHTML = xhr.responseText;			
  			
    		var articleTitles = GDSDocument.getElementsByClassName('entry-title');   
    		
    		var articleList = document.getElementById('listOfArticles');
    		
    		// Start with item 1 not 0 as the first item is a duplicate
    		// the right way to get round this is to only look at items of type h2 but its late
    		
			for (var i = 1; i < articleTitles.length; ++i) 
    					{
    					var row = document.createElement('tr');
    					var col = document.createElement('td');
    					
    					col.innerText = articleTitles[i].textContent
    					
    					row.appendChild(col);
    					
    					articleList.appendChild(row);
    					}
   			}	
	}
	xhr.send();
});