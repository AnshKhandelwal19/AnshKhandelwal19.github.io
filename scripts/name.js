const val = 'Ansh Khandelwal';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

document.addEventListener('DOMContentLoaded', () => {
    const nameTag = document.getElementById('name');
    let interval;
    
    const startAnimation = () => {
        let currentIndex = 0;
        
        interval = setInterval(() => {
            const name = val
                .split('')
                .map((letter, index) => {
                    if (index < currentIndex) {
                        return letter; 
                    }
                    return letters[Math.floor(Math.random() * letters.length)]; 
                })
                .join('');

            nameTag.innerText = name;

            if (currentIndex >= val.length) {
                clearInterval(interval); 
            } else {
                currentIndex += 0.5;
            }
        }, 20);
    };

    startAnimation();

    nameTag.addEventListener('mouseover', () => {
        clearInterval(interval);
        startAnimation();   
    });
});
