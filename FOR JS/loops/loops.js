cars=["Abarth", 
"Alfa Romeo",
"Aston Martin",
"Audi",
"Bentley",
"BMW",
"Bugatti",
"Cadillac",
"Chevrolet",
"Chrysler",
"Citroën",
"Dacia",
"Daewoo",
"Daihatsu",
"Dodge",
"Donkervoort",
"DS",
"Ferrari",
"Fiat",
"Fisker",
"Ford",
"Honda",
"Hummer",
"Hyundai",
"Infiniti",
"Iveco",
"Jaguar",
"Jeep",
"Kia",
"KTM",
"Lada",
"Lamborghini",
"Lancia",
"Land Rover",
"Landwind",
"Lexus",
"Lotus",
"Maserati",
"Maybach",
"Mazda",
"McLaren",
"Mercedes-Benz",
"MG",
"Mini",
"Mitsubishi",
"Morgan",
"Nissan",
"Opel",
"Peugeot",
"Porsche",
"Renault",
"Rolls-Royce",
"Rover",
"Saab",
"Seat",
"Skoda",
"Smart",
"SsangYong",
"Subaru",
"Suzuki",
"Tesla",
"Toyota",
"Volkswagen",
"Volvo"
];
let t='<table class="side1"><tr><td class="t1"><ol><table class="side1">';
for(let x=0;x<cars.length;x++)
{
    a=Math.floor(Math.random() * 10000)+1000;
    if(x<32)
    {
    t+='<tr><td><li>'+cars[x]+'</td><td>'+a+'</li></td></tr>';
    if(x==31)
    {
    t+='</table></ol></td>';
    }
    }
    else
    {
        if(x==32)
        {
            t+='<td class=" t2"><ol start="33"><table class="side1">';
        }
    t+='<tr><td><li>'+cars[x]+'</td><td>'+a+'</li></td></tr>';
    }
}
t+='</table></ol></td></tr></table>'
document.getElementById('demo').innerHTML=t;
document.getElementById('demo').style.fontSize='20px';