        $("#datepicker").datepicker({
            autoclose: true,
            todayHighlight: true,
            orientation: "top auto"
        }).on("change", function () {
    });
        $('.clockpicker').clockpicker({
		    placement: 'top',
		    align: 'right',
		    donetext: 'Done'
		});