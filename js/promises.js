
// promises.html

function wait(num) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            if (!isNaN(num)){
                resolve()
            }else {reject()}
        },num)
    }).then(() => console.log(`You\'ll see this after ${num / 1000} second`)).catch(() => console.log(`rejected!`));

}

wait(3000);
wait(1000);


function getLastPush(input) {

   return fetch(`https://api.github.com/users/${input}/events`, {headers: {'Authorization': 'token' + key3}})

        .then((data) => {
            //console.log(data);
            return data.json()

        }).then((jsonData) => {
            //console.log(jsonData[0].actor.display_login)
        return "Date is: " + jsonData[0].created_at + " user name is: " + jsonData[0].actor.display_login
    });

}

getLastPush("arasharghavan").then((data)=> console.log(data));


