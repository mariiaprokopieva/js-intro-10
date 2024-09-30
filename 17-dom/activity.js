/*
Activity Instructions

1. Prompt for Name:

- Use prompt() to ask the user for their name and store the response in a variable userName.
- If the user provides a name, display a welcome message using alert() that includes their name.
- If the user leaves the input blank or clicks "Cancel", display an error message in the console.

2. Confirm to Continue:
- After displaying the welcome message, ask the user if they want to continue using confirm().
- If the user selects "OK", show an alert confirming their choice to continue.
- If the user selects "Cancel", show an alert indicating the action was canceled.

3. Log Screen Details:
- Log the browser's inner width and height (innerWidth and innerHeight) to the console.
- Inform the user via console.log() that the page will reload in 10 seconds.

4. Reload the Page:
- Use setTimeout() to reload the page after 10 seconds using window.location.reload().

5. Error Handling:
- If the user does not provide a name, display an error message in the console saying: "You did not provide your name. Bye Bye!"
*/

const userName = prompt('What is your name?')
if(userName) {
    alert(`Hello, ${userName}`);
    const isContinue = confirm('Would you like to continue?');
if(isContinue) {
    alert('You selected to continue!');

    alert(`Your inner screen sizes are height: ${innerHeight} and width: ${innerWidth}`);

    alert('The page is going to reload in 10 seconds');
    
    setTimeout(() => window.location.reload(), 10000);
}
else alert('The action was canceled.')


}
else alert('You did not provide your name. Bye Bye!');


