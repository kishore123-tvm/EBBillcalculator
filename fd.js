function ebBill(){
    const unit = Number(document.getElementById("input").value)
    let cost = 0
    //else if ladder
    // <3 months - 5.8% 
    // 3 - 6 months - 6.5%
    // 7 - 9 months - 6.8% 
    // >=10 months - 7%

    if(unit<50)
        cost = 0.75*50
    else if(unit>100)
        cost = (unit-50)+(1*50)
    else if(unit>200)
        cost = (unit-50)+(unit-100)+(1.30*150)
    else
        cost = (unit-50)+(unit-50)+(unit-150)+(1.50*100)
    
    let result = document.querySelector('#result')
    result.innerHTML = "Your Eb Bill is Rs" + cost  
  }