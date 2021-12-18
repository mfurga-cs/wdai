import { Dish } from '../models/dish';
import { Review } from '../models/review';

export const REVIEWS: Review[] = [
  {
    dishId: 1,
    nick: "Zbyś",
    name: "Dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit commodo lacus, a porta augue malesuada non. Mauris tristique commodo nibh ac interdum. Sed varius sed justo sit amet varius. Donec justo augue, pharetra eu sagittis in, pretium a massa. Sed interdum erat sed quam ullamcorper blandit",
    purchaseDate: ""
  },
  {
    dishId: 1,
    nick: "Zbyś",
    name: "Ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit commodo lacus, a porta augue malesuada non. Mauris tristique commodo nibh ac interdum. Sed varius sed justo sit amet varius. Donec justo augue, pharetra eu sagittis in, pretium a massa. Sed interdum erat sed quam ullamcorper blandit",
    purchaseDate: "2021-12-03"
  },
  {
    dishId: 2,
    nick: "Zbyś",
    name: "Dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit commodo lacus, a porta augue malesuada non. Mauris tristique commodo nibh ac interdum. Sed varius sed justo sit amet varius. Donec justo augue, pharetra eu sagittis in, pretium a massa. Sed interdum erat sed quam ullamcorper blandit",
    purchaseDate: ""
  },
  {
    dishId: 2,
    nick: "Zbyś",
    name: "Ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit commodo lacus, a porta augue malesuada non. Mauris tristique commodo nibh ac interdum. Sed varius sed justo sit amet varius. Donec justo augue, pharetra eu sagittis in, pretium a massa. Sed interdum erat sed quam ullamcorper blandit",
    purchaseDate: "2021-12-03"
  },
  {
    dishId: 3,
    nick: "Zbyś",
    name: "Dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit commodo lacus, a porta augue malesuada non. Mauris tristique commodo nibh ac interdum. Sed varius sed justo sit amet varius. Donec justo augue, pharetra eu sagittis in, pretium a massa. Sed interdum erat sed quam ullamcorper blandit",
    purchaseDate: ""
  },
  {
    dishId: 3,
    nick: "Zbyś",
    name: "Ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit commodo lacus, a porta augue malesuada non. Mauris tristique commodo nibh ac interdum. Sed varius sed justo sit amet varius. Donec justo augue, pharetra eu sagittis in, pretium a massa. Sed interdum erat sed quam ullamcorper blandit",
    purchaseDate: "2021-12-03"
  }
];

export const DISHES: Dish[] = [
  {
    id: 1,
    name: "Schabowy z ziemniakami",
    cuisine: "polska",
    category: "dania główne",
    ingredients: ["schab", "ziemniaki", "mąka", "jajko", "przyprawy"],
    maxReleases: 10,
    price: 30,
    ranking: 2,
    description: "Smaczne tradycyjne polskie danie",
    images: ["https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/schabowe_01.jpg"]
  },
  {
    id: 2,
    name: "Rosół",
    cuisine: "polska",
    category: "zupa",
    ingredients: ["mięso drobiowe", "włoszczyzna", "makaron"],
    maxReleases: 5,
    price: 40,
    ranking: 4,
    description: "Królowa zup",
    images: ["https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/rosol_0.jpg"]
  },
  {
    id: 3,
    name: "Spaghetti Bolognese",
    cuisine: "włoska",
    category: "makarony",
    ingredients: ["sos pomidorowy", "mięso mielone", "makaron", "zioła"],
    maxReleases: 20,
    price: 35,
    ranking: 0,
    description: "Włoskie spaghetti",
    images: ["https://www.slimmingeats.com/blog/wp-content/uploads/2010/04/spaghetti-bolognese-36-720x720.jpg",
             "https://www.unileverfoodsolutions.pl/dam/global-ufs/mcos/NEE/calcmenu/recipes/PL-recipes/general/spaghetti-bolognese/main-header.jpg"]
  },
  {
    id: 4,
    name: "Pizza",
    cuisine: "włoska",
    category: "dania główne",
    ingredients: ["ciasto drożdzowe", "pieczarki", "szynka", "ser", "oregami"],
    maxReleases: 180,
    price: 50,
    ranking: 0,
    description: "Pizzaaaaaaaa",
    images: ["https://ocdn.eu/pulscms-transforms/1/p88k9kpTURBXy83ZmI0ZjU3MmYxNDhlMDI5NTUxODQ4MDg0OTM4ZTVmMC5qcGeTlQMAzKHNFEDNC2STBc0DFM0BvJMJpjEwMThmZQaBoTAB/domowa-pizza.jpg"]
  },
  {
    id: 5,
    name: "Sałatka cezar",
    cuisine: "włoska",
    category: "sałatki",
    ingredients: ["sałata rzymska", "pierś z kurczaka", "sos", "grzanki", "parmezan"],
    maxReleases: 250,
    price: 10,
    ranking: 5,
    description: "Pyszna i zdrowa sałatka",
    images: ["https://www.kuchniadoroty.pl/wp-content/uploads/2018/06/rzymska-salata.jpg"]
  },
  {
    id: 6,
    name: "Bigos",
    cuisine: "polska",
    category: "dania główne",
    ingredients: ["kiełbasa", "kapusta kiszona", "grzyby", "szynka"],
    maxReleases: 300,
    price: 90,
    ranking: 1,
    description: "Tradycja kuchni polskiej, litewskiej i białoruskiej",
    images: ["https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/bigos_z_kiszonej_kapusty_01_0.jpg"]
  },
  {
    id: 7,
    name: "Burger wołowy",
    cuisine: "stany zjednoczone",
    category: "fast food",
    ingredients: ["mięso wołowe", "bułka", "sałata", "pomidor", "ser", "sos"],
    maxReleases: 500,
    price: 10,
    ranking: 0,
    description: "Szybkie i smaczne",
    images: ["https://www.unileverfoodsolutions.pl/dam/global-ufs/mcos/NEE/calcmenu/recipes/PL-recipes/sandwiches/burger-francuski-z-kozim-serem-marmolad%C4%85-z-czerwonej-cebuli-i-rukol%C4%85/main-header.jpg"]
  },
  {
    id: 8,
    name: "Sałatka gyros",
    cuisine: "polska",
    category: "sałatki",
    ingredients: ["kurczak", "cebula", "kukurydza", "ogórek konserwowy", "keczup", "majonez"],
    maxReleases: 1000,
    price: 15,
    ranking: 4,
    description: "Wielowarstwowa sałatka",
    images: ["https://przepisna.pl/file/2019/10/salatka-gyros.png"]
  },
  {
    id: 9,
    name: "Flaki",
    cuisine: "polska",
    category: "zupa",
    ingredients: ["flaki", "polewka"],
    maxReleases: 10,
    price: 50,
    ranking: 0,
    description: "Tradycyjna potrawa mięsna w postaci gęstej zupy",
    images: ["https://polki.pl/foto/4_3_LARGE/flaki-przepis-magdy-gessler-2460222.jpg"]
  },
  {
    id: 10,
    name: "Naleśniki z serem",
    cuisine: "międzynarodowa",
    category: "przystawka",
    ingredients: ["jajko", "mąka", "mleko", "ser biały", "śmietana"],
    maxReleases: 100,
    price: 20,
    ranking: 0,
    description: "Przekąska na słodko",
    images: ["https://www.nalesniki.eu/wp-content/uploads/2015/02/nalesniki_z_serem.jpg"]
  },
  {
    id: 11,
    name: "Ryż z kurczakiem słodkokwaśny",
    cuisine: "chińska",
    category: "dania główne",
    ingredients: ["ryż", "kurczak", "warzywa", "sos"],
    maxReleases: 300,
    price: 25,
    ranking: 4,
    description: "Popularna chińska potrawa",
    images: ["https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/recipe/0002/14/ryz-z-kurczakiem-i-warzywami.jpeg"]
  },
  {
    id: 12,
    name: "Makaroniki",
    cuisine: "francuska",
    category: "deser",
    ingredients: ["białka jaj", "curkier puder", "mielone migdały"],
    maxReleases: 70,
    price: 40,
    ranking: 5,
    description: "Słodkie ciastko",
    images: ["https://www.oetker.pl/Recipe/Recipes/oetker.pl/pl-pl/baking/image-thumb__51716__RecipeDetailsLightBox/makaroniki.jpg"]
  },
];


