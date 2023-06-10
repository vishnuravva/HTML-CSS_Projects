// const billTotal = document.querySelector('.billField')
// const tip = document.querySelector('.tipField')
// const h3 = document.querySelector('.val')
const billInput = document.getElementById('bill')
const tipField = document.getElementById('tip')
const  totalPer = document.getElementById('totalPer')

const noOfPeopleDiv = document.getElementById('val')
let noOfPeople = Number(noOfPeopleDiv.innerText)

function inc(){
    noOfPeople+=1
    noOfPeopleDiv.innerText = noOfPeople
    calculateBill()
}
function dec(){
    if(noOfPeople < 2){
        return 
    }
    noOfPeople-=1
    noOfPeopleDiv.innerText = noOfPeople
    calculateBill()
}

function calculateBill(){
     const bill = Number(billInput.value)

     const tipPercent = Number(tipField.value) / 100

     const tipAmt = bill * tipPercent
    //  console.log({tipAmt})

     const total = tipAmt + bill
    //  console.log({total})

     const perPersonTotal = total / noOfPeople
    //  console.log(perPersonTotal)


     totalPer.innerHTML = `$${perPersonTotal.toFixed(2)}`
}
