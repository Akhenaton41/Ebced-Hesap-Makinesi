function autocomplete2(a,arr,val,inp){
	adVar=false
	val=val.split(" ")
	
	abort = false;
	
	for (jj = 0; jj < arr.length  && !abort; jj++) {
		isim1=arr[jj].split(ayrac)
		if(isim1[0].toLocaleUpperCase('tr-TR')==val[0].toLocaleUpperCase('tr-TR')){abort = true;break;}
	}
	
	if(!abort){return}
	
	yeni=[]
	
	for (i = 0; i < arr.length; i++) {
		isim2=arr[i].split(ayrac)
		
		cinsiyet=isim1[1]+""+isim2[1]
		
		if (isim2[0].substr(0, val[1].length).toLocaleUpperCase('tr-TR') == val[1].toLocaleUpperCase('tr-TR') && cinsiyet!="01" && cinsiyet!="10" && isim1[0]!=isim2[0]) {

			b = document.createElement("DIV");
         
			b.innerHTML = "<strong>" + isim1[0]+" "+isim2[0].substr(0, val[1].length) + "</strong>";
			b.innerHTML += isim2[0].substr(val[1].length);
         
			if(isim1[1]==0){b.innerHTML="<span>&#128104;</span> "+b.innerHTML}
			else if(isim1[1]==1){b.innerHTML="<span>&#128105;</span> "+b.innerHTML}
			else if(isim1[1]==2){b.innerHTML="<span>&#128100;</span> "+b.innerHTML}

			b.innerHTML += "<input type='hidden' value='" + isim1[0]+" "+isim2[0] + "'>";
			b.innerHTML += "<input type='hidden' value='" + isim1[2]+" "+isim2[2] + "'>";
			
			b.addEventListener("click", function(e) {
				inp.value = this.getElementsByTagName("input")[0].value; 
				isimEkle(this.getElementsByTagName("input"))
				closeAllLists();
			});
			a.appendChild(b);
		}
	}
	
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		
		if (e.keyCode == 40) {
			currentFocus++;
			addActive(x);
		} else if (e.keyCode == 38) { //up
			currentFocus--;
			addActive(x);
		} else if (e.keyCode == 13) {
			closeAllLists();
			e.preventDefault();
			if (currentFocus > -1) {if (x) x[currentFocus].click();}
		}
	});
  
	function addActive(x) {
		if (!x) return false;
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		x[currentFocus].classList.add("autocomplete-active");
	}

	function removeActive(x) {
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}
	
	function closeAllLists(elmnt) {
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}

	document.addEventListener("click", function (e){closeAllLists(e.target);});
}

function autocomplete(inp, arr) {
	var currentFocus;
	
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		
		closeAllLists();
		if (!val) { return false;}
		currentFocus = -1;
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		document.getElementsByClassName("autocomplete")[0].appendChild(a);
		
		if(val.indexOf(" ")>0){autocomplete2(a,arr,val,inp)}
		
		for (i = 0; i < arr.length; i++) {
			e$=arr[i].split(ayrac)
			
			if (e$[0].substr(0, val.length).toLocaleUpperCase('tr-TR') == val.toLocaleUpperCase('tr-TR')) {
				b = document.createElement("DIV");
         
				b.innerHTML = "<strong>" + e$[0].substr(0, val.length) + "</strong>";
				b.innerHTML += e$[0].substr(val.length);
         
				if(e$[1]==0){b.innerHTML="<span>&#128104;</span> "+b.innerHTML}
				else if(e$[1]==1){b.innerHTML="<span>&#128105;</span> "+b.innerHTML}
				else if(e$[1]==2){b.innerHTML="<span>&#128100;</span> "+b.innerHTML}
         
				b.innerHTML += "<input type='hidden' value='" + e$[0] + "'>";
				b.innerHTML += "<input type='hidden' value='" + e$[2] + "'>";
          
				b.addEventListener("click", function(e) {
					inp.value = this.getElementsByTagName("input")[0].value;      
					isimEkle(this.getElementsByTagName("input"))
					closeAllLists();
					inp.focus();
				});
				a.appendChild(b);
			}
		}
	});

	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
      
		if (e.keyCode == 40) {
			currentFocus++;
			addActive(x);
		} else if (e.keyCode == 38) { //up
			currentFocus--;
			addActive(x);
		} else if (e.keyCode == 13) {
			Bul()
			closeAllLists();
			e.preventDefault();
			if (currentFocus > -1) {if (x) x[currentFocus].click();}
		}
	});
  
	function addActive(x) {
		if (!x) return false;
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		x[currentFocus].classList.add("autocomplete-active");
	}

	function removeActive(x) {
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}
	
	function closeAllLists(elmnt) {
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}

	document.addEventListener("click", function (e){closeAllLists(e.target);});
} // <--- KRÝTÝK KAPANIÞ: autocomplete fonksiyonu burada bitti, alt taraf tamamen özgürleþti!

function butonDurumuDegistir(){
	if(id("R2").checked){
		id("hesaplaButonu").className="belirme"
		id("hesaplaButonu").style.display="block"
	}else{
		id("hesaplaButonu").className="yokolma"
		setTimeout(function(){id("hesaplaButonu").style.display="none"}, 900)
	}
	kaydir("hesaplaButonu")
}

function ekranaKopyala(e){
	id("screen").value=e
	if(id("R1").checked){ebcedGetir()}
	kaydir("screen")
}

function kaydir(hedefId) {
    if (id(hedefId)) {
        id(hedefId).scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function gizleGetir(e){
    var görünüm = (e == 1) ? "inline-block" : "none";
    var labels = document.getElementsByClassName("switch-field")[1];
    if (!labels) return;

    var inputlar = labels.getElementsByTagName("input");
    var labellar = labels.getElementsByTagName("label");

    for (var i = 1; i < inputlar.length; i++) {
        if (inputlar[i]) inputlar[i].style.display = görünüm;
        if (labellar[i]) labellar[i].style.display = görünüm;
    }
}

function klavyeGetir(degisken){

console.log("--- klavyeGetir TETÝKLENDÝ ---");
	a$="<center><ul id='numbers'>"
	
	for(i=0;i<degisken.length;i++){
		harf=degisken[i].split("·")
		a$+="<li onclick='harfEkle(this)'"
		if(harf[2]==2){a$+=" class='uzun'"}
		if(harf[2]==3){a$+=" class='uzun-mavi'"}
		a$+="><a class='key' href='javascript:'>"
		a$+="<b>"+harf[1]+"</b><br>"
		a$+="<span>"+harf[0]+"</span>"
	}
	
	a$+="</ul></center>"

	id("keyboard").innerHTML=a$
	console.log("Klavye HTML içeriði baþarýyla 'keyboard' divine basýldý.");
}
	
// Fonksiyonu doðrudan pencereye (window) baðlýyoruz ki hiçbir harici listener onu ezemesin!
window.klavyeSec = function(e) {
	console.log("=== klavyeSec TETÝKLENDÝ ===");
	
	var kaynakElement = e;
	var secilenDeger = "";

	if (e && typeof e === 'object' && e.value !== undefined) {
		secilenDeger = e.value;
	} else {
		secilenDeger = e;
	}
	
	eskiKlavye = secilenDeger;
	
	if (id("screen")) { id("screen").value = ""; }
	if (typeof ebcedGetir === "function") { ebcedGetir(); }
	
	font$ = false;
	dir$ = false;
	
	if(secilenDeger == 0){ klavyeGetir(Osmanlica); font$ = "'Amiri', serif"; dir$ = "rtl"; gizleGetir(1); }
	if(secilenDeger == 1){ klavyeGetir(Ibranice); font$ = "'Frank Ruhl Libre', serif"; dir$ = "rtl"; if(id("R3")){id("R3").checked=true;} gizleGetir(0); }
	if(secilenDeger == 2){ klavyeGetir(Yunanca); font$ = "'Noto Serif Display', serif"; dir$ = "ltr"; if(id("R3")){id("R3").checked=true;} gizleGetir(0); }

	if(secilenDeger == 3){
		klavyeGetir(Suryanice);
		font$ = "'Noto Syriac', serif"; 
		dir$ = "rtl"; 
		if(id("R3")){id("R3").checked=true;} 
		gizleGetir(0);
	}

	if(secilenDeger == 4){
		klavyeGetir(Aramice);
		font$ = "'Frank Ruhl Libre', serif"; 
		dir$ = "rtl"; 
		if(id("R3")){id("R3").checked=true;} 
		gizleGetir(0);
	}
	
	keys = document.querySelectorAll('.key');
	
	if(font$){
		keys.forEach(box => {
			if (box.childNodes[0]) {
				box.childNodes[0].style.fontFamily = font$;
				box.childNodes[0].style.animationName = "Belirme";
			}
		});
		
		if (id("screen")) {
			id("screen").style.fontFamily = font$;
			if(dir$){ id("screen").style.direction = dir$; }
		}
	}

	// Hafýza kaydýný da doðrudan ana fonksiyonun içinde bitiriyoruz
	if (kaynakElement && kaynakElement.id) {
		console.log("Hafýzaya yazýlan ID:", kaynakElement.id);
		localStorage.setItem('seciliKlavye', kaynakElement.id);
	}
}

function Temizle(){
	id("myInput").value=""
	if(document.getElementsByClassName("aciklama")[0]){
		setTimeout(function(){ if(document.getElementsByClassName("aciklama")[0]) { document.getElementsByClassName("aciklama")[0].remove() } }, 900)		
		document.getElementsByClassName("aciklama")[0].className="aciklama Yokolma"
	}
	id("myInput").focus()
}

function TurkceSiralama(a,b){ return a.localeCompare(b); }