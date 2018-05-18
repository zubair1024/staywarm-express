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
        optionSelected: function (questionNumber, questionAnswer, questionLabel, item) {
            //hide all after
            for (let i = (questionNumber + 1); i <= this.questions.length; i++) {
                if (this.questions[i] && !this.questions[i].hasClass('hidden-item')) {
                    this.questions[i].addClass('hidden-item')
                }
            }
            let options = $(item).parent().children();
            for (let i = 0; i < options.length; i++) {
                let image = $(options[i]).find('img');
                if (image.hasClass('active')) {
                    image.removeClass('active')
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
                            break;
                        case 'lpg':
                            break;
                        case 'oil':
                            break;
                    }
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:

                    break;
                case 4:

                    break;
                default:
                    //no nothing
                    break;
                    this.questions[questionNumber]
                    this.model[questionLabel] = questionAnswer;
            }
        }
    }
    App.init();
});