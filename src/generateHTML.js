const fs = require('fs');


function managerCard(manager){
    return `
    <div class="card col-3 m-2 d-flex justify-content-around" style="width: 18rem;">
                    <div class="card-header  bg-primary">
                        ${manager.name}
                        Manager
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: ${manager.email}</li>
                        <li class="list-group-item">Office number: ${manager.officeNum}</li>
                    </ul>
                </div>
    `
}
function engineerCard(engineer){
    return `
    <div class="card col-3 m-2 d-flex justify-content-around" style="width: 18rem;">
                    <div class="card-header  bg-primary">
                        ${engineer.name}
                        Engineer
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: ${engineer.email}</li>
                        <li class="list-group-item">GitHub: ${engineer.gitHub}</li>
                    </ul>
                </div>
    `
}
function internCard(intern){
    return `
    <div class="card col-3 m-2 d-flex justify-content-around" style="width: 18rem;">
                    <div class="card-header  bg-primary">
                        ${intern.name}
                        Intern
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: ${intern.email}</li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
    `
}
function addMembers(team){
    var teamCards = ''; 
    for(i = 0; i < team.length; i++){
        switch(team[i].constructor.name){
            case 'Manager' : 
                teamCards += managerCard(team[i]);
                break;
            case 'Engineer' :
                teamCards += engineerCard(team[i]);
                break;
            case 'Intern' :
                teamCards += internCard(team[i]);
                break;
            default:
                console.log('error');
        }
        
    }
    return teamCards
}
function generateHtml(team){

    const text = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>

<body>
    <header class="jumbotron bg-danger">
        <h1 class="display-4 text-center">My Team</h1>

    </header>
    <main>
        <div class="container-fluid">
            <div class="row d-flex justify-content-around">
            ${addMembers(team)}
            </div>

            </div>
           
        </main>
    
    </body>
    
    </html>
    `
    fs.writeFile('./dist/index.html', text, (err) =>
    err ? console.error(err) : console.log('Your team profile has been generated in the "dist" directory') )
}

module.exports = {
    generateHtml
}