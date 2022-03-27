const headerBurger = document.getElementById("header__burger");
const headerMenu = document.getElementById("header__menu");
const headerDop = document.getElementById("header__dopmenu");
const HeaderInner = document.getElementById("header__inner");
const HeaderList = document.getElementById("header__list");
const HeaderDopList = document.getElementById("header__drp--list");
const Headerinfo = document.querySelectorAll("eader__list--info");
const HeaderLogo = document.getElementById("header__logo");
headerBurger.onclick= function(){
	console.log(Headerinfo)
	if(headerBurger.classList.contains("active"))
	{
		headerBurger.classList.remove("active");
		headerMenu.classList.remove("active");
		headerDop.classList.remove("active");
		HeaderInner.classList.remove("active");
		HeaderList.classList.remove("active");
		HeaderLogo.classList.remove("active");
		HeaderDopList.classList.remove("active");


	}
	else{
		headerBurger.classList.add("active");
		headerMenu.classList.add("active");
		headerDop.classList.add("active");
		HeaderInner.classList.add("active");
		HeaderList.classList.add("active");
		HeaderLogo.classList.add("active");
		HeaderDopList.classList.add("active");




	}
}
// Footer адаптив адаптив Footer адаптив адаптив Footer адаптив адаптив
var company = document.getElementById("company__footer");
var companyList = document.getElementById("company__list");
company.onclick= function(){
	if(companyList.classList.contains("active")){
		companyList.classList.remove("active")
		company.classList.remove("border")
	}else{
		companyList.classList.add("active")
		company.classList.add("border")
	}
}
var buyer = document.getElementById("buyer__footer");
var buyerList = document.getElementById("buyer__list");
buyer.onclick= function(){
	if(buyerList.classList.contains("active")){
		buyerList.classList.remove("active")
		buyer.classList.remove("border") 
	}else{
		buyerList.classList.add("active")
		buyer.classList.add("border") 
	}
}

