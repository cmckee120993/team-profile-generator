const Intern = require('./lib/Intern');
const Manager = require ('./lib/Manager');
const Engineer = require('./lib/Engineer');

const generateManager = managerTitle => {
    return managerTitle.map(manager => {
        return `<article class="card col-md-4 mb-3">
                    <div class="card" style="width: 18rem;">
                        <div class="card-header">
                            <h2 class="card-title">${manager.getName()}</h2>
                            <h3 class="card-title">Manager</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${manager.getID()}</li>
                            <li class="list-group-item">Email: ${manager.getEmail()}</li>
                            <li class="list-group-item">Office: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div> 
                </article>`
    });
};

const generateIntern = internTitle => {
    return internTitle.map(intern => {
        return `<article class="card col-md-4 mb-3">
                     <div class="card" style="width: 18rem;">
                        <div class="card-header">
                            <h2 class="card-title">${intern.getName()}</h2>
                            <h3 class="card-title">Intern</h3>
                         </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${intern.getID()}</li>
                            <li class="list-group-item">Email: ${intern.getEmail()}</li>
                            <li class="list-group-item">GitHub: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </article>`;
    }).join('');
};

const generateEngineer = engineerTitle => {
    return engineerTitle.map(engineer => {
        return `<article class="card col-md-4 mb-3">
                     <div class="card" style="width: 18rem;">
                        <div class="card-header">
                            <h2 class="card-title">${engineer.getName()}</h2>
                            <h3 class="card-title">Intern</h3>
                         </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${engineer.getID()}</li>
                            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                            <li class="list-group-item">GitHub: ${engineer.getSchool()}</li>
                        </ul>
                    </div>
                </article>`;
    }).join('');
};

const generateCards = teamArray => {
    let cardsArray = [];
    const managerTitle = teamArray.filter(team => {
        return team.getRole() === 'Manager';
    });
    const engineerTitle = teamArray.filter(team => {
        return team.getRole() === 'Engineer';
    });
    const internTitle = teamArray.filter(team => {
        return team.getRole() === 'Intern';
    });

    if (managerTitle) {
        cardsArray.push(generateManager(managerTitle));
    };
    if (engineerTitle) {
        cardsArray.push(generateEngineer(engineerTitle));
    };
    if (internTitle) {
        cardsArray.push(generateIntern(internTitle));
    };
    return cardsArray.join('');
}

// function createSite(data) {
//     console.log(data);
//      let userSite =  
//         `<html lang="en">
//         <head>
//             <meta charset="utf-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
//             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
//             <link rel="stylesheet" href="./assets/style.css">
//             <title>My Team</title>
//         </head>
//         <body>
//             <header class="container-fluid text-center p-5">
//                 <h1>My Team</h1>
//             </header>
        
//             <main class="container text-center p-3">
//             <section class="row">
        
//                 <article class="card col-md-4 mb-3">
//                     <div class="card" style="width: 18rem;">
//                         <div class="card-header">
//                         <h2 class="card-title">${data[Manager].name}</h2>
//                         <h3 class="card-title">Manager</h3>
//                         </div>
//                         <ul class="list-group list-group-flush">
//                         <li class="list-group-item">ID: ${data[Manager].id}</li>
//                         <li class="list-group-item">Email: ${data[Manager].email}</li>
//                         <li class="list-group-item">Office: ${data[Manager].officeNumber}</li>
//                         </ul>
//                     </div>
//                 </article>`

//             if (engineers) {
//                 for (i=0; i<engineers.length; i++) {
//                   userSite +=  `<article class="card col-md-4 mb-3">
//                     <div class="card" style="width: 18rem;">
//                         <div class="card-header">
//                         <h2 class="card-title">${Engineer.getName()}</h2>
//                         <h3 class="card-title">Engineer</h3>
//                         </div>
//                         <ul class="list-group list-group-flush">
//                         <li class="list-group-item">ID: ${Engineer.getID()}</li>
//                         <li class="list-group-item">Email: ${Engineer.getEmail()}</li>
//                         <li class="list-group-item">GitHub: ${Engineer.getGitHub()}</li>
//                         </ul>
//                     </div>
//                 </article>`
//                 };
//             };

//             if (interns) {
//                 for (i=0; i<interns.length; i++) {
//                   userSite +=  `<article class="card col-md-4 mb-3">
//                     <div class="card" style="width: 18rem;">
//                         <div class="card-header">
//                         <h2 class="card-title">${Intern.getName()}</h2>
//                         <h3 class="card-title">Intern</h3>
//                         </div>
//                         <ul class="list-group list-group-flush">
//                         <li class="list-group-item">ID: ${Intern.getID()}</li>
//                         <li class="list-group-item">Email: ${Intern.getEmail()}</li>
//                         <li class="list-group-item">GitHub: ${Intern.getSchool()}</li>
//                         </ul>
//                     </div>
//                 </article>`
//                 };
//             };
                
//         userSite +=
//             `</section>    
            
//             </main>
        
//         </body>
//         </html>
//         `
//     };

module.exports = cardsArray => {
    `<html lang="en">
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/style.css">
        <title>My Team</title>
        </head>
            
        <body>
            <header class="container-fluid text-center p-5">
                <h1>My Team</h1>
            </header>
            
            <main class="container text-center p-3">
                <section class="row">
                    ${generateCards(cardsArray)}
                </section>    
            
            </main>
                        
        </body>
    </html>`
};