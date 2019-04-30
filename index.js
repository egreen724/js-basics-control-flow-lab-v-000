// Write your code in this file!
function scuberGreetingForFeet(feet) {

  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 1999 && feet < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }

}

function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip) {

  switch(tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you."
    break
    default:
      return "Bye."
  }

}
