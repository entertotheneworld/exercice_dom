// Onglets
var onglets = document.getElementById("onglets");
var contenus = document.getElementById("contenus");

var liOnglet = onglets.getElementsByTagName("li");
var liContenu = contenus.getElementsByTagName("li");

liOnglet[0].className = "actif";
liContenu[0].className = "actif";

for (var i = 0; i < liOnglet.length; i++){
	liOnglet[i].num = i;

    liOnglet[i].addEventListener("click", function(){
    
		for (var j = 0; j < liOnglet.length; j++){
			liOnglet[j].className="";
			liContenu[j].className="";
		}

		liOnglet[this.num].className="actif";
		liContenu[this.num].className="actif";
	});
}

// IA Menu
const mainCourses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"];
const techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"];
const sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"];
const seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"];

const getRandom = (data) => data[Math.floor(Math.random() * data.length)];

const menu = `${getRandom(mainCourses)} ${getRandom(techniques)}, avec ${getRandom(sides)} ${getRandom(seasonings)}`

var changeMenu = document.getElementById("changeMenu");
var menuPrint = document.getElementById("menu");
menuPrint.innerHTML = menu;

changeMenu.addEventListener("click", function(){
    const menu = `${getRandom(mainCourses)} ${getRandom(techniques)}, avec ${getRandom(sides)} ${getRandom(seasonings)}`
    menuPrint.innerHTML = menu;
});

// Popup
document.documentElement.addEventListener('mouseleave', () => {
    document.getElementById("modal").style.display = "block";
});

var closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", function(){
    document.getElementById("modal").style.display = "none";
});