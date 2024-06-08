document.addEventListener('DOMContentLoaded', () => {
    VANTA.GLOBE({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xfff,
      color2: 0xfff,
      backgroundColor: 0xffffff
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.Expanding_Box_1, .Expanding_Box_2, .Expanding_Box_3');
    const tokenomicsPage = document.querySelector('.Tokenomics_Page');

    boxes.forEach(box => {
        const title = box.querySelector('.Tokenomics_Title');
        const content = box.querySelector('.Tokenomics_Content');
        
        box.addEventListener('mouseenter', () => {
            boxes.forEach(b => {
                if (b !== box) {
                    b.style.opacity = '0';
                    b.style.visibility = 'hidden';
                    const otherTitle = b.querySelector('.Tokenomics_Title');
                    const otherContent = b.querySelector('.Tokenomics_Content');
                    if (otherTitle) {
                        otherTitle.style.display = 'block';
                    }
                    if (otherContent) {
                        otherContent.style.display = 'none';
                    }
                }
            });

            box.style.transition = 'height 300ms ease-in-out, width 300ms ease-in-out, left 300ms ease-in-out';
            box.style.height = '700px';
            box.style.width = '100%';
            if (box.classList.contains('Expanding_Box_2')) {
                box.style.left = '0';
            }
            if (title) {
                title.style.display = 'none';
            }
            if (content) {
                content.style.display = 'block';
            }
         
            tokenomicsPage.style.height = '1000px';
        });

        box.addEventListener('mouseleave', () => {
            boxes.forEach(b => {
                if (b !== box) {
                    b.style.opacity = '1';
                    b.style.visibility = 'visible';
                    const otherTitle = b.querySelector('.Tokenomics_Title');
                    const otherContent = b.querySelector('.Tokenomics_Content');
                    if (otherTitle) {
                        otherTitle.style.display = 'block';
                    }
                    if (otherContent) {
                        otherContent.style.display = 'none';
                    }
                }
            });

            box.style.transition = 'height 300ms ease-in-out, width 300ms ease-in-out, left 300ms ease-in-out';
            box.style.height = '100px';
            box.style.width = '30%';
            if (box.classList.contains('Expanding_Box_2')) {
                box.style.left = 'calc(50% - 15%)'; 
            }
            if (title) {
                title.style.display = 'block';
            }
            if (content) {
                content.style.display = 'none';
            }
            
            tokenomicsPage.style.height = '500px';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById("Home_Button");
    const about = document.getElementById("About_Button");
    const prizes = document.getElementById("Prizes_Button");
    const tokenomics = document.getElementById("Tokenomics_Button");
    const telegram = document.getElementById("Telegram_Button");
    const top = document.getElementById("Top_Button");
    const telegram2 = document.getElementById("Telegram_Icon");
    const twitter = document.getElementById("Twitter_Icon");
    const instagram = document.getElementById("Instagram_Icon");
    const buy = document.getElementById("Buy_PRZE_Button");
    const learn = document.getElementById("Learn_More_Button");

    learn.addEventListener('click', () => {
        window.location.href = "prizes.html";
    });

    home.addEventListener('click', () => {
        document.getElementById('Welcome_Page').scrollIntoView({behavior: 'smooth'});
    });

    about.addEventListener('click', () => {
        document.getElementById('About_Page').scrollIntoView({behavior: 'smooth'});
    });

    prizes.addEventListener('click', () => {
        document.getElementById('Prizes_Page').scrollIntoView({behavior: 'smooth'});
    });

    tokenomics.addEventListener('click', () => {
        document.getElementById('Tokenomics_Page').scrollIntoView({behavior: 'smooth'});
    });

    top.addEventListener('click', () => {
        document.getElementById('Header_Page').scrollIntoView({behavior: 'smooth'});
    });

    telegram.addEventListener('click', () => {
        
    });

    telegram2.addEventListener('click', () => {
        
    });

    twitter.addEventListener('click', () => {
        
    });

    instagram.addEventListener('click', () => {
        
    });

    buy.addEventListener('click', () => {
        
    });
});




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}