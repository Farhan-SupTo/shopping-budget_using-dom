document.getElementById("kitkat-buy-btn").addEventListener("click", function(){
  const quantity =  getInputValue("kitkat-quantity")
  const kitKatCost = quantity * 200;
  // document.getElementById("chocolate").innerText = kitKatCost;
  setInnerText("chocolate", kitKatCost)
  document.getElementById("kitkat-quantity").value =""
  total()
})
document.getElementById("rose-buy-btn").addEventListener("click", function(){
  const quantity = getInputValue("rose-quantity")
  const roseCost = quantity * 100;
  setInnerText("rose", roseCost)
  // document.getElementById("rose").innerText = roseCost;
  document.getElementById("rose-quantity").value =""
  total()
})
document.getElementById("diary-buy-btn").addEventListener("click", function(){
  const quantity = getInputValue("diary-quantity")
  const diaryCost = quantity * 50;
  setInnerText("diary", diaryCost)
  // below code is for without using re-usable function //
  // document.getElementById("diary").innerText = diaryCost; //
  document.getElementById("diary-quantity").value =""
  total()
})


// using re-usable function to display price of each component(like chocolate,rose,diary) //

function setInnerText(id, value){
  document.getElementById(id).innerText = value;
}

function getInputValue(id){
  const value = document.getElementById(id).value
  return parseInt(value)
}

function total(){
       const chocolate =document.getElementById("chocolate").innerText
       const rose =document.getElementById("rose").innerText
       const diary =document.getElementById("diary").innerText

       const totalSum =parseInt(chocolate) + parseInt(rose) + parseInt(diary)
      //  document.getElementById("total").innerText =totalSum
      setInnerText("total", totalSum)
}

document.getElementById("promoApplyButton").addEventListener("click", function(){
  const promoCode = document.getElementById("promo-code").value
  if(promoCode == 101){
    const total = document.getElementById("total").innerText
    const result = parseInt(total) - parseInt(total) * 0.1
    setInnerText("all-total",result)

  }else{
    alert("please provide a valid promo code")
  }
})