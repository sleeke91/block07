/* Use a JavaScript Statement to instruct the browser to display a message in a dialogue box to a user providing them with the combination code to a 'Secret Vault' using different arthmetic operators to provide each of the three keys that make up the combination: 10-40-39.

    1. Declare and define 3 separate let variables for each number: 
        - key_1 for 10
        - key_2 for 40
        - key_3 for 39

    2. Apply three different arithmetic operators that equate to their designated key_# 
        - Use addition for key_1 (10)
        - Use multiplication for key_2 (40)
        - Use subtraction for key_3 (39)

    3. Use another let variable that is defined by a string with the name/label 'message' and give it the following output: 
        'You have received this message because you have been chosen to open an important vault. Here is the secret combination: 10 - 40 - 49'

    4. Using template literals replace each of the keys in the combination:
        ${key_1} - ${key_2} - ${key_3}

    5. Include alert (message) to populate the input of the 'let message' variable defined in the previous step.

*/

let key_1 = 5+5;

// equates to the first key in the combination

let key_2 = 10*4;

// equates to the second key in the combination

let key_3 = 63-24;

// equates to the third key in the combination

let message = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${key_1} - ${key_2} - ${key_3}`

// output: You have received this message because you have been chosen to open an important vault. Here is the secret combination: 10 - 40 - 49

alert(message)

// will display the above output in a dialogue box.