//Login Section
 const loginPage = document.getElementById('loginPage')
 const servicePage = document.getElementById('servicePage')
document.getElementById('loginbtn').addEventListener('click', function(event){
    event.preventDefault()
    const loginNumber = document.getElementById('phone').value ;
    const loginPin = document.getElementById('pin').value;

    if(!isNaN(loginNumber) && loginNumber.startsWith('01') && loginNumber.length === 11  && !isNaN(loginPin) && loginPin.length ===4){
        loginPage.style.display = 'none';
        servicePage.style.display = 'block'

    }else{
        alert('Input Correct Number And Password')
    }
})
// for forget passWord

document.getElementById('forgetPass').addEventListener('click', function(){
    alert('For PassWord: Use Any Random number as Password with length 4, For Number: Use any Bangladeshi 11 digits Number starts with 01')
})



/** For Service Page */
// logout Button
document.getElementById('logoutBtn').addEventListener('click', function(){
    loginPage.style.display ='block'
    loginPage.style.display = "flex";
    loginPage.style.justifyContent = "center";
        servicePage.style.display = 'none'
})



//add money button





const addMoneySection = document.getElementById('addMoneySection')
const latestSection = document.getElementById('latestSection')
const cancelAddMoney = document.getElementById('cancelAddMoney')

document.getElementById('addMoney').addEventListener('click', function(){
    addMoneySection.style.display = 'block'
    latestSection.style.display = 'none'
    cashoutMoneySection.style.display = 'none'
    transferMoneySection.style.display = 'none'
    GetBonusSection.style.display = 'none'
    payBillSection.style.display = 'none'
})

cancelAddMoney.addEventListener('click',function(){
    latestSection.style.display = 'block'
    addMoneySection.style.display = 'none'
    cashoutMoneySection.style.display = 'none'
    transferMoneySection.style.display = 'none'
    GetBonusSection.style.display = 'none'
    payBillSection.style.display = 'none'
})

//Add money Function



document.getElementById('addMoneyBtn').addEventListener('click', function(event){
    event.preventDefault()
    const bankSelect = document.getElementById('bankSelect');
      const accountNumber = document.getElementById('accountNumber').value;
      const depositAmount = document.getElementById('depositAmount').value;
      const pinNumber = document.getElementById('pinNumber').value;

      if(bankSelect.selectedIndex === 0){
        alert('Select An Account')
        return;
      }
      if(!accountNumber  || accountNumber.length !== 11){
        alert('Add A Proper 11 Digit Account Number')
        return;
      }
      if(isNaN(depositAmount) || depositAmount <= 0){
        alert('Please Add Valid Amount')
        return;
      }
      if(!pinNumber ||   pinNumber.length !== 4){
        alert('Add a Proper 4 Digit Pin')
        return;
      }

      const totalAmount = parseFloat(document.getElementById('totalAmount').textContent); 
      const newTotal = totalAmount + parseFloat(depositAmount);
      document.getElementById('totalAmount').textContent = newTotal.toFixed(2);



      document.getElementById('lastDeposit').innerText = '$'+depositAmount ;


      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString();
      document.getElementById('lastDepositTime').innerText = formattedDate;

})



//Cashout Section

const cancelCashoutMoney = document.getElementById('cancelCashoutMoney')
const cashoutMoneySection = document.getElementById('cashoutMoneySection')

document.getElementById('cashout').addEventListener('click', function(){
    cashoutMoneySection.style.display = 'block'
    latestSection.style.display = 'none'
    transferMoneySection.style.display = 'none'
    addMoneySection.style.display = 'none'
    GetBonusSection.style.display = 'none'
    payBillSection.style.display = 'none'
})

cancelCashoutMoney.addEventListener('click',function(){
    latestSection.style.display = 'block'
    cashoutMoneySection.style.display = 'none'
    addMoneySection.style.display = 'none'
    transferMoneySection.style.display = 'none'
    GetBonusSection.style.display = 'none'
    payBillSection.style.display = 'none'
})


//Transfer Section


const transferMoneySection = document.getElementById('transferMoneySection')
const cancelTransferMoney = document.getElementById('cancelTransferMoney')


document.getElementById('transfer').addEventListener('click', function(){
    transferMoneySection.style.display = 'block'
    cashoutMoneySection.style.display = 'none'
    latestSection.style.display = 'none'
    addMoneySection.style.display = 'none'
    GetBonusSection.style.display = 'none'
    payBillSection.style.display = 'none'
})

cancelTransferMoney.addEventListener('click', function(){
    latestSection.style.display = 'block'
    transferMoneySection.style.display = 'none'
    cashoutMoneySection.style.display = 'none'
    addMoneySection.style.display = 'none'
    GetBonusSection.style.display = 'none'
    payBillSection.style.display = 'none'
})



//Get Bonus Section

const cancelGetBonus = document.getElementById('cancelGetBonus')
const GetBonusSection = document.getElementById('GetBonusSection')

document.getElementById('getBonus').addEventListener('click', function(){

    GetBonusSection.style.display = 'block'
    latestSection.style.display = 'none'
    transferMoneySection.style.display = 'none'
    cashoutMoneySection.style.display = 'none'
    addMoneySection.style.display = 'none'
    payBillSection.style.display = 'none'
})
cancelGetBonus.addEventListener('click', function(){
    GetBonusSection.style.display = 'none'
    latestSection.style.display = 'block'
    transferMoneySection.style.display = 'none'
    cashoutMoneySection.style.display = 'none'
    addMoneySection.style.display = 'none'
    payBillSection.style.display = 'none'
})
// Pay Bill Section
const cancelpayBill = document.getElementById('cancelpayBill')
const payBillSection = document.getElementById('payBillSection')

document.getElementById('payBill').addEventListener('click', function(){
    payBillSection.style.display = 'block'
    GetBonusSection.style.display = 'none'
    latestSection.style.display = 'none'
    transferMoneySection.style.display = 'none'
    cashoutMoneySection.style.display = 'none'
    addMoneySection.style.display = 'none'

})

cancelpayBill.addEventListener('click', function(){
    payBillSection.style.display = 'none'
    GetBonusSection.style.display = 'none'
    latestSection.style.display = 'block'
    transferMoneySection.style.display = 'none'
    cashoutMoneySection.style.display = 'none'
    addMoneySection.style.display = 'none'
})


//Transection Section

document.getElementById('transection').addEventListener('click', function(){
    latestSection.style.display = 'block'
    payBillSection.style.display = 'none'
    GetBonusSection.style.display = 'none'
    transferMoneySection.style.display = 'none'
    cashoutMoneySection.style.display = 'none'
    addMoneySection.style.display = 'none'
})