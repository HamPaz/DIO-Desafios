const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async ()=> {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    }
    catch(e) {
        console.log(e.message);
    }
};

const loadImg = async ()=> {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

function btnDown () {
    catBtn.style.boxShadow = "none";
}

function btnUp () {
    catBtn.style.boxShadow = "3px 3px 4px black";
}

catBtn.addEventListener ('click', loadImg);
catBtn.addEventListener ('mousedown', btnDown);
catBtn.addEventListener ('mouseup', btnUp);

loadImg();