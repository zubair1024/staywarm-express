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
        'bannerQuote': function (e) {
            for (var s = $('#banner_' + e + '_firstName').val(), i = $('#banner_' + e + '_surName').val(), a = $('#banner_' + e + '_contactNumber').val(), t = $('#banner_' + e + '_email').val(), n = [], o = 0; o < 3; o++) $('#banner-error-' + e + '-' + o).hasClass('hidden-item') || $('#banner-error-' + e + '-' + o).addClass('hidden-item');

            '' == s && n.push(0), '' == i && n.push(1), '' === a && n.push(2), '' !== t && t.indexOf('@') > -1 || n.push(3), 0 === n.length ? (this.model.firstName = s, this.model.surName = i, this.model.contactNumber = a, this.model.email = t, $('#banner_' + e + '_firstName').prop('disabled', !0), $('#banner_' + e + '_surName').prop('disabled', !0), $('#banner_' + e + '_contactNumber').prop('disabled', !0), $('#banner_' + e + '_email').prop('disabled', !0), $('#banner-btn-' + e).addClass('disabled'), $('html, body').animate({
                'scrollTop': $($('#questions')).offset().top - 80 + 'px'
            }, 700, 'swing')) : n.forEach(function (s) {
                $('#banner-error-' + e + '-' + s).hasClass('hidden-item') && $('#banner-error-' + e + '-' + s).removeClass('hidden-item');
            });
        },
        'mainQuote': function () {
            for (var e = $('#main_firstName').val(), s = $('#main_surName').val(), i = $('#main_contactNumber').val(), a = $('#main_email').val(), t = [], n = 0; n < 3; n++) $('#main-error-' + n).hasClass('hidden-item') || $('#main-error-' + n).addClass('hidden-item');

            if (('' == e && t.push(0), '' == s && t.push(1), '' === i && t.push(2), '' !== a && a.indexOf('@') > -1 || t.push(3), 0 === t.length)) {
                this.model.firstName = e, this.model.surName = s, this.model.contactNumber = i, this.model.email = a;

                for (var n = 0; n <= this.questions.length; n++) this.questions[n] && !this.questions[n].hasClass('hidden-item') && this.questions[n].addClass('hidden-item');

                this.model.firstName, this.model.surName, this.model.contactNumber, this.model.email, this.model['What type of heating system do you have?'], this.model['How many bathtubs do you have'], this.model['How many bedrooms do you have'];
                window.location.hash = 'thankyou', $('#thankyou').hasClass('hidden-item') && $('#thankyou').removeClass('hidden-item'), $('html, body').animate({
                    'scrollTop': $($('#questions')).offset().top - 80 + 'px'
                }, 1600, 'swing');
            } else t.forEach(function (e) {
                $('#main-error-' + e).hasClass('hidden-item') && $('#main-error-' + e).removeClass('hidden-item');
            });
        },
        'optionSelected': function (e, s, i, a) {
            $('html, body').animate({
                'scrollTop': $($(a)).offset().top - 200 + 'px'
            }, 700, 'swing');

            for (var t = e; t <= this.questions.length; t++) {
                t != e && this.questions[t] && !this.questions[t].hasClass('hidden-item') && this.questions[t].addClass('hidden-item');

                for (var n = $(this.questions[t]).children(), o = 0; o < n.length; o++) {
                    var r = $(n[o]).find('img');
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

            this.model[i] = s;
        }
    }, App.init();
});

//hide all error messages

//scroll to questions

//hide all error messages

//hide

//transform values

//change location for tracking

// $.ajax({
//     url: '',
//     method: '',
//     success: () => {

//     },
//     error: () => {

//     }
// });

//scroll to questions

//scroll to questions

//hide all after

//no nothing
//# sourceMappingURL=app.js.map
