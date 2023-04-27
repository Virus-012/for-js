let data=
[
    {name:"Joe",account_no:101,password:"abc1",account_balance:100,transaction_pin:9879},
    {name:"Joy",account_no:102,password:"abc2",account_balance:100,transaction_pin:9878},
    {name:"Bob",account_no:103,password:"abc3",account_balance:100,transaction_pin:9877},
    {name:"Alex",account_no:104,password:"abc4",account_balance:100,transaction_pin:9876},
    {name:"Grey",account_no:105,password:"abc5",account_balance:100,transaction_pin:9875},
    {name:"Mia",account_no:106,password:"abc6",account_balance:100,transaction_pin:9874},
    {name:"Don",account_no:107,password:"abc7",account_balance:100,transaction_pin:9873},
    {name:"Jay",account_no:108,password:"abc8",account_balance:100,transaction_pin:9872},
    {name:"Maddy",account_no:109,password:"abc9",account_balance:100,transaction_pin:9871},
    {name:"Ray",account_no:110,password:"abc10",account_balance:100,transaction_pin:9870},

];
let a = Number(document.getElementById("an").value);
let p=document.getElementById("pw").value;
    i=0
function hide1(){
    let x=data[i]["account_no"];
    while(data[i])
    {
        if(a==x){
            document.getElementById("form1").style.display="none";
            document.getElementById('form2').style.display="block";
        }
        else{
            i++
        }

    } 
    
    while(data[i]
        {
            if()
        })
    
    
    //stores account number from login page
    // a=x;//Store in a
    // if(//)
    // {
        //if password mathes
        
    // }
    // else{
    //     alert("Wrong Password");
    // }
    

}

function hide2(){
    a;
    // loop
        // fethch the proper trasaction pin
        // Check the trasaction pin
            //check the balance
                //True
                    document.getElementById("form2").style.display="none";
                    document.getElementById('form3').style.display="block";
                //False
                    alert("Wrong Trasaction Pin");

}

function printPageArea(areaID){
    var printContent = document.getElementById(areaID).innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
   }



