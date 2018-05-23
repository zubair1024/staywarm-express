$(document).ready(function () {
    window.App = {
        'model': {},
        'questions': [],
        'menuItemClicked': function () {
            $('.collapse.navbar-collapse').hasClass('in') && $('.collapse.navbar-collapse').removeClass('in');
        },
        'init': function () {
            this.initListeners();
        },
        'initListeners': function () {
            for (var e = $('.question'), s = 0; s < e.length; s++) this.questions.push($(e[s])), 0 != s && $(e[s]).addClass('hidden-item');
        },
        'submitContactForm': function () {
            var e = $('form-uname').val(),
                s = $('form-uemail').val(),
                o = $('form-message').val();
            $.post('/contact', {
                'name': e,
                'email': s,
                'message': o
            }).done(function (e) {
                $('#contact-form-submit').prop('disabled', !0), alert('Thank you. We will get in touch with you shortly');
            });
        },
        'bannerQuote': function (e) {
            for (var s = $('#banner_' + e + '_firstName').val(), o = $('#banner_' + e + '_surName').val(), a = $('#banner_' + e + '_contactNumber').val(), i = $('#banner_' + e + '_email').val(), t = [], n = 0; n < 3; n++) $('#banner-error-' + e + '-' + n).hasClass('hidden-item') || $('#banner-error-' + e + '-' + n).addClass('hidden-item');

            '' == s && t.push(0), '' == o && t.push(1), '' === a && t.push(2), '' !== i && i.indexOf('@') > -1 || t.push(3), 0 === t.length ? (this.model.firstName = s, this.model.surName = o, this.model.contactNumber = a, this.model.email = i, $('#banner_' + e + '_firstName').prop('disabled', !0), $('#banner_' + e + '_surName').prop('disabled', !0), $('#banner_' + e + '_contactNumber').prop('disabled', !0), $('#banner_' + e + '_email').prop('disabled', !0), $('#banner-btn-' + e).addClass('disabled'), $('html, body').animate({
                'scrollTop': $($('#questions')).offset().top - 80 + 'px'
            }, 700, 'swing')) : t.forEach(function (s) {
                $('#banner-error-' + e + '-' + s).hasClass('hidden-item') && $('#banner-error-' + e + '-' + s).removeClass('hidden-item');
            });
        },
        'mainQuote': function () {
            for (var e = $('#main_firstName').val(), s = $('#main_surName').val(), o = $('#main_contactNumber').val(), a = $('#main_email').val(), i = [], t = 0; t < 3; t++) $('#main-error-' + t).hasClass('hidden-item') || $('#main-error-' + t).addClass('hidden-item');

            if (('' == e && i.push(0), '' == s && i.push(1), '' === o && i.push(2), '' !== a && a.indexOf('@') > -1 || i.push(3), 0 === i.length)) {
                this.model.firstName = e, this.model.surName = s, this.model.contactNumber = o, this.model.email = a;

                for (var t = 0; t <= this.questions.length; t++) this.questions[t] && !this.questions[t].hasClass('hidden-item') && this.questions[t].addClass('hidden-item');

                wisepops('goal', 'signedup');
                var n = {
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
                    'HowManyRadiatorsAreInYourHome': '',
                    'HowManyBathtubsAreInYourHome': '',
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
                    'BookingSlot': ''
                };
                $.ajax({
                    'url': 'https://api.247staywarm.co.uk/service1.asmx/CreateSalesFromService',
                    'data': n,
                    'type': 'POST',
                    'headers': {
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    'success': function (e) {
                        console.log(e), window.location.hash = 'thankyou', $('#thankyou').hasClass('hidden-item') && $('#thankyou').removeClass('hidden-item'), $('html, body').animate({
                            'scrollTop': $($('#questions')).offset().top - 80 + 'px'
                        }, 1600, 'swing');
                    },
                    'error': function (e) {
                        $('#thankyouerror').hasClass('hidden-item') && $('#thankyouerror').removeClass('hidden-item'), $('html, body').animate({
                            'scrollTop': $($('#questions')).offset().top - 80 + 'px'
                        }, 1600, 'swing');
                    }
                });
            } else i.forEach(function (e) {
                $('#main-error-' + e).hasClass('hidden-item') && $('#main-error-' + e).removeClass('hidden-item');
            });
        },
        'optionSelected': function (e, s, o, a) {
            $('html, body').animate({
                'scrollTop': $($(a)).offset().top - 200 + 'px'
            }, 700, 'swing');

            for (var i = e; i <= this.questions.length; i++) {
                i != e && this.questions[i] && !this.questions[i].hasClass('hidden-item') && this.questions[i].addClass('hidden-item');

                for (var t = $(this.questions[i]).children(), n = 0; n < t.length; n++) {
                    var r = $(t[n]).find('img');
                    r.hasClass('active') && r.removeClass('active');
                }
            }

            switch (($(a).find('img').addClass('active'), e)) {
                case 0:
                    switch (s) {
                        case 'gas':
                        case 'electric':
                        case 'lpg':
                        case 'oil':
                            this.questions[3].removeClass('hidden-item');
                    }

                    break;

                case 1:
                    'yes' == s ? this.questions[2].removeClass('hidden-item') : this.questions[3].removeClass('hidden-item');
                    break;

                case 2:
                    this.questions[3].removeClass('hidden-item');
                    break;

                case 3:
                    this.questions[4].removeClass('hidden-item');
                    break;

                case 4:
                    this.questions[5].removeClass('hidden-item'), this.model.firstName && this.model.surName && this.model.contactNumber && this.model.email && ($('#main_firstName').val(this.model.firstName), $('#main_surName').val(this.model.surName), $('#main_contactNumber').val(this.model.contactNumber), $('#main_email').val(this.model.email));
            }

            this.model[o] = s;
        }
    }, App.init();
});

//hide all error messages

//scroll to questions

//hide all error messages

//hide

//transform values

//change location for tracking

//scroll to questions

//hide all after

//no nothing
//# sourceMappingURL=app.js.map
