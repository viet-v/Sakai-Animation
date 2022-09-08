const root = document.querySelector(':root');
const main = document.querySelector('main');
const header = document.querySelector('header')
const hero = document.getElementById('hero');
const navSolid = document.querySelector('.nav_solid');
const navPlaceholder = document.querySelector('.nav_placeholder');
const statement = document.getElementById('statement');
const origin = document.getElementById('origin');
const originImg = document.querySelectorAll('.origin_img');
const river = document.getElementById('river');
const riverBefore = document.getElementById('river_before');
const para_1 = document.getElementById('para_1');

const value = document.getElementById('value');
const boat = document.getElementById('boat');
const valueImg = document.querySelectorAll('.value_img');
const para_2 = document.getElementById('para_2');

const journey = document.getElementById('journey');
const footstep = document.getElementById('footstep');
const journeyImg = document.querySelectorAll('.journey_img');
const para_3 = document.getElementById('para_3');

const path = document.getElementById('path');
const para_4 = document.getElementById('para_4');
const para_5 = document.getElementById('para_5');
const pathImg = document.querySelectorAll('.path_img');

const statementText = document.querySelector('#statement h2');
const statementLine = document.querySelector('.statement_line');
const airplane = document.getElementById('airplane');
const airplaneShadow = document.getElementById('airplane_shadow');
const location1 = document.getElementById('location1');


gsap.registerPlugin(MotionPathPlugin)

main.addEventListener('scroll', () => {
    if (main.scrollTop >= statement.offsetTop) {
        navSolid.style.display = 'block';
        navPlaceholder.style.display = 'none';
        header.style.backgroundColor = '#F8F5EC';
    }
})

main.addEventListener('scroll', () => {
    if (main.scrollTop == 0) {
        root.style.setProperty('--flow', '0%');

        navSolid.style.display = 'none';
        navPlaceholder.style.display = 'block';
        header.style.backgroundColor = 'transparent';

        // origin ------------------------------
        originImg.forEach(img => {
            img.classList.remove('fadeIn');
        })
    }

    // statement.offsetTop = 470
    else if (statement.offsetTop - 1 <= main.scrollTop && main.scrollTop <= statement.offsetTop + 1) {
        root.style.setProperty('--flow', '0%');

        statementLine.classList.add('increaseLength')

        // origin ------------------------------
        originImg.forEach(img => {
            img.classList.remove('fadeIn');
        })

        airplane.classList.remove('fly');
        airplaneShadow.classList.remove('flyShadow');
        // location1.classList.remove('locationScale')
        location1.classList.add('locationScale')
    }

    else if (700 <= main.scrollTop && main.scrollTop <= 800) {
    }

    // origin.offsetTop = 939
    else if (origin.offsetTop - 1 <= main.scrollTop && main.scrollTop <= origin.offsetTop + 1) {
        root.style.setProperty('--progress', '1.5%');
        root.style.setProperty('--flow', '25%');

        // origin ------------------------------
        origin.querySelector('h2').style.display = 'block';
        para_1.querySelector('h3').classList.add('fadeUp_2s5');
        para_1.querySelector('p').classList.add('fadeUp_3s');
        para_1.querySelector('button').classList.add('fadeUp_3s');
        originImg.forEach(img => {
            img.classList.add('fadeIn');
        })

        boat.style.opacity = '0';
        footstep.style.display = 'none';
        statementLine.classList.remove('increaseLength')
        airplane.classList.remove('fly');
        airplaneShadow.classList.remove('flyShadow');
        location1.classList.remove('locationScale')
    }

    // value.offsetTop = 1409
    else if (value.offsetTop - 1 <= main.scrollTop && main.scrollTop <= value.offsetTop + 1) {
        root.style.setProperty('--progress', '24%');
        root.style.setProperty('--flow', '45%');
        
        // value ------------------------------
        value.querySelector('h2').style.display = 'block';
        para_2.querySelector('h3').classList.add('fadeUp_2s5');
        para_2.querySelector('p').classList.add('fadeUp_3s');
        para_2.querySelector('button').classList.add('fadeUp_3s');
        value.querySelector('#value_location').classList.add('locationScale');
        valueImg.forEach(img => {
            img.classList.add('fadeIn');
        })

        // boat on shows up and moves when scroll to VALUE section
        boat.style.opacity = '1';
        footstep.style.display = 'none';
        statementLine.classList.remove('increaseLength')
        airplane.classList.remove('fly');
        airplaneShadow.classList.remove('flyShadow');
        location1.classList.remove('locationScale')

        gsap.to('#boat', 
            {
                duration: 10,
                ease: "slow(0.1, 0.4, false)",
                motionPath:{
                    path:'M -660 -509 Q -469 -301 -380 -84 T -324 328 T -542 642',
                    autoRotate: true,
                },
                delay: 3,
            })
    }

    // journey.offsetTop = 1878
    else if (journey.offsetTop - 1 <= main.scrollTop && main.scrollTop <= journey.offsetTop + 1) {
        root.style.setProperty('--progress', '73%');
        root.style.setProperty('--flow', '75%');

        boat.style.opacity = '0';

        // journey ------------------------------
        journey.querySelector('h2').style.display = 'block';
        footstep.style.display = 'inline-block';
        
        para_3.querySelector('h3').classList.add('fadeUp_2s5');
        para_3.querySelector('p').classList.add('fadeUp_3s');
        para_3.querySelector('button').classList.add('fadeUp_3s');
        journey.querySelector('#journey_location').classList.add('locationScale');
        journeyImg.forEach(img => {
            img.classList.add('fadeIn');
        })

        statementLine.classList.remove('increaseLength')
        airplane.classList.remove('fly');
        airplaneShadow.classList.remove('flyShadow');
        location1.classList.remove('locationScale')

        gsap.to('#footstep', 
            {
                duration: 20,
                ease: "slow(0.1, 0.4, false)",
                motionPath:{
                    path:'M 580 84 Q 572 112 564 140 Q 564 158.5 564 177 T 570 216 T 584 257 T 597 298 T 609 341 T 629 393 T 644 456 T 658 502',
                    autoRotate: true,
                },
                delay: 2,
            })

    }

    // path.offsetTop = 2348
    else if (path.offsetTop - 1 <= main.scrollTop && main.scrollTop <= path.offsetTop + 1) {
        root.style.setProperty('--progress', '94%');
        root.style.setProperty('--flow', '100%');

        boat.style.opacity = '0';
        footstep.style.display = 'none';

        path.querySelector('h2').style.display = 'block';
        path.querySelector('#path_location').classList.add('locationScale');
        para_4.querySelector('h3').classList.add('fadeUp_4s');
        para_4.querySelector('p').classList.add('fadeUp_4s5');
        para_5.querySelector('h3').classList.add('fadeUp_2s5');
        para_5.querySelector('p').classList.add('fadeUp_3s');
        pathImg.forEach(img => {
            img.classList.add('fadeIn');
        });
        

        statementLine.classList.remove('increaseLength')
        airplane.classList.add('fly');
        airplaneShadow.classList.add('flyShadow');
        location1.classList.remove('locationScale')
    }
})


// Read more function
function readMore(id) {
    if (id.innerText == 'CLOSE') {
        id.innerText = 'READ MORE';
        id.classList.remove('fadeOutIn');
        id.style.opacity = 1;
        id.parentElement.querySelector('.para_text > span').style.display = 'none';
        return;
    }
    id.parentElement.querySelector('.para_text > span').style.display = 'block';
    id.classList.add('fadeOutIn');
    id.innerText = 'CLOSE';
}
