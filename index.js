const root = document.querySelector(':root');
const main = document.querySelector('main');
const header = document.querySelector('header')
const hero = document.getElementById('hero');
const navSolid = document.querySelector('.nav_solid');
const navPlaceholder = document.querySelector('.nav_placeholder');
const statement = document.getElementById('statement');
const origin = document.getElementById('origin');
const river = document.getElementById('river');
const para_1 = document.getElementById('para_1');
const value = document.getElementById('value');
const journey = document.getElementById('journey');
const path = document.getElementById('path');
const boat = document.getElementById('boat');
const footstep = document.getElementById('footstep');
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
        navSolid.style.display = 'none';
        navPlaceholder.style.display = 'block';
        header.style.backgroundColor = 'transparent';
    }

    // statement.offsetTop = 470
    else if (main.scrollTop == statement.offsetTop) {
        statementLine.classList.add('increaseLength')
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
        root.style.setProperty('--flow', '18%');
        para_1.querySelector('h3').classList.add('fadeUp_2s5');
        para_1.querySelector('p').classList.add('fadeUp_3s');
        para_1.querySelector('button').classList.add('fadeUp_3s');
        boat.style.display = 'none';
        footstep.style.display = 'none';
        statementLine.classList.remove('increaseLength')
        airplane.classList.remove('fly');
        airplaneShadow.classList.remove('flyShadow');
        location1.classList.remove('locationScale')
    }

    // value.offsetTop = 1409
    else if (value.offsetTop - 1 <= main.scrollTop && main.scrollTop <= value.offsetTop + 1) {
        root.style.setProperty('--progress', '24%');
        root.style.setProperty('--flow', '42%');
        // boat on shows up and moves when scroll to VALUE section
        boat.style.display = 'block';
        footstep.style.display = 'none';
        statementLine.classList.remove('increaseLength')
        airplane.classList.remove('fly');
        airplaneShadow.classList.remove('flyShadow');
        location1.classList.remove('locationScale')

        gsap.to('#boat', 
            {
                duration: 8,
                ease: "slow(0.1, 0.4, false)",
                motionPath:{
                    path:'M 0 -400 C 37 -273.6667 74 -247.3333 115 -156 C 123.6667 -136 132.3333 -116 145 -32 C 147.3333 -11.3333 149.6667 9.3333 142 112 C 139.6667 129.6667 137.3333 147.3333 108 229 C 97.6667 249.3333 87.3333 269.6667 38 325 C 22 341.3333 6 357.6667 -10 374',
                    autoRotate: true,
                },
                delay: 1
            })
    }

    // journey.offsetTop = 1878
    else if (journey.offsetTop - 1 <= main.scrollTop && main.scrollTop <= journey.offsetTop + 1) {
        root.style.setProperty('--progress', '73%');
        root.style.setProperty('--flow', '65%');
        boat.style.display = 'none';
        footstep.style.display = 'block';
        statementLine.classList.remove('increaseLength')
        airplane.classList.remove('fly');
        airplaneShadow.classList.remove('flyShadow');
        location1.classList.remove('locationScale')

        gsap.to('#footstep', 
            {
                duration: 10,
                ease: "slow(0.1, 0.4, false)",
                motionPath:{
                    path:'M -70 -143 C -69 -132.6667 -68 -122.3333 -67 -112 C -63.6667 -100 -60.3333 -88 -57 -76 C -52.3333 -64.6667 -47.6667 -53.3333 -43 -42 C -38.3333 -33.6667 -33.6667 -25.3333 -29 -17 C -22.6667 -6 -16.3333 5 -10 16 C -2 30.3333 6 44.6667 14 59 C 19.3333 69 24.6667 79 30 89 C 32.6667 100.6667 35.3333 112.3333 38 124 C 38.3333 134.6667 38.6667 145.3333 39 156 C 36.6667 167 34.3333 178 32 189 C 26.6667 199 21.3333 209 16 219 C 7.6667 234.6667 -0.6667 250.3333 -9 266 C -15.6667 282 -22.3333 298 -29 314 C -33.6667 325.6667 -38.3333 337.3333 -43 349',
                    autoRotate: true
                },
                
            })
    }

    // path.offsetTop = 2348
    else if (path.offsetTop - 1 <= main.scrollTop && main.scrollTop <= path.offsetTop + 1) {
        root.style.setProperty('--progress', '94%');
        root.style.setProperty('--flow', '95%');
        boat.style.display = 'none';
        footstep.style.display = 'none';
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