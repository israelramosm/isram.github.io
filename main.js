const shiftWindow = function() {
  scrollBy(0, -70);
};

$(document).on("click", 'a[href^="#"]', function(event) {
  window.setTimeout(function() {
    shiftWindow();
  }, 0);
});
