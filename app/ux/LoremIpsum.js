Ext.define('Chat.ux.LoremIpsum', {

	getRandomInteger: function (min, max) {
		return Math.floor(Math.random()*(max-min)+min);
	},

	getWord: function () {
		return this.words[this.getRandomInteger(0, this.words.length)];
	},

	getWords: function (num) {
		var words = [];
		for (var i = 0; i < num; ++i) {
			words.push(this.getWord());
		}
		return words;
	},

	getSentence: function () {
		var words = this.getWords(this.getRandomInteger(4, 12));
		words[0] = words[0].substr(0,1).toUpperCase() + words[0].substr(1);
		return words.join(' ') + '.';
	},

	getParagraph: function () {
		var sentences = [];
		for (var i = 0; i < num; ++i) {
			sentences.push(this.getSentence());
		}
		return sentences.join(' ');
	},

	words: [
		"acervo", "ad", "addidit", "adhuc", "adsiduis", "adspirate", "aequalis",
		"aer", "aera", "aere", "aeris", "aestu", "aetas", "aethera", "aethere",
		"agitabilis", "aliis", "aliud", "alta", "altae", "alto", "ambitae",
		"amphitrite", "animal", "animalia", "animalibus", "animus", "ante", "aquae",
		"arce", "ardentior", "astra", "aurea", "auroram", "austro", "bene", "boreas",
		"bracchia", "caeca", "caecoque", "caeleste", "caeli", "caelo", "caelum",
		"caelumque", "caesa", "calidis", "caligine", "campoque", "campos", "capacius",
		"carentem", "carmen", "cepit", "certis", "cesserunt", "cetera", "chaos:",
		"cingebant", "cinxit", "circumdare", "circumfluus", "circumfuso",
		"coegit", "coeperunt", "coeptis", "coercuit", "cognati", "colebat",
		"concordi", "congeriem", "congestaque", "consistere", "contraria",
		"conversa", "convexi", "cornua", "corpora", "corpore", "crescendo", "cum",
		"cuncta", "cura", "declivia", "dedit", "deducite", "deerat", "dei", "densior",
		"deorum", "derecti", "descenderat", "deus", "dextra", "di", "dicere",
		"diffundi", "diremit", "discordia", "dispositam", "dissaepserat",
		"dissociata", "distinxit", "diu", "diversa", "diverso", "divino",
		"dixere", "dominari", "duae", "duas", "duris", "effervescere",
		"effigiem", "egens", "elementaque", "emicuit", "ensis", "eodem", "erant",
		"erat", "erat:", "erectos", "est", "et", "eurus", "evolvit", "exemit",
		"extendi", "fabricator", "facientes", "faecis", "fecit", "feras", "fert",
		"fidem", "figuras", "finxit", "fixo", "flamina", "flamma", "flexi",
		"fluminaque", "fontes", "foret", "forma", "formaeque", "formas", "fossae",
		"fratrum", "freta", "frigida", "frigore", "fronde", "fuerant", "fuerat",
		"fuit", "fulgura", "fulminibus", "galeae", "gentes", "glomeravit", "grandia",
		"gravitate", "habendum", "habentem", "habentia", "habitabilis", "habitandae",
		"haec", "hanc", "his", "homini", "hominum", "homo", "horrifer", "humanas",
		"hunc", "iapeto", "ignea", "igni", "ignotas", "illas", "ille", "illi",
		"illic", "illis", "imagine", "in", "inclusum", "indigestaque", "induit",
		"iners", "inmensa", "inminet", "innabilis", "inposuit", "instabilis", "inter",
		"invasit", "ipsa", "ita", "iudicis", "iuga", "iunctarum", "iussit",
		"lacusque", "lanient", "lapidosos", "lege", "legebantur", "levitate",
		"levius", "liberioris", "librata", "ligavit:", "limitibus", "liquidas",
		"liquidum", "litem", "litora", "locavit", "locis", "locoque", "locum",
		"longo", "lucis", "lumina", "madescit", "magni", "manebat", "mare", "margine",
		"matutinis", "mea", "media", "meis", "melior", "melioris", "membra", "mentes",
		"mentisque", "metusque", "militis", "minantia", "mixta", "mixtam",
		"moderantum", "modo", "moles", "mollia", "montes", "montibus", "mortales",
		"motura", "mundi", "mundo", "mundum", "mutastis", "mutatas", "nabataeaque",
		"nam", "natura", "naturae", "natus", "ne", "nebulas", "nec", "neu", "nisi",
		"nitidis", "nix", "non", "nondum", "norant", "nova", "nubes", "nubibus",
		"nullaque", "nulli", "nullo", "nullus", "numero", "nunc", "nuper", "obliquis",
		"obsistitur", "obstabatque", "occiduo", "omni", "omnia", "onerosior", "onus",
		"opifex", "oppida", "ora", "orba", "orbe", "orbem", "orbis", "origine",
		"origo", "os", "otia", "pace", "parte", "partim", "passim", "pendebat",
		"peragebant", "peregrinum", "permisit", "perpetuum", "persidaque",
		"perveniunt", "phoebe", "pinus", "piscibus", "plagae", "pluvialibus",
		"pluviaque", "poena", "pondere", "ponderibus", "pondus", "pontus",
		"porrexerat", "possedit", "posset:", "postquam", "praebebat", "praecipites",
		"praeter", "premuntur", "pressa", "prima", "primaque", "principio", "pro",
		"pronaque", "proxima", "proximus", "pugnabant", "pulsant", "quae", "quam",
		"quanto", "quarum", "quem", "qui", "quia", "quicquam", "quin", "quinta",
		"quisque", "quisquis", "quod", "quoque", "radiis", "rapidisque", "recens",
		"recepta", "recessit", "rectumque", "regat", "regio", "regna", "reparabat",
		"rerum", "retinebat", "ripis", "rudis", "sanctius", "sata", "satus",
		"scythiam", "secant", "secrevit", "sectamque", "secuit", "securae", "sed",
		"seductaque", "semina", "semine", "septemque", "sibi", "sic", "siccis",
		"sidera", "silvas", "sine", "sinistra", "sive", "sole", "solidumque", "solum",
		"sorbentur", "speciem", "spectent", "spisso", "sponte", "stagna", "sua",
		"subdita", "sublime", "subsidere", "sui", "suis", "summaque", "sunt", "super",
		"supplex", "surgere", "tanta", "tanto", "tegi", "tegit", "tellure", "tellus",
		"temperiemque", "tempora", "tenent", "tepescunt", "terra", "terrae", "terram",
		"terrarum", "terras", "terrenae", "terris", "timebat", "titan", "tollere",
		"tonitrua", "totidem", "totidemque", "toto", "tractu", "traxit", "triones",
		"tuba", "tum", "tumescere", "turba", "tuti", "ubi", "ulla", "ultima",
		"umentia", "umor", "unda", "undae", "undas", "undis", "uno", "unus", "usu",
		"ut", "utque", "utramque", "valles", "ventis", "ventos", "verba", "vesper",
		"videre", "vindice", "vis", "viseret", "vix", "volucres", "vos", "vultus",
		"zephyro", "zonae"
	]
});