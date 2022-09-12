const Intern = require('./lib/Intern');
const Manager = require ('./lib/Manager');
const Engineer = require('./lib/Engineer');

function createSite(data) {
const generateManager = manager => {
        return `<article class="card col-md-4 mb-3">
                    <div class="card" style="width: 18rem;">
                        <div class="card-header">
                            <h2 class="card-title">${manager.getName()}</h2>
                            <h3 class="card-title">${manager.getRole()}</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${manager.getID()}</li>
                            <li class="list-group-item">Email: ${manager.getEmail()}</li>
                            <li class="list-group-item">Office: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div> 
                </article>`
    };

    const generateEngineer = engineer => {
      return `<article class="card col-md-4 mb-3">
                    <div class="card" style="width: 18rem;">
                         <div class="card-header">
                            <h2 class="card-title">${engineer.getName()}</h2>
                            <h3 class="card-title">${engineer.getRole()}</h3>
                        </div>
                       <ul class="list-group list-group-flush">
                           <li class="list-group-item">ID: ${engineer.getID()}</li>
                            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                           
                        </ul>
                    </div>
                </article>`;
 };

const generateIntern = intern => {
        return `<article class="card col-md-4 mb-3">
                     <div class="card" style="width: 18rem;">
                        <div class="card-header">
                            <h2 class="card-title">${intern.getName()}</h2>
                            <h3 class="card-title">${intern.getRole()}</h3>
                         </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${intern.getID()}</li>
                            <li class="list-group-item">Email: ${intern.getEmail()}</li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </article>`;
};


const html = []

html += (data.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)));
html += (data.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)));
html += (data.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)));

console.log(typeof html);
console.log (JSON.stringify(html));
};
// const generateCards = teamArray => {
//     let cardsArray = [];
//     const managerTitle = teamArray.filter(team => {
//         return team.getRole() === 'Manager';
//     });
//     const engineerTitle = teamArray.filter(team => {
//         return team.getRole() === 'Engineer';
//     });
//     const internTitle = teamArray.filter(team => {
//         return team.getRole() === 'Intern';
//     });

//     if (managerTitle) {
//         cardsArray.push(generateManager(managerTitle));
//     };
//     if (engineerTitle) {
//         cardsArray.push(generateEngineer(engineerTitle));
//     };
//     if (internTitle) {
//         cardsArray.push(generateIntern(internTitle));
//     };
//     return cardsArray.join('');
// }

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
//                         <h2 class="card-title">${data[0].name}</h2>
//                         <h3 class="card-title">Manager</h3>
//                         </div>
//                         <ul class="list-group list-group-flush">
//                         <li class="list-group-item">ID: ${data[0].id}</li>
//                         <li class="list-group-item">Email: ${data[0].email}</li>
//                         <li class="list-group-item">Office: ${data[0].officeNumber}</li>
//                         </ul>
//                     </div>
//                 </article>`

//             if (data[1] === Engineer) {
//                 for (i=0; i<data[1].length; i++) {
//                   userSite +=  `<article class="card col-md-4 mb-3">
//                     <div class="card" style="width: 18rem;">
//                         <div class="card-header">
//                         <h2 class="card-title">${data[1].getName()}</h2>
//                         <h3 class="card-title">Engineer</h3>
//                         </div>
//                         <ul class="list-group list-group-flush">
//                         <li class="list-group-item">ID: ${data[1].getID()}</li>
//                         <li class="list-group-item">Email: ${data[i].getEmail()}</li>
//                         <li class="list-group-item">GitHub: ${data[1].getGitHub()}</li>
//                         </ul>
//                     </div>
//                 </article>`
//                 };
//             };

//             if (data[2] === Intern) {
//                 for (i=0; i<data[2].length; i++) {
//                   userSite +=  `<article class="card col-md-4 mb-3">
//                     <div class="card" style="width: 18rem;">
//                         <div class="card-header">
//                         <h2 class="card-title">${data[2].getName()}</h2>
//                         <h3 class="card-title">Intern</h3>
//                         </div>
//                         <ul class="list-group list-group-flush">
//                         <li class="list-group-item">ID: ${data[2].getID()}</li>
//                         <li class="list-group-item">Email: ${data[2].getEmail()}</li>
//                         <li class="list-group-item">GitHub: ${data[2].getSchool()}</li>
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

module.exports = createSite;

// cardsArray => {
//     `<html lang="en">
//         <head>
//         <meta charset="utf-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
//         <link rel="stylesheet" href="./assets/style.css">
//         <title>My Team</title>
//         </head>
            
//         <body>
//             <header class="container-fluid text-center p-5">
//                 <h1>My Team</h1>
//             </header>
            
//             <main class="container text-center p-3">
//                 <section class="row">
//                     ${generateCards(cardsArray)}
//                 </section>    
            
//             </main>
                        
//         </body>
//     </html>`
// };