function createSite(data) {
     let userSite =  
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
        
                <article class="card col-md-4 mb-3">
                    <div class="card" style="width: 18rem;">
                        <div class="card-header">
                        <h2 class="card-title">${data.Manager.id}</h2>
                        <h3 class="card-title">Manager</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${data.Manager.id}</li>
                        <li class="list-group-item">Email: ${data.Manager.email}</li>
                        <li class="list-group-item">Office: ${data.Manager.officeNumber}</li>
                        </ul>
                    </div>
                </article>`

            if (engineers) {
                for (i=0; i<engineers.length; i++) {
                  userSite +=  `<article class="card col-md-4 mb-3">
                    <div class="card" style="width: 18rem;">
                        <div class="card-header">
                        <h2 class="card-title">${answers.Engineer.name}</h2>
                        <h3 class="card-title">Engineer</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers.Engineer.id}</li>
                        <li class="list-group-item">Email: ${answers.Engineer.email}</li>
                        <li class="list-group-item">GitHub: ${answers.Engineer.gitHub}</li>
                        </ul>
                    </div>
                </article>`
                };
            };

            if (interns) {
                for (i=0; i<interns.length; i++) {
                  userSite +=  `<article class="card col-md-4 mb-3">
                    <div class="card" style="width: 18rem;">
                        <div class="card-header">
                        <h2 class="card-title">${answers.Intern.name}</h2>
                        <h3 class="card-title">Intern</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers.Intern.id}</li>
                        <li class="list-group-item">Email: ${answers.Intern.email}</li>
                        <li class="list-group-item">GitHub: ${answers.Intern.school}</li>
                        </ul>
                    </div>
                </article>`
                };
            };
                
        userSite +=
            `</section>    
            
            </main>
        
        </body>
        </html>
        `
    };

module.exports = createSite;