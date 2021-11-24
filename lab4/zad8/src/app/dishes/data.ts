import { Dish } from './dish';

export const dishes: Dish[] = [
  {
    name: "Schabowy z ziemniakami",
    cuisine: "polska",
    category: "dania główne",
    ingredients: ["schab", "ziemniaki", "mąka", "jajko", "przyprawy"],
    maxReleases: 10,
    price: 30,
    description: "Smaczne tradycyjne polskie danie",
    images: ["https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/schabowe_01.jpg"]
  },
  {
    name: "Rosół",
    cuisine: "polska",
    category: "zupa",
    ingredients: ["mięso drobiowe", "włoszczyzna", "makaron"],
    maxReleases: 5,
    price: 40,
    description: "Królowa zup",
    images: ["https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/rosol_0.jpg"]
  },
  {
    name: "Spaghetti Bolognese",
    cuisine: "włoska",
    category: "makarony",
    ingredients: ["sos pomidorowy", "mięso mielone", "makaron", "zioła"],
    maxReleases: 20,
    price: 35,
    description: "Włoskie spaghetti",
    images: ["https://www.slimmingeats.com/blog/wp-content/uploads/2010/04/spaghetti-bolognese-36-720x720.jpg"]
  },
  {
    name: "Pizza",
    cuisine: "włoska",
    category: "dania główne",
    ingredients: ["ciasto drożdzowe", "pieczarki", "szynka", "ser", "oregami"],
    maxReleases: 180,
    price: 50,
    description: "Pizzaaaaaaaa",
    images: ["https://ocdn.eu/pulscms-transforms/1/p88k9kpTURBXy83ZmI0ZjU3MmYxNDhlMDI5NTUxODQ4MDg0OTM4ZTVmMC5qcGeTlQMAzKHNFEDNC2STBc0DFM0BvJMJpjEwMThmZQaBoTAB/domowa-pizza.jpg"]
  },
  {
    name: "Sałatka cezar",
    cuisine: "włoska",
    category: "sałatki",
    ingredients: ["sałata rzymska", "pierś z kurczaka", "sos", "grzanki", "parmezan"],
    maxReleases: 250,
    price: 10,
    description: "Pyszna i zdrowa sałatka",
    images: ["https://www.kuchniadoroty.pl/wp-content/uploads/2018/06/rzymska-salata.jpg"]
  },
  {
    name: "Bigos",
    cuisine: "polska",
    category: "dania główne",
    ingredients: ["kiełbasa", "kapusta kiszona", "grzyby", "szynka"],
    maxReleases: 300,
    price: 90,
    description: "Tradycja kuchni polskiej, litewskiej i białoruskiej",
    images: ["https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/bigos_z_kiszonej_kapusty_01_0.jpg"]
  },
  {
    name: "Burger wołowy",
    cuisine: "stany zjednoczone",
    category: "fast food",
    ingredients: ["mięso wołowe", "bułka", "sałata", "pomidor", "ser", "sos"],
    maxReleases: 500,
    price: 10,
    description: "Szybkie i smaczne",
    images: ["https://www.unileverfoodsolutions.pl/dam/global-ufs/mcos/NEE/calcmenu/recipes/PL-recipes/sandwiches/burger-francuski-z-kozim-serem-marmolad%C4%85-z-czerwonej-cebuli-i-rukol%C4%85/main-header.jpg"]
  },
  {
    name: "Sałatka gyros",
    cuisine: "polska",
    category: "sałatki",
    ingredients: ["kurczak", "cebula", "kukurydza", "ogórek konserwowy", "keczup", "majonez"],
    maxReleases: 1000,
    price: 15,
    description: "Wielowarstwowa sałatka",
    images: ["https://przepisna.pl/file/2019/10/salatka-gyros.png"]
  },
  {
    name: "Flaki",
    cuisine: "polska",
    category: "zupa",
    ingredients: ["flaki", "polewka"],
    maxReleases: 10,
    price: 50,
    description: "Tradycyjna potrawa mięsna w postaci gęstej zupy",
    images: ["https://polki.pl/foto/4_3_LARGE/flaki-przepis-magdy-gessler-2460222.jpg"]
  },
  {
    name: "Naleśniki z serem",
    cuisine: "międzynarodowa",
    category: "przystawka",
    ingredients: ["jajko", "mąka", "mleko", "ser biały", "śmietana"],
    maxReleases: 100,
    price: 20,
    description: "Przekąska na słodko",
    images: ["https://www.nalesniki.eu/wp-content/uploads/2015/02/nalesniki_z_serem.jpg"]
  },
  {
    name: "Ryż z kurczakiem słodkokwaśny",
    cuisine: "chińska",
    category: "dania główne",
    ingredients: ["ryż", "kurczak", "warzywa", "sos"],
    maxReleases: 300,
    price: 25,
    description: "Popularna chińska potrawa",
    images: ["https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/recipe/0002/14/ryz-z-kurczakiem-i-warzywami.jpeg"]
  },
  {
    name: "Makaroniki",
    cuisine: "francuska",
    category: "deser",
    ingredients: ["białka jaj", "curkier puder", "mielone migdały"],
    maxReleases: 70,
    price: 40,
    description: "Słodkie ciastko",
    images: ["https://www.oetker.pl/Recipe/Recipes/oetker.pl/pl-pl/baking/image-thumb__51716__RecipeDetailsLightBox/makaroniki.jpg"]
  },
];
