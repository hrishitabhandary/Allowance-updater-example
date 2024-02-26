const checkBox = document.querySelector("#shopping-check");
const para = document.querySelector(".allowance");
let shoppingDone;
checkBox.addEventListener("change",()=>{
    shoppingDone = checkBox.checked;
    updateAllowance();
});
function updateAllowance(){
    let childAllowance;
    if (shoppingDone){
        childAllowance = 100;
    }else{
        childAllowance = 50;
    }
    para.textContent = `Child has earned $${childAllowance} this week`;
}
// updateAllowance();