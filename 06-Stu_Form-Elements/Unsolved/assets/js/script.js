var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
let inputEl = $('input[name="shopping-input"]');

// TODO: Create a function to handle the form submission event 
// that captures the form's `<input>` value 
// and prints it to the `shoppingListEl` as a `<li>`
// form- input

// Create function to handle form submission
function handleFormSubmit (event) {
// Prevent the default behavior
    event.preventDefault();

    // Select form element by its "name" attribute and get its variable
    let shoppingItem = inputEl.val();

    // If there's nothing in the form entered, don't print anything
    if (shoppingItem.length > 0)
        // Print to the page
        shoppingListEl.append("<li>" + shoppingItem + "</li>");

    // Clear the form input
    inputEl.val("");
    inputEl.focus();
}

// Create a submit event listener on the form element
shoppingFormEl.on("submit", handleFormSubmit);
