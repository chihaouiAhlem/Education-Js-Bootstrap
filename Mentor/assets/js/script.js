function signup() {
    var firstName = document.getElementById("firstNameS").value;
    var lastName = document.getElementById("lastNameS").value;
    var tel = document.getElementById("telS").value;
    var email = document.getElementById("emailS").value;
    var password = document.getElementById("passwordS").value;
    var confirmPassword = document.getElementById("confirmPasswordS").value;
    var adress = document.getElementById("AdressS").value;
    var city = document.getElementById("studentCity").value;
    var cin = document.getElementById("cinS").value;
    var isCinValid = checklengthCin(cin, 8);
    messageError(isCinValid, "cinSError", "your CIN  length should be 8  ");
    var isadressValid = checklength(adress, 3, 20);
    messageError(isadressValid, "adressSErrorS", "your Adresse length should be between  4 and 20  ");
    var isFirstNameValid = checklength(firstName, 2, 15);
    messageError(isFirstNameValid, "fNameErrorS", "your first name length should be between 3 and 15 ");
    var isLastNameValid = checklength(lastName, 2, 15);
    messageError(isLastNameValid, "lNameErrorS", "your last name length should be between 3 and 15 ");
    var isTelValid = checklength(tel, 7, 20);
    messageError(isTelValid, "telErrorS", "tel Number length between 8 and 15 numbers");
    var ispasswordValid = checklength(password, 5, 15);
    messageError(ispasswordValid, "passwordErrorS", "your password length should be between 6 and 15");
    var isConfpasswordValid = checklength(confirmPassword, 5, 15);
    messageError(isConfpasswordValid, "confPassErrorss", "your password length should be between 6 and 15");
    var isPwdValid = isEquals(password, confirmPassword);
    //alert(varisEmailValidate);
    messageError(isPwdValid, "confPassErrors", "Retype password");
    //  messageError(isPwdValid, "passwordError", "Retype password");
    // var uniqueEmail = uniqueEmail(email);
    var isEmailValidate = validates(email);
    messageError(isEmailValidate, "emailErrorS", " invalid User name");
    messageError(uniqueEmail, "emailErrorS", "!!");
    // var x = uniqueEmail(email);
    var x = email + "@student.org";
    //  alert(x);
    ////////////////////crear objet user :entite qui a des attributs,des valeurs et des 
    if (isFirstNameValid && uniqueEmail(x) == false && isLastNameValid && isTelValid && ispasswordValid && isPwdValid && isConfpasswordValid && isEmailValidate && isCinValid && isadressValid && city && isEmailValidate) {
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        // var emailExiste = emailExiste(email, usersTab);
        var user = {
            role: "student",
            status: "notOk",
            id: generateId(usersTab) + 1,
            firstName: firstName,
            lastName: lastName,
            tel: tel,
            email: x,
            password: password,
            confirmerPassword: confirmPassword,
            city: city,
            adress: adress,
            cin: cin,
            idFormation: ''
        };
        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        // location.replace("index.html");
        document.getElementById("errorsStudentsLog").innerHTML = "your request will be processed, please wait for confirmation";
        document.getElementById("errorsStudentsLog").style.color = "Green";
    } else {
        // location.replace("index.html");
        document.getElementById("errorsStudentsLog").innerHTML = "error!! , check the fields or you are already registered ";
        document.getElementById("errorsStudentsLog").style.color = "orange";
    }
}
////signupProfesseur
function signupPro() {
    //recuperer tous les valeurs du signup :get impmut value
    var firstName = document.getElementById("firstNameP").value;
    var lastName = document.getElementById("lastNameP").value;
    var tel = document.getElementById("telP").value;
    var email = document.getElementById("emailP").value;
    var password = document.getElementById("passwordP").value;
    var confirmPassword = document.getElementById("confirmPasswordP").value;
    var adress = document.getElementById("AdressP").value;
    var speciality = document.getElementById("specailityProf").value;
    var experiences = document.getElementById("experP").value;
    var isExpValid = checklength(experiences, 1, 2);
    messageError(isExpValid, "experPError", "error   ");
    var isadressValid = checklength(adress, 4, 20);
    messageError(isadressValid, "adressPError", "your Adresse length should be between  8 and 20  ");
    /////////////////////
    var isFirstNameValid = checklength(firstName, 3, 15);
    messageError(isFirstNameValid, "fNameErrorP", "your first name length should be between 3 and 15 ");
    var isLastNameValid = checklength(lastName, 3, 15);
    messageError(isLastNameValid, "lNameErrorP", "your last name length should be between 3 and 15 ");
    var isTelValid = checklength(tel, 8, 20);
    messageError(isTelValid, "telErrorP", "tel Number length between 8 and 15 numbers");
    var ispasswordValid = checklength(password, 8, 15);
    messageError(ispasswordValid, "passwordErrorP", "your password length should be between 8 and 15");
    var isConfpasswordValid = checklength(confirmPassword, 8, 15);
    messageError(isConfpasswordValid, "confPassErrorsP", "your password length should be between 8 and 15");
    var isPwdValid = isEquals(password, confirmPassword);
    //alert(varisEmailValidate);
    messageError(isPwdValid, "confPassErrorsPp", "Retype password");
    //  messageError(isPwdValid, "passwordError", "Retype password");
    var isEmailValidate = validates(email);
    messageError(isEmailValidate, "emailErrorP", " invalid User name");
    var x = email + "@professeur.org";
    ////////////////////crear objet user :entite qui a des attributs,des valeurs et des 
    if (isFirstNameValid && isLastNameValid && uniqueEmail(x) == false && isTelValid && ispasswordValid && isPwdValid && isConfpasswordValid && isEmailValidate && experiences && isadressValid && speciality) {
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        // var emailExiste = emailExiste(email, usersTab);
        var user = {
            role: "professeur",
            status: "notOk",
            id: generateId(usersTab) + 1,
            firstName: firstName,
            lastName: lastName,
            tel: tel,
            email: x,
            password: password,
            confirmerPassword: confirmPassword,
            speciality: speciality,
            adress: adress,
            experiences: experiences,
            idFormation: ''
        };

        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        //location.replace("index.html");
        document.getElementById("errorPLog").innerHTML = "your request will be processed, please wait for confirmation";
        document.getElementById("errorPLog").style.color = "Green";
    } else {
        document.getElementById("errorPLog").innerHTML = "Error ";
        document.getElementById("errorPLog").style.color = "red";
    }
}
///////admin
function signUpAdmin() {
    var firstName = document.getElementById("fNameA").value;
    var lastName = document.getElementById("lastNameA").value;
    // var tel = document.getElementById("telS").value;
    var email = document.getElementById("emailA").value;
    var password = document.getElementById("passAdmin").value;
    var isFirstNameValid = checklength(firstName, 2, 20);
    messageError(isFirstNameValid, "fNameAError", "your first name length should be between 3 and 20 ");
    var isLastNameValid = checklength(lastName, 2, 20);
    messageError(isLastNameValid, "lastNameAError", "your last name length should be between 3 and 20 ");
    // var isTelValid = checklength(tel, 8, 20);
    //  messageError(isTelValid, "telErrorS", "tel Number length between 8 and 15 numbers");
    var ispasswordValid = checklength(password, 7, 15);
    messageError(ispasswordValid, "passAdminError", "your password length should be between 8 and 15");
    var isEmailValidate = checklength(email, 4, 25);
    messageError(isEmailValidate, "emailAError", " invalid User name");
    ////////////////////crear objet user :entite qui a des attributs,des valeurs et des 
    var x = email + "@admin.org";

    if (isFirstNameValid && isLastNameValid && uniqueEmail(x) == false && ispasswordValid && isEmailValidate) {
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        var user = {
            role: "admin",
            id: generateId(usersTab) + 1,
            firstName: firstName,
            lastName: lastName,
            email: email + "@admin.org",
            password: password
        };

        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        //location.replace("../Mentor/index.html");
        document.getElementById("errorAdminRequest").innerHTML = "successfully registred";
        document.getElementById("errorAdminRequest").style.color = "Green";
    } else {
        document.getElementById("errorAdminRequest").innerHTML = "Error";
        document.getElementById("errorAdminRequest").style.color = "Red";

    }
}
////on va crier une fct pour l ajout des formations par le prof
function addTraining() {
    // Get inputs value
    var trName = document.getElementById("NameOfTrainingProf").value;
    var istrNameValid = checklength(trName, 3, 30);
    messageError(istrNameValid, "NameOfTrainingProfError", "Check training Name ");
    var TrNbHours = document.getElementById("hoursTrinP").value;
    var isNbHoursValid = checkNumberValue(TrNbHours, 1, 200);
    messageError(isNbHoursValid, "hoursTrinPError", "check training number of hours");
    var trNbPlaces = document.getElementById("placesTrainP").value;
    var istrNbPlacesValid = checkNumberValue(trNbPlaces, 1, 100);
    messageError(istrNbPlacesValid, "placesTrainPError", "Check places between 2 and 100  ");
    var trPrice = document.getElementById("priceTraininP").value;
    var ispriceValid = checkNumberValue(trPrice, 10, 5000000);
    messageError(ispriceValid, "priceTraininPError", "Check price between 10 and 5000000 (Dt) ");
    var trInfo = document.getElementById("informationsTrainP").value;
    var isInfoValid = checklength(trInfo, 30, 90000000000000);
    messageError(isInfoValid, "informationsTrainPError", "ADD more Informations ");
    var trDate = document.getElementById("startDateTP").value;
    var isDateValid = checklength(trDate, 1, 300000000);
    messageError(isDateValid, "startDateTPError", "chek date ");
    var y = new Date(trDate);
    var today = new Date();
    if (today > y) {
        document.getElementById("startDateTPErrordate").innerHTML = "you can 't";
        document.getElementById("startDateTPErrordate").style.color = "red";

    } else {
        document.getElementById("startDateTPErrordate").innerHTML = "";
    }

    if (istrNameValid && isNbHoursValid == true && today < y && istrNbPlacesValid == true && ispriceValid && isInfoValid && isDateValid) {
        var connectedUserId = localStorage.getItem("connectedUserId");
        var trTab = getObjectsFromLS("trainings");
        // Create JSON Object
        var training = {
            id: generateId(trTab) + 1,
            trName: trName,
            TrNbHours: TrNbHours,
            trNbPlaces: trNbPlaces,
            trPrice: trPrice,
            trDate: trDate,
            trInfo: trInfo,
            idProf: connectedUserId,
        };


        trTab.push(training);

        localStorage.setItem("trainings", JSON.stringify(trTab));
        location.reload();
    }
}
//////id///////////////
function generateId(t) {
    var max;
    if (t.length == 0) {
        max = 0;
    } else {
        // var max;
        for (let i = 0; i < t.length; i++) {
            max = t[0].id;
            if (t[i].id > max) {

                max = t[i].id;
            }
        }

    }
    return max;

}
///verifier email
function uniqueEmail(email) {
    var allUsers = JSON.parse(localStorage.getItem("users") || "[]");
    var userExist = false;
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email === email) {
            userExist = true;
            break;
        }
    }
    return userExist;
}
/////////////////////message d erreur
function checklength(ch, nbr, nb2) {
    return (ch.length > Number(nbr) && ch.length < Number(nb2));
}

function checklengthCin(ch, nbr) {

    return (ch.length == nbr);
}

function checkNumbeer(val, nbr) {

    return (Number(val > nbr));
}
///////////valider tel
function checktel(tel, nbr) {

    return (tel.length = nbr);
}

function isEquals(ch1, ch2) {
    return ch1 === ch2;
}
///////////////////
///////////////////////////validation des imput
function messageError(a, b, c) {

    if (a == false) {
        // document.getElementById(b).innerHTML = c;
        document.getElementById(b).innerHTML = c;
        document.getElementById(b).style.color = "red";


    } else {
        document.getElementById(b).innerHTML = "";
    }
}

function validCyty(params) {
    return (params.length != 0)
}

function validates(emaill) {
    var r = typeof(emaill);
    // alert(r);
    var x = emaill.length;
    // alert(x);
    return (3 < x < 20 && r == 'string');
}
//
function countryselect(ucountry) {
    return (ucountry.value == "Default");
}
/////login
// Function Login that checks if user exists by email and pwd
function login() {
    var email = document.getElementById("loginUserName").value;
    var password = document.getElementById("loginPass").value;
    var usersTab = JSON.parse(localStorage.getItem("users"));
    var findedUser;
    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].email == email && usersTab[i].password == password) {
            findedUser = usersTab[i];
            break;
        }
    }
    if (findedUser) {
        if (findedUser.role == "student") {
            if (findedUser.status == "notOk") {
                document.getElementById("loginError").innerHTML =
                    "Account Not Verified";
                document.getElementById("loginError").style.color = "Green";
            } else if (findedUser.status != "notOk") {
                localStorage.setItem("connectedUserId", findedUser.id);
                localStorage.setItem("connectedUserRole", findedUser.role);
                location.replace("index.html");
            }
        } else if (findedUser.role == "professeur") {
            if (findedUser.status == "notOk") {
                document.getElementById("loginError").innerHTML =
                    "Account Not Verified";
                document.getElementById("loginError").style.color = "Green";
            } else if (findedUser.status != "notOk") {

                location.replace("../NiceAdmin/users-profile.html");

                localStorage.setItem("connectedUserId", findedUser.id);
                localStorage.setItem("connectedUserRole", findedUser.role);
            }
        } else if (findedUser.role == "admin") {
            localStorage.setItem("connectedUserId", findedUser.id);
            localStorage.setItem("connectedUserRole", findedUser.role);
            location.replace("../NiceAdmin/index.html");
        }
    } else {
        document.getElementById("loginError").innerHTML = "Please check Email/pwd";
        document.getElementById("loginError").style.color = "red";
    }
}
//////
function logout() {
    localStorage.removeItem("connectedUserId");
    localStorage.removeItem("connectedUserRole");
    location.replace("../Mentor/index.html");
}

function logoutS() {
    localStorage.removeItem("connectedUserId");
    localStorage.removeItem("connectedUserRole");
    location.replace("index.html");
}
/////
function displayAdminDetails() {
    var userstab = JSON.parse(localStorage.getItem("users"));
    var connectedUserId = JSON.parse(localStorage.getItem("connectedUserId")); //retourne id
    var findUser;
    for (var i = 0; i < userstab.length; i++) {
        if (connectedUserId == userstab[i].id) {
            findUser = userstab[i];
            break; //ki nal9ah no5rej
        }
    }
    document.getElementById("firstNameAdminProfil").innerHTML = findUser.firstName;
    document.getElementById("userNameAdmin2").innerHTML = findUser.firstName;

    document.getElementById("lastNameAdminProfil").innerHTML = findUser.lastName;
    document.getElementById("jobAdmin").innerHTML = findUser.role;
    //document.getElementById("jobNotif").innerHTML = findUser.role;
    document.getElementById("userNameAdminProfil").innerHTML = findUser.email;
    //  document.getElementById("passwordAdminProfil").innerHTML = findUser.password;
    // document.getElementById("userNameAdmin").innerHTML = findUser.firstName;
}
///// fonction editer le profil admin on va chercher idconnecteduser dans users puis on va recuupperer les donnees
function changePassword() {
    var userstab = JSON.parse(localStorage.getItem("users"));
    var connectedUserId = JSON.parse(localStorage.getItem("connectedUserId")); //retourne id
    var findUser;
    for (var i = 0; i < userstab.length; i++) {
        if (connectedUserId == userstab[i].id) {
            findUser = userstab[i];
            break; //ki nal9ah no5rej
        }
    }
    var oldPass = findUser.password;
    var oldPassForVerif = document.getElementById("currentPasswordA").value;
    var newPass = document.getElementById("newPasswordA").value;
    var renew = document.getElementById("renewPasswordA").value;
    //////
    var isPwdValid = isEquals(oldPass, oldPassForVerif);
    messageError(isPwdValid, "wrongOldPass", "password wrong");

    var ispasswordValid = checklength(newPass, 8, 15);
    messageError(ispasswordValid, "wrongPassNew", "your password length should be between 8 and 15");
    var isConfpasswordValid = checklength(renew, 8, 15);
    messageError(isConfpasswordValid, "confPassErwrongPassReNew", "your password length should be between 8 and 15");
    var isPwdValid = isEquals(newPass, renew);
    //alert(varisEmailValidate);
    messageError(isPwdValid, "confPassErrorsAdmin", "Retype password");

    if (isPwdValid && ispasswordValid && isConfpasswordValid && isPwdValid) {

        findUser.password = newPass;
        document.getElementById("goodPass").innerHTML = "password changed successfully";
        document.getElementById("goodPass").style.color = "green";
    }

    localStorage.setItem("users", JSON.stringify(userstab));

}

function ProfileEditForm() {
    var userstab = JSON.parse(localStorage.getItem("users"));
    var connectedUserId = JSON.parse(localStorage.getItem("connectedUserId")); //retourne id
    var findUser;
    for (var i = 0; i < userstab.length; i++) {
        if (connectedUserId == userstab[i].id) {
            findUser = userstab[i];
            break; //ki nal9ah no5rej
        }
    }

    var content = ` 
    <div class="row mb-3">
        <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
        <div class="col-md-8 col-lg-9">
            <img src="assets/img/profile-img.jpg" alt="Profile">
            <div class="pt-2">
                <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
            </div>
        </div>
    </div>

    <div class="row mb-3">
        <label for="fullName" class="col-md-4 col-lg-3 col-form-label">First Name</label>
        <div class="col-md-8 col-lg-9">
            <input  type="text" class="form-control" id="fNameAdminEdit" value= ${findUser.firstName}>
        </div>
    </div>
    <div class="row mb-3">
        <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Last Name</label>
        <div class="col-md-8 col-lg-9">
            <input name="fullName" type="text" class="form-control" id="lNameAdminEdit" value=${findUser.lastName}>
        </div>
    </div>
    <div class="row mb-3">
        <label for="Job" class="col-md-4 col-lg-3 col-form-label">Status:</label>
        <div class="col-md-8 col-lg-9">
            <input name="job" type="text" class="form-control" id="statusAdminP" disabled value=${findUser.role}>
        </div>
    </div>
    <div class="row mb-3">
        <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
        <div class="col-md-8 col-lg-9">
            <input name="email" type="email" class="form-control" id="Email"  disabled  value=${findUser.email}>
        </div>
    </div>


    <div class="text-center">
        <button type="submit" class="btn btn-primary" onclick="validateEditAdmin(${findUser.id})">Save Changes</button>
    </div>
`;

    document.getElementById("profileEditAdmin").innerHTML = content;

}
///////
function searchObjectByIdAndKey(x, key) { //meth1
    var t = JSON.parse(localStorage.getItem(key) || "[]");
    var findeObject;
    for (var i = 0; i < t.length; i++) {
        if (t[i].id == x) {
            findeObject = t[i];
            break;
        }
    }
    return findeObject;
}

function validateEditAdmin(id) {
    // Get new values from update product form
    var fNameAdminEdit = document.getElementById("fNameAdminEdit").value;
    var lNameAdminEdit = document.getElementById("lNameAdminEdit").value;
    // Get all products from SL
    var usersTab = getObjectsFromLS("users");
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].id == id) {
            // Upadte values : stock and price
            usersTab[i].firstName = fNameAdminEdit;
            usersTab[i].lastName = lNameAdminEdit;
            break;
        }
    }
    // Set all products into LS
    localStorage.setItem("users", JSON.stringify(usersTab));
    // Refresh Admin Page
    location.reload();
}
////
function getObjectsFromLS(key) {
    return JSON.parse(localStorage.getItem(key) || "[]");
}

function checkNumberValue(val, nbr1, nbr2) {
    return (Number(val) > nbr1 && Number(val) < nbr2);
}

function cancel(params) {
    location.replace("index.html");
}
//// consulter mes formations comme professor 
//////jjibou table ili fih tous les formation w n9aren si idProf howa nafsou  if conn n7ot les valeurs fi tab jdida 
function displayProfTrain() {
    // Get all trainings from LS
    var trainings = getObjectsFromLS("trainings");
    var connectedUserId = localStorage.getItem("connectedUserId");
    var trTab = [];
    for (let i = 0; i < trainings.length; i++) {
        if (trainings[i].idProf == connectedUserId) {
            trTab.push(trainings[i]);
        }
    }
    // trTab = [{}, {}, {}]
    var content = "";
    for (let i = 0; i < trTab.length; i++) {
        content = content + `
        <tr>
        <th scope="row">${i+1}</th>

        <th scope="row">${trTab[i].id}</th>
        <td>${trTab[i].trName}</td>
         <td>${trTab[i].TrNbHours}</td>
         <td>${trTab[i].trNbPlaces}</td>
        <td>
           ${trTab[i].trDate}</td>
       <td>${trTab[i].trPrice}</td>
       <td> <textarea name="about" class="form-control" id="about" style="height: 50px">${trTab[i].trInfo}</textarea>
                               
         </td>
                                        <td>                                     <button class="btn btn-info" onclick="displayStudentPerTrainings(${trTab[i].id})">Studients</button>
                                        </td>


                                      <td>
                                     <button class="btn btn-warning" onclick="updateMyTraining(${trTab[i].id})">Update</button>
                                    <button class="btn btn-danger" onclick="DeleteMyTraining(${trTab[i].id})">Delete</button>
                                    <button class="btn btn-primary" onclick="addTest(${trTab[i].id},${trTab[i].idProf})">AddTest</button>
                                     </td>
          </tr>
          `;



    }
    document.getElementById("trContent").innerHTML = content;
    /////// dlete hazzet l id 5ater manajmouch bl position 
    //  document.getElementById("storeProducts").innerHTML = content;
}
///////display les tests de profd
function displayProfTests() {
    // Get all trainings from LS
    var tests = getObjectsFromLS("tests");
    var connectedUserId = localStorage.getItem("connectedUserId");
    var testTab = [];
    for (let i = 0; i < tests.length; i++) {
        if (tests[i].idProf == connectedUserId) {
            testTab.push(tests[i]);
        }
    }
    // trTab = [{}, {}, {}]
    var content = "";
    for (let i = 0; i < testTab.length; i++) {
        content = content + `
        <tr>
                                            <th scope="row">${i+1}</th>
                                            <td>${testTab[i].testName}</td>
                                            <td>
                                            <button class="btn btn-warning" onclick="updateMyTraining(${testTab[i].id})">Update</button>
                                           <button class="btn btn-danger" onclick="DeleteMyTraining(${testTab[i].id})">Delete</button>
                                           <button class="btn btn-primary" onclick="DisplayTest(${testTab[i].id},${testTab[i].idProf})">Diplay</button>
                                            </td>
                                        </tr>  `;
    }
    document.getElementById("testName").innerHTML = content;
    /////// dlete hazzet l id 5ater manajmouch bl position 
    //  document.getElementById("storeProducts").innerHTML = content;
}
/////Afficher les notes
function displayProfTestsNotes() {
    // Get all trainings from LS
    var tests = getObjectsFromLS("tests");
    var ansowers = getObjectsFromLS("ansowers");
    var connectedUserId = localStorage.getItem("connectedUserId");
    var testTab = [];
    for (let i = 0; i < tests.length; i++) {
        if (tests[i].idProf == connectedUserId) {
            testTab.push(tests[i]);
        }
        // var x=searchObjectByIdAndKey(ansowers)
    }

    // trTab = [{}, {}, {}]
    var content = "";
    for (let i = 0; i < testTab.length; i++) {
        content = content + `
        <tr>
                                            <th scope="row">${i+1}</th>
                                            <td>${testTab[i].testName}</td>
                                            <td>
                                            <button class="btn btn-warning" onclick="ShowNotes(${testTab[i].id})">Notes</button>
                                           
                                            </td>
                                        </tr>
                                        
          `;
    }
    document.getElementById("testNameN").innerHTML = content;
    /////// dlete hazzet l id 5ater manajmouch bl position 
    //  document.getElementById("storeProducts").innerHTML = content;
}

function ShowNotes(idtest) {
    // var x = searchObjectByIdAndKey(idtest, "ansowers");
    var ansowers = getObjectsFromLS("ansowers");
    ans = [];
    for (let i = 0; i < ansowers.length; i++) {
        if (ansowers[i].idTest == idtest) {
            ans.push(ansowers[i]);
        }
    }
    var content = '';
    for (let i = 0; i < ans.length; i++) {
        content = content + `
          <tr>
      <th scope="row">${i+1}</th>
      <td>${searchObjectByIdAndKey(ans[i].userId,"users").firstName}.${searchObjectByIdAndKey(ans[i].userId,"users").lastName}</td>
      <td class="table-warning">${ans[i].note}</td>
      <td  class="table-danger">${ans[i].remarque}</td>
       </tr>
     `;
    }
    document.getElementById("afficheNote").innerHTML = content;
}
//////notes yodhhorli masta3mlthch
function displayStudentPerTrainingsNotes(id) {
    // Get all trainings from LS
    var users = getObjectsFromLS("users");
    var connectedUserId = localStorage.getItem("connectedUserId");
    var reservation = getObjectsFromLS("reservations");
    var r = searchObjectByIdAndKey(id, "reservations").userId;
    var x = searchObjectByIdAndKey(r, "users");
    var fix = '';
    fix = ` <table class="table ">
    <thead>
        <tr >
            <th scope="col">#</th>
            <th scope="col">References</th>
            <th scope="col">f.Name</th>
            <th scope="col">l.Name</th>
            <th scope="col">Points</th>
            <th scope="col">Notes</th>
            <th scope="col">  Reoder</th>

        </tr>
    </thead>
    <tbody id="notes">
    </tbody>
    </table>`;
    document.getElementById("showNotes").innerHTML = fix;
    var content = "";
    for (let i = 0; i < reservation.length; i++) {
        content = content + `
       <tr class="table-success">
        <th scope="row">${i+1}</th>
                               <th scope="row">${x.id}</th>
                              <td >${x.firstName}</td>
                                 <td class="table-success">${x.lastName}</td>
                                 <td class="table-danger">points</td>
                                 <td class="table-warning">
                                 ${searchObjectByIdAndKey()}</td>
                                  </td>
                                   <td> </td>
                                    </tr> `;
    }

    document.getElementById("notes").innerHTML = content;
    /////// dlete hazzet l id 5ater manajmouch bl position 
    //  document.getElementById("storeProducts").innerHTML = content;
}
//////fct qui retourne les students per trainings
function displayStudentPerTrainings(id) {
    // Get all trainings from LS
    var users = getObjectsFromLS("users");
    var connectedUserId = localStorage.getItem("connectedUserId");
    var reservation = getObjectsFromLS("reservations");
    // var r = searchObjectByIdAndKey(id, "reservations").userId;
    // var x = searchObjectByIdAndKey(r, "users");


    v = [];
    for (let i = 0; i < reservation.length; i++) {
        if (id == reservation[i].idTraining) {

            v.push(reservation[i]);
        }

    }
    //  alert(v);
    var fix = `<table class="table " id="">
<thead>
    <tr class="table-light">
        <th scope="col">#</th>

        <th scope="col">References</th>
        <th scope="col">f.Name</th>
        <th scope="col">l.Name</th>

        <th scope="col">email</th>
        <th scope="col">tel</th>
        <th scope="col">adresse</th>
        <th scope="col"></th>
        <th scope="col"></th>
</tr>
</thead>
<tbody id="fixed">
</tbody>

</table>
`;
    document.getElementById("showStudents").innerHTML = fix;
    // trTab = [{}, {}, {}]
    var content = "";
    for (let i = 0; i < v.length; i++) {
        content = content + `
        <tr>
        <th scope="row">${i+1}</th>
                               <th scope="row">${v[i].id}</th>
                              <td>${searchObjectByIdAndKey(v[i].userId,"users").firstName}</td>

                              
                                 <td>${searchObjectByIdAndKey(v[i].userId,"users").lastName}</td>
                                 <td>${searchObjectByIdAndKey(v[i].userId,"users").email}</td>
                                 <td>
                                 ${searchObjectByIdAndKey(v[i].userId,"users").tel}</td>
                                 <td>${searchObjectByIdAndKey(v[i].userId,"users").adress}</td> </td><td>
                                  <button class="btn btn-warning" onclick="Send(${searchObjectByIdAndKey(v[i].userId,"users").id},${id})">Send SMS</button>
                                   </td>
                                    </tr> `;
    }
    document.getElementById("fixed").innerHTML = content;
    /////// dlete hazzet l id 5ater manajmouch bl position 
    //  document.getElementById("storeProducts").innerHTML = content;
}

////// deletemytring : te5eth id en param 
function DeleteMyTraining(x) {
    // position : position de l'objet trouvé par la fonction searchTrainingPositionById
    var position = searchTrainingPositionById(x);
    var trainings = JSON.parse(localStorage.getItem("trainings") || "[]");
    trainings.splice(position, 1);
    localStorage.setItem("trainings", JSON.stringify(trainings));
    location.reload();
}
// Function searchOrderPositionById that returns Order position by ID from Orders
function searchTrainingPositionById(id) {
    var T = JSON.parse(localStorage.getItem("trainings") || "[]");
    var position;
    for (var i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            position = i;
            break;
        }
    }
    return position;
}
/////functionupdateMyTraining
// Function  that displays training form with old values (prof):my trainings
function updateMyTraining(id) {
    var training = searchObjectByIdAndKey(id, "trainings"); //njib les formations lkol ili id mta3hom kima id ili ena nzelt 3lih
    var form = `
    <table class="table datatable">
    <thead>
        <tr>
            <th scope="col">References</th>
            <th scope="col">Name</th>
            <th scope="col">Nbr-Hours</th>
            <th scope="col">Places</th>
            <th scope="col">Start-Date</th>
            <th scope="col">Price</th>
            <th scope="col">Informations</th>
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody >
    <tr>
    <th scope="row"> ${training.id} </th>
    <td> <input type="text" class="form-control"value=${training.trName}  id="NameOfTrainingProfEdit"> <span id="NameOfTrainingProfErrorEdit"></span>
    </td>
                        <td> <input type="Number" class="form-control"  value=${training.TrNbHours}  id="hoursTrinPEdit"><span id="hoursTrinPErrorEdit"></span>
                          </td>
                             <td> <input type="Number" class="form-control" value=${training.trNbPlaces} id="placesTrainPEdit"><span id="placesTrainPErrorEdit"></span>
                             </td>
                             <td> <input type="Date" class="form-control" value=${training.trDate}   id="startDateTPEdit"><span id="startDateTPErrorEdit"></span>
                             </td>
                             <td> <input type="Number" class="form-control" value=${training.trPrice}   id="priceTraininPEdit"><span id="priceTraininPErrorEdit" NameOfTrainingProfEditError"></span>
                             </td>
                             <td>  <textarea name="about" class="form-control" id="informationsTrainPEdit" style="height: 50px" value=${training.trInfo} >${training.trInfo}</textarea><span id="informationsTrainPErrorEdit"></span>
                             </td>
                                                           <td>
                           
                                    </td>
                                  <td>
                                 <button class="btn btn-warning" onclick="ValidateEditTrain(${training.id})">Edit</button>
                                                                 </td>
                                 <td>               <button class="btn btn-danger" onclick="cancel()">Cancel</button>
                                 </td>
                                 
      </tr>
    </tbody>
    <script>
        displayProfTrain();
    </script>
</table> `;
    document.getElementById("editTrForm").innerHTML = form;
}
// Function validat and updates  with new values
function ValidateEditTrain(x) {
    // Get new values from update train form
    var trName = document.getElementById("NameOfTrainingProfEdit").value;
    var istrNameValid = checklength(trName, 3, 30);
    messageError(istrNameValid, "NameOfTrainingProfErrorEdit", "Check training Name ");
    var TrNbHours = document.getElementById("hoursTrinPEdit").value;
    var isNbHoursValid = checkNumberValue(TrNbHours, 1, 200);
    messageError(isNbHoursValid, "hoursTrinPErrorEdit", "check training number of hours");
    var trNbPlaces = document.getElementById("placesTrainPEdit").value;
    var istrNbPlacesValid = checkNumberValue(trNbPlaces, 5, 20);
    messageError(istrNbPlacesValid, "placesTrainPErrorEdit", "Check places between 2 and 20  ");
    var trPrice = document.getElementById("priceTraininPEdit").value;
    var ispriceValid = checkNumberValue(trPrice, 10, 5000000);
    messageError(ispriceValid, "priceTraininPErrorEdit", "Check price between 10 and 5000000 (Dt) ");
    var trInfo = document.getElementById("informationsTrainPEdit").value;
    var isInfoValid = checklength(trInfo, 30, 90000000000000);
    messageError(isInfoValid, "informationsTrainPErrorEdit", "ADD more Informations ");
    var trDate = document.getElementById("startDateTPEdit").value;
    var isDateValid = checklength(trDate, 1, 30);
    messageError(isDateValid, "startDateTPErrorEdit", "chek date ");
    var y = new Date(trDate);
    var today = new Date();
    if (today > y) {
        document.getElementById("startDateTPErrordateEdit").innerHTML = "you can 't";
        document.getElementById("startDateTPErrordateEdit").style.color = "red";
    } else {
        document.getElementById("startDateTPErrorEdit").innerHTML = "";
    }
    if (istrNameValid == true && isNbHoursValid == true && istrNbPlacesValid == true && ispriceValid && isInfoValid && isDateValid) {
        // Get all train from SL
        var trainingsTab = getObjectsFromLS("trainings");
        for (let i = 0; i < trainingsTab.length; i++) {
            if (trainingsTab[i].id == x) {
                // Upadte values :new values
                trainingsTab[i].trName = trName;
                trainingsTab[i].TrNbHours = TrNbHours;
                trainingsTab[i].trNbPlaces = trNbPlaces;
                trainingsTab[i].trDate = trDate;
                trainingsTab[i].trPrice = trPrice;
                trainingsTab[i].trInfo = trInfo;
                break;
            }
        }
        // Set all trainings into LS
        localStorage.setItem("trainings", JSON.stringify(trainingsTab));
        // Refresh  Page
        location.reload();
    }

}
////////////////FCT aafficher tous les students pour l admin for accepter ou  refuser fct1)  tjib tous les students 2////tbadel status mta3 students 
function displayAllStudents() {
    var userstab = JSON.parse(localStorage.getItem("users") || "[]"); // variable sabbit fiha tous le contenu de orders
    //productstab=[{id,prname,...},{}...]
    var content = '';
    var x = '';
    for (let i = 0; i < userstab.length; i++) {
        if (userstab[i].role == "student") {
            if (userstab[i].status == "notOk") {
                x =
                    `<div class="form-check">
                    <td>   <button onclick="updatestatusStudent(${userstab[i].id})" class="btn btn-warning" >update</button> </td><td> <buttononclick="deleateStudent(${i})" class="btn btn-danger">delete</button></td>
          </div>
          `
            } else {
                x =
                    `<div class="form-check">
                 <td>   <span class="badge bg-success">accepted</span></td><td> <button onclick="deleateStudent(${i})" class="btn btn-danger">delete</button></td>
          </div>
          `
            }

            content = content + ` 
        <tr>
      
        <td>
            <p>${userstab[i].id}</p>
        </td>
        <td>
            <h5>${userstab[i].firstName}</h5>
        </td>
        <td>
            <h5>${userstab[i].lastName}</h5>
        </td>
        <td>
            <p>${userstab[i].adress}</p>
        </td>
        <td>
            <p>${userstab[i].email}</p>
        </td>
        <td>
            <p>${userstab[i].cin}</p>
        </td>
        <td>
        <p>${userstab[i].tel}</p>
        </td>
        
          <td> 
        <p> ${x}</p>
         
        </td>
                  </tr> `;
            document.getElementById("displayAllStudentsDiv").innerHTML = content;
        }
    }
}
////
//valider les students
function updatestatusStudent(x) {
    // Get new values from update train form
    var Status = "Ok";
    // Get all train from SL
    var usersTab = getObjectsFromLS("users");
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].id == x) {
            // Upadte values :new values
            usersTab[i].status = Status;

            break;
        }
    }
    // Set all trainings into LS
    localStorage.setItem("users", JSON.stringify(usersTab));
    // Refresh  Page
    location.reload();
}
//// supprimer students njibou tous les students w ba3d na3mloiu splice pos ,nbr a supp
function deleateStudent(pos) {
    var usersTab = getObjectsFromLS("users");
    usersTab.splice(pos, 1);
    localStorage.setItem("users", JSON.stringify(usersTab));
    location.reload();
}
////////////////////////gestions des prof
function displayAllProf() {
    //get all  from ls
    var userstab = JSON.parse(localStorage.getItem("users") || "[]"); // variable sabbit fiha tous le contenu de orders
    //productstab=[{id,prname,...},{}...]
    var content = '';
    var x = '';
    for (let i = 0; i < userstab.length; i++) {
        if (userstab[i].role == "professeur") {
            if (userstab[i].status == "notOk") {
                x =
                    `<div class="form-check">
                    <td>   <button onclick="updatestatusProf(${userstab[i].id})" class="btn btn-warning" >update</button>  <buttononclick="deleateProf(${i})" class="btn btn-danger">delete</button></td>
          </div>
          `
            } else {
                x =
                    `<div class="form-check">
                 <td>   <span class="badge bg-success">accepted</span> <button onclick="deleateProf(${i})" class="btn btn-danger">delete</button></td>
          </div>
          `
            }

            content = content + ` 
        <tr>
      
        <td>
            <p>${userstab[i].id}</p>
        </td>
        <td>
            <h5>${userstab[i].firstName}</h5>
        </td>
        <td>
            <h5>${userstab[i].lastName}</h5>
        </td>
        <td>
            <p>${userstab[i].speciality}</p>
        </td>
        <td>
            <p>${userstab[i].adress}</p>
        </td>
        <td>
            <p>${userstab[i].email}</p>
        </td>
        <td>
        <p>${userstab[i].experiences}</p>
        </td>
        <td>
        <p>${userstab[i].tel}</p>
        </td>
        <td> 
        <p> ${x}</p>
               </td>
       
   </tr> `;

            document.getElementById("displayAllProfDiv").innerHTML = content;
        }
    }
}

////
//valider les prof
function updatestatusProf(x) {
    // Get new values from update train form
    var Status = "Ok";
    // Get all train from SL
    var usersTab = getObjectsFromLS("users");
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].id == x) {
            // Upadte values :new values
            usersTab[i].status = Status;

            break;
        }
    }
    // Set all users into LS
    localStorage.setItem("users", JSON.stringify(usersTab));
    // Refresh  Page
    location.reload();

}
//// supprimer profs njibou tous les prof w ba3d na3mloiu splice pos ,nbr a supp
function deleateProf(pos) {
    var usersTab = getObjectsFromLS("users");
    usersTab.splice(pos, 1);
    localStorage.setItem("users", JSON.stringify(usersTab));
    location.reload();
}
///////////////display all train by admin ///// 
//// houni bech naffichi esm il prof ili howa fi table users lesem nlawj 3lih b idprof
////if training.idprof==users.id rahou hetha l 7ajetna bih donc n3axdhou hatha lkol b fct  searchobjectbyIdAndkey w na3touha table.idprof,w l key users
function displayAllTrain() {
    // Get all trainings from LS
    // var defindedUserId=searchObjectByIdAndKey()
    var usersTab = getObjectsFromLS("users");
    var trTab = getObjectsFromLS("trainings");
    // var connectedUserId = localStorage.getItem("connectedUserId");
    var content = "";
    for (let i = 0; i < trTab.length; i++) {

        content = content + `
        <tr> 
                          <th scope="row">
                          ${searchObjectByIdAndKey(  trTab[i].idProf,"users" ).firstName }.${searchObjectByIdAndKey(  trTab[i].idProf,"users" ).lastName }

                          </th>

                               <th scope="row">${trTab[i].id}</th>
                              <td>${trTab[i].trName}</td>
                                 <td>${trTab[i].TrNbHours}</td>
                                 <td>${trTab[i].trNbPlaces}</td>
                                 <td>${trTab[i].trPrice}</td>

                                 <td>${trTab[i].trDate}</td>
                                 
                                  <td> <textarea name="about" class="form-control" id="about" style="height: 50px" disabled>${trTab[i].trInfo}</textarea>
                               
                                        </td>

                                      <td>
                                    <button class="btn btn-danger" onclick="deleateTrain(${i})">Delete</button>
                                     </td>
          </tr>  `;
    }
    document.getElementById("trContentAll").innerHTML = content;

    //  document.getElementById("storeProducts").innerHTML = content;
}
///////supprimer all train
function deleateTrain(pos) {
    var training = getObjectsFromLS("trainings");
    training.splice(pos, 1);
    localStorage.setItem("trainings", JSON.stringify(training));
    location.reload();
}
///////// student :consullt trining
function displayTrainings() {
    // Get all products from LS
    var usersTab = getObjectsFromLS("users");
    var trainingsTab = getObjectsFromLS("trainings");
    // productsTab = [{}, {}, {}]

    var content = "";
    for (let i = 0; i < trainingsTab.length; i++) {
        content =
            content +
            `
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" >

            <div class="course-item">
                <img src="assets/img/course-1.jpg" class="img-fluid" alt="...">
                <div class="course-content">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4>${trainingsTab[i].trDate}</h4>
                        <p class="price">(Dt)${trainingsTab[i].trPrice}</p>
                    </div>
        
                    <h3>      <button class='btn btn-warning' onclick="goToDisplayTrainig(${trainingsTab[i].id})"> ${trainingsTab[i].trName}</button>
                   </h3>
                    <p>${trainingsTab[i].trInfo}.</p>
                    <div class="trainer d-flex justify-content-between align-items-center">
                        <div class="trainer-profile d-flex align-items-center">
                            <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt="">
                            <span>${searchObjectByIdAndKey(trainingsTab[i].idProf,"users").firstName}.${searchObjectByIdAndKey(trainingsTab[i].idProf,"users").firstName}</span>
                        </div>
                        <div class="trainer-rank d-flex align-items-center">
                            <i class="bx bx-heart"></i>&nbsp;65
                        </div>
                    </div>
                </div>
            </div>
   <div></div>
   </div>   `;
    }

    document.getElementById("coursesSt").innerHTML = content;
}
///pour afficher pour les imples users
function displayTrainingsC() {
    // Get all products from LS
    var usersTab = getObjectsFromLS("users");
    var trainingsTab = getObjectsFromLS("trainings");
    // productsTab = [{}, {}, {}]
    var content = "";
    for (let i = 0; i < trainingsTab.length; i++) {
        content =
            content + `
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" >
            <div class="course-item">
                <img src="assets/img/course-1.jpg" class="img-fluid" alt="...">
                <div class="course-content">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4>${trainingsTab[i].trDate}</h4>
                        <p class="price">(Dt)${trainingsTab[i].trPrice}</p>
                    </div>
        
                    <h3>       ${trainingsTab[i].trName}
                   </h3>
                    <p>${trainingsTab[i].trInfo}.</p>
                    <div class="trainer d-flex justify-content-between align-items-center">
                        <div class="trainer-profile d-flex align-items-center">
                            <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt="">
                            <span>${searchObjectByIdAndKey(trainingsTab[i].idProf,"users").firstName}.${searchObjectByIdAndKey(trainingsTab[i].idProf,"users").firstName}</span>
                        </div>
                        <div class="trainer-rank d-flex align-items-center">
                            <i class="bx bx-heart"></i>&nbsp;65
                        </div>
                    </div>
                </div>
            </div>
   <div></div>
   </div>  `;
    }

    document.getElementById("coursesSt").innerHTML = content;
}
///
function goToDisplayTrainig(id) {
    localStorage.setItem("displayedTraining", id);
    location.replace("course-details.html");
}
//////
function displayTrainingDetails() {
    var usersTab = getObjectsFromLS("users");
    var idTraining = localStorage.getItem("displayedTraining");
    var trainingsTab = JSON.parse(localStorage.getItem("trainings"));
    var findedTraining;
    for (var i = 0; i < trainingsTab.length; i++) {
        if (trainingsTab[i].id == idTraining) {
            findedTraining = trainingsTab[i];
            break;
        }
    }
    var content;
    content = `                            <button class="btn btn-link" onclick="addToBasket()"><h2> Book Now  </h2></button> 
    `;
    document.getElementById("profNameTr").innerHTML = searchObjectByIdAndKey(trainingsTab[i].idProf, "users").firstName + "" + searchObjectByIdAndKey(trainingsTab[i].idProf, "users").firstName;
    document.getElementById("trNameDetails").innerHTML = findedTraining.trName;
    document.getElementById("trDteDtail").innerHTML = findedTraining.trDate;
    document.getElementById("trHoursDtail").innerHTML = findedTraining.TrNbHours;
    document.getElementById("trPricesDtail").innerHTML = findedTraining.trPrice;
    document.getElementById("trInfoDetail").innerHTML = findedTraining.trInfo;
    document.getElementById("trPlacesDtail").innerHTML = findedTraining.trNbPlaces;
    // findedProduct.prCategory;
    if (findedTraining.trNbPlaces > 0) {
        document.getElementById("placesTrDetail").innerHTML = "there are still places ";
        document.getElementById("bookingCourseDetail").innerHTML = content;
    } else {
        document.getElementById("bookingCourseDetail").innerHTML = "there are no places available";
        document.getElementById("bookingCourseDetail").style.color = "red";
    }
}
////fction pour comparer la date d aujourdhui est la date existe
function comparerLesDates(date, mydatee) {
    var q = new Date();
    var m = q.getMonth() + 1;
    var d = q.getDay();
    var y = q.getFullYear();
    var date = new Date(y, m, d);
    // alert(date);
    var mydate = new Date(mydatee);
    console.log(date);
    console.log(mydate);
    return (date > mydate);

}
//
//fct qui verifie q un student a reserve q une seul foix une formation x
function verifReservation() {
    var connectedUserId = localStorage.getItem("connectedUserId");
    var trainingId = localStorage.getItem("displayedTraining"); ///njibou id mta3 l training ili y7eb ya9raha
    var reservationTab = JSON.parse(localStorage.getItem("reservations") || "[]"); /// njibou les commandes ili 3malhom
    var x;
    //if x.iduser=== connecteduserid &&      .idtr = searchObjectByIdAndKey(trainingId, "reservations").idtr;
    for (let i = 0; i < reservationTab.length; i++) {
        return ((reservationTab[i].UserId == connectedUserId && trainingId != reservationTab[i].idTraining));

    }
}

///////Subscribe ou add to baket ou reserver une formatoon
function addToBasket() { /// nafs principe bch y7ot fil basket//add tobasket
    // var connectedUserId = localStorage.getItem("connectedUserId");
    // Get train id from LS
    var trainingId = JSON.parse(localStorage.getItem("displayedTraining"));
    var trNbPlaces = searchObjectByIdAndKey(trainingId, "trainings").trNbPlaces;
    var trDate = searchObjectByIdAndKey(trainingId, "trainings").trDate;
    // alert(trDate);
    var date;
    var isValidDate = comparerLesDates(date, trDate);
    ////////////////////////////////
    // var x = verifReservation();
    // var reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    var connectedUserId = localStorage.getItem("connectedUserId");
    //alert(trainingId);
    // Get all ordersTraining from LS
    var reservationTab = getObjectsFromLS("reservations"); //reservations :orderes //produit ;trainings
    // create order object
    var ex = uniqueReservTrain();
    //alert(!ex);
    if (Number(trNbPlaces) > 0 && isValidDate) {
        if (ex == false) {
            var reservation = {
                id: generateId(reservationTab) + 1,
                idTraining: trainingId,
                userId: connectedUserId,
            };

            reservationTab.push(reservation);
            localStorage.setItem("reservations", JSON.stringify(reservationTab));
            updateTrainingNbPlaces(trainingId, Number(trNbPlaces));
            // updateTrainingNbPlaces(trainingId, Number(trNbPlaces));
            location.replace("courses.html");
        } else {
            document.getElementById("you").innerHTML = "!you have already registred for this course";
            document.getElementById("you").style.color = "red";
        }

    } else {
        alert("expired ");

    }
}
//////
function uniqueReservTrain() {
    var connectedUserId = localStorage.getItem("connectedUserId");
    var trainingId = JSON.parse(localStorage.getItem("displayedTraining"));
    var allreserved = JSON.parse(localStorage.getItem("reservations") || "[]");
    var reservedExist = false;
    for (var i = 0; i < allreserved.length; i++) {
        if (allreserved[i].idTraining == trainingId && allreserved[i].userId == connectedUserId) {
            reservedExist = true;
            break;
        }
    }
    return reservedExist;
}

function updateTrainingNbPlaces(id, trNbPlaces) {
    // Update product stock
    var trainingTab = JSON.parse(localStorage.getItem("trainings") || "[]");
    // search product by id and update stock
    for (var i = 0; i < trainingTab.length; i++) {
        if (trainingTab[i].id == id) {
            trainingTab[i].trNbPlaces = trainingTab[i].trNbPlaces - 1;
            break;
        }
    }
    // set all product into LS after update
    localStorage.setItem("trainings", JSON.stringify(trainingTab));
}
/////////////les formations de students
function displayTrainingsReserve() {
    //get all  from ls
    var reserv = JSON.parse(localStorage.getItem("reservations") || "[]"); // variable sabbit fiha tous le contenu de orders
    var connectedUserId = localStorage.getItem('connectedUserId');
    //productstab=[{id,prname,...},{}...]
    var reservTab = [];
    for (var i = 0; i < reserv.length; i++) {

        if (reserv[i].userId == connectedUserId) {
            reservTab.push(reserv[i]);
        }
    }
    var content = '';
    //var contentx = '';
    //var totalSum = 0;
    for (var i = 0; i < reservTab.length; i++) {
        content = content + `
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch" >

        <div class="course-item">
            <img src="assets/img/course-1.jpg" class="img-fluid" alt="...">
            <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                <h2>Places:${searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').trNbPlaces}</h2>
                                <p class="price">(Dt)${searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').trPrice}</p>
                </div>
 <h3>      <button class='btn btn-warning' >
                ${searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').trName}
                </button>
               </h3>
               <h3>hours:${searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').TrNbHours}</h3>
                    <h2>${searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').trDate}</h2>
                <p>${searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').trInfo}</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                    <div class="trainer-profile d-flex align-items-center">
                        <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt="">
                        <span>  ${searchObjectByIdAndKey(searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').idProf,'users').firstName     }
                        .                            ${searchObjectByIdAndKey(searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').idProf,'users').lastName     }
                        </span>
                    </div>

                    <div class="trainer-rank d-flex align-items-center">
                    <i class="bx bx-heart"></i>&nbsp;<span id="msgMonProf">
                    <button type="button" class="btn btn-link" onclick="Send( ${searchObjectByIdAndKey(searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').idProf,'users').id},${searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').id})">Comment</button></span>
                    </div>
                    <div class="trainer-rank d-flex align-items-center">
                        <i class="bx bx-heart"></i>&nbsp;<span id="msgMonProf"><button type="button" class="btn btn-link" onclick="vueCommentOfMyProf(${searchObjectByIdAndKey(searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').idProf,'users').id},${searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').id})">View</button></span>
                    </div>
                </div>
                <div id="msgg">  </div>  <div >
            </div>  </div><div>                    
</div></div>`;
    }
    document.getElementById("displaymyreservation").innerHTML = content;
}
////
///
function uniquetest(idTest, idUser) {
    var allnotes = JSON.parse(localStorage.getItem("ansowers") || "[]");
    var ansowerExist = false;
    for (var i = 0; i < allnotes.length; i++) {
        if (allnotes[i].idTest === idTest && allnotes[i].userId === idUser) {
            ansowerExist = true;
            break;
        }
    }
    return ansowerExist;
}

function displayTrainingsReservePourTest() {
    //get all  from ls
    var tests = JSON.parse(localStorage.getItem("tests") || "[]");
    //alert(tests);
    var reserv = JSON.parse(localStorage.getItem("reservations") || "[]"); // variable sabbit fiha tous le contenu de orders
    var connectedUserId = localStorage.getItem('connectedUserId');
    //productstab=[{id,prname,...},{}...]
    var reservTab = [];
    for (var i = 0; i < reserv.length; i++) {

        if (reserv[i].userId == connectedUserId) {
            reservTab.push(reserv[i]);
        }
    }
    ////
    var testTab = [];
    for (var i = 0; i < tests.length; i++) {
        for (var j = 0; j < reservTab.length; j++) {
            if (tests[i].idTr == reservTab[j].idTraining) {
                testTab.push(tests[i]);
            }
        }
    }
    var content = '';
    var contentm = '';
    // if(uniquetest(, idUser))
    for (var i = 0; i < reservTab.length; i++) {
        content = content + ` <th class="btn-warning"  scope="col">  ${searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').trName}
            </th>
             <HR>`;
    }
    for (var j = 0; j < testTab.length; j++) {
        if (!uniquetest(testTab[j].id, connectedUserId)) {
            contentm = contentm + `
        <tr class="btn-danger" scope="row"> <button class="btn  btn-info" onclick="passTest( ${testTab[j].id})"> ${testTab[j].testName}</button>
        </tr>
<hr> `;
        }
    }
    document.getElementById("nameTest").innerHTML = contentm;
    document.getElementById("nameTrain").innerHTML = content;
}
/////////////////fonction qui affiche les profs de students ////on doix les affichees appartir de tableux reservations
function displayProf() {
    var reserv = JSON.parse(localStorage.getItem("reservations") || "[]"); // variable sabbit fiha tous le contenu de orders
    var connectedUserId = localStorage.getItem('connectedUserId');
    //productstab=[{id,prname,...},{}...]
    var reservTab = [];
    for (var i = 0; i < reserv.length; i++) {
        if (reserv[i].userId == connectedUserId) {
            reservTab.push(reserv[i]);
        }
    }
    var content = '';
    //var totalSum = 0;
    for (var i = 0; i < reservTab.length; i++) {
        content = content + `
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
                <img src="assets/img/trainers/trainer-2.jpg" class="img-fluid" alt="">
                <div class="member-content">
                    <h4></h4>
 ${searchObjectByIdAndKey(searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').idProf,'users').lastName     }. 
 ${searchObjectByIdAndKey(searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').idProf,'users').firstName     }
                    <p>
                    <h2> Speciality:</h2> ${searchObjectByIdAndKey(searchObjectByIdAndKey(reservTab[i].idTraining,'trainings').idProf,'users').speciality     }. 
                    </p>
                    <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>   `;
    }

    document.getElementById("myTrainer").innerHTML = content;
}
//////////
function generateHeader() {
    //var connectedUserRole = JSON.parse(localStorage.getItem("connectedUserRole"));
    var connectedUserId = JSON.parse(localStorage.getItem("connectedUserId"));
    var userststab = JSON.parse(localStorage.getItem("users") || "[]");
    var findUser;
    var role = '';
    var status;
    for (var i = 0; i < userststab.length; i++) {
        if (connectedUserId == userststab[i].id) {
            findUser = userststab[i];
            role = userststab[i].role;
            status = userststab[i].status;
            // status = userststab[i].role;
            break; //ki nal9ah no5rej
        }
    }
    var content = "";
    if (connectedUserId && role == "student" && status == "Ok") {
        // Iser is connected
        var connectedUser = searchObjectByIdAndKey(connectedUserId, "users");
        content = `                  <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a class="active" href="courses.html">Courses</a></li>
                <li><a href="trainers.html">Trainers</a></li>
                <li><a href="mes-trainings-student.html">My Trainings</a></li>
                <li><a href="mes-test-students.html">Test</a></li>
    
                <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a href="#">Deep Drop Down 1</a></li>
                                <li><a href="#">Deep Drop Down 2</a></li>
                                <li><a href="#">Deep Drop Down 3</a></li>
                                <li><a href="#">Deep Drop Down 4</a></li>
                                <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
    
        <a href="courses.html" class="get-started-btn">Get Started</a>
        <a href=""  class="get-started-btn"> Hello ${connectedUser.firstName}
        ${connectedUser.lastName}</a>
 <a onclick="logoutS()" class="get-started-btn">LogOut<a> `
    } else if (connectedUserId && role == "admin") {
        // Iser is connected
        var connectedUser = searchObjectByIdAndKey(connectedUserId, "users");
        content = `                
        <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
                <li><a class="active" href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="courses-clients.html">Courses</a></li>
                <li><a href="trainers.html">Trainers</a></li>
                <li><a href="">Events</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="contact.html">Contact</a></li>

</ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a href="../NiceAdmin/index.html" class="get-started-btn">Get Started</a>
        <!-- .navbar -->

        <a href="#" class="get-started-btn"> Hello ${connectedUser.firstName}
        ${connectedUser.lastName}</a>  `
    } else if (connectedUserId && role == "professeur" && status != "notOk") {
        // Iser is connected
        var connectedUser = searchObjectByIdAndKey(connectedUserId, "users");
        content = `                
        <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
                <li><a class="active" href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="courses-clients.html">Courses</a></li>
                <li><a href="trainers.html">Trainers</a></li>
                <li><a href="">Events</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="contact.html">Contact</a></li>
 </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a href="../NiceAdmin/index.html" class="get-started-btn">Get Started</a>
        <!-- .navbar -->

        <a href="#" class="get-started-btn"> Hello ${connectedUser.firstName}
        ${connectedUser.lastName}</a>  `
    } else {
        content = `                      
        <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
                <li><a class="active" href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="courses-clients.html">Courses</a></li>
                <li><a href="trainers.html">Trainers</a></li>
                <li><a href="">Events</a></li>
 <li class="dropdown"><a href="#"><span class="get-started-btn">Registration</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="registrationstudent.html">Student</a></li>

                        <li><a href="registrationprof.html">Professor</a></li>
                        <li><a href="../NiceAdmin/pages-register.html">Admin</a></li>
                    </ul>
                </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a href="login.html" class="get-started-btn">Get Started</a>
        <!-- .navbar -->

        <!-- <a href="courses.html" class="get-started-btn">Registration</a> -->
         `
    }
    document.getElementById("navbarSupportedContent").innerHTML = content;
}
/////  display alll trainers for clients simple
function displayProfForClients() {
    var usersTab = getObjectsFromLS("users");
    var content = "";
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].role == "professeur" && usersTab[i].status == "Ok") {
            content = content + ` <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
                <img src="assets/img/trainers/trainer-2.jpg" class="img-fluid" alt="">
                <div class="member-content">
                    <h4></h4>
 ${usersTab[i].lastName     }.  ${usersTab[i].lastName     }. 
  <p>
                    <h2> Speciality:</h2> ${usersTab[i].speciality     }. 
                    </p>
                    <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div> `;
        }
    }
    document.getElementById("AllTrainer").innerHTML = content;
}
/////////////////Notifications
function notifNbInscriptionNonValid(role) {
    var usersTab = getObjectsFromLS("users");
    // var trainingsTab = getObjectsFromLS("trainings");
    // productsTab = [{}, {}, {}]
    // var sP = 0;
    var s = 0;
    var y = '';
    var content = "";
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].role == role && usersTab[i].status == "notOk") {
            s += 1;
            //  content =
        }
    }
    if (s > 0) {
        return s;
    } else { return y; }
}
/////////afficher les studients non acceptee
function displaytudentsNotOk() {
    //get all  from ls
    var userstab = JSON.parse(localStorage.getItem("users") || "[]"); // variable sabbit fiha tous le contenu de orders
    var x = '';
    for (let i = 0; i < userstab.length; i++) {
        if (userstab[i].role == "student") {
            if (userstab[i].status == "notOk") {
                x = ` <tr>
                    <th scope="row"><a href="#">#${userstab[i].id}</a></th>
                    <td><a href="students-managements.html" class="text-warning">${userstab[i].firstName}.${userstab[i].lastName}</a></td>
                    <td><a href="#" class="text-primary"></a>${userstab[i].tel}</td>
                    <td><a href="#" >${userstab[i].city}</a></td>
                    <td><a href="#" class="text-primary">${userstab[i].email}</a></td>
                </tr> `;

                document.getElementById("studentsNotOk").innerHTML = x;
            }

        } else if (userstab[i].role == "professeur") {

            if (userstab[i].status == "notOk") {
                content = ` <tr>
                                            <th scope="row">
                                                <a href="#"><img src="assets/img/profile-img.jpg" alt=""></a>
                                            </th>
                                            <td><a href="professor-management.html" class="text-warning">${userstab[i].firstName}.${userstab[i].lastName}</a>.</td>
                                            <td><a href="#" class="text-primary fw-bold">${userstab[i].speciality}</a></td>
                                            <td class="fw-bold">${userstab[i].experiences}.years</td>
                                            <td>${userstab[i].tel}</td>
                                            <td>${userstab[i].email}</td>
                                        </tr>    `;
                document.getElementById("profNoTaccepted").innerHTML = content;
            }
        }
    }
}
///////////////header administration
function generateHeaderAdmin() {
    //var connectedUserRole = JSON.parse(localStorage.getItem("connectedUserRole"));
    var connectedUserId = JSON.parse(localStorage.getItem("connectedUserId"));
    var userststab = JSON.parse(localStorage.getItem("users") || "[]");
    var findUser;
    var role;
    var status;
    var nP = notifNbInscriptionNonValid("professeur");
    var nS = notifNbInscriptionNonValid("student");
    for (var i = 0; i < userststab.length; i++) {
        if (connectedUserId == userststab[i].id) {
            findUser = userststab[i];
            role = userststab[i].role;
            status = userststab[i].status;
            break; //ki nal9ah no5rej
        }
    }
    var content = "";
    if (connectedUserId && role == "admin") {
        // Iser is connected
        var connectedUser = searchObjectByIdAndKey(connectedUserId, "users");
        content = `                  <ul class="d-flex align-items-center">

                <li class="nav-item d-block d-lg-none">
                    <a class="nav-link nav-icon search-bar-toggle " href="#">
                        <i class="bi bi-search"></i>
                    </a>
                </li>
                <!-- End Search Icon-->
                <li class="nav-item dropdown">

                    <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                        <i class="bi bi-bell"></i>
                        <span class="badge bg-danger badge-number" id="notifSt">${nS}</span>
                    </a>
                    <!-- End Notification Icon -->

                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">

                        <li class="dropdown-footer">
                            <a href="../NiceAdmin/index.html">Show all notifications</a>
                        </li>

                    </ul>
                    <!-- End Notification Dropdown Items -->

                </li>
                <li class="nav-item dropdown">

                    <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                        <i class="bi bi-bell"></i>
                        <span  title="professor not accepted" class="badge bg-primary badge-number" id="notifPr">${nP}</span>
                    </a>
                    <!-- End Notification Icon -->

                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">


   <li class="dropdown-footer">
                            <a href="../NiceAdmin/index.html">Show all notifications</a>
                        </li>

                    </ul>
                    <!-- End Notification Dropdown Items -->

                </li>
                <!-- End Notification Nav -->

                <li class="nav-item dropdown">

                    <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                        <i class="bi bi-chat-left-text"></i>
                        <span class="badge bg-success badge-number"></span>
                    </a>
                    <!-- End Messages Icon -->

                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                        <li class="dropdown-footer">
                            <a href="#">Show all messages</a>
                        </li>

                    </ul>
                    <!-- End Messages Dropdown Items -->

                </li>
                <!-- End Messages Nav -->

                <li class="nav-item dropdown pe-3">

                    <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                        <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle">
                        <span class="d-none d-md-block dropdown-toggle ps-2" id="profileName"></span><span id="">${connectedUser.firstName}</span>.<span>${connectedUser.lastName}</span><span id=""></span>
                    </a>
                    <!-- End Profile Iamge Icon -->

                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                        <li class="dropdown-header">
                            <h6 id=""> <span id="">${connectedUser.firstName}</span><span id="">${connectedUser.lastName}</span></h6>
                            <span id="">${connectedUser.role}</span>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                <i class="bi bi-person"></i>
                                <span>My Profile</span>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                <i class="bi bi-gear"></i>
                                <span>Account Settings</span>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="manage-my-training.html">
                                <i class="bi bi-question-circle"></i>
                                <span>Need Help?</span>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <i class="bi bi-box-arrow-right"></i>
                                <span> <button  onclick="logout()"></button></span>
                            </a>
                        </li>

                    </ul>
                    <!-- End Profile Dropdown Items -->

                </li>
                <!-- End Profile Nav -->

            </ul>  `;
        document.getElementById("headerGeneratorAdminProf").innerHTML = content;

    } else if (connectedUserId && role == "professeur" && status == "Ok") {
        // Iser is connected
        var connectedUser = searchObjectByIdAndKey(connectedUserId, "users");
        content = `                  <ul class="d-flex align-items-center">

                <li class="nav-item d-block d-lg-none">
                    <a class="nav-link nav-icon search-bar-toggle " href="#">
                        <i class="bi bi-search"></i>
                    </a>
                </li>
                <!-- End Search Icon-->

                <li class="nav-item dropdown">

                    <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                        <i class="bi bi-bell"></i>
                        <span class="badge bg-danger badge-number" id="notifSt">à faire!!</span>
                    </a>
                    <!-- End Notification Icon -->

                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">

                        <li class="dropdown-footer">
                            <a href="../NiceAdmin/index.html">Show all notifications</a>
                        </li>

                    </ul>
                    <!-- End Notification Dropdown Items -->

                </li>
                <li class="nav-item dropdown">

                    <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                        <i class="bi bi-bell"></i>
                        <span  title="professor not accepted" class="badge bg-primary badge-number" id="notifPr">!</span>
                    </a>
                    <!-- End Notification Icon -->

                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
  <li class="dropdown-footer">
                            <a href="../NiceAdmin/index.html">Show all notifications</a>
                        </li>

                    </ul>
                    <!-- End Notification Dropdown Items -->

                </li>
                <!-- End Notification Nav -->

                <li class="nav-item dropdown">

                    <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                        <i class="bi bi-chat-left-text"></i>
                        <span class="badge bg-success badge-number"></span>
                    </a>
                    <!-- End Messages Icon -->
 <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                        <li class="dropdown-footer">
                            <a href="#">Show all messages</a>
                        </li>
 </ul>
                    <!-- End Messages Dropdown Items -->

                </li>
                <!-- End Messages Nav -->

                <li class="nav-item dropdown pe-3">

                    <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                        <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle">
                        <span class="d-none d-md-block dropdown-toggle ps-2" id="profileName"></span><span id="">${connectedUser.firstName}</span>.<span></span>${connectedUser.firstName}<span id=""></span>
                    </a>
                    <!-- End Profile Iamge Icon -->

                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                        <li class="dropdown-header">
                            <h6 id=""> <span id=""></span>${connectedUser.firstName}<span id="">${connectedUser.firstName}</span></h6>
                            <span id="">${connectedUser.role}</span>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                <i class="bi bi-person"></i>
                                <span>My Profile</span>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                <i class="bi bi-gear"></i>
                                <span>Account Settings</span>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="manage-my-training.html">
                                <i class="bi bi-question-circle"></i>
                                <span>Need Help?</span>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li> <li>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <i class="bi bi-box-arrow-right"></i>
                                <span> <button  onclick="logout()"></button></span>
                            </a>
                        </li>

                    </ul>
                    <!-- End Profile Dropdown Items -->
                </li>
                <!-- End Profile Nav -->
            </ul>  `;
        document.getElementById("headerGeneratorAdminProf").innerHTML = content;
    }

}
////generate aside
function generateAside() {
    var connectedUserId = JSON.parse(localStorage.getItem("connectedUserId"));
    var userststab = JSON.parse(localStorage.getItem("users") || "[]");
    var findUser;
    var role;
    var status;
    var nP = notifNbInscriptionNonValid("professeur");
    var nS = notifNbInscriptionNonValid("student");
    for (var i = 0; i < userststab.length; i++) {
        if (connectedUserId == userststab[i].id) {
            findUser = userststab[i];
            role = userststab[i].role;
            status = userststab[i].status;
            break; //ki nal9ah no5rej
        }
    }
    var content = "";
    if (connectedUserId && role == "admin") {
        // Iser is connected
        var connectedUser = searchObjectByIdAndKey(connectedUserId, "users");
        content = `<ul class="sidebar-nav" id="sidebar-nav">

        <li class="nav-item">
            <a class="nav-link " href="index.html">
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <li class="nav-heading">Pages</li>
        
        <li class="nav-item">
            <a class="nav-link collapsed" href="users-profile.html">
                <i class="bi bi-person"></i>
                <span>Profile</span>
            </a>
        </li>
        
        
        <li class="nav-item">
            <a class="nav-link collapsed" href="students-managements.html">
                <i class="bi bi-question-circle"></i>
                <span>management Students</span> </a>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="professor-management.html">
                <i class="bi bi-question-circle"></i>
                <span>management Prof</span> </a>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="management-all-training.html">
                <i class="bi bi-question-circle"></i>
                <span>management of All training</span> </a>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="pages-error-404.html">
                <i class="bi bi-question-circle"></i>
                <span>Notes</span> </a>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="page-error-404.html">
                <i class="bi bi-envelope"></i>
                <span>Contact</span>
            </a>
        </li>
        
        <li class="nav-item">
            <a class="nav-link collapsed" href="pages-error-404.html">
                <i class="bi bi-dash-circle"></i>
                <span>Error 404</span>
            </a>
        </li>
        
        <li class="nav-item">
            <a class="nav-link collapsed" href="pages-blank.html">
                <i class="bi bi-file-earmark"></i>
                <span>Blank</span>
            </a>
        </li>
        
        </ul>  `;
        document.getElementById("sidebar").innerHTML = content;

    } else if (connectedUserId && role == "professeur" && status == "Ok") {
        // Iser is connected
        var connectedUser = searchObjectByIdAndKey(connectedUserId, "users");
        content = ` <ul class="sidebar-nav" id="sidebar-nav">

        <li class="nav-item">
            <a class="nav-link " href="users-profile.html">
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <!-- End Dashboard Nav -->
        
        
        
        <li class="nav-heading">Pages</li>
        
        <li class="nav-item">
            <a class="nav-link collapsed" href="users-profile.html">
                <i class="bi bi-person"></i>
                <span>Profile</span>
            </a>
        </li>
        <!-- End Profile Page Nav -->
        
        <li class="nav-item">
            <a class="nav-link collapsed" href="manage-my-training.html">
                <i class="bi bi-question-circle"></i>
                <span>management of my training</span> </a>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="manage-my-test.html">
                <i class="bi bi-question-circle"></i>
                <span>management of my test</span> </a>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="notes.html">
                <i class="bi bi-question-circle"></i>
                <span>Notes</span> </a>
        </li>
        
        
        
        <!-- End F.A.Q Page Nav -->
        
        <li class="nav-item">
            <a class="nav-link collapsed" href="pages-contact.html">
                <i class="bi bi-envelope"></i>
                <span>Contact</span>
            </a>
        </li>
        <!-- End Contact Page Nav -->
        
        
        <!-- End Register Page Nav -->
        
        <!-- End Login Page Nav -->
        
        <li class="nav-item">
            <a class="nav-link collapsed" href="pages-error-404.html">
                <i class="bi bi-dash-circle"></i>
                <span>Error 404</span>
            </a>
        </li>
        <!-- End Error 404 Page Nav -->
        
        <li class="nav-item">
            <a class="nav-link collapsed" href="pages-blank.html">
                <i class="bi bi-file-earmark"></i>
                <span>Blank</span>
            </a>
        </li>
        <!-- End Blank Page Nav -->
        
        </ul>  `;
        document.getElementById("sidebar").innerHTML = content;
    }

}
/////////////avis//////////
function Send(idRecepteur, idTr) {
    localStorage.setItem("sendR", idRecepteur); //nasna3 table jdid n7ot fih id (wa7ed bark ili nzelt 3lih bl boutton mta3 detail produit)
    // localStorage.setItem("SendE", connectedUser);
    localStorage.setItem("sendTr", idTr);
    var connectedUserId = localStorage.getItem("connectedUserId");
    var x = searchObjectByIdAndKey(connectedUserId, "users").role;
    // alert(x);
    if (x == "professeur") {
        location.replace("pages-contact.html");
    } else if (x == "student") {
        location.replace("contact.html");
        // location.replace("contact.html");
    }
}
//// send
function sendMessage() { /// nafs principe bch y7ot fil basket//add tobasket
    // var connectedUserId = localStorage.getItem("connectedUserId");
    // Get train id from LS
    //  var sendE = localStorage.getItem("sendE");
    var sendR = localStorage.getItem("sendR");
    var sendTr = localStorage.getItem("sendTr");
    var messge = document.getElementById("messgeSend").value;
    var isMessgeValid = checklength(messge, 2, 300);
    messageError(isMessgeValid, "messgeErrors", "message umpty!! ");
    var connectedUserId = localStorage.getItem("connectedUserId");
    if (isMessgeValid && sendR && sendTr) {
        var messgeTab = getObjectsFromLS("messages");
        var message = {
            id: generateId(messgeTab) + 1,
            idEmetteur: connectedUserId,
            idRecepteur: sendR,
            idTraining: sendTr,
            comment: messge
        };
        messgeTab.push(message);
        localStorage.setItem("messages", JSON.stringify(messgeTab));
        document.getElementById("messageSend").innerHTML = "Your message has been sent. Thank you!";
        document.getElementById("messageSend").style.color = "green";
        localStorage.removeItem("senR");
        localStorage.removeItem("sendTr");
    } else {
        document.getElementById("messageSend").innerHTML = "error reception!";
        document.getElementById("messageSend").style.color = "red";
    }
}
//////student
function sendMessageS() { /// nafs principe bch y7ot fil basket//add tobasket
    // var connectedUserId = localStorage.getItem("connectedUserId");
    // Get train id from LS
    //  var sendE = localStorage.getItem("sendE");
    var sendR = localStorage.getItem("sendR");
    var sendTr = localStorage.getItem("sendTr");
    var messge = document.getElementById("messgeSendS").value;
    var isMessgeValid = checklength(messge, 2, 300);
    messageError(isMessgeValid, "messgeErS", "write a comment");

    if (isMessgeValid) {
        var messgeTab = getObjectsFromLS("messages");
        var connectedUserId = localStorage.getItem("connectedUserId");

        var message = {
            id: generateId(messgeTab) + 1,
            idEmetteur: connectedUserId,
            idRecepteur: sendR,
            idTraining: sendTr,
            comment: messge,
        };

        messgeTab.push(message);
        localStorage.setItem(("messages"), JSON.stringify(messgeTab));
        // updateTrainingNbPlaces(trainingId, Number(trNbPlaces));
        // updateTrainingNbPlaces(trainingId, Number(trNbPlaces));
        //location.reload();

        document.getElementById("messageSendS").innerHTML = "Your message has been sent. Thank you!";
        document.getElementById("messageSendS").style.color = "green";

    } else {
        document.getElementById("messageSendS").innerHTML = "you must  choose your teacher from here. Thank you!";

    }
}
//////////display messag
function vueCommentOfMyProf(idTr, idPr) {
    var findsearch = [];
    var content = "";
    var connectedUserId = localStorage.getItem("connectedUserId");
    var messgeTab = getObjectsFromLS("messages");
    for (let i = 0; i < messgeTab.length; i++) {
        if (messgeTab[i].idEmetteur == idPr && messgeTab[i].idTraining == idTr && messgeTab[i].idRecepteur == connectedUserId) {
            findsearch.push(messgeTab[i]);

        }
    }
    if (findsearch) {
        for (let i = 0; i < findsearch.length; i++) {

            content = content + `  <p> <span><b>${i+1}**</b>${findsearch[i].comment}</span></p>    `;

        }
        document.getElementById("msgg").innerHTML = content;
        document.getElementById("msgg").style.color = "red";

    } else {
        document.getElementById("msgg").innerHTML = "umpty";
        document.getElementById("msgg").style.color = "red";

    }
}
///////////////////////
function reception() {
    var findsearch = [];
    var content = "";
    var connectedUserId = localStorage.getItem("connectedUserId");
    var messgeTab = getObjectsFromLS("messages");
    for (let i = 0; i < messgeTab.length; i++) {
        if (messgeTab[i].idRecepteur == connectedUserId) {
            findsearch.push(messgeTab[i]);

        }
    }
    if (findsearch) {
        for (let i = 0; i < findsearch.length; i++) {
            content = content + `
            <div class="info-box card">
            <i class="bi bi-envelope"></i>
              <p>${ searchObjectByIdAndKey(findsearch[i].idEmetteur,"users").firstName}.${ searchObjectByIdAndKey(findsearch[i].idEmetteur,"users").lastName}<br>${findsearch[i].comment}</p>
        </div>   `;
        }
        document.getElementById("receptionP").innerHTML = content;
        //document.getElementById("msgg").style.color = "red";

    } else {
        //  document.getElementById("msgg").innerHTML = "umpty";
        //  document.getElementById("msgg").style.color = "red";

    }
}
///////
/////////////Addtest
function addTest(idTr, idPr) {
    var trTab = getObjectsFromLS("trainings");
    var form;
    form = `<div class="card-body">
    <h5 class="card-title">my test</h5>

    <!-- General Form Elements -->
    <div>
        <div class="row mb-3">
            <h4> training:</h4> 
            <div class="col-sm-10">
            <input type="text" class="form-control" required  id="Ntest" disabled  value=${searchObjectByIdAndKey(idTr,"trainings").trName}  >
        </div>
        </div>
        
  <div class="row mb-3">
        <h4>Professor:</h4> 
        <div class="col-sm-10">
            <input type="text" class="form-control" id="Np" required  disabled   value=${searchObjectByIdAndKey(idPr,"users").firstName} ${searchObjectByIdAndKey(idPr,"users").lastName}>
        </div>
        </div>
        <div class="row mb-3">
            <h4> Name Of Test:</h4> 
            <div class="col-sm-10">
            <input type="text" class="form-control" required  id="Ntestt"  required >
        </div>
        </div>
        <div class="row mb-3">
        <h4>Question 1</h4> 
        <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q1">
            </div>
            <span id=""></span>
        </div>
        <div class="row mb-3">
        <h4>Question 1 rep1</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q1R1">
            </div>
            <span id=""></span>
        </div>
        <div class="row mb-3">
        <h4>Question 1 rep2</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q1R2">
            </div>
            <span id=""></span>
        </div>
        <div class="row mb-3">
        <h4>Question 1 rep3</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q1R3">
            </div>
            <span id=""></span>
        </div>
        <div class="row mb-3">
        <h4>Question 1 rep true</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q1Rtrue">
            </div>
            <span id=""></span>
        </div>
        <div class="row mb-3">
        <h4>Question 2</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q2">
            </div>
            <span id=""></span>
        </div>
        <!--  -->
        <div class="row mb-3">
        <h4>Question 2 rep1</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q2R1">
            </div>
            <span id=""></span>
        </div>
        <div class="row mb-3">
        <h4>Question 2 rep2</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q2R2">
            </div>
            <span id=""></span>
        </div>
        <div class="row mb-3">
        <h4>Question 2 rep3</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q2R3">
            </div>
            <span id=""></span>
        </div>
        <div class="row mb-3">
        <h4>Question 2 rep true</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q2Rtrue">
            </div>
            <span id=""></span>
        </div>
        <div class="row mb-3">
        <h4>Question 3</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q3">
            </div>
            <span id=""></span>
        </div>
        <!--  -->

        <div class="row mb-3">
        <h4>Question 3  rep1:</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q3R1">
            </div>
            <span id=""></span>
        </div>
        <div class="row mb-3">
        <h4>Question 3  rep2:</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control"  required id="Q3R2">
            </div>
            <span id=""></span>
        </div>
        <div class="row mb-3">
        <h4>Question 3  rep3:</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q3R3">
            </div>
            <span id=""></span>
        </div>
        <div class="row mb-3">
        <h4>Question 3  rep true</h4> 
            <div class="col-sm-10">
                <input type="text" class="form-control" required id="Q3Rtrue">
            </div>
            <span id=""></span>
        </div>

<!--  -->
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label"></label>
            <div class="col-sm-10">
                <button type="submit" class="btn btn-primary" onclick="addTestes(${idTr}, ${idPr})">ADD </button>
                <button type="submit" class="btn btn-primary" onclick="cancel()">Cancel </button>

            </div>
        </div>

    </div>
    <!-- End General Form Elements --></div> 
    `;
    document.getElementById("formTest").innerHTML = form;
}
////function add testtes: enregistrer dans ls
function addTestes(idTr, idPr) {
    var testName = document.getElementById("Ntestt").value;
    var q1 = document.getElementById("Q1").value;
    var repQ1N1 = document.getElementById("Q1R1").value;
    var repQ1N2 = document.getElementById("Q1R2").value;
    var repQ1N3 = document.getElementById("Q1R3").value;
    var repQ1True = document.getElementById("Q1Rtrue").value;
    ///
    var q2 = document.getElementById("Q2").value;
    var repQ2N1 = document.getElementById("Q2R1").value;
    var repQ2N2 = document.getElementById("Q2R2").value;
    var repQ2N3 = document.getElementById("Q2R3").value;
    var repQ2True = document.getElementById("Q2Rtrue").value;
    /////
    var q3 = document.getElementById("Q3").value;
    var repQ3N1 = document.getElementById("Q3R1").value;
    var repQ3N2 = document.getElementById("Q3R2").value;
    var repQ3N3 = document.getElementById("Q3R3").value;
    var repQ3True = document.getElementById("Q3Rtrue").value;
    //
    var connectedUserId = localStorage.getItem("connectedUserId");
    ////
    var testTab = getObjectsFromLS("tests");
    // Create JSON Object
    var test = {
        id: generateId(testTab) + 1,
        testName: testName,
        q1: q1,
        repQ1N1: repQ1N1,
        repQ1N2: repQ1N2,
        repQ1N3: repQ1N3,
        repQ1True: repQ1True,
        ///
        q2: q2,
        repQ2N1: repQ2N1,
        repQ2N2: repQ2N2,
        repQ2N3: repQ2N3,
        repQ2True: repQ2True,
        /////
        q3: q3,
        repQ3N1: repQ3N1,
        repQ3N2: repQ3N2,
        repQ3N3: repQ3N3,
        repQ3True: repQ3True,
        idTr: idTr,
        idProf: connectedUserId,
    };


    testTab.push(test);

    localStorage.setItem("tests", JSON.stringify(testTab));
    location.reload();
}

function passTest(idTest) {

    location.replace("test.html");
    localStorage.setItem("examencours", idTest);
}

function passExam() {
    //var testTab = getObjectsFromLS("tests");
    //  alert(idtest);
    var idExamEncours = localStorage.getItem("examencours");
    var x = searchObjectByIdAndKey(idExamEncours, "tests");
    var connectedUserId = localStorage.getItem("connectedUserId");
    var content;
    content = `  <div class="col-4" id="quiz1">
    <div class="quiz-header">
        <h2 id="question1">Q1:${x.q1}</h2>
        <ul>
            <li>
                <input type="radio" id="question1R1" name="a" value=${x.repQ1N1} class="answer" />
                <label for="a" id="ans1q1">${x.repQ1N1}</label>
            </li>
            <li>
                <input type="radio" value=${x.repQ1N2} id="question1R2" name="a" class="answer" />
                <label for="a" id="ans2q1">${x.repQ1N2}</label>
            </li>
            <li>
                <input type="radio" value=${x.repQ1N3} id="question1R3" name="a" class="answer" />
                <label for="a" id="ans3q1">${x.repQ1N3}</label>
            </li>

        </ul>
    </div>
</div>
<div class=" col-4" id="quiz2">
    <div class="quiz-header">
        <h2 id="question2">Q2:${x.q2}</h2>
        <ul>
            <li>
                <input type="radio" id="question2R1" value=${x.repQ2N1} name="b"class="answer" />
                <label for="question2R1" id="ans1q2">${x.repQ2N1}</label>
            </li>
            <li>
                <input type="radio" value=${x.repQ2N2} id="question2R2" name="b" class="answer" />
                <label for="question2R2" id="ans2q2">${x.repQ2N2}</label>
            </li>
            <li>
                <input type="radio" value=${x.repQ3N1} id="question2R3" name="b" class="answer" />
                <label for="question2R3" id="ans3q2">${x.repQ3N3}</label>
            </li>

        </ul>
    </div>
</div>
<div class="col-4" id="quiz3">
    <div class="quiz-header">
        <h2 id="question3">Q3:${x.q3}</h2>
        <ul>
            <li>
                <input type="radio" name="c" id="question3R1" value=${x.repQ3N1}class="answer" />
                <label for=""  id="ans1q3">${x.repQ3N1}</label>
            </li>
            <li>
                <input type="radio" name="c" value=${x.repQ3N2} id="question3R2" class="answer" />
                <label for="" id="ans2q3">${x.repQ3N2}</label>
            </li>
            <li>
                <input type="radio" name="c" value=${x.repQ3N3} id="question3R3" class="answer" />
                <label for="" id="ans3q3">${x.repQ3N3}</label>
            </li>

        </ul>
    </div>
</div>
<div class="col-6"></div>
<div class="col-1">
    <button id="submit"  onclick="AddToReponses(${idExamEncours})">OK</button>
</div>
  `;
    document.getElementById("passExam").innerHTML = content;
}

function AddToReponses(idExam) {
    var connectedUserId = localStorage.getItem("connectedUserId");
    var reponse1;
    var reponse2;
    var reponse3;
    if (document.getElementById("question1R1").checked) {
        reponse1 = document.getElementById("question1R1").value;
    }
    if (document.getElementById("question1R2").checked) {
        reponse1 = document.getElementById("question1R2").value;
    }
    if (document.getElementById("question1R3").checked) {
        reponse1 = document.getElementById("question1R3").value;
    }
    // ////
    if (document.getElementById("question2R1").checked) {
        reponse2 = document.getElementById("question2R1").value;
    }
    if (document.getElementById("question2R2").checked) {
        reponse2 = document.getElementById("question2R2").value;
    }
    if (document.getElementById("question2R3").checked) {
        reponse2 = document.getElementById("question2R3").value;
    }
    // ////
    if (document.getElementById("question3R1").checked) {
        reponse3 = document.getElementById("question3R1").value;
    }
    if (document.getElementById("question3R2").checked) {
        reponse3 = document.getElementById("question3R2").value;
    }
    if (document.getElementById("question3R3").checked) {
        reponse3 = document.getElementById("question3R3").value;
    }
    var testTab = getObjectsFromLS("tests");


    var rep1True = searchObjectByIdAndKey(idExam, "tests").repQ1True;
    var rep2True = searchObjectByIdAndKey(idExam, "tests").repQ2True;
    var rep3True = searchObjectByIdAndKey(idExam, "tests").repQ3True;
    var note1;
    if (reponse1 == rep1True) {
        note1 = 1;
    } else {
        note1 = 0;
    }
    var note2;
    if (reponse2 == rep2True) {
        note2 = 1;
    } else {
        note2 = 0;
    }
    var note3;
    if (reponse3 == rep3True) {
        note3 = 1;
    } else {
        note3 = 0;
    }
    var note = note1 + note2 + note3;
    var remarque;
    if (note == 0) {
        remarque = "poor grade";
    } else if (note == 1) {
        remarque = "bad";
    } else if (note == 2) {
        remarque = "good!!";
    } else if (note == 3) {
        remarque = "Excellent!!";
    }

    var s = searchObjectByIdAndKey(idExam, "tests").idProf;
    //var y=searchObjectByIdAndKey(x,)
    var ansowerTab = getObjectsFromLS("ansowers"); //reservations :orderes //produit ;trainings
    var ansower = {
        id: generateId(ansowerTab) + 1,
        idTest: idExam,
        idProf: s,
        userId: connectedUserId,
        reponse1: reponse1,
        reponse2: reponse2,
        reponse3: reponse3,
        note: note,
        remarque: remarque,
    };

    ansowerTab.push(ansower);
    localStorage.setItem("ansowers", JSON.stringify(ansowerTab));
    //updateTrainingNbPlaces(trainingId, Number(trNbPlaces));
    // updateTrainingNbPlaces(trainingId, Number(trNbPlaces));
    localStorage.removeItem("examencours");
    var x = "thank you..your score on this test is:" + '' +
        `${note}`;
    alert(x);
    location.replace("index.html");

}