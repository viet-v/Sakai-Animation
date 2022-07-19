const root = document.querySelector(':root');
const main = document.querySelector('main');
const origin = document.getElementById('origin');
const value = document.getElementById('value');
const journey = document.getElementById('journey');
const path = document.getElementById('path');
const boat = document.getElementById('boat');

main.addEventListener('scroll', () => {
   
    if (main.scrollTop <= origin.offsetTop ) {
        root.style.setProperty('--progress', '1.5%')
        boat.style.display = 'none';
    }
    else if (main.scrollTop == value.offsetTop ) {
        root.style.setProperty('--progress', '30%')
        // boat on shows up and moves when scroll to VALUE section
        boat.style.display = 'block';
        gsap.to('#boat', 
            {
                duration: 8,
                ease: "slow(0.1, 0.4, false)",
                motionPath:{
                    path:'M 0 -400 C 37 -273.6667 74 -247.3333 115 -156 C 123.6667 -136 132.3333 -116 145 -32 C 147.3333 -11.3333 149.6667 9.3333 142 112 C 139.6667 129.6667 137.3333 147.3333 108 229 C 97.6667 249.3333 87.3333 269.6667 38 325 C 22 341.3333 6 357.6667 -10 374',
                    autoRotate: true
                },
                delay: 1
            })
    } 
    else if (main.scrollTop == journey.offsetTop) {
        root.style.setProperty('--progress', '62%')
        boat.style.display = 'none';
    }
    else if (main.scrollTop == path.offsetTop) {
        root.style.setProperty('--progress', '92%')
        boat.style.display = 'none';
    }
})

