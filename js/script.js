
let inputText = document.getElementById("text");
let btn = document.getElementById("btn");
let arr;
let btn2 = document.getElementById("btn2")
let usersTable = document.getElementById("usersTable");



btn.addEventListener("click", userInfo);
btn2.addEventListener("click", findLastName);


function userInfo() {
	clear();
	let number = document.getElementById("number").value;
	clearInput();
	let xhr = new XMLHttpRequest();
	if (number == 1) {
		xhr.open("GET", "https://randomuser.me/api/");
	} else {
		xhr.open( "GET", `https://randomuser.me/api/?results=${number}`);
	}
	xhr.send();

	xhr.onload = function() {
		if(xhr.status != 200) {
			alert("Error");
		} else {
			arr = xhr.response;
			localStorage.setItem("users", arr);
			arr = JSON.parse(arr);
			drowTable();
	}
		
 }
}

function clear() {
	usersTable.innerHTML = "";
}
function clearInput() {
	number.value = "";
}
function checkLocalStorage() {
	return (localStorage.getItem("users") == null) ? [] : JSON.parse(localStorage.getItem("users"));
}
function drowTable() {
			let table = document.createElement('table');
			usersTable.append(table);
			table.innerHTML += `<tr>
			<td>Number</td>
			<td>First Name</td>
			<td>Last Name</td>
			<td>Gender</td>
			<td>Country</td>
			<td>Age</td>
			</tr>`;
			for(let i = 0; i <= (arr.results).length; i++){
				let j = i;
				j++;
				table.innerHTML += `
				<tr><td>${j}</td> 
				<td>${arr.results[i].name.first}</td> 
				<td>${arr.results[i].name.last}</td> 
				<td>${arr.results[i].gender}</td>
				<td>${arr.results[i].location.country}</td>
				<td>${arr.results[i].dob.age}</tr>
				`;
			}
}
function findLastName() {
	clear();
	users = checkLocalStorage();
	let table = document.createElement('table');
	usersTable.append(table);
	if(inputText.value > 0) {
	table.innerHTML += `<tr>
	<td>Number</td>
	<td>First Name</td>
	<td>Last Name</td>
	<td>Gender</td>
	<td>Country</td>
	<td>Age</td>
	</tr>`;
} 
		for(let i = 0; i < users.results.length; i++){
			if(users.results[i].name.last.substr(0, inputText.value.length) == inputText.value){
				let j = i;
				j++;
				table.innerHTML += `
				<tr><td>${j}</td> 
				<td>${arr.results[i].name.first}</td> 
				<td>${arr.results[i].name.last}</td> 
				<td>${arr.results[i].gender}</td>
				<td>${arr.results[i].location.country}</td>
				<td>${arr.results[i].dob.age}</tr>
				`;
			} 
		}
}
