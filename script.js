document.getElementById('submitButton').addEventListener('click', function() {
    saveAndDisplay();
    displayUserInfo();
});

function saveAndDisplay() {
    var nname = document.getElementById('myname').value;
    var nmobileNumber = document.getElementById('cno').value;

    var userInfo = {
        name: nname,
        mobileNumber: nmobileNumber,
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

window.addEventListener("DOMContentLoaded",()=>{
    
    axios.get("https://crudcrud.com/api/c5ea4d9d37c647d2b6bab84a0fffa56e/appointmentData")
    .then((response)=>{
        for(var i=0;i<response.data.length;i++){
            console.log(response.data[i]);
            displayUserInfo(response.data[i]);

        }
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
})

function displayUserInfo(userInfo) {
   // var storedUserInfo = localStorage.getItem('userInfo');
    //var userInfo = JSON.parse(storedUserInfo);

    var displayDiv = document.getElementById('userInfoDisplay');
    displayDiv.innerHTML = `<p>Name: ${userInfo.name}</p>
                           <p>Mobile Number: ${userInfo.mobileNumber}</p>`;
}