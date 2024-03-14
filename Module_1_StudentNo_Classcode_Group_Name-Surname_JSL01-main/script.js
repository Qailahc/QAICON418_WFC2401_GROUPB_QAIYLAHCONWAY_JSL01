function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    
    let result = ''; // Placeholder for validation result

    
    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

        let reg_expression = /^(?=.*[a-z A-Z])(?=.*\d)pet_[a-z A-Z 0-9]+$/;
        //  let reg_expression sees if whether the start of the text in the input begins with 'pet_'
        // (?=.*[a-z A-Z])  Makes sure there is at least  one alphabetic character
        // (?=.*\d)         Makes sure there is at least one numerical digits
    
        
        // TODO: Write your validation logic here
            // Check if input starts with 'pet_' and followed by alphanumeric characters

            if (reg_expression.test(input)) {
                result = 'Valid Syntax 🟢';
            } else {
                result = 'Invalid Syntax 🔴';
            }
    
                document.getElementById('result').innerText = result;
    }
    
 
    


