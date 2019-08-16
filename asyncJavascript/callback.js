console.log('Before');

const user = getUser(1 , function(user) {
    console.log('User' , user);

    //Get the repositories
    getRepo(user.githubusername , (repos) => {
        console.log('Repository' , repos);
    })
});

console.log('After');


function getUser(id , callback){
    setTimeout(() => {
        console.log('Reading a user from database');
        callback({ id: id , githubusername: "debajit-basu" });
    },2000)
}

function getRepo(userName , callback){
    setTimeout(() => {
        
        console.log('useName' , userName);
        callback(['repo1' , 'repo2' , 'repo3']);
    },2000);
}