export default function() {
    let context = 'b-intro-simple';
    if ($(`.${context}`).length == 0) {
        return
    }

    $(`.${context}__menu-btn`).on('click', function (e) {
        e.stopPropagation();
        menu.open();
        return false
    })
}
