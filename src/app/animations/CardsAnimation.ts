export default function CardsAnimation() {
  // define cards
  const card_0 = document.getElementById("card_0") as HTMLElement;
  const card_1 = document.getElementById("card_1") as HTMLElement;
  const card_2 = document.getElementById("card_2") as HTMLElement;

  let cards = [card_0, card_1, card_2];

  // define cards positional class attributes
  const appear: string = "card_appear";
  const stay: string = "card_stay";
  const disappear: string = "card_disappear";

  let states = [appear, stay, disappear];
  // get appearing notes
  let notes: string[] = GET("es");

  // start first animation
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add(states[i]);
  }

  setInterval(() => {
    // repositionate values
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove(states[i]);
    }
    cards[2].classList.remove("animate-vanish");

    cards = [cards[2], cards[0], cards[1]];

    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add(states[i]);
    }
    setTimeout(()=>{
      cards[2].classList.add("animate-vanish");
    },2000)
  }, 4500);
}
function GET(lang: string) {
  if (lang == "es") {
    return [
      "hola padre",
      "cual hay",
      "darle de comer al perro",
      "prueba de ingreso",
    ];
  } else {
    return ["hola padre", "cual hay", "darle de comer al perro"];
  }
}
