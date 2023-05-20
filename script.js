let arr = [
    {id:"1.", name:"John", Profession:"Developer", Age:18},
    {id:"2.", name:"Jack", Profession:"Developer", Age:20},
    {id:"3.", name:"Karen", Profession:"Admin", Age:19}
];
function renderCards(filteredData){
    const list  = document.getElementById("list")
    arr.forEach(employee => {
        const card = document.createElement("p")
        card.classList.add("card");
        card.className = "card";

        const id = document.createElement("span")
        id.textContent = employee.id;
        id.className = "id";

        const name = document.createElement("span")
        name.textContent = "Name : " +  employee.name;
        name.className="name";

        const profession = document.createElement("span")
        profession.textContent = "Profession : " + employee.Profession;
        profession.className = "profession";

        const age = document.createElement("span")
        age.textContent = "Age : " + employee.Age;
        age.className = "age";

        card.appendChild(id);
        card.appendChild(name);
        card.appendChild(profession);
        card.appendChild(age);

        list.appendChild(card);

    });
} 
function filterCards() {
    const professionSelect = document.getElementById("profession");
    const selectedProfession = professionSelect.value;

    if (selectedProfession === "") {
      alert("Please select a profession before clicking the button.");
      return;
    }

    const filteredData = arr.filter((employee) => employee.Profession === selectedProfession);
    renderCards(filteredData);
  }

function addUser(){
   const nameInput = document.getElementById("name");
   const professionInput = document.getElementById("newProfession");
   const ageInput = document.getElementById("age");

   const name = nameInput.value;
   const profession = professionInput.value;
   const age = ageInput.value;
   
   const newUser = {
    id: arr.length + 1,
    name: name,
    profession: profession,
    age: age
   };
   arr.push(newUser);

   const list = document.getElementById("list");
   const card2 = document.createElement("div");
   card2.classList.add("card");
   card2.className = "card2";
   
   const idElement = document.createElement("p");
   idElement.textContent = arr.length + "."; 
   idElement.className = "id2"

   const nameElement = document.createElement("p");
   nameElement.textContent = "Name : " + newUser.name;
   nameElement.className = "name2"
   
   const professionElement = document.createElement("p");
   professionElement.textContent = "Profession : " + newUser.profession;
   professionElement.className = "profession2"

   const ageElement = document.createElement("p");
   ageElement.textContent = "Age : " + newUser.age;
   ageElement.className = "age2"

   card2.appendChild(idElement);
   card2.appendChild(nameElement);
   card2.appendChild(professionElement);
   card2.appendChild(ageElement);

   list.appendChild(card2);

   nameInput.value = "";
   professionInput.value = "";
   ageInput.value = "";
}
renderCards();