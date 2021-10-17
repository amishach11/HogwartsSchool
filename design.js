class TypeWriter {
        constructor(txtElement, words, wait = 3000) {
            this.txtElement = txtElement;
            this.words = words;
            this.txt = '';
            //index of the the current string being typedout
            this.wordIndex = 0;
            //this.wait must be a base 10 interger
            this.wait = parseInt(wait, 10);
            //method type()
            this.type();
            // Boolean if the word is currently deleting
            this.isDeleting = false;
        }

        
        type() {
            //current index of words
            const current = this.wordIndex % this.words.length;
            //get full text of current word
            const fullTxt = this.words[current];

            // check if deleting
            if (this.isDeleting){
            //remove character
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            //add a charaacter
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }            

        
    

            // insert txt into element
            this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

            //type speed for when it is typing, deleting and pausing after deletion

            let typeSpeed = 300;

            //select pencil icon for writting animation
            const typingElement = document.querySelector('.fas');

            if (this.isDeleting){
                typeSpeed /= 4;        
            }
     
            if(this.isDeleting){
                typingElement.className = "fas fa-pencil-alt erasing-animation";
            }else{
                typingElement.className = "fas fa-pencil-alt writing-animation";
            }

            // if word is complete
            if(!this.isDeleting && this.txt === fullTxt){
                // make pause at end
                typeSpeed = this.wait;
                //set delete to true
                this.isDeleting = true;
                //will stop the pencil animation after word completion
                typingElement.className = "fas fa-pencil-alt";


            } else if (this.isDeleting && this.txt === ''){
                this.isDeleting = false;
                //move to the next word in the HTML property
                this.wordIndex++;
                // pause time before the word start typing
                typeSpeed = 1000;

            }

            setTimeout(() => this.type(), typeSpeed)
        }
    }


//Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    // const words = JSON.parse(txtElement.getAttribute('data-words'));
  const words = ['Spells','Potions', 'Magical Creatures'];
  
  
    // const wait = txtElement.getAttribute('data-wait');
  const wait = 2500;
    
    new TypeWriter(txtElement, words, wait);
}


// Reviews

const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Hermione',
    position: 'Mugle',
    photo:
      'https://filmdaily.co/wp-content/uploads/2021/02/hermione-02.jpg',
    text:
      "If I were to describe my experience in one word, I would simply say PERFECT. Observing myself before & after doing this course with Deepak bhaiya, Now I am very confident. Now I know how exactly to proceed with a given problem. I would seriously recommend you to join the course.."
  },
  {
    name: 'Hermione',
    position: 'Student',
    photo: 'https://filmdaily.co/wp-content/uploads/2021/02/hermione-02.jpg',
    text:
      'This girl is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire her, you will not be disappointed by the work delivered. She will go the extra mile to make sure that you are happy with your project. I will surely work again with her!',
  },
  {
    name: 'Iida Niskanen',
    position: 'Student',
    photo: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-04/6/17/tmp/2b3adab521f3/tmp-name-2-1229-1586193979-18_dblbig.jpg?resize=1200:',
    text:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: 'Renee Sims',
    position: 'Muggle',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "Coding Blocks was an amazing experience for me. I belong to the electronics department and had a little experience in coding but I think it has helped me think things through in a much more analytical manner. Coding is important no matter which branch you are in. It gives you a better understanding about how to approach a problem..",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Student',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'Sasha Ho',
    position: 'Muggle',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Student',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)






                                                                /*FAQ*/

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})