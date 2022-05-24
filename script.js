//შევქმენით ცვლადები, ამ შემთხვევაში სლაიდები

let data = [
    {
        id:1,
        imageUrl:'https://i.pinimg.com/originals/40/6f/3d/406f3dcc2b46ad9c92f7bad9312aa51b.jpg',
        title: 'Dodo',
        url:'https://en.wikipedia.org/wiki/Dodo'

    },

    {   id:2,
        imageUrl:'https://www.hdwallpapers.in/download/animal_squirrel_4k_5k_hd_animals_2-1920x1080.jpg',
        title: 'Squirrel',
        url:'https://en.wikipedia.org/wiki/Squirrel'
    },

    {   id:3,
        imageUrl:'https://wallpaperaccess.com/full/1868178.jpg',
        title: 'Racoon',
        url:'https://en.wikipedia.org/wiki/Raccoon'
    },

    {   id:4,
        imageUrl:'https://cutewallpaper.org/26/beautiful-animal-pictures-wallpaper/155028628.jpg',
        title: 'Zebra',
        url:'https://en.wikipedia.org/wiki/Zebra'
    }
];


let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName ('dot');


let sliderIndex = 0;

//ვქმნი ცალცალკე იმას, რაც HTML -ში დაკომენტარებული მაქვს

//create a tag

function createATag(item) {
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.classList.add('slide');

    return aTag;
}

//create img tag

function createImgTag(item) {
    let ImgTag = document.createElement('img');
    ImgTag.setAttribute('src', item.imageUrl);
    ImgTag.setAttribute('alt', item.title);
    ImgTag.classList.add('image-slider');
    
    return ImgTag;
    
}

//create dots

function createDots (item) {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach(element => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);
        
        dot.onclick = function (event) {
            let id = event.target.getAttribute ('data-id');
            sliderIndex = id;
            setSlide();
        }



        dots.appendChild(dot);
    });
    return dots;
}


//create slide title tag

function createH2Tag(item) {
    let H2TagTitle = document.createElement('h2');
    H2TagTitle.classList.add('slider-title');
    H2TagTitle.append(item.title);

    return H2TagTitle;
    
}



function setSlide() {
    sliderContent.innerHTML = '';
    let slideItem = createATag(data[sliderIndex]);
    let imgSliderItem = createImgTag(data[sliderIndex]);
    let tagTitle = createH2Tag(data[sliderIndex]);
    let dots = createDots()


    slideItem.appendChild(imgSliderItem);
    slideItem.appendChild(tagTitle);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);
     
    currentDotActive();

    console.log(slideItem);
}

function currentDotActive() {
    dotsList[sliderIndex].classList.add('active');
    
}




function arrowLeftClick() {
    if (sliderIndex <=0 ) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }
    sliderIndex --;
    setSlide();
    
}

function arrowRightClick() {
    //console.log(data.length)
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex ++;
    setSlide();
    
};
    arrowLeft.addEventListener('click', arrowLeftClick);
    arrowRight.addEventListener('click',arrowRightClick);

    setInterval(() => {
        arrowRightClick();
    }, 7000);

setSlide();