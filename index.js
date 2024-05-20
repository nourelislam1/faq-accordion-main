  var active = document.getElementsByClassName('active')[0];
  var paragraphs = active.getElementsByTagName('p');
  paragraphs[1].style.display = 'block';
  var image = document.getElementsByTagName('img'); 
  function showElement(i) {
    if (image[i].src === "http://127.0.0.1:5500/image/icon-plus.svg"){
      image[i].src = './image/icon-minus.svg';
      var line = document.getElementsByClassName('line')[i-1];
      var paragraph = line.getElementsByTagName('p');
      paragraph[1].style.display = 'block';
    }else if(image[i].src === "http://127.0.0.1:5500/image/icon-minus.svg"){
      image[i].src = './image/icon-plus.svg';
      var line = document.getElementsByClassName('line')[i-1];
      var paragraph = line.getElementsByTagName('p');
      paragraph[1].style.display = 'none';
    }
  }
