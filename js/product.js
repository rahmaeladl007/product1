var product=document.getElementById("product");
var price=document.getElementById("price");
var texes=document.getElementById("texes");
var earnings=document.getElementById("earnings");
var advertisements=document.getElementById("advertisements");
var total=document.getElementById("total");
var btnTotal=document.getElementById("btnTotal");
function productData() {
    productList={
        product:product.value,
        price:price.value,
        texes:texes.value,
        earnings:earnings.value,
        advertisements:advertisements.value
        
    }
}productData();

btnTotal.addEventListener("click",function allProduct(){
  
priceAll= price.value-texes.value-advertisements.value+Number(earnings.value) ;

      
        total.innerHTML=priceAll;
      
    } )
   
