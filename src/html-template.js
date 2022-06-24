
const renderTeam = teamMemberArr => {
    
    const generateManagerCard = manager => {
        return `
        <div class="card shadow mb-5 ml-1 bg-white rounded" style="width: 18rem;"> 
        <div class="card-header bg-primary text-light">
            ${manager.name}
          </div>
        <ul class="list-group p-4 ">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
          <a href="mailto:${manager.email}"><li class="list-group-item">Email: ${manager.email}</li></a>
        </ul>
    </div>
        `
    }

    const generateEngineerCard = engineer => {
        return `
        <div class="card shadow mb-5 ml-1 bg-white rounded" style="width: 18rem;"> 
        <div class="card-header bg-primary text-light">
            ${engineer.name}
          </div>
        <ul class="list-group p-4 ">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <a href="${engineer.github}"><li class="list-group-item">Github: ${engineer.github}</li></a>
          <a href="mailto:${engineer.email}"><li class="list-group-item">Email: ${engineer.email}</li></a>
        </ul>
    </div>
        `
    }

    const generateInternCard = intern => {
        return `
        <div class="card shadow mb-5 ml-1 bg-white rounded" style="width: 18rem;"> 
        <div class="card-header bg-primary text-light">
            ${intern.name}
          </div>
        <ul class="list-group p-4 ">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">School: ${intern.school}</li>
          <a href="mailto:${intern.email}"><li class="list-group-item">Email: ${intern.email}</li></a>
        </ul>
    </div>
        `
    }


    const html = []

html.push(teamMemberArr
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManagerCard(manager))
    )

html.push(teamMemberArr
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineerCard(engineer))
    )
html.push(teamMemberArr
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateInternCard(intern))
)


 return html.join("")
}


module.exports = renderTeam;



// module.exports = teamHtml => {
  //  return 
 //}
