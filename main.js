let noOfCharac = 75;
let contents = document.querySelectorAll('.content');
contents.forEach((content) => {
  if (content.textContent.length < noOfCharac) {
    content.nextElementSibling.style.display = 'none';
  } else {
    let displayText = content.textContent.slice(0, noOfCharac);
    let moreText = content.textContent.slice(noOfCharac);
    // console.log(displayText);
    content.innerHTML = `${displayText}<span class="dots">..</span><span class="hide more">${moreText}</span>`;
  }
});

function readMore(btn) {
  let post = btn.parentElement;
  //   console.log(post);
  post.querySelector('.dots').classList.toggle('hide');
  post.querySelector('.more').classList.toggle('hide');
  btn.textContent == 'Read More' ? btn.textContent = 'Read Less' : btn.textContent = 'Read More';
}

// function myFunction() {
//   var dots = document.getElementById('dots');
//   var moreText = document.getElementById('more');
//   var btnText = document.getElementById('myBtn');

//   if (dots.style.display === 'none') {
//     dots.style.display = 'inline';
//     btnText.innerHTML = 'readmore';
//     moreText.style.display = 'none';
//   } else {
//     dots.style.display = 'none';
//     btnText.innerHTML = 'readless';
//     moreText.style.display = 'inline';
//   }
// }
