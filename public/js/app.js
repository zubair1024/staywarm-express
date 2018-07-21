"use strict";

$(document).ready(function () {
  window.App = {
    "model": {},
    "questions": [],
    "menuItemClicked": function () {
      $(".collapse.navbar-collapse").hasClass("in") && $(".collapse.navbar-collapse").removeClass("in");
    },
    "init": function () {
      this.initListeners();
    },
    "initListeners": function () {
      for (var e = $(".question"), t = 0; t < e.length; t++) this.questions.push($(e[t])), 0 != t && $(e[t]).addClass("hidden-item");

      $(".youtube-popup").on("click", function () {
        console.log("video_playback_started"), gtag("event", "video_playback_started", {
          "event_category": "Video Enagagement",
          "event_label": "video engagement"
        });
      });
    },
    "submitContactForm": function () {
      gtag("event", "contact_form_submitted", {
        "event_category": "Get A Quote",
        "event_label": "engagement"
      });
      var e = $("form-uname").val(),
          t = $("form-uemail").val(),
          a = $("form-message").val();
      $.post("/contact", {
        "name": e,
        "email": t,
        "message": a
      }).done(function (e) {
        $("#contact-form-submit").prop("disabled", !0), alert("Thank you. We will get in touch with you shortly");
      });
    },
    "bannerQuote": function (e) {
      gtag("event", "banner_quote_form_submitted", {
        "event_category": "Get A Quote",
        "event_label": "engagement"
      });

      for (var t = $("#banner_" + e + "_firstName").val(), a = $("#banner_" + e + "_surName").val(), o = $("#banner_" + e + "_contactNumber").val(), s = $("#banner_" + e + "_email").val(), n = [], i = 0; i < 3; i++) $("#banner-error-" + e + "-" + i).hasClass("hidden-item") || $("#banner-error-" + e + "-" + i).addClass("hidden-item");

      "" == t && n.push(0), "" == a && n.push(1), "" === o && n.push(2), "" !== s && s.indexOf("@") > -1 || n.push(3), 0 === n.length ? (this.model.firstName = t, this.model.surName = a, this.model.contactNumber = o, this.model.email = s, $("#banner_" + e + "_firstName").prop("disabled", !0), $("#banner_" + e + "_surName").prop("disabled", !0), $("#banner_" + e + "_contactNumber").prop("disabled", !0), $("#banner_" + e + "_email").prop("disabled", !0), $("#banner-btn-" + e).addClass("disabled"), $("html, body").animate({
        "scrollTop": $($("#questions")).offset().top - 80 + "px"
      }, 700, "swing")) : n.forEach(function (t) {
        $("#banner-error-" + e + "-" + t).hasClass("hidden-item") && $("#banner-error-" + e + "-" + t).removeClass("hidden-item");
      });
    },
    "mainQuote": function () {
      gtag("event", "main_quote_form_submitted", {
        "event_category": "Get A Quote",
        "event_label": "engagement"
      });

      for (var e = $("#main_firstName").val(), t = $("#main_surName").val(), a = $("#main_contactNumber").val(), o = $("#main_email").val(), s = [], n = 0; n < 3; n++) $("#main-error-" + n).hasClass("hidden-item") || $("#main-error-" + n).addClass("hidden-item");

      if (("" == e && s.push(0), "" == t && s.push(1), "" === a && s.push(2), "" !== o && o.indexOf("@") > -1 || s.push(3), 0 === s.length)) {
        this.model.firstName = e, this.model.surName = t, this.model.contactNumber = a, this.model.email = o;

        for (var n = 0; n <= this.questions.length; n++) this.questions[n] && !this.questions[n].hasClass("hidden-item") && this.questions[n].addClass("hidden-item");

        wisepops("goal", "signedup");
        var i = {
          "twofoursevenref": 1,
          "teamid": 1,
          "fname": this.model.firstName,
          "sname": this.model.surName,
          "tel": this.model.contactNumber,
          "mob": "",
          "altnumber": "",
          "address": "",
          "addressTwo": "",
          "addressThree": "",
          "postcode": "",
          "email": this.model.email,
          "whatheating": this.model["What type of heating system do you have?"],
          "HowManyRadiatorsAreInYourHome": this.model["How many bedrooms do you have"],
          "HowManyBathtubsAreInYourHome": this.model["How many bathrooms do you have"],
          "WouldYouLikeItRemoved": "",
          "DoYouHaveAHotWaterCylinder": "",
          "DoYouHaveSeperateColdWaterTank": "",
          "HowQuicklyDoesColdWaterRunFromKitchen": "",
          "WhatTimeOfHomeDoYouLive": "",
          "IsYourFlatOn2ndFloor": "",
          "WhereIsBoilerLocated": "",
          "DoYouWantBoilerMoved": "",
          "WhereWouldYouLikeYourNewBoiler": "",
          "WhereWillYourNewBoilerBeLocated": "",
          "HowManyStandaloneMixersShowers": "",
          "DoYouHaveSeperateThermostatFromBoiler": "",
          "DoYouHaveThermostatRadiator": "",
          "WhereIsTheLocationOfFLue": "",
          "RoofType": "",
          "WallCovering": "",
          "WhatShapeIsFlueOutside": "",
          "IsFlueMoreThan2MetersFromFloor": "",
          "IsFlueMoreThan2MetersFromNeighbour": "",
          "IsFlueMoreThan30CmFromWindow": "",
          "HowOldBoiler": "",
          "Make": "",
          "Model": "",
          "SelectedBoiler": "1",
          "BookingDate": "",
          "BookingSlot": ""
        };
        $.ajax({
          "url": "https://api.247staywarm.co.uk/service1.asmx/CreateSalesFromService",
          "data": i,
          "type": "POST",
          "headers": {
            "Content-type": "application/x-www-form-urlencoded"
          },
          "success": function (e) {
            console.log(e), gtag("event", "main_quote_form_completed", {
              "event_category": "Get A Quote",
              "event_label": "engagement"
            }), gtag_report_conversion("https://247staywarm.co.uk/#thankyou"), window.location.hash = "thankyou", $("#thankyou").hasClass("hidden-item") && $("#thankyou").removeClass("hidden-item"), $("html, body").animate({
              "scrollTop": $($("#questions")).offset().top - 80 + "px"
            }, 1600, "swing");
          },
          "error": function (e) {
            $("#thankyouerror").hasClass("hidden-item") && $("#thankyouerror").removeClass("hidden-item"), $("html, body").animate({
              "scrollTop": $($("#questions")).offset().top - 80 + "px"
            }, 1600, "swing");
          }
        });
      } else s.forEach(function (e) {
        $("#main-error-" + e).hasClass("hidden-item") && $("#main-error-" + e).removeClass("hidden-item");
      });
    },
    "optionSelected": function (e, t, a, o) {
      $("html, body").animate({
        "scrollTop": $($(o)).offset().top - 200 + "px"
      }, 700, "swing");

      for (var s = e; s <= this.questions.length; s++) {
        s != e && this.questions[s] && !this.questions[s].hasClass("hidden-item") && this.questions[s].addClass("hidden-item");

        for (var n = $(this.questions[s]).children(), i = 0; i < n.length; i++) {
          var r = $(n[i]).find("img");
          r.hasClass("active") && r.removeClass("active");
        }
      }

      switch (($(o).find("img").addClass("active"), e)) {
        case 0:
          switch ((gtag("event", "question_0_answered", {
            "event_category": "Questionnaire",
            "event_label": "engagement"
          }), t)) {
            case "gas":
            case "electric":
            case "lpg":
            case "oil":
              this.questions[3].removeClass("hidden-item");
          }

          break;

        case 1:
          gtag("event", "question_1_answered", {
            "event_category": "Questionnaire",
            "event_label": "engagement"
          }), "yes" == t ? this.questions[2].removeClass("hidden-item") : this.questions[3].removeClass("hidden-item");
          break;

        case 2:
          gtag("event", "question_2_answered", {
            "event_category": "Questionnaire",
            "event_label": "engagement"
          }), this.questions[3].removeClass("hidden-item");
          break;

        case 3:
          gtag("event", "question_3_answered", {
            "event_category": "Questionnaire",
            "event_label": "engagement"
          }), this.questions[4].removeClass("hidden-item");
          break;

        case 4:
          gtag("event", "question_4_answered", {
            "event_category": "Questionnaire",
            "event_label": "engagement"
          }), this.questions[5].removeClass("hidden-item"), this.model.firstName && this.model.surName && this.model.contactNumber && this.model.email && ($("#main_firstName").val(this.model.firstName), $("#main_surName").val(this.model.surName), $("#main_contactNumber").val(this.model.contactNumber), $("#main_email").val(this.model.email));
      }

      this.model[a] = t;
    }
  }, App.init();
});

//video playback

//hide all error messages

//scroll to questions

//hide all error messages

//hide

//transform values

//change location for tracking

//send GA event

//record as adwords conversion

//change the fragment

//render thank you text

//scroll to thank you message

//scroll to questions

//hide all after

//no nothing
//# sourceMappingURL=app.js.map
