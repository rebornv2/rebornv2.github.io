$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $(document).on('keyup', '.searchbar-input', function () {
        var query = $(this).val();
        $.ajax({
            type: 'post',
            url: '/champions/search',
            data: {
                '_token': $('input[name=_token]').val(),
                'value': query,
            },
            success: function (data) {
                $('#champion-list').html(data);
            }
        })
    });
});
