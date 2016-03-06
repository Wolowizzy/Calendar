/*  jQuery ready function. Specify a function to execute when the DOM is fully loaded.  */
$(document).ready(function() {
  var days = {
    "24/03/2016": " My Birthday",
    "11/03/2016": " My Birthday",
    "18/03/2016": " My Birthday",
    "27/03/2016": " My Birthday"
  }; {
    date: "24/03/2016",
    "11/03/2016",
    "18/03/2016",
    "27/03/2016"
    event: "My Birthday",
    "My Birthday",
    "My Birthday",
    "My Birthday"
  }
  $("#datepicker").datepicker({
    changeMonth: true,
    //this option for allowing user to select month
    changeYear: true,
    //this option for allowing user to select from year range
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dayNamesMin: ['Sn', 'Mn', 'Tu', 'Wn', 'Th', 'Fr', 'St'],
    firstDay: 1,
    dateFormat: "dd/mm/yy",
    showButtonPanel: true,
    numberOfMonths: 1,
    stepMonths: 1,
    currentText: 'Today',
    dateFormat: "dd/mm/yy",
    beforeShowDay: function(date) {
      var this_date = date.getDate().toString() + "/0" + (date.getMonth() + 1).toString() + "/" + date.getFullYear().toString();
      if (this_date in days)
        return [true, , "planned"];
      else
        return [false, , "not planned"];
    },
    onSelect: function(date) {
      if (date in days)
        alert("date: " + date + ", event: " + days[date]);
    }
  });


  $("#datepicker2").datepicker({
    dateFormat: "dd/mm/yy",
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dayNamesMin: ['Sn', 'Mn', 'Tu', 'Wn', 'Th', 'Fr', 'St'],
    firstDay: 1,
    onSelect: function(date) {
      if (date in days)
        $("#event").val(days[date]);
      else
        $("#event").val("");
    }
  });

  $("#ok").click(function() {
    var data = $("#datepicker2").val();
    var event = $("#event").val();
    days[data] = event;
    /*('#datepicker').multiDatesPicker('resetDates', 'disabled'); */
    $("#datepicker").datepicker("refresh");
  });;

  $("#show").click(function() {
    var days = ["21/03/2016", " My Birthday",
      "11/03/2016", " My Birthday",
      "18/03/2016", " My Birthday",
      "27/03/2016", " My Birthday"
    ];
    var date = ["24/03/2016", "11/03/2016", "18/03/2016", "27/03/2016"];
    var event = ["My Birthday", "My Birthday", "My Birthday", "My Birthday"];
    alert("date: " + date + ", event: " + event);
  });


  $("#datepicker3").datepicker({
    dateFormat: "dd/mm/yy",
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dayNamesMin: ['Sn', 'Mn', 'Tu', 'Wn', 'Th', 'Fr', 'St'],
    firstDay: 1,
    onSelect: function(date) {
      if (date in days)
        $("#event").val(days[date]);
      else
        $("#event").val("");
    }
  });

  $("#delete").click(function() {
    var data = $("#datepicker3").val();
    delete days[data];
    $("#datepicker").datepicker("refresh");
  });


  $("#datepicker4").datepicker({
    dateFormat: "dd/mm/yy",
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dayNamesMin: ['Sn', 'Mn', 'Tu', 'Wn', 'Th', 'Fr', 'St'],
    firstDay: 1,
    onSelect: function(date) {
      if (date in days)
        $("#event").val(days[date]);
      else
        $("#event").val("");
    }
  });

  $("#delete2").click(function() {
    var data = $("#datepicker4").val();
    delete days[data];
    $("#datepicker").datepicker("refresh");
  });


  $("#datepicker5").datepicker({
    dateFormat: "dd/mm/yy",
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dayNamesMin: ['Sn', 'Mn', 'Tu', 'Wn', 'Th', 'Fr', 'St'],
    firstDay: 1,
    onSelect: function(date) {
      if (date in days)
        $("#event").val(days[date]);
      else
        $("#event").val("");
    }
  });

  $("#rename").click(function() {
    var data = $("#datepicker5").val();
    var event = $("#event").val();
    days[data] = event;
    $("#datepicker").datepicker("refresh");
  });;
});
