////$(document).ready(function () {

////    loadData();
////})

setTimeout(function () {
    $(document).ready(function () {
        loadData();
    });
}, 600);

//Load Data function  
function loadData() {
    $.ajax({
        url: "/Home/List",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.EmployeeID + '</td>';
                html += '<td>' + item.Name + '</td>';
                html += '<td>' + item.Age + '</td>';
                html += '<td>' + item.State + '</td>';
                html += '<td>' + item.Country + '</td>';
                html += '<td><a href="#" onclick="getbyID(' + item.EmployeeID + ')">Edit</a> | <a href="#" onclick="Delete(' + item.EmployeeID + ')">Delete</a></td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
$("#Name").keyup(function () {
    if ($("#Name").val().trim() != "") {
        $('#Name').css('border-color', 'green');
        $("#empname").text('');
        isValid = true;
    }
    else {
        $("#Name").css('border-color', 'red');
        $("#empname").text('Your Name is Required');
        $("#empname").css('color', 'red');

    }

});
$("#Age").keyup(function () {
    if ($("#Age").val().trim() != "") {
        $('#Age').css('border-color', 'green');
        $("#empage").text('');
        isValid = true;
    }
    else {
        $("#Age").css('border-color', 'red');
        $("#empage").text('Your Age is Required');
        $("#empage").css('color', 'red');

    }

});
$("#Country").keyup(function () {
    if ($("#Country").val().trim() != "") {
        $('#Country').css('border-color', 'green');
        $("#empcountry").text('');
        isValid = true;
    }
    else {
        $("#Country").css('border-color', 'red');
        $("#empcountry").text('Your Country is Required');
        $("#empcountry").css('color', 'red');

    }

});
$("#State").keyup(function () {
    if ($("#State").val().trim() != "") {
        $('#State').css('border-color', 'green');
        $("#empstate").text('');
        isValid = true;
    }
    else {
        $("#State").css('border-color', 'red');
        $("#empstate").text('Your State is Required');
        $("#empstate").css('color', 'red');

    }

});
function validate() {
    var isValid = true;
    if ($("#Name").val().trim() == "") {
        $("#Name").css('border-color', 'red');
        $("#empname").text('Your Name is Required');
        $("#empname").css('color', 'red');
   
        alert("Enter Your All Detail");
        
        isValid = false;
    }

    if ($('#Age').val().trim() == "") {
     
        $('#Age').css('border-color', 'red');
        $("#empage").text('Your age is Required');
        $("#empage").css('color', 'red');

        isValid = false;
    }
    else {
        $('#Age').css('border-color', 'green');
    }
    if ($('#Country').val().trim() == "") {
       
        $('#Country').css('border-color', 'red');
        $("#empcountry").text('Your Country is Required');
        $("#empcountry").css('color', 'red');

        isValid = false;
    }
    else {
        $('#Country').css('border-color', 'green');
    }
    if ($('#State').val().trim() == "") {
     
        $('#State').css('border-color', 'red');
        $("#empstate").text('Your State is Required');
        $("#empstate").css('color','red');
        isValid = false;
    }
    else {
        $('#State').css('border-color', 'green');
    }
    
    return isValid;
    return true;
}
    //Add Data Function   
    function Add() {
        var result = validate();
        if (result == false) {
            return false;
        }
        var empObj = {
            EmployeeID: $('#EmployeeID').val(),
            Name: $('#Name').val(),
            Age: $('#Age').val(),
            State: $('#State').val(),
            Country: $('#Country').val(),
            Action: "Insert"
        };
        $.ajax({
            url: "/Home/Add",
            data: JSON.stringify(empObj),
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                if (result == result) {
                    $('#myModal').modal('hide');
                    //$('#myModal').css('display', 'none');

                    loadData();
                    clear();
                    alert("Data Successfully Added!!!!!");
                    
                }
                else {
                    alert(" Data not Add!!!!");
                }
              
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }
function clear() {
    $('#EmployeeID').val('');
    $('#Name').val('');
    $('#Age').val('');
    $('#State').val('');
      $('#Country').val('');
}

    /////getby Id
    function getbyID(EmployeeID) {
        $.ajax({
            url: "/Home/GetbyId" ,
            data: { 'EmployeeID': EmployeeID },
            type: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                loadData();
                $('#EmployeeID').val(result.EmployeeID);
                $('#Name').val(result.Name);
                $('#Age').val(result.Age);
                $('#State').val(result.State);
                $('#Country').val(result.Country);



                $('#myModal').modal('show');
                $('#btnUpdate').show();
                $('#btnAdd').hide();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
        return false;
    }

    function Update() {

        var res = validate();
        if (res == false) {
            return false;
        }
        var empObj = {
            EmployeeID: $('#EmployeeID').val(),
            Name: $('#Name').val(),
            Age: $('#Age').val(),
            State: $('#State').val(),
            Country: $('#Country').val(),
            Action: "Update"
        };
        $.ajax({
            url: "/Home/Update/EmployeeID",
            data: JSON.stringify(empObj),
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                if (result == result) {
                    alert("Successfully Data Updated!!!");
                }
                else {
                    alert(" Data not Updated!!!");
                }

                loadData();
                $('#myModal').modal('hide');
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }

    function Delete(EmployeeID) {
        
        
        var ans = confirm("Are you Sure you want to delete this Record")
        if (ans) {
            $.ajax({
                url: "/Home/Delete",
                data: { 'EmployeeID': EmployeeID },
                type: "GET",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (result) {
                    loadData();
                    if (result == result) {
                        alert("Data Successfully deleted!!!!!");
                    }
                    else {
                        alert("Data not deleted!!!!!");
                    }

                },
                error: function (errormessage) {
                    alert(errormessage.responseText);
                }
            });
            return false;
        }
    }
