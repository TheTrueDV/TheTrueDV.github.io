let quotes = new Map();
quotes.set('vivi', {quote: 'I think that getting, getting jealous or worried that spreading your community around means that you\'ll get less community, that\'s such a dumb thing. That\'s such a dumb thing to - like, I understand the need jerk worry maybe, but I also think it\'s a pretty toxic mindset to have, because it means that you\'re holding on too hard. You\'re like "NO! MINE! MINE!" and that\'s super gremlin, like you should share more, you know? So yeah. That is, that is my opinion. I am totally happy, I am totally happy to lose viewers if it means that they find someone they love and adore watching, I really mean that. 100% okay? 100%. Listen, I do appreciate you guys, but like, I can\'t, I\'m not the kind of person whose going to hold on.', source: 'VividlyASMR', date: 'April 27, 2021', url: 'https://twitter.com/vividlyASMR/status/1386823559025086464' ,picture: '/img/vividlyASMR profile.jpg'});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const key = urlParams.get('key');

function getQuote($key){
    return quotes.get($key).quote;
}

function getSource($key){
    return quotes.get($key).source;
}

function getDate($key){
    return quotes.get($key).date;
}
function getProfilePicture($key){
    return quotes.get($key).picture;
}
const quote = document.getElementById("quote").innerHTML = getQuote(key);

const source = document.getElementById("source").innerHTML = getSource(key);
const date = document.getElementById("date").innerHTML = getDate(key);
const img = document.getElementById("picture").src = getProfilePicture(key);
