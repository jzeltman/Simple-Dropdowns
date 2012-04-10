// Simple Dropdowns
// Called via onClick="toggleDropDown(this);return false; 
function simpleDropDown(clickedObj, parentName) { 
	// "cache" this from onClick call
	var o_clicked = $(clickedObj);
	// Capture parent of clicked object dropdowns, if there was a parentName parameter given, use that
	var o_dropDownParent = parentName ? o_clicked.closest(parentName) : o_clicked.closest(".dropdown-parent");
	// Capture all dropdowns, if there was a parentName parameter given, use that
	var o_allDropDownParents = parentName ? $(parentName) : $(".dropdown-parent");
	// If you click on another dropdown, hide the open one
	if ( !o_dropDownParent.hasClass("active") && o_allDropDownParents.hasClass("active") ) { o_allDropDownParents.removeClass("active"); }
	// Big Money Toggling
	o_dropDownParent.toggleClass("active");
	// Add click listener to everything to hide the dropdown
	$('html').click(function() { o_dropDownParent.removeClass("active"); });
	// Overrides the dropdown hide set above
	o_dropDownParent.click(function(e) { e.stopPropagation(); });
}