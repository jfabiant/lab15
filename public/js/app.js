$(document).ready(function () {
    var socket = io();
    $('#formulario').submit(function (e) {
        e.preventDefault();
        var data = {
            _id: $('#_id').val(),
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            timezone: $('#timezone').val(),
            locale: $('#locale').val(),
            profile_pic: $('#profile_pic').val()
        };
        console.log(data);
        if (data._id == '') {
            $("#_id").focus();
            return alert("Debe ingreser un ID!");
        }
        if (data.first_name == '') {
            $("#first_name").focus();
            return alert("Debe ingreser un nombre!");
        }
        socket.emit('crear', function (data) {
        });
        $('#formulario').trigger('reset');
        return true;
    });

    socket.on('nuevo', function (data) {
        fill(data);
    });

    var fill = function (data) {
        console.log("************************");
        console.log("************************");
        console.log(data);
        var $row = $('<tr id="' + data._id + '">');
        $row.append('<td>' + data.first_name + '</td>');
        $row.append('<td>' + data.last_name + '</td>');
        $row.append('<td>' + data.timezone + '</td>');
        $row.append('<td>' + data.locale + '</td>');
        $row.append('<td>' + data.profile_pic + '</td>');
        $row.append('<td><button class="btn btn-success btn-sm" name="btnAct">Actualizar</button></td>');
        $row.append('<td><button class="btn btn-danger btn-sm" name="btnEli">Eliminar</button></td>');
        $row.data('data', data);
        $('table tbody').append($row);
    };

});