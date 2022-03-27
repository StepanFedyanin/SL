
// выпадающее меню в фильтере выпадающее меню в фильтере выпадающее меню в фильтере выпадающее меню в фильтере
const filter = document.getElementById("filter");
filter.addEventListener("click", e=>{
	FilterItem(e);
	})
function FilterItem(e){
	let obj =e.target;
	if(obj.classList.contains("filter__title--size")){
		const filterList = document.getElementById("FilterSizeList");
		filterList.classList.toggle("show")
	}
	if(obj.classList.contains("filter__title--color")){
		const filterList = document.getElementById("FilterСolorList");
		filterList.classList.toggle("show")
	}
	if(obj.classList.contains("filter__title--type")){
		const filterList = document.getElementById("FilterTypeList");
		filterList.classList.toggle("show")
	}
	if(obj.classList.contains("filter__title--season")){
		const filterList = document.getElementById("FilterSeasonList");
		filterList.classList.toggle("show")
	}
	if(obj.classList.contains("filter__title--composition")){
		const filterList = document.getElementById("FilterCompositionList");
		filterList.classList.toggle("show")
	}
}
const KatalogDest = document.getElementById("katalog__list");
const FilterSubmit = document.getElementById("filtersubmit");
FilterSubmit.onclick = function(){

	const SizeXS = document.getElementById("sizexs");
	const SizeS = document.getElementById("sizes");
	const SizeM = document.getElementById("sizem");
	const SizeL = document.getElementById("sizel");
	const SizeXL = document.getElementById("sizexl");
	const SizeXXL = document.getElementById("sizexxl");

	const ColorRed = document.getElementById("ColorRed");
	const ColorBlack = document.getElementById("ColorBlack");
	const ColorWhite = document.getElementById("ColorWhite");
	const ColorGreen = document.getElementById("ColorGreen");
	const ColorPurple = document.getElementById("ColorPurple");
	const ColorBlue = document.getElementById("ColorBlue");
	const ColorRainbow = document.getElementById("ColorRainbow");
	const ColorYellow = document.getElementById("ColorYellow");
	const ColorGray = document.getElementById("ColorGray");

	const TypeZip = document.getElementById("Typezip");
	const Typehoodie = document.getElementById("Typehoodie");
	const TypetShirts = document.getElementById("Typet-shirts");
	const TypeDownJacket = document.getElementById("TypeDownJacket");
	const TypeJeans = document.getElementById("TypeJeans");
	const TypeTurtlenecks = document.getElementById("TypeTurtlenecks");
	const TypeSkirts = document.getElementById("TypeSkirts");
	const TypeDresses = document.getElementById("TypeDresses");
	const TypeShirts = document.getElementById("Typezip");
	const TypeLongSleeves = document.getElementById("TypeLongSleeves");
	const TypeSweatshirts = document.getElementById("TypeSweatshirts");
	
	const SeasonSummer = document.getElementById("SeasonSummer");
	const SeasonWinter = document.getElementById("SeasonWinter");
	const SeasonDemi = document.getElementById("SeasonDemi");
	const SeasonYearRound = document.getElementById("SeasonYearRound");

	const СompositionСotton = document.getElementById("СompositionСotton");
	const СompositionPolyester = document.getElementById("СompositionPolyester");
	const СompositionWool = document.getElementById("СompositionWool");
	const СompositionDenim = document.getElementById("СompositionDenim");
	const СompositionLeather = document.getElementById("СompositionLeather");
	const СompositionLeatherDeputy = document.getElementById("СompositionLeatherDeputy");
	const СompositionNylon = document.getElementById("СompositionNylon");











	if(SizeXS.checked||SizeS.checked||SizeM.checked||SizeL.checked||SizeXL.checked||SizeXXL.checked||
		ColorRed.checked||ColorBlack.checked||ColorWhite.checked||ColorGreen.checked||ColorPurple.checked||ColorBlue.checked||ColorRainbow.checked||ColorYellow.checked||ColorGray.checked||
		TypeZip.checked||Typehoodie.checked||TypetShirts.checked||TypeDownJacket.checked||TypeJeans.checked||TypeTurtlenecks.checked||TypeSkirts.checked||TypeDresses.checked||TypeShirts.checked||TypeLongSleeves.checked||TypeSweatshirts.checked||
		SeasonSummer.checked||SeasonWinter.checked||SeasonDemi.checked||SeasonYearRound.checked||
		СompositionСotton.checked||СompositionPolyester.checked||СompositionWool.checked||СompositionDenim.checked||СompositionLeather.checked||СompositionLeatherDeputy.checked||СompositionNylon.checked)
		{
			while(KatalogDest.firstChild){
				KatalogDest.removeChild(KatalogDest.firstChild);
			}
			if(SizeXS.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][4]=="XS"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(SizeS.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][5]=="S"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(SizeM.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][6]=="M"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(SizeL.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][7]=="L"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(SizeXL.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][8]=="XL"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(SizeXXL.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][9]=="XXL"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}


			if(ColorRed.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][10]=="Red"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(ColorBlack.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][10]=="Black"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
				if(ColorWhite.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][10]=="White"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
				if(ColorGreen.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][10]=="Green"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
				if(ColorPurple.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][10]=="Purple"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
				if(ColorBlue.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][10]=="Blue"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
				if(ColorRainbow.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][10]=="Rainbow"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
				if(ColorYellow.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][10]=="Yellow"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
				if(ColorGray.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][10]=="Gray"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
		
		
		
			if(TypeZip.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][11]=="На молнии"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
			}
			if(Typehoodie.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][11]=="Худи"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(TypetShirts.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][11]=="Футболки"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(TypeDownJacket.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][11]=="Пуховики"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(TypeJeans.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][11]=="Джинсы"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(TypeTurtlenecks.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][11]=="Водолазки"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(TypeSkirts.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][11]=="Юбки"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(TypeDresses.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][11]=="Платья"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(TypeShirts.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][11]=="Рубашки"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(TypeLongSleeves.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][11]=="Лонгсливы"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(TypeSweatshirts.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][11]=="Тостовки"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
		
		
		
			if(SeasonSummer.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][12]=="Summer"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(SeasonWinter.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][12]=="Winter"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(SeasonDemi.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][12]=="Demi"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(SeasonYearRound.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][12]=="YearRound"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
		
		
		
			if(СompositionСotton.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][13]=="Сotton"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(СompositionPolyester.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][13]=="Polyester"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(СompositionWool.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][13]=="Wool"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(СompositionDenim.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][13]=="Denim"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(СompositionLeather.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][13]=="Leather"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(СompositionLeatherDeputy.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][13]=="LeatherDeputy"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
			if(СompositionNylon.checked){
				for(let i=0;i<4;i++){
					if(katalog[i][13]=="Nylon"){
						for(let j=0;j<1;j++){
							const KalalogclothesTitle = document.createElement("div");
							KalalogclothesTitle.classList.add("kalalogclothes__item--title");
							const KalalogclothesTitleStyle=document.createElement("h2")
							KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
							KalalogclothesTitleStyle.append(katalog[i][0])
							KalalogclothesTitle.append(KalalogclothesTitleStyle);
					
							const KalalogclothesPhoto = document.createElement("div");
							KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
							KalalogclothesPhoto.innerHTML= (katalog[i][3]);
					
							const KalalogclothesPrise = document.createElement("div");
							KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
							const KalalogclothesPriseStyle=document.createElement("h2");
							KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
							KalalogclothesPriseStyle.append(katalog[i][2]);
							KalalogclothesPrise.append(KalalogclothesPriseStyle);
					
					
							const KalalogclothesItem = document.createElement("div");
							KalalogclothesItem.classList.add("kalalogclothes__item");
							KalalogclothesItem.setAttribute("id",i);
							KalalogclothesItem.append(KalalogclothesTitle);
							KalalogclothesItem.append(KalalogclothesPhoto);
							KalalogclothesItem.append(KalalogclothesPrise);
							KatalogDest.append(KalalogclothesItem);
						}
					}
				}
		
			}
		}

}



katalog = [
	[title="Пуховик", color="black", prise="5990р",photo="<img src=\"photo/katalog/куртки.png\" alt=\"#\">",sizeXS="XS", sizeS="S", sizeM="M", sizeL="L", sizeXL="XL", sizeXXL="XXL",color="Black",type="Пуховики",season="Winter",composition="Nylon",OPcomposition="Состав: 90% нейлона 10% полиэстр",dopcomposition="Подкладка: шерсть",wash="Стирать: на бережной" ,dopWash="Сухая чистка: можно",dopinfo="Не отбеливать"],
	[title="Футболка", color="white" , prise="1990р",photo="<img src=\"photo/katalog/футболка.png\" alt=\"#\">",size="XS S",type="",season="",composition="",OPcomposition="Состав: 90% хлопок 10% полиэстр",dopcomposition="Подкладка: нет",wash="Стирать: на быстрой(90С)" ,dopWash="Сухая чистка: можно",dopinfo="Не отбеливать"],
	[title="Свитер", color="blue" , prise="2990р",photo="<img src=\"photo/katalog/свитер.png\" alt=\"#\">",size="M",type="",season="",composition=""],
	[title="Худи", color="black" , prise="2990р",photo="<img src=\"photo/katalog/худи.png\" alt=\"#\">",size="XXL",type="",season="",composition=""],
];
KatalogDest.addEventListener("click", e=>{
	ModalKatalog(e);
	})

const lsitclothes =document.getElementById("lsitclothes");
function ModalKatalog(e){
	let obj =e.target;
	if(obj.classList.contains("kalalogclothes__item")){
		KatalogDest.classList.add("hiden");
		lsitclothes.classList.add("hiden");
		const ModalwindowBack = document.createElement("div");
		ModalwindowBack.classList.add("ModalwindowBack");
		ModalwindowBack.innerHTML=("<img class=\"modalwindow__back--icon\" src=\"photo/katalog/Arrow.svg\" alt=\"#\">");



		const ModalwindowPhotoSmall = document.createElement("div");
		ModalwindowPhotoSmall.classList.add("modalwindow__photo--small");
		for(i=0;i<2;i++){
			for(j=0;j<1;j++){
				const ModalwindowPhotoItem = document.createElement("div");
				ModalwindowPhotoItem.classList.add("modalwindow__photo--item");
				ModalwindowPhotoItem.innerHTML=katalog[obj.id][3];
				ModalwindowPhotoSmall.append(ModalwindowPhotoItem);
			}
		}
		const ModalwindowPhotoBig = document.createElement("div");
		ModalwindowPhotoBig.classList.add("modalwindow__photo--big");
		const ModalwindowPhotoItem = document.createElement("div");
		ModalwindowPhotoItem.classList.add("modalwindow__photo--item");
		for(i=1;i<1;i++){
			for(j=0;j<1;j++){
				ModalwindowPhotoItem.innerHTML=katalog[obj.id][3];
				ModalwindowPhotoBig.append(ModalwindowPhotoItem);
			}
		}
		ModalwindowPhotoItem.innerHTML=katalog[obj.id][3];
		ModalwindowPhotoBig.append(ModalwindowPhotoItem);



		const ModalwindowPhoto = document.createElement("div");
		ModalwindowPhoto.classList.add("modalwindow__photo");
		ModalwindowPhoto.append(ModalwindowPhotoSmall);
		ModalwindowPhoto.append(ModalwindowPhotoBig);



		const ModalwindowInfo = document.createElement("div");
		ModalwindowInfo.classList.add("modalwindow__info");
		const ModalwindowContent = document.createElement("div");
		ModalwindowContent.classList.add("modalwindow__content");

		const ModalwindowTitle = document.createElement("div");
		ModalwindowTitle.classList.add("modalwindow__title");
		const ModalwindowTitleStyle = document.createElement("h1");
		ModalwindowTitleStyle.classList.add("modalwindow__title--style")
		ModalwindowTitleStyle.append(katalog[obj.id][0]);
		ModalwindowTitle.append(ModalwindowTitleStyle);
		ModalwindowInfo.append(ModalwindowTitle);


		const ModalwindowPrize = document.createElement("div");
		ModalwindowPrize.classList.add("modalwindow__prises");
		const ModalwindowPrizeStyle = document.createElement("p");
		ModalwindowPrizeStyle.classList.add("modalwindow__title--style")
		ModalwindowPrizeStyle.append(katalog[obj.id][2]);
		ModalwindowPrize.append(ModalwindowPrizeStyle);
		ModalwindowInfo.append(ModalwindowPrize);


		const ModalwindowListSize = document.createElement("div");
		ModalwindowListSize.classList.add("modalwindow__sizes");
		const ModalwindowSizeTitle = document.createElement("div");
		ModalwindowSizeTitle.classList.add("modalwindow__size--title");
		const ModalwindowSizeStyle = document.createElement("p");
		ModalwindowSizeStyle.append("Выбрать размер");
		ModalwindowSizeStyle.classList.add("modalwindow__size--style");
		ModalwindowSizeTitle.append(ModalwindowSizeStyle);
		ModalwindowListSize.append(ModalwindowSizeTitle)


		const ModalwindowSizeList = document.createElement("div");
		ModalwindowSizeList.classList.add("modalwindow__size--List");
		for(i=0;i<6;i++){
			const ModalwindowSize= document.createElement("div");
			ModalwindowSize.classList.add("modalwindow__size");
			if(i==0){
				const ModalwindowSizeInput = document.createElement("input");
				ModalwindowSizeInput.classList.add("Modalkatalog__item--input");
				ModalwindowSizeInput.setAttribute("type","radio")
				ModalwindowSizeInput.setAttribute("id","SizeXS")
				const ModalwindowSizelabel = document.createElement("label");
				ModalwindowSizelabel.classList.add("Modalkatalog__item--label");
				ModalwindowSizelabel.append("XS");
				ModalwindowSizelabel.setAttribute("for","SizeXS")
				ModalwindowSize.append(ModalwindowSizeInput);
				ModalwindowSize.append(ModalwindowSizelabel);
				ModalwindowSizeList.append(ModalwindowSize);

			}
			if(i==1){
				const ModalwindowSizeInput = document.createElement("input");
				ModalwindowSizeInput.classList.add("Modalkatalog__item--input");
				ModalwindowSizeInput.setAttribute("type","radio")
				ModalwindowSizeInput.setAttribute("id","SizeS")
				const ModalwindowSizelabel = document.createElement("label");
				ModalwindowSizelabel.classList.add("Modalkatalog__item--label");
				ModalwindowSizelabel.append("S");
				ModalwindowSizelabel.setAttribute("for","SizeS")
				ModalwindowSize.append(ModalwindowSizeInput);
				ModalwindowSize.append(ModalwindowSizelabel);
				ModalwindowSizeList.append(ModalwindowSize);

			}
			if(i==2){
				const ModalwindowSizeInput = document.createElement("input");
				ModalwindowSizeInput.classList.add("Modalkatalog__item--input");
				ModalwindowSizeInput.setAttribute("type","radio")
				ModalwindowSizeInput.setAttribute("id","SizeM")
				const ModalwindowSizelabel = document.createElement("label");
				ModalwindowSizelabel.classList.add("Modalkatalog__item--label");
				ModalwindowSizelabel.append("M");
				ModalwindowSizelabel.setAttribute("for","SizeM")
				ModalwindowSize.append(ModalwindowSizeInput);
				ModalwindowSize.append(ModalwindowSizelabel);
				ModalwindowSizeList.append(ModalwindowSize);

			}
			if(i==3){
				const ModalwindowSizeInput = document.createElement("input");
				ModalwindowSizeInput.classList.add("Modalkatalog__item--input");
				ModalwindowSizeInput.setAttribute("type","radio")
				ModalwindowSizeInput.setAttribute("id","SizeL")
				const ModalwindowSizelabel = document.createElement("label");
				ModalwindowSizelabel.classList.add("Modalkatalog__item--label");
				ModalwindowSizelabel.append("L");
				ModalwindowSizelabel.setAttribute("for","SizeL")
				ModalwindowSize.append(ModalwindowSizeInput);
				ModalwindowSize.append(ModalwindowSizelabel);
				ModalwindowSizeList.append(ModalwindowSize);
			}
			if(i==4){
				const ModalwindowSizeInput = document.createElement("input");
				ModalwindowSizeInput.classList.add("Modalkatalog__item--input");
				ModalwindowSizeInput.setAttribute("type","radio")
				ModalwindowSizeInput.setAttribute("id","SizeXL")
				const ModalwindowSizelabel = document.createElement("label");
				ModalwindowSizelabel.classList.add("Modalkatalog__item--label");
				ModalwindowSizelabel.append("XL");
				ModalwindowSizelabel.setAttribute("for","SizeXL")
				ModalwindowSize.append(ModalwindowSizeInput);
				ModalwindowSize.append(ModalwindowSizelabel);
				ModalwindowSizeList.append(ModalwindowSize);
			}
			if(i==5){
				const ModalwindowSizeInput = document.createElement("input");
				ModalwindowSizeInput.classList.add("Modalkatalog__item--input");
				ModalwindowSizeInput.setAttribute("type","radio")
				ModalwindowSizeInput.setAttribute("id","SizeXLL")
				const ModalwindowSizelabel = document.createElement("label");
				ModalwindowSizelabel.classList.add("Modalkatalog__item--label");
				ModalwindowSizelabel.append("XXL");
				ModalwindowSizelabel.setAttribute("for","SizeXLL")
				ModalwindowSize.append(ModalwindowSizeInput);
				ModalwindowSize.append(ModalwindowSizelabel);
				ModalwindowSizeList.append(ModalwindowSize);

			}
			ModalwindowListSize.append(ModalwindowSizeList)
		}
		ModalwindowInfo.append(ModalwindowListSize);


		const ModalwindowAdd = document.createElement("div");
		ModalwindowAdd.classList.add("modalwindow__add");
		for(i=0;i<2;i++){
			const ModalwindowAddItem= document.createElement("div");
			ModalwindowAddItem.classList.add("modalwindow__add--item");
			const ModalwindowAddButton=document.createElement("button") ;
			ModalwindowAddButton.classList.add("modalwindow__add--button"); // = document.createElement("input") //innerHTML=("<input class=\"modalwindow__add--button\" type=\"button\" value=\"\">");
			if(i==0){
				ModalwindowAddButton.append("В корзину")
			}
			if(i==1){
				ModalwindowAddButton.append("В избраноое")
			}
			ModalwindowAddItem.append(ModalwindowAddButton)
			ModalwindowAdd.append(ModalwindowAddItem);
		}
		ModalwindowInfo.append(ModalwindowAdd);


		const ModalwindowDescriptionName = document.createElement("div");
		ModalwindowDescriptionName.classList.add("modalwindow__description--name");
		const ModalwindowDescriptionTitile = document.createElement("h2");
		ModalwindowDescriptionTitile.append("Описание");
		ModalwindowDescriptionName.append(ModalwindowDescriptionTitile)


		const ModalwindowComposition = document.createElement("div");
		ModalwindowComposition.classList.add("modalwindow__composition");
		for(i=0;i<5;i++){
			const ModalwindowCompositionText = document.createElement("div");
			ModalwindowCompositionText.classList.add("modalwindow__composition--text");
			const ModalwindowCompositionStyle = document.createElement("p");
			ModalwindowCompositionStyle.classList.add("modalwindow__composition--style");
			if(i==0){
				ModalwindowCompositionStyle.append(katalog[obj.id][13])
				ModalwindowCompositionText.append(ModalwindowCompositionStyle);
			}
			if(i==1){
				ModalwindowCompositionStyle.append(katalog[obj.id][14])
				ModalwindowCompositionText.append(ModalwindowCompositionStyle);
			}
			if(i==2){
				ModalwindowCompositionStyle.append(katalog[obj.id][15])
				ModalwindowCompositionText.append(ModalwindowCompositionStyle);
			}
			if(i==3){
				ModalwindowCompositionStyle.append(katalog[obj.id][16])
				ModalwindowCompositionText.append(ModalwindowCompositionStyle);
			}
			if(i==4){
				ModalwindowCompositionStyle.append(katalog[obj.id][17])
				ModalwindowCompositionText.append(ModalwindowCompositionStyle);
			}
			ModalwindowComposition.append(ModalwindowCompositionText);
		}

		const ModalwindowDescription = document.createElement("div");
		ModalwindowDescription.classList.add("modalwindow__description");
		ModalwindowDescription.append(ModalwindowDescriptionName);
		ModalwindowDescription.append(ModalwindowComposition);


		ModalwindowInfo.append(ModalwindowDescription);






		ModalwindowContent.append(ModalwindowPhoto);
		ModalwindowContent.append(ModalwindowInfo);
		const ModalWindow = document.createElement("div");
		ModalWindow.classList.add("modalwindow");
		ModalWindow.append(ModalwindowBack);
		ModalWindow.append(ModalwindowContent);
		KatalogDest.append(ModalWindow);

	}
	if(obj.classList.contains("modalwindow__back--icon")){
		KatalogDest.classList.remove("hiden");
		obj.parentNode.parentNode.remove();
		lsitclothes.classList.remove("hiden");
	}
	if(obj.classList.contains("modalwindow__size--style")){
		obj.parentNode.classList.toggle("hiden");
	}
}


for(let i=0;i<4;i++){
	for(let j=0;j<1;j++){
		const KalalogclothesTitle = document.createElement("div");
		KalalogclothesTitle.classList.add("kalalogclothes__item--title");
		const KalalogclothesTitleStyle=document.createElement("h2")
		KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
		KalalogclothesTitleStyle.append(katalog[i][0])
		KalalogclothesTitle.append(KalalogclothesTitleStyle);

		const KalalogclothesPhoto = document.createElement("div");
		KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
		KalalogclothesPhoto.innerHTML= (katalog[i][3]);

		const KalalogclothesPrise = document.createElement("div");
		KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
		const KalalogclothesPriseStyle=document.createElement("h2");
		KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
		KalalogclothesPriseStyle.append(katalog[i][2]);
		KalalogclothesPrise.append(KalalogclothesPriseStyle);


		const KalalogclothesItem = document.createElement("div");
		KalalogclothesItem.classList.add("kalalogclothes__item");
		KalalogclothesItem.setAttribute("id",i);
		KalalogclothesItem.append(KalalogclothesTitle);
		KalalogclothesItem.append(KalalogclothesPhoto);
		KalalogclothesItem.append(KalalogclothesPrise);
		KatalogDest.append(KalalogclothesItem);
	}
}


