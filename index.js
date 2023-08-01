// Add your code here
function submitData(userName, userEmail) {

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: userName,
        email: userEmail
    })
} 
      
return fetch('http://localhost:3000/users', configurationObject)
    .then(res => res.json())
    .then(function (object) {
    document.body.innerHTML = object.id
    })
    .catch(function (error) {
     document.body.innerHTML = error.message   
    })
}
submitData()