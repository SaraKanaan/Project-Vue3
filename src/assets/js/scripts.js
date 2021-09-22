//scroll card

$(function () {
    //The passed argument has to be at least a empty object or a object with your desired options
    $('.scrollLeg').overlayScrollbars(
        {
            className: "os-theme-dark",
            resize: "none",
            sizeAutoCapable: true,
            clipAlways: true,
            normalizeRTL: true,
            paddingAbsolute: false,
            autoUpdate: null,
            autoUpdateInterval: 33,
            updateOnLoad: ["img"],
            nativeScrollbarsOverlaid: {
                showNativeScrollbars: false,
                initialize: true
            },
            overflowBehavior: {
                x: "hidden",
                y: "scroll"
            },
            scrollbars: {
                visibility: "auto",
                autoHide: "never",
                autoHideDelay: 800,
                dragScrolling: true,
                clickScrolling: false,
                touchSupport: true,
                snapHandle: false
            },
            textarea: {
                dynWidth: false,
                dynHeight: false,
                inheritedAttrs: ["style", "class"]
            },
            callbacks: {
                onInitialized: null,
                onInitializationWithdrawn: null,
                onDestroyed: null,
                onScrollStart: null,
                onScroll: null,
                onScrollStop: null,
                onOverflowChanged: null,
                onOverflowAmountChanged: null,
                onDirectionChanged: null,
                onContentSizeChanged: null,
                onHostSizeChanged: null,
                onUpdated: null
            }
        });

});


//Notifications

$(document).ready(function () {
    $(".show-notification.close-ticket").click(function () {
        $(".notification-container").fadeOut();
        $(".undone-container").fadeOut();
        $(".notification-container.close-ticket").fadeIn();
        setTimeout(function () { $('.notification-container.close-ticket').fadeOut() }, 5000);
    });

    $(".show-notification.marge-ticket").click(function () {
        $(".notification-container").fadeOut();
        $(".undone-container").fadeOut();
        $(".notification-container.marge-ticket").fadeIn();
        setTimeout(function () { $('.notification-container.marge-ticket').fadeOut() }, 5000);
    });

    $(".show-notification.change-user").click(function () {
        $(".notification-container").fadeOut();
        $(".undone-container").fadeOut();
        $(".notification-container.change-user").fadeIn();
        setTimeout(function () { $('.notification-container.change-user').fadeOut() }, 5000);
    });

    $(".show-notification.change-status").click(function () {
        $(".notification-container").fadeOut();
        $(".undone-container").fadeOut();
        $(".notification-container.change-status").fadeIn();
        setTimeout(function () { $('.notification-container.change-status').fadeOut() }, 5000);
    });

    $(".show-notification.assign-user").click(function () {
        $(".notification-container").fadeOut();
        $(".undone-container").fadeOut();
        $(".notification-container.assign-user").fadeIn();
        setTimeout(function () { $('.notification-container.assign-user').fadeOut() }, 5000);
    });
    
    
    $(".close-noti svg").click(function () {
        $(".notification-container").fadeOut();
        $(".undone-container").fadeOut();
    });
    $(".undo").click(function () {
        $(".notification-container").fadeOut();
        $(".undone-container").fadeIn();
        setTimeout(function () { $('.undone-container').fadeOut() }, 5000);
    });
});

//read more

$(".read-more-link").click(function () {
    $(this).parent().parent().toggleClass("read-more-collaps");
    $(this).children(".read-more-text").toggleClass("d-none");
    $(this).children(".read-less-text").toggleClass("d-none");
    //$(this).text( "Read less");
});

//Menu Toggle Script
$(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});



//Count Up numbers
$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },
        {
            duration: 2000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });
});



$(document).ready(function () {
    $('.other-box').click(function () {
        $('.othe-input').removeClass("d-none");
    });
    $('.radio-box').click(function () {
        $('.othe-input').addClass("d-none");
    });
});

$('#multiple').selectator({
    showAllOptionsOnFocus: true,
    searchFields: 'value text subtitle right'
});

$('.basic-select').selectator({
    labels: {
        search: 'Search here...'
    },
    showAllOptionsOnFocus: true,
    searchFields: 'value text subtitle right'
});

$(document).ready(function () {
    $('.evaluation-radio').click(function () {
        var rate_value = $(this).next("label").html();
        $('.eva-val').html(rate_value);
    });


    $('.evaluation-radio2').click(function () {
        var rate_value = $(this).next("label").html();
        $('.eva-val2').html(rate_value);
    });



    $('.evaluation-radio3').click(function () {
        var rate_value = $(this).next("label").html();
        $('.eva-val3').html(rate_value);
    });

    $('.evaluation-radio4').click(function () {
        var rate_value = $(this).next("label").html();
        $('.eva-val4').html(rate_value);
    });

    $('.evaluation-radio5').click(function () {
        var rate_value = $(this).next("label").html();
        $('.eva-val5').html(rate_value);
    });
});




//Timepicker
$(document).ready(function () {
    $('.timepicker').mdtimepicker(); //Initializes the time picker
});


//Calender Script
$(function () {
    //	$.calendars.picker.setDefaults({renderer: $.calendars.picker.themeRollerRenderer}); // Requires jquery.calendars.picker.ext.js
    $('#popupDatepickerUmmAlQura').calendarsPicker({ calendar: $.calendars.instance('UmmAlQura') });
    $('#popupDatepicker').calendarsPicker();
    $('#popupDatepicker2').calendarsPicker();
    $('#popupDatepicker3').calendarsPicker();
    //$('#inlineDatepicker').calendarsPicker({calendar: $.calendars.instance('UmmAlQura'), onSelect: showDate });
    //debugger;
    // var d = $.calendars.newDate(2017, 3, 15, 'UmmAlQura', 'fa');
    ////  var e = $.calendars.newDate(d, 'gregorian', 'fa');

    // var d = $.calendars.newDate(1438, 6, 18, 'UmmAlQura', 'fa');
    ///  console.log("UmmAlQura date: " + d.toLocaleString()); // Persian date: 1388-01-01
    //  var e = d.toJSDate();
    ///   console.log(e); // Sat Mar 21 2009 00:00:00 GMT+0100 (Romance Standard Time)


    // var dd = $.calendars.newDate(16 , 3, 2017, 'gregorian', 'fa');
    // console.log("UmmAlQura date: " + d.toLocaleString()); // Persian date: 1388-01-01
    // var ee = dd.toJD();
    convertDates("ummalqura");

});

function showDate(date) {
    alert('The date chosen is ' + date);
}

function convertDates(name) {
    //debugger;
    try {
        var jd = (name == 'jd' ? parseFloat($('#jDate').val(), 10) :
            //     $.calendars.instance(name).newDate( parseInt($('#' + name + 'Year').val(), 10),parseInt($('#' + name + 'Month').val(), 10),parseInt($('#' + name + 'Day').val(), 10)).toJD());
            $.calendars.instance(name).newDate(parseInt(1438, 10), parseInt(6, 10), parseInt(20, 10)).toJD());

    }
    catch (e) {
        alert(e);
        return;
    }
    $('#jDate').val(jd);
    showDate('gregorian', jd);
}
function showDate(name, jd) {
    //debugger;
    try {
        $('#convert *:input[id^=' + name + ']').val('');
        var date = $.calendars.instance(name).fromJD(jd);


    }
    catch (e) {
        alert(e);
        return null;
    }
}

$("#popupDatepickerUmmAlQura").change(function () {
    debugger
    var Date = $('#popupDatepickerUmmAlQura').val();

    alert(date);

});


$('#popupDatepickerUmmAlQura').change(function () {
    alert('Changed!')
});
function Convert(Datetype) {
    debugger
    var datetype1 = Datetype;

}



//Plus buttons

$('.btn-number').click(function (e) {
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {

            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function () {
    $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function () {

    minValue = parseInt($(this).attr('min'));
    maxValue = parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr('name');
    if (valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }


});
$(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});



// Custome file upload
$(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});


