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
                name: 'email',
                message: "What is the manager's email?"
            },
            {
                type: 'input',
                name: 'officeNum',
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
                    createIntern();
                    break;
                default:
                    buildTeam();
                    break;
            }
        })
    }
    //grabs user input for Engineer info
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
                name: 'email',
                message: "What is the engineer's email?"
            },

            {
                type: 'input',
                name: 'github',
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
 // prompts the user to put in input for the intern employee's information
    function createIntern (){
        inquirer
        .prompt (
            [{
                type: 'input',
                name: 'id',
                message: "What is the inters's id?",

            },
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",

            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school name?",

            },
            ]
        )
        .then(answers => {
            const intern = new Intern(
                answers.id,
                answers.name,
                answers.email,
                answers.school,
            );
            teamMemberObjArr.push(intern)
            addEmployees()
        })

    }


 function buildTeam (){
    fs.writeFile('./dist/index.html', renderTeam(teamMemberArr), "utf-8")
 }




 createManager()
};

init();