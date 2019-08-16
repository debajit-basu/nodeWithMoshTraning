console.log('Before');

getUser(1).then(res => {
    console.log(res);
    getRepo(res.githubusername).then(response => {
        console.log(response);
    }).catch(err => {
        console.log('catch block inside getRepo function' , err);
    });
}).catch(err => {
    console.log('catch block inside getUser function' , err);
})


console.log('After');


function getUser(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Reading a user from database');
            resolve({ id: id , githubusername: "debajit-basu" });
        },2000)
    })
    
}

function getRepo(userName){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('useName' , userName);
            resolve(['repo1' , 'repo2' , 'repo3']);
        },2000);
    })
}


//composite function & map reducer
