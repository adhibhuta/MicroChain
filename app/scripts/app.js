var abidef = '[{"constant": false,"inputs": [{"name": "_req_member","type": "address"},{"name": "__aadhaar","type": "uint256"}],"name": "add_Member","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "amt","type": "uint256"}],"name": "addMoneyToAccount","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "bubble_sort","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_aadhaar","type": "uint256"},{"name": "init_amount","type": "uint256"}],"name": "init_members","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "newadd","type": "address"}],"name": "onlynew","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "pay_loan","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "__amount","type": "uint256"}],"name": "pool","outputs": [],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"name": "_amount_","type": "uint256"}],"name": "req_Money","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"anonymous": false,"inputs": [{"indexed": false,"name": "personWhoTried","type": "address"},{"indexed": false,"name": "personWhoWasAdded","type": "address"}],"name": "SomeoneTriedToAddSomeone","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "personWhoSent","type": "address"},{"indexed": false,"name": "moneyHeSent","type": "uint256"}],"name": "SomeoneAddedMoneyToThePool","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "personWhoRequested","type": "address"},{"indexed": false,"name": "requestedM","type": "uint256"}],"name": "SomeoneRequestedForMoney","type": "event"},{"inputs": [],"payable": true,"stateMutability": "payable","type": "constructor"},{"payable": true,"stateMutability": "payable","type": "fallback"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "amounts","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "assign_loan_amount_from_pool","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "ad1","type": "address"}],"name": "check_time","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "displayAllowedForLoan","outputs": [{"name": "","type": "address[]"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getcurrtime","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getPoolMoney","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_master_address","type": "address"}],"name": "list_refrences","outputs": [{"name": "","type": "uint256"},{"name": "","type": "uint256"},{"name": "","type": "uint256"},{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "moneyHeHas","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}]';


var conadd = '0xde7fb742846ad2bc35e17bd7bca6b65139acba72';

var cb;
var abiDefinition;
var contract;
var instance;
var estimatedGas;
var parameterValue;
var txnObject;


window.addEventListener('load', function() {

  if (typeof web3 !== 'undefined') {
      alert('Unlock Metamask');
      $('#constat').text('CONNECTED');
      startApp();
  } else {
      alert('Install and Unlock Metamask');
      $('#constat').text('DISCONNECTED');
  }})

function startApp(){
    cb = web3.eth.coinbase;
    console.log(cb);

    abiDefinition = JSON.parse(abidef);
    contract = web3.eth.contract(abiDefinition);
    instance = contract.at(conadd);

    console.log(instance);
}

function preFunc()   {
    estimatedGas = 1000000;

    txnObject = {
        from: web3.eth.coinbase,
        gas: estimatedGas
    }}

function disLoan(){
  preFunc();
  instance.pay_loan.sendTransaction(txnObject,function(error, result) {
  console.log('RECVED>>',error,result);
       if(error){
           console.log('Send Transaction:   ',error,'',true);
       } else {
           console.log('Send Transaction:   ',parameterValue,result,result,false);
           alert('Succesful Transaction');
       }
   });
}

function AddInit2(){
       preFunc();
       addahar = document.getElementById('Uaadh').value;
       init_amount = document.getElementById('init_amount').value;
       instance.init_members.sendTransaction(addahar,init_amount,txnObject,function(error, result)  {
       console.log('RECVED>>',error,result);
            if(error){
                console.log('Send Transaction:   ',error,'',true);
            } else {
                console.log('Send Transaction:   ',parameterValue,result,result,false);
                alert('Succesful Transaction');
            }
        });
}

function AddInit() {
  var aadhid = $('#Uaadh').val();
  var adVal = isValidNumber(aadhid);
  if (adVal){
    alert('Valid Aadhar ID');
    AddInit2();
  }else{
    alert('Invalid Aadhar ID');
  }
}

function aadhar2(){
       preFunc();
       param1 = document.getElementById('aadId').value;
    	 param2 = document.getElementById('usrAddr').value;
       instance.add_Member.sendTransaction(param2,param1,txnObject,function(error, result)  {
       console.log('RECVED>>',error,result);
            if(error){
                console.log('Send Transaction:   ',error,'',true);
            } else {
                console.log('Send Transaction:   ',parameterValue,result,result,false);
                alert('Succesful Transaction');
            }
        });
}

function aadhvalidation() {
  var aadhid = document.getElementById('aadId').value;
  console.log("Addar"+aadhid);
  var adVal = isValidNumber(aadhid);
  if (adVal){
    alert('Valid Aadhar ID');
    aadhar2();
  }else{
    alert('Invalid Aadhar ID');
  }
}

function PolDep(){
       preFunc();
       parameterValue = document.getElementById('poolDep').value;
       instance.pool.sendTransaction(parameterValue,txnObject,function(error, result)  {
       console.log('RECVED>>',error,result);
            if(error){
                console.log('Send Transaction:   ',error,'',true);
            } else {
                console.log('Send Transaction:   ',parameterValue,result,result,false);
                alert('Succesful Transaction');
            }
        });
}

function getPoolMoney(){
  preFunc();
  instance.getPoolMoney(function(error,result){
  document.getElementById("getPoolMoney").innerHTML = result['c'][0];
  });
}

function getMyMoney(){
  preFunc();
  instance.moneyHeHas(function(error,result){
  document.getElementById("getMyMoney").innerHTML =  result['c'][0];
  });
}

function LoanReq(){
       preFunc();
       parameterValue = document.getElementById('AmtReq').value;
       instance.req_Money.sendTransaction(parameterValue,txnObject,function(error, result)  {
       console.log('RECVED>>',error,result);
            if(error){
                console.log('Send Transaction:   ',error,'',true);
            } else {
                console.log('Send Transaction:   ',parameterValue,result,result,false);
                alert('Succesful Transaction');
            }
        });
}
