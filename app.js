//1
var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];

    for(var key in itemsArray){
        var items=itemsArray[key]
  console.log(items)
  var itemPrice=items.price * items.quantity
  console.log(` The price of ${items.name} is Rs.${itemPrice}`)

  totalPriceofItems+=itemPrice;
  console.log(`Total price of all item is:${totalPriceofItems}`)

    }
   
    //2

    var object={
      name : "dania" ,
      age  : 19     ,
     password : "123abc" ,
     gender : "female"  ,
     city : "karachi"   ,
     country : "Pakistan"
     }


     //3
     function Student(name,age,grade){
      this.name=name;
      this.age=age;
      

      
     }


     var func1=new Student("Dania", "19"
      console.log(func1)
     )

     //4

     function record(name,age){
      this.name=name;
      this.age=age
     }