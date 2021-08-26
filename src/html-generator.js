const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function generateCard(arry){
    var cards = []
    for(var i = 0; i < arry.length; i++){
        if(arry[i] instanceof Manager){
            cards.push(`<!-- Start of card -->
            <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center" id="main">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <div class="card-title-con">
                            <h5 class="card-title">${arry[i].getName()}</h5>
                            <h5 class="card-subtitle mb-2"><i class="fas fa-user-tie"></i> ${arry[i].getRole()}</h5>
                        </div>
                        <!-- Employee info -->
                        <div class="card-info">
                            <div class="info-con">
                                <h6>ID: ${arry[i].getId()}</h6>
                            </div>
                            <div class="info-con">
                                <h6>Email: <a href="mailto:${arry[i].getEmail()}">${arry[i].getEmail()}</a></h6>
                            </div>
                            <div class="info-con">
                                <h6>Office Number: ${arry[i].getOfficeNum()}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of card -->`);
        }else if(arry[i] instanceof Intern){
            cards.push(`<!-- Start of card -->
            <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center" id="main">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <div class="card-title-con">
                            <h5 class="card-title">${arry[i].getName()}</h5>
                            <h5 class="card-subtitle mb-2"><i class="fas fa-user-graduate"></i> ${arry[i].getRole()}</h5>
                        </div>
                        <!-- Employee info -->
                        <div class="card-info">
                            <div class="info-con">
                                <h6>ID: ${arry[i].getId()}</h6>
                            </div>
                            <div class="info-con">
                                <h6>Email: <a href="mailto:${arry[i].getEmail()}">${arry[i].getEmail()}</a></h6>
                            </div>
                            <div class="info-con">
                                <h6>School Name: ${arry[i].getSchool()}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of card -->`);
        }else if(arry[i] instanceof Engineer){
            cards.push(`<!-- Start of card -->
            <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center" id="main">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <div class="card-title-con">
                            <h5 class="card-title">${arry[i].getName()}</h5>
                            <h5 class="card-subtitle mb-2"><i class="fas fa-user"></i> ${arry[i].getRole()}</h5>
                        </div>
                        <!-- Employee info -->
                        <div class="card-info">
                            <div class="info-con">
                                <h6>ID: ${arry[i].getId()}</h6>
                            </div>
                            <div class="info-con">
                                <h6>Email: <a href="mailto:${arry[i].getEmail()}">${arry[i].getEmail()}</a></h6>
                            </div>
                            <div class="info-con">
                                <h6>Github: <a href="https://github.com/${arry[i].getGithub()}">${arry[i].getGithub()}</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of card -->`);
        }
    }
    return cards.join(`
    `);
}

module.exports = arry => {

    return `<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>Employee Roster</title>
    </head>
    <body>
        <div class=".container">
            <header class="row">
                <div class="col-12">
                    <h1>My Team</h1>
                </div>
            </header>
            <div id="main" class="row d-flex justify-content-center">
            <!-- Container that holds the cards-->
            ${generateCard(arry)}
            </div>
        </div>
    </body>
    <script src="./page.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"></script>
    
    </html>`
}