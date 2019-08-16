console.log('Before');

const user = getUser(1);
console.group(user);


console.log('After');

//callback
//promises
//Async/await
function getUser(id){
    setTimeout(() => {
        console.log('Reading a user from database');
    },2000)

    return { id: id , githubusername: "debajit-basu" };
}