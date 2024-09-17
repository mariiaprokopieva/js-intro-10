const { Actions } = require('../utils/actions.js');


function test1(url, username, password, title) {
    Actions.visitUrl(url)
    .then(() => Actions.login(username, password))
    .then(() => Actions.validateTitle(title))
    .catch((err) => console.log(err));
}

test1('www.google.com', 'TechGlobal', 'Test1234', '');


async function test2(url, username, password, title) {
    try {
        await Actions.visitUrl(url);
        await Actions.login(username, password);
        await Actions.validateTitle(title);
    }
    catch(err) {
        console.log(err);
    }
}

test2('www.google.com', 'TechGlobal', 'Test1234', '');
