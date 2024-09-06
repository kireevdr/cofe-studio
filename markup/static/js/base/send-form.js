export default function() {
    $('.send-form').on('beforeSubmit submit', function (e) {
        var form = $(this)[0];
        var data = new FormData(form);
        var type = $(this).attr('method');
        var url = $(this).attr('action');

        $.ajax({
            context: this,
            url: url,
            type: type,
            dataType: 'json',
            processData: false,
            contentType: false,
            data: data,
            success: function (res) {
                drowRes(res.title, res.text, $(this))
                hideform($(this))
                return false;
            },
            error: function (res) {
                drowRes(res.title, res.text, $(this))
                hideform($(this))
                return false;
            }
        });
        return false;
    });

}

function drowRes(title, text, $form) {
    title = title || 'Произошла ошибка';
    text = text || 'Свяжитесь с нами по телефону';



    $form.html(`
                    <div class="b-senks">
                              <div class="b-senks__title">${title}</div>
                              <div class="b-senks__text">${text}</div>
                    </div>
                `);
}
window.drowRes = drowRes
function hideform($form) {
    $form.closest('.modal')
        .find('.modal-title, .b-callme__pre-title, .b-callme__title, .b-callme__alert')
        .hide();
    $form.closest('.modal')
        .find('.modal-content_dark')
        .removeClass('modal-content_dark')
        .addClass('modal-content_red');
    $form.closest('.b-reservation').find('.b-reservation__title').hide();
    $form.closest('.b-cafe-form').find('.b-cafe-form__title').hide();
}
