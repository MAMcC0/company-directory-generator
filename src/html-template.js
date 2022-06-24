const makeTeam = team => {
    
    const generateManagerCard = manager => {
        return `
        <div class="card shadow mb-5 bg-white rounded" style="width: 18rem;"> 
        <div class="card-header">
            ${manager.name}
          </div>
        <ul class="list-group p-4 ">
          <li class="list-group-item">${manager.id}</li>
          <li class="list-group-item">${manager.officeNumber}</li>
          <a href="mailto:${manager.email}"><li class="list-group-item">${manager.email}</li></a>
        </ul>
    </div>
        `
    }

    const generateEngineerCard = engineer => {
        return `
        <div class="card shadow mb-5 bg-white rounded" style="width: 18rem;"> 
        <div class="card-header">
            ${engineer.name}
          </div>
        <ul class="list-group p-4 ">
          <li class="list-group-item">${engineer.id}</li>
          <a href="${engineer.github}"><li class="list-group-item">${engineer.github}</li></a>
          <a href="mailto:${engineer.email}"><li class="list-group-item">${engineer.email}</li></a>
        </ul>
    </div>
        `
    }

    const generateInternCard = intern => {
        return `
        <div class="card shadow mb-5 bg-white rounded" style="width: 18rem;"> 
        <div class="card-header">
            ${intern.name}
          </div>
        <ul class="list-group p-4 ">
          <li class="list-group-item">${intern.id}</li>
          <li class="list-group-item">${intern.school}</li>
          <a href="mailto:${intern.email}"><li class="list-group-item">${intern.email}</li></a>
        </ul>
    </div>
        `
    }






    const html = []

html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManagerCard(manager))
    )

html.push(team 
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineerCard(engineer))
    )
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateInternCard(intern))
)


 return html.join("")
}
 module.exports = teamHtml => {
    return ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>   
    ${makeTeam(team)}
    </html>   
    `
 }
