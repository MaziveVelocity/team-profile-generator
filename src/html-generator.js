function generateCard(data){
    return `<!-- Start of card -->
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center" id="main">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="card-title-con">
                    <h5 class="card-title">Employee name</h5>
                    <h5 class="card-subtitle mb-2"><i class="fas fa-user"></i> Role and icon</h5>
                </div>
                <!-- Employee info -->
                <div class="card-info">
                    <div class="info-con">
                        <h6>ID: 320</h6>
                    </div>
                    <div class="info-con">
                        <h6>Email: <a href="mailto:myemail@email.com">myemail@email.com</a></h6>
                    </div>
                    <div class="info-con">
                        <h6>additional info</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end of card -->`
}

module.exports = obj => {

    
    return `<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
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
            <div class="row d-flex justify-content-center">
            <!-- Container that holds the cards-->
            ${generateCard()}
            </div>
        </div>
    </body>
    <script src="./page.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"></script>
    
    </html>`
}