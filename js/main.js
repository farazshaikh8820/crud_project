const submit = document.querySelector(".btn");
const myTable = document.querySelector(".tableRow");

let selectedRow = null;

submit.addEventListener('click',(event)=> {
    event.preventDefault();

    let formData = readFormData();

    if(selectedRow === null){
        insertData(formData)
    }else{
        console.log("update")
        updatedata(formData)
    }
       
    }
);
// readdata
function readFormData(){
    let obj = {};
    obj["productCode"] = document.getElementById("productCode").value
    obj["Quantity"] = document.getElementById("Quantity").value
    obj["price"] = document.getElementById("price").value
    console.log(obj)
    return obj
}   

    const insertData = (data) =>{
        if(data.productCode === "" || data.Quantity === "" || data.price === ""){
            alert("please enter a value!")
        }else{
            let row = myTable.insertRow(myTable.rows.length);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);

            cell1.textContent = data.productCode
            cell2.textContent = data.Quantity
            cell3.textContent = data.price

            cell4.innerHTML = `<button type="button" class="btn btn-warning" onclick="editRow(this)">Edit</button>
                               <button type="button" class="btn btn-danger" onclick="deleteRow(this)">Delete</button>`
            
            clearInput();
           
           
        }
    }

    // edit function
    function editRow(button){
        selectedRow = button.closest("tr");
        document.getElementById("productCode").value =  selectedRow.cells[0].textContent
        document.getElementById("Quantity").value = selectedRow.cells[1].textContent
        document.getElementById("price").value = selectedRow.cells[2].textContent
        console.log(editRow)
        submit.textContent = "update"
    }
    // update function
    function updatedata(data){
        if(data.productCode === "" || data.Quantity === "" || data.price === ""){
            alert("please enter a value!")
        }else{
           selectedRow.cells[0].textContent = data.productCode
           selectedRow.cells[1].textContent = data.Quantity
           selectedRow.cells[2].textContent = data.price
           selectedRow = null;
           submit.textContent = "submit"
           clearInput();
    }
}
// clear input
function clearInput(){
    document.getElementById("productCode").value = "";
    document.getElementById("Quantity").value = "";
    document.getElementById("price").value = "";
}
// delete button
function deleteRow(button){
    if(confirm("Are you sure you want to delete?")){
        let row = button.closest("tr")
        row.remove();
    }

}