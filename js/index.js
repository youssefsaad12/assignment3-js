var inputname=document.getElementById("inputname")
var inputurl=document.getElementById("inputurl")
var container=[];
if(localStorage.getItem('products')!=null){
    container=JSON.parse(localStorage.getItem("products"))
    display();
}
function addproduct(){
if (validationForm(inputname)&&validationForm(inputurl)) {
    var product={
        name:inputname.value,
        url:inputurl.value,
    }
    container.push(product)
    localStorage.setItem("products",JSON.stringify(container))
    display()
    clear()
}


}
function display(){
    var cartona='';
    for(var i=0 ;i<container.length;i++){
    cartona+=`<div class="d-flex my-2  align-items-center pt-2 border-top">
                    <div class="col-3 text-center" id="index>
                        <p class=" fw-bold">${i}</p>
                    </div>
                    <div class="col-3 text-center" id="inputname">
                        <p class=" fw-bold">${container[i].name}</p>
                    </div>
                    <div class="col-3 text-center" id="inputurl">
                    <a target="_blank" href="${container[i].url}"><button class=" btn btn-success  px-3 "><i class="fa-solid fa-eye pe-2"></i>visit</button></a>
                    
                    </div>
                    <div class="col-3 text-center" id="delete">
                        <button onclick="deleteitem(${i})" class=" btn btn-danger  px-3 "> <i class="fa-solid fa-trash-can pe-2"></i>delete</button>
                    </div>
                  </div>`
            }
document.getElementById("add").innerHTML=cartona;

}
function clear(){
inputname.value=null
inputurl.value=null
}
function deleteitem(deletedindex){
    container.splice(deletedindex,1)
    display()
    localStorage.setItem("products",JSON.stringify(container))

}
function validationForm(ele){
    var regex={
        inputname:/^[a-zA-Z0-9_]{3,}$/,
        inputurl: /^(www\.([a-z]|[A-Z]|[0-9]){2,})|(\.com)$/
    }
    if(regex[ele.id].test(ele.value)){
        ele.classList.remove("is-invalid")
        ele.classList.add("is-valid")
        ele.nextElementSibling.classList.add("d-none")
        return true
        
    }else{
        ele.classList.remove("is-valid")
        ele.classList.add("is-invalid")
        ele.nextElementSibling.classList.remove("d-none")
        return false

    }
}
