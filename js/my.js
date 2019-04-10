fadeTopItems();

function fadeTopItems() {
  var Opaque = false;
  $(document).on("click", function() {
    if (Opaque === false) {
      $(".twitter-wrap").addClass("into-the-fade");
      $(".say-my-name").addClass("into-the-fade");
      $(".jrdev-wrap").addClass("into-the-fade");

      Opaque = true;
    } else {
      return;
    }
  });
}
