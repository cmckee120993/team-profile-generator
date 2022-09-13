const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

function createSite(data) {
  const generateManager = (manager) => {
    return `<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
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
                            <h2 class="card-title">${manager.getName()}</h2>
                            <h3 class="card-title">${manager.getRole()}</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${manager.getID()}</li>
                            <li class="list-group-item">Email:<a href="maialto:${manager.getEmail()}"> ${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div> 
                </article>`;
  };

  const generateEngineer = (engineer) => {
    return `<article class="card col-md-4 mb-3">
                    <div class="card" style="width: 18rem;">
                         <div class="card-header">
                            <h2 class="card-title">${engineer.getName()}</h2>
                            <h3 class="card-title">${engineer.getRole()}</h3>
                        </div>
                       <ul class="list-group list-group-flush">
                           <li class="list-group-item">ID: ${engineer.getID()}</li>
                            <li class="list-group-item">Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                           <li class="list-group-item">GitHub: <a href="github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </article>`;
  };

  const generateIntern = (intern) => {
    return `<article class="card col-md-4 mb-3">
                     <div class="card" style="width: 18rem;">
                        <div class="card-header">
                            <h2 class="card-title">${intern.getName()}</h2>
                            <h3 class="card-title">${intern.getRole()}</h3>
                         </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${intern.getID()}</li>
                            <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </article>`;
  };

  const endHTML = `   </section>

  </main>

</body>
</html>`

  const html = [];

  html.push(
    data
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
      .join("")
  );
  html.push(
    data
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    data
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );
  html.push(endHTML);

  return html.join('');
}

module.exports = createSite;

