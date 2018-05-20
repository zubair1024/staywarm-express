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
        },
        bannerQuote: function (size) {
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
                // swal({
                //     position: 'top-end',
                //     type: 'success',
                //     title: 'Your query has been sent. We will get back to you shortly.',
                //     showConfirmButton: false,
                //     timer: 1500
                // })
                if ($('#thankyou').hasClass('hidden-item')) {
                    $('#thankyou').removeClass('hidden-item');
                }
                //scroll to questions
                $("html, body").animate({ scrollTop: $($('#questions')).offset().top - 80 + "px" }, 1600, "swing");
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
                            // $('#mySmallModalLabel').modal();
                            break;
                        case 'lpg':
                        this.questions[3].removeClass('hidden-item');
                            // $('#mySmallModalLabel').modal();
                            break;
                        case 'oil':
                        this.questions[3].removeClass('hidden-item');
                            // $('#mySmallModalLabel').modal();
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
                    this.model[questionLabel] = questionAnswer;
            }
        }
    }
    App.init();
});