const cars = [
    { brand: 'BMW', model: '320i', year: 2008, end: 2015, price: 32000 },
    { brand: 'Audi', model: 'A6', year: 2014, end: 2018, price: 36000 },
    { brand: 'Opel', model: 'Astra', year: 1996, end: 2001, price: 11000 },
    { brand: 'Volkswagen', model: 'Passat', year: 2002, end: 2007, price: 22000 },
    { brand: 'Citroen', model: 'C2', year: 1998, end: 2000, price: 18000 },
    { brand: 'Peugeot', model: '407', year: 2004, end: 2009, price: 17000 },
    { brand: 'Seat', model: 'Leon', year: 2003, end: 2015, price: 13000 },
    { brand: 'Suzuki', model: 'Roadster', year: 2016, end: 2018, price: 8900 },
    { brand: 'Dacia', model: 'Logan', year: 2006, end: 2015, price: 5500 },
    { brand: 'Renault', model: 'Megane', year: 2005, end: 2015, price: 16700 },
    { brand: 'Mercedes', model: 'C320', year: 1994, end: 2015, price: 31300 },
    { brand: 'Ferrari', model: '360 Modena', year: 1995, end: 2015, price: 180000 }
  ];

  let i=0;
  let t="";
  while(cars[i])
  {
    t+="<h1>Brand Name:"+cars[i]['brand']+'</h1>';
    t+="<img src='"+cars[i]['model']+".jpg'>";
    t+="<table style='width:100%; font-size:25px;'><tr>";
    t+="<td>Model:"+cars[i]['model']+"</td>"
    t+="<td>Year:"+cars[i]['year']+"</td>"
    t+="<td>End:"+cars[i]['end']+"</td>"
    t+="<td>Price:$"+cars[i]['price']+"</td>"
    t+="</tr></table>";
    i++;
  }
  document.getElementById("cars").innerHTML=t;