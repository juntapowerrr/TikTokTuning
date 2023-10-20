function checkFilled()  {
    var interests = document.getElementsByClassName("form-input");
    for (var i = 0; i<interests.length; i++)  {
        if (interests[i].value == '')  {
            interests[i].style.backgroundColor = 'none';
        } else {
            interests[i].style.backgroundColor = '#F9FFB7';
        }   
    }
}

$('.form-card').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled', '');

    data.append("Ім'я", $('[name="name"]', form).val());
    data.append('Telegram Нікнейм', $('[name="telegram"]', form).val());
    data.append('Номер телефону', $('[name="phone"]', form).val());
    data.append('Тариф', $('[name="kurs"]', form).val());


    files.each(function (key, file) {
        let cont = file.files;
        if (cont) {
            $.each(cont, function (key, value) {
                data.append(key, value);
            });
        }
    });

    $.ajax({
        url: 'send.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function () {
            let myXhr = $.ajaxSettings.xhr();

            if (myXhr.upload) {
                myXhr.upload.addEventListener('progress', function (e) {
                    if (e.lengthComputable) {
                        let percentage = (e.loaded / e.total) * 100;
                        percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html(percentage + '%');
                    }
                }, false);
            }

            return myXhr;
        },
        // error: function (jqXHR, textStatus) {
        //     console.log('Произошла ошибка, попробуйте еще раз');
        // },
        complete: function () {
            // Тут можем что-то делать ПОСЛЕ успешной отправки формы
            //$('.success').slideToggle();
            console.log('Успешно отправлено');
            //form.reset();
            $(".popup").fadeIn(300);
        }
    });

    return false;
});