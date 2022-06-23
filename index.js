///info for questions
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/manager");
const renderTeam = require('./src/html-template');

const teamMemberArr = [];

const init = () => {
    ///calls create Manager first to start team construction
    const createManager = () => {
        inquirer
        .prompt (
            [{
                type: 'input',
                name: 'id',
                message: "What is the manager's id?",

            },
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",

            },

            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's Office Number?",

            },
            ]
        )
        .then(answers => {
            const manager = new Manager(
                answers.id,
                answers.name,
                answers.email,
                answers.officeNumber,
            );
            teamMemberObjArr.push(manager)
            addEmployees()
        })
    };



   /// prompts user what they want to add to directory next  
    function addEmployees (){
        inquirer
        .prompt(
            [
                {
                    type: 'list',
                    name: 'choice',
                    message: "What employees would you like to add?",
                    choices: ["Engineer", "Intern", "I'm Done"],
    
                },
            ]
            )

        .then(answer => {
            switch(answer.choice){
                case 'Engineer':
                    createEngineer();
                    break;
                case 'Intern':
                    creatIntern();
                    break;
                default:
                    buildTeam();
                    break;
            }
        })
    }
    
    function createEngineer (){
        inquirer
        .prompt (
            [{
                type: 'input',
                name: 'id',
                message: "What is the engineer's id?",

            },
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",

            },

            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the engineer's Github?",

            },
            ]
        )
        .then(answers => {
            const engineer = new Engineer(
                answers.id,
                answers.name,
                answers.email,
                answers.github,
            );
            teamMemberObjArr.push(engineer)
            addEmployees()
        })

    }

 function buildTeam (){
    fs.writeFile('./dist/index.html', renderTeam(teamMemberArr), "utf-8")
 }




 createManager()
};