function add()
{
    let input=document.getElementById("input")
    let str=input.value;
    if(str=="")
    {
        alert("Please write something")
        return;
    }
    let box=document.getElementById('ToDo')
    let newElement=document.createElement("div")
    let element=document.createElement("div");
    let buttondiv=document.createElement("div");
    let checkdiv=document.createElement("div");
    let textdiv=document.createElement("div");
    let check=document.createElement("input");
    let button=document.createElement("button");
    newElement.classList.add("list")
    element.classList.add("textchecking")
    checkdiv.classList.add("checkbox")
    textdiv.classList.add("text")
    check.type="checkbox"
    check.value=0;
    button.classList.add("bttn")
    button.innerHTML="&#10005"
    checkdiv.appendChild(check)
    buttondiv.appendChild(button);
    button.onclick=function func()
    {
        button.parentElement.parentElement.remove();
    }
    check.onclick=function fun()
    {
        if(check.value%2==0)
        {
            check.parentElement.parentElement.style.textDecoration="line-through"
        }
        else
        {
            check.parentElement.parentElement.style.textDecoration="none"
        }
        check.value=(check.value+1)%2;
    }
    textdiv.innerHTML=str;
    element.appendChild(checkdiv);
    element.appendChild(textdiv);
    newElement.appendChild(element)
    newElement.appendChild(buttondiv)
    box.appendChild(newElement)
    input.value=""
}