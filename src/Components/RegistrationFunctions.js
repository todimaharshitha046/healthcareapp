

class RegistrationFunctions {
    static CheckBoxValues ()  {
        var array = []
        var checkboxes =  document.querySelectorAll('input[type=checkbox]:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
           
        }
        return array;

    }
}

module.exports = RegistrationFunctions;