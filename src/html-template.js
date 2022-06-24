const makeTeam = team => {
    
    const generateManagerCard = manager => {
        return `
        
        //get card from bootstrap
        
        `
    }
const html = []

html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManagerCard(manager))
    )

 return html.join("")

 module.exports = team => {
    return `
    
    
    
    
    pass in ${makeTeam(team)}
    
    `
 }
}