const results = document.getElementById('results');

document.getElementById('submit').onclick = function() {
    if (document.getElementById('carlos')) results.textContent = 'leave'
    else results.textContent = (document.getElementById('ea').checked ? 'You are EA so you get human rights regardless of any other societally condemned behaviors in which you may have partaken, congrats' : 'EW RD GROSS GET AWAY');
};
