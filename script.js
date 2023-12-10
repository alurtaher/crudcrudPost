document.getElementById('submitButton').addEventListener('click', function() {
    saveAndDisplay();
});

function saveAndDisplay() {
    var name = document.getElementById('myname').value;
    var fatherName = document.getElementById('fname').value;
    var motherName = document.getElementById('mname').value;
    var mobileNumber = document.getElementById('cno').value;
    var dateOfBirth = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="myGender"]:checked').id;
    var selectedCar = document.getElementById('car').value;

    var userInfo = {
        name: name,
        fatherName: fatherName,
        motherName: motherName,
        mobileNumber: mobileNumber,
        dateOfBirth: dateOfBirth,
        gender: gender,
        selectedCar: selectedCar
    };

   // localStorage.setItem('userInfo', JSON.stringify(userInfo));

    //displayUserInfo();
    axios.post("https://crudcrud.com/api/c5ea4d9d37c647d2b6bab84a0fffa56e/appointmentData",userInfo)
    .then((response)=>{
        displayUserInfo();
    })
    .catch((err)=>{
        console.log(err)
    })
}

function displayUserInfo() {
    var storedUserInfo = localStorage.getItem('userInfo');
    var userInfo = JSON.parse(storedUserInfo);

    var displayDiv = document.getElementById('userInfoDisplay');
    displayDiv.innerHTML = `<h3>User Information:</h3>
                           <p>Name: ${userInfo.name}</p>
                           <p>Father Name: ${userInfo.fatherName}</p>
                           <p>Mother Name: ${userInfo.motherName}</p>
                           <p>Mobile Number: ${userInfo.mobileNumber}</p>
                           <p>Date of Birth: ${userInfo.dateOfBirth}</p>
                           <p>Gender: ${userInfo.gender}</p>
                           <p>Selected Car: ${userInfo.selectedCar}</p>`;
}