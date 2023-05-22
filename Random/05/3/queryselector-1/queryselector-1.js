console.log('hello')

const king = document.getElementById('b325');
console.log('king' ,king);

const businessLamp = document.getElementsByClassName("asteroid big");
console.log('businessLamp', businessLamp);

const conceitedKing = document.getElementsByClassName('asteroid b326', 'asteroid')
console.log('conceitedKing', conceitedKing);

const noBusiness = document.getElementById('asteroid b326', 'asteroid b329 big');
console.log(noBusiness);

/*
<div id="b325" class="asteroid">The King</div>
<div class="asteroid b326">The Conceited Man</div>
</section>
<p class="asteroid big">The Businessman</p>
<div class="asteroid b329 big">The Lamplighter</div>








1. store the element that says 'The King' in the 'king' variable.
console.log it.

2. store 'The Businessman' and 'The Lamplighter'
in the 'businessLamp' variable.
console.log each of them.

3. store 'The King' and 'The Conceited Man'
in the 'conceitedKing' variable.
alert them one by one.

4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
in the 'noBusiness' variable.
console.log each of them.*/