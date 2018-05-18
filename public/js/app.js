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
                    if (questionAnswer == 'gas') {
                        this.questions[1].removeClass('hidden-item');
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
                debugger;
                    this.questions[5].removeClass('hidden-item');
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