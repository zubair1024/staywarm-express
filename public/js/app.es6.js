$(document).ready(function () {
    "use strict";
    window.App = {
        model: {},
        questions: [],
        menuItemClicked: function () {
            if ($('.collapse.navbar-collapse').hasClass('in')) {
                $('.collapse.navbar-collapse').removeClass('in')
            }
        },
        init: function () {
            this.initListeners();
        },
        initListeners: function () {
            let questions = $('.question');
            for (let i = 0; i < questions.length; i++) {
                this.questions.push($(questions[i]));
                if (i != 0) {
                    $(questions[i]).addClass('hidden-item');
                }
            }
            //video playback
            $('.youtube-popup').on('click',()=>{
                console.log('video_playback_started');
                gtag('event', 'video_playback_started', {
                    'event_category': 'Video Enagagement',
                    'event_label': 'engagement'
                });
            });
        },
        submitContactForm: function () {
            gtag('event', 'contact_form_submitted', {
                'event_category': 'Get A Quote',
                'event_label': 'engagement'
            });
            let name = $('form-uname').val();
            let email = $('form-uemail').val();
            let message = $('form-message').val();
            $.post("/contact", {
                name: name,
                email: email,
                message: message
            }).done(function (data) {
                $('#contact-form-submit').prop('disabled', true);
                alert('Thank you. We will get in touch with you shortly');
            });
        },
        bannerQuote: function (size) {
            gtag('event', 'banner_quote_form_submitted', {
                'event_category': 'Get A Quote',
                'event_label': 'engagement'
            });
            let firstName = $(`#banner_${size}_firstName`).val();
            let surName = $(`#banner_${size}_surName`).val();
            let contactNumber = $(`#banner_${size}_contactNumber`).val();
            let email = $(`#banner_${size}_email`).val();
            let valid = true;
            let invalid = [];
            //hide all error messages
            for (let i = 0; i < 3; i++) {
                if (!$(`#banner-error-${size}-${i}`).hasClass('hidden-item')) {
                    $(`#banner-error-${size}-${i}`).addClass('hidden-item');
                }
            }
            if (firstName == '') {
                invalid.push(0);
            }
            if (surName == '') {
                invalid.push(1);
            }
            if (contactNumber === '') {
                invalid.push(2);
            }
            if (email === '' || (!(email.indexOf('@') > -1))) {
                invalid.push(3);
            }
            if (invalid.length === 0) {
                this.model.firstName = firstName;
                this.model.surName = surName;
                this.model.contactNumber = contactNumber;
                this.model.email = email;
                $(`#banner_${size}_firstName`).prop('disabled', true);
                $(`#banner_${size}_surName`).prop('disabled', true);
                $(`#banner_${size}_contactNumber`).prop('disabled', true);
                $(`#banner_${size}_email`).prop('disabled', true);
                $(`#banner-btn-${size}`).addClass('disabled');
                //scroll to questions
                $("html, body").animate({ scrollTop: $($('#questions')).offset().top - 80 + "px" }, 700, "swing");
            } else {
                invalid.forEach(function (i) {
                    if ($(`#banner-error-${size}-${i}`).hasClass('hidden-item')) {
                        $(`#banner-error-${size}-${i}`).removeClass('hidden-item')
                    }
                });
            }

        },
        mainQuote() {
            gtag('event', 'main_quote_form_submitted', {
                'event_category': 'Get A Quote',
                'event_label': 'engagement'
            });
            let firstName = $('#main_firstName').val();
            let surName = $('#main_surName').val();
            let contactNumber = $('#main_contactNumber').val();
            let email = $('#main_email').val();
            let valid = true;
            let invalid = [];
            //hide all error messages
            for (let i = 0; i < 3; i++) {
                if (!$(`#main-error-${i}`).hasClass('hidden-item')) {
                    $(`#main-error-${i}`).addClass('hidden-item');
                }
            }
            if (firstName == '') {
                invalid.push(0);
            }
            if (surName == '') {
                invalid.push(1);
            }
            if (contactNumber === '') {
                invalid.push(2);
            }
            if (email === '' || (!(email.indexOf('@') > -1))) {
                invalid.push(3);
            }
            if (invalid.length === 0) {
                this.model.firstName = firstName;
                this.model.surName = surName;
                this.model.contactNumber = contactNumber;
                this.model.email = email;
                //hide
                for (let i = 0; i <= this.questions.length; i++) {
                    if (this.questions[i] && !this.questions[i].hasClass('hidden-item')) {
                        this.questions[i].addClass('hidden-item')
                    }
                }

                wisepops('goal', 'signedup');

                //transform values
                let body = {
                    'twofoursevenref': 1,
                    'teamid': 1,
                    'fname': this.model.firstName,
                    'sname': this.model.surName,
                    'tel': this.model.contactNumber,
                    'mob': '',
                    'altnumber': '',
                    'address': '',
                    'addressTwo': '',
                    'addressThree': '',
                    'postcode': '',
                    'email': this.model.email,
                    'whatheating': this.model['What type of heating system do you have?'],
                    'HowManyRadiatorsAreInYourHome': this.model['How many bedrooms do you have'],
                    'HowManyBathtubsAreInYourHome': this.model['How many bathrooms do you have'],
                    'WouldYouLikeItRemoved': '',
                    'DoYouHaveAHotWaterCylinder': '',
                    'DoYouHaveSeperateColdWaterTank': '',
                    'HowQuicklyDoesColdWaterRunFromKitchen': '',
                    'WhatTimeOfHomeDoYouLive': '',
                    'IsYourFlatOn2ndFloor': '',
                    'WhereIsBoilerLocated': '',
                    'DoYouWantBoilerMoved': '',
                    'WhereWouldYouLikeYourNewBoiler': '',
                    'WhereWillYourNewBoilerBeLocated': '',
                    'HowManyStandaloneMixersShowers': '',
                    'DoYouHaveSeperateThermostatFromBoiler': '',
                    'DoYouHaveThermostatRadiator': '',
                    'WhereIsTheLocationOfFLue': '',
                    'RoofType': '',
                    'WallCovering': '',
                    'WhatShapeIsFlueOutside': '',
                    'IsFlueMoreThan2MetersFromFloor': '',
                    'IsFlueMoreThan2MetersFromNeighbour': '',
                    'IsFlueMoreThan30CmFromWindow': '',
                    'HowOldBoiler': '',
                    'Make': '',
                    'Model': '',
                    'SelectedBoiler': '1',
                    'BookingDate': '',
                    'BookingSlot': '',
                }
                //change location for tracking
                $.ajax({
                    url: 'https://api.247staywarm.co.uk/service1.asmx/CreateSalesFromService',
                    data: body,
                    type: "POST",
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    success: function (data) {
                        console.log(data);
                        //send GA event
                        gtag('event', 'main_quote_form_completed', {
                            'event_category': 'Get A Quote',
                            'event_label': 'engagement'
                        });
                        //record as adwords conversion
                        gtag_report_conversion('https://247staywarm.co.uk/#thankyou');
                        //change the fragment
                        window.location.hash = "thankyou";
                        //render thank you text
                        if ($('#thankyou').hasClass('hidden-item')) {
                            $('#thankyou').removeClass('hidden-item');
                        }
                        //scroll to thank you message
                        $("html, body").animate({ scrollTop: $($('#questions')).offset().top - 80 + "px" }, 1600, "swing");
                    },
                    error: function (err) {
                        if ($('#thankyouerror').hasClass('hidden-item')) {
                            $('#thankyouerror').removeClass('hidden-item');
                        }
                        $("html, body").animate({ scrollTop: $($('#questions')).offset().top - 80 + "px" }, 1600, "swing");
                    }
                });
            } else {
                invalid.forEach(function (i) {
                    if ($(`#main-error-${i}`).hasClass('hidden-item')) {
                        $(`#main-error-${i}`).removeClass('hidden-item')
                    }
                });
            }
        },
        optionSelected: function (questionNumber, questionAnswer, questionLabel, item) {
            //scroll to questions
            $("html, body").animate({ scrollTop: $($(item)).offset().top - 200 + "px" }, 700, "swing");
            //hide all after
            for (let i = questionNumber; i <= this.questions.length; i++) {
                if (i != questionNumber) {
                    if (this.questions[i] && !this.questions[i].hasClass('hidden-item')) {
                        this.questions[i].addClass('hidden-item')
                    }
                }
                let options = $(this.questions[i]).children();
                for (let i = 0; i < options.length; i++) {
                    let image = $(options[i]).find('img');
                    if (image.hasClass('active')) {
                        image.removeClass('active')
                    }
                }
            }
            $(item).find('img').addClass('active');
            switch (questionNumber) {
                case 0:
                    switch (questionAnswer) {
                        case 'gas':
                            this.questions[3].removeClass('hidden-item');
                            break;
                        case 'electric':
                            this.questions[3].removeClass('hidden-item');
                            break;
                        case 'lpg':
                            this.questions[3].removeClass('hidden-item');
                            break;
                        case 'oil':
                            this.questions[3].removeClass('hidden-item');
                            break;
                    }
                    break;
                case 1:
                    if (questionAnswer == 'yes') {
                        this.questions[2].removeClass('hidden-item');
                    } else {
                        this.questions[3].removeClass('hidden-item');
                    }
                    break;
                case 2:
                    this.questions[3].removeClass('hidden-item');
                    break;
                case 3:
                    this.questions[4].removeClass('hidden-item');
                    break;
                case 4:
                    this.questions[5].removeClass('hidden-item');
                    if (
                        this.model.firstName &&
                        this.model.surName &&
                        this.model.contactNumber &&
                        this.model.email
                    ) {
                        $('#main_firstName').val(this.model.firstName);
                        $('#main_surName').val(this.model.surName);
                        $('#main_contactNumber').val(this.model.contactNumber);
                        $('#main_email').val(this.model.email);
                    }
                    break;
                default:
                    //no nothing
                    break;
            }
            this.model[questionLabel] = questionAnswer;
        }
    }
    App.init();
});