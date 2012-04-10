Simple Dropdowns - 1.0
by Joshua Zeltmna

Simple Dropdowns is an easy to use click based dropdown powered by a small function and an onClick. Nothing revolutionary here, just trying to provide something practical and easy. Upon setting up simpleDropDown() you will add an "active" class to the parent element. If you are following the markup pattern given in markup.html, then the active class will be assigned to the parent li. Otherwise, you need to pass in a parent to be acted upon. Like so: 
		<p onClick="simpleDropDowns(this, '.parent-class');">
		
By default the clicked dropdown can be closed by clicking anywhere else on the page. It is also set up to close when clicking another dropdown-able item.
		
For questions and comments please contact me via mail@joshuazeltman.com or @joshuazeltman.

Usage:

 Add - onClick="simpleDropDowns(this);" - to your clickable parent. This could be anything. If it is an anchor tag, make sure to add - "return false;" - to the end of your onClick call.
 
 Add the function to your parent javascript outside of an onReady state. Choose the minified or expanded version of your choice.
 
 
