var selectDropdown = document.getElementById("wordclouds");
var displayedImage = document.getElementById("wcs");

selectDropdown.addEventListener("change", function() {
    // Get the selected value (image file name)
    var selectedValue = selectDropdown.value;
    
    // Update the image source based on the selected value
    displayedImage.src = selectedValue;
});
