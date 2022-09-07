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
        // footstep.style.display = 'none';
        statementLine.classList.remove('increaseLength')
        airplane.classList.remove('fly');
        airplaneShadow.classList.remove('flyShadow');
        location1.classList.remove('locationScale')
    }

    // value.offsetTop = 1409
    else if (value.offsetTop - 1 <= main.scrollTop && main.scrollTop <= value.offsetTop + 1) {
        root.style.setProperty('--progress', '24%');
        root.style.setProperty('--flow', '46%');
        
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
        // footstep.style.display = 'none';
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
        root.style.setProperty('--flow', '72%');

        boat.style.opacity = '0';

        // journey ------------------------------
        journey.querySelector('h2').style.display = 'block';
        footstep.style.opacity = '1';
        
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
                duration: 10,
                ease: "slow(0.1, 0.4, false)",
                motionPath:{
                    path:'M 530 158.4 Q 510.2 189.6 490.4 220.8 Q 481.4 247.8 472.4 274.8 Q 470 306.6 467.6 338.4 Q 468.8 370.8 470 403.2 Q 475.4 437.4 480.8 471.6 Q 494 504.6 507.2 537.6 Q 518.6 576 530 614.4 Q 535.4 651.6 540.8 688.8 Q 551 726 561.2 763.2',
                    autoRotate: true,
                },
                delay: 2,
            })
            // function blinking() {
            //     var footstep = new TimelineMax({repeat: -1});
                
            //     footstep.to(footstep, 0.5, {alpha: 0})
            //       .to(footstep, 0.5, {alpha: 1});
            //     }
            // blinking();
    }

    // path.offsetTop = 2348
    else if (path.offsetTop - 1 <= main.scrollTop && main.scrollTop <= path.offsetTop + 1) {
        root.style.setProperty('--progress', '94%');
        root.style.setProperty('--flow', '98%');

        boat.style.opacity = '0';
        // footstep.style.display = 'none';
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