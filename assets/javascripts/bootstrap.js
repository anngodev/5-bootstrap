$('#myModal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget) // Button that triggered the modal
	  var recipient = button.data("name") // Extract info from data-* attributes
	  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	  var modal = $(this)
	  modal.find('.modal-title').text('New message to ' + recipient)
})

	$("#myModal").on("hidden.bs.modal", function (event) {

		alert("modal closed!");

	})



	$('[data-toggle="popover"]').popover()

	$('[data-toggle="tooltip"]').tooltip()

	$("#myTooltip").on("shown.bs.tooltip", function() {
		alert("tooltip displyed");
	})