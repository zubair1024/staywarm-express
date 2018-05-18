$(document).ready(function () {
    "use strict";
    window.App = {
        model: {},
        questions: [],
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
        bannerQuote: function () {
            let firstName = $('#banner_firstName').val();
            let surName = $('#banner_surName').val();
            let contactNumber = $('#banner_contactNumber').val();
            let email = $('#banner_email').val();
            let valid = true;
            let invalid = [];
            //hide all error messages
            for (let i = 0; i < 3; i++) {
                if (!$(`#banner-error-${i}`).hasClass('hidden-item')) {
                    $(`#banner-error-${i}`).addClass('hidden-item');
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
                $('#banner_firstName').prop('disabled', true);
                $('#banner_surName').prop('disabled', true);
                $('#banner_contactNumber').prop('disabled', true);
                $('#banner_email').prop('disabled', true);
                $('#banner-btn').addClass('disabled');
                //scroll to questions
                $("html, body").animate({ scrollTop: $($('#questions')).offset().top - 80 + "px" }, 1600, "swing");
            } else {
                invalid.forEach(function (i) {
                    if ($(`#banner-error-${i}`).hasClass('hidden-item')) {
                        $(`#banner-error-${i}`).removeClass('hidden-item')
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
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Your query has been sent. We will get back to you shortly.',
                    showConfirmButton: false,
                    timer: 1500
                })
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
            $("html, body").animate({ scrollTop: $($(item)).offset().top - 200 + "px" }, 1600, "swing");
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
                            this.questions[1].removeClass('hidden-item');
                            break;
                        case 'electric':
                            swal({
                                type: 'error',
                                title: 'Oops...',
                                text: 'At this point in time we do not provide heating solution for Electric fuel.',
                                footer: '',
                            })
                            break;
                        case 'lpg':
                            swal({
                                type: 'error',
                                title: 'Oops...',
                                text: 'At this point in time we do not provide heating solution for LPG.',
                                footer: '',
                            })
                            break;
                        case 'oil':
                            swal({
                                type: 'error',
                                title: 'Oops...',
                                text: 'At this point in time we do not provide heating solution for Oil.',
                                footer: '',
                            })
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