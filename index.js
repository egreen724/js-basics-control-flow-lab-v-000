// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let message;

  if (feet <= 400) {
    message = 'This one is on me!'
  } else if (feet > 2000) {
    message = 'I will gladly take your thirty bucks.'
  } else if (feet > 2500) {
    'No can do.'
  }
}

it('charges 30 dollars for a distance over 2000 feet', function () {
  expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks.');
});

it('does not allow rides over 2500 feet', function () {
  expect(scuberGreetingForFeet(2501)).to.equal('No can do.');
});

function ternaryCheckCity() {


}

function switchOnCharmFromTip() {


}
