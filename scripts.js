const test = document.getElementById('test'),
      list = document.getElementById('list'),
      results = document.getElementById('results'),
      submit = document.getElementById('submit'),
      reset = document.getElementById('reset'),
      restart = document.getElementById('restart');

const questions = [
    'Been quoted on Overheard at Yale',
    'Said you go to a "mid-size liberal arts school in Connecticut"',
    'Pet Handsome Dan',
    'Talked to the weird kid in your froco group whose favorite ice cream was pistachio',
    'Written for the YDN',
    'Added a contextually inappropriate fact to the end of a YDN article',
    'Participated in a snowball fight on old campus',
    'Ended a high school relationship while on campus',
    'Made ramen without calling a grown-up',
    'Shook hands with Marvin Chun or Peter Salovey',
    'Been rejected from Harvard',
    'Played in the Harvard-Yale game',
    'Participated in the Saybrook Strip',
    'Broke into Saybrook',
    'Defecated in a laundry machine in Saybrook',
    'Went to the Pierson Inferno',
    'Set a fire at the Pierson Inferno',
    'Attended a frat party',
    'Attended LEO or DKE',
    'Left a frat within 5 minutes of arriving',
    'Owned "frat shoes"',
    'Had your shoes pulled off by the floor of Sig Nu',
    'Drank iced tea at Sig Chi',
    'Been in a seminar with your ex',
    'Connected with your crush on LinkedIn',
    'Purchased earplugs to silence your roommate’s alarm',
    'Purchased earplugs to silence your roommate’s moans',
    'Sexiled your roommate',
    'Walked in on your roommate',
    'Had to give your roommate "The Talk"',
    'Had sex in the Sterling stacks',
    'Cried in the Sterling stacks',
    'Had sex then cried in the Sterling stacks',
    'Cried about your classes',
    'Cried about class selection',
    'Cried in front of your dean of college',
    'Cried in front of your first year advisor',
    'Urinated on the Theodore Dwight Woolsey statue',
    'Watched Peter Salovey’s folk band',
    'Threw your bra onstage at Peter Salovey’s folk band',
    'Applied to Morgan Stanley',
    'Been Rejected by Morgan Stanley',
    'Ridden a Metro North train',
    'Hooked up in a Metro North bathroom',
    'Eaten chicken tenders on Thursday',
    'Taken extra fruit from the dining hall',
    'Stolen dishes or cutlery from a dining hall',
    'Used a fire door in your dorm during a non-emergency',
    'Gone to GHeav while intoxicated',
    'Explored the tunnels under campus',
    'Gone to Yale Health for an STD screening based on reasonable suspicion',
    'Gone to Yale Health due to alcohol intoxication',
    'Been a Woads scholar',
    'Been a Soads scholar',
    'Been trampled at Toads',
    'Brought a toad to Toads',
    '"Grabbed a meal"',
    'Grabbed a meal with a hook up',
    '"Screwed" your First-Year Formal date',
    'Faked sobriety to frocos',
    'Taken a free condom from your froco',
    'Used a free condom from froco',
    'Been unable to engage in sexual intercourse because the frocos were out of condoms',
    'Been in a Yale dorm shower with a MPS',
    'Had sexual intercourse on the top bunk in L-Dub',
    'Had sexual intercourse with someone in your college',
    'Completed the 14 college challenge',
    'Had sexual intercourse with someone in your entryway',
    'Had sexual intercourse with someone on your floor',
    'Had sexual intercourse with someone in your suite',
    'Had sexual intercourse with your Three Day Relationship match',
    'Had sexual intercourse with someone in your Froco group',
    'Had sexual intercourse with someone in your seminar',
    'Had sexual intercourse with your college sib',
    'Had sexual intercourse with someone from Quinnipiac or UNH',
    'Had sexual intercourse with your CCE',
    'Had sexual intercourse with someone who was rejected from Yale',
    'Had sexual intercourse with your Bulldog Days host or visitor',
    'Had sexual intercourse with a visiting professor',
    'Had sexual intercourse with an assistant professor',
    'Had sexual intercourse with a tenure track professor',
    'Had sexual intercourse with a tenured professor',
    'Had sexual intercourse with a Sterling professor',
    'Walked to Murray for the primary purpose of sexual intercourse',
    'Been tapped for a secret society',
    'Been tapped for a landed society',
    'Drank child blood at Skull & Bones',
    'Smoked on the Bingham Balconies',
    'Smoked on the Franklin Bike Path',
    'Smoked a cigarette with the WBYC house',
    'Snorted cocaine',
    'Snorted Emergen-C',
    'Been attacked with a paintball gun',
    'Seen a stripper at Toads',
    'Been a stripper at Toads',
    'Streaked in Bass during finals',
    'Attended a naked party',
    'Sent a prank email from Chief Ronnel A. Higgins',
    'Been mentioned in an email from Chief Ronnel A. Higgins',
    'Used the word "resco"',
];

for (question of questions) {
    let li = document.createElement('li');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let text = document.createTextNode(question + '?');
    input.classList.add('checkbox');
    input.type = 'checkbox';
    label.appendChild(input);
    label.appendChild(text);
    li.appendChild(label);
    list.appendChild(li);
}

submit.onclick = function() {
    console.log('Calculating score.');
    let points = 100;
    for (checkbox of list.getElementsByClassName('checkbox')) {
        if (checkbox.checked) points--;
    }
    score.textContent = points;
    test.classList.remove('shown');
    results.classList.add('shown');
};

reset.onclick = restart.onclick = function() { location.reload(); };
