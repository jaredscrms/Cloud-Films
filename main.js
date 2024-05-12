document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
    document.querySelector('.nav-search').classList.toggle('top');
  });
  
  
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.cards-baner',{delay:500});
  ScrollReveal().reveal('.cybert-cards',{delay:500});
  ScrollReveal().reveal('.news-cards',{delay:500});

  
  document.addEventListener('.DOMContentLoaded', () => {
    // Your code here
  });


  // Dentro del archivo main.js

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const results = document.getElementById('results');

    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase(); // Eliminar espacios en blanco al inicio y al final

        // Verificar si el campo de búsqueda está vacío
        if (query === '') {
            results.innerHTML = ''; // Limpiar los resultados si el campo está vacío
            return; // Salir de la función si el campo está vacío
        }

        results.innerHTML = '';

        // Aquí puedes agregar los elementos que quieres que se busquen
        const videos = [
            { title: 'DEMOLITION', link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3D3UnSXelOJo0&ved=2ahUKEwjmo7qavfCFAxWiTDABHXecBEgQ78AJegQIGBAB&usg=AOvVaw1iPRr-c67Fx0weYUWXmy1KY' },
            { title: 'Identity', link: 'https://www.youtube.com/watch?v=TQkG2x3qTf4' },
            { title: 'TRIANGLE', link: 'https://www.youtube.com/watch?v=17XqBdCiHOI' },
            { title: 'Red ligths', link: 'https://www.youtube.com/watch?v=7fPOplL8KTI' },
            { title: 'Coherence', link: 'https://www.youtube.com/watch?v=kxAOewNzz-8' },
            { title: 'constantine ', link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DDEa508Xmmio&ved=2ahUKEwir1fDKsfCFAxUAfTABHblPCG4Q78AJegQIHBAB&usg=AOvVaw3x5CGMFO52CBxWuulxyXGl' },
            { title: 'Eternal Sunshine', link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3D07-QBnEkgXU&ved=2ahUKEwiLjaGBsvCFAxXwTTABHVRtACsQ78AJegQIChAB&usg=AOvVaw27merXQIl2gv5JFPFRBh1t' },
            { title: 'DEVILS ADVOCATE', link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3D40hHA9n4C2o&ved=2ahUKEwiHl9zTsvCFAxU0SzABHQALBZ4Q78AJegQIGRAB&usg=AOvVaw3dMNoU8wT4qG73XCTyKl-k' },
            { title: 'INTERSTELLAR', link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DUoSSbmD9vqc&ved=2ahUKEwiBxfL1svCFAxVnQjABHfq5CXMQ78AJegQIExAB&usg=AOvVaw3trxLd7xYxbgYUts2OzKbA' },
            { title: 'Drive', link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3D--XQKuqUrMo&ved=2ahUKEwjR67_2tfCFAxXnlIQIHRpAC3IQ78AJegQIChAB&usg=AOvVaw1RrKcJFux0hRfRykuh-BTCY' },
            // Agrega más videos según sea necesario
        ];

        videos.forEach(video => {
            const text = video.title.toLowerCase();
            if (text.includes(query)) {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.textContent = video.title;
                
                // Modificar el enlace para que apunte al video de YouTube
                link.href = video.link;
                link.target = "_blank"; // Abrir enlace en una nueva pestaña
                
                li.appendChild(link);
                results.appendChild(li);
            }
        });
    });
});
const toggleButton = document.getElementById('toggleButton');
const hiddenSection = document.getElementById('hiddenSection');

toggleButton.addEventListener('click', function() {
  hiddenSection.classList.toggle('hidden');
  if (hiddenSection.classList.contains('hidden')) {
    toggleButton.textContent = 'Más';
  } else {
    toggleButton.textContent = 'Menos';
  }
});





// Lista de películas con sus nombres y rutas de imágenes correspondientes
const peliculas = [
  { nombre: "TRIANGLE", imagen: "img/TRIANGLE.jpeg" },
  { nombre: "RED LIGHTS", imagen: "img/RED LIGHTS.jpeg" },
  { nombre: "drive", imagen: "img/drive.jpg" },
  { nombre: "constantine ", imagen: "img/constantine.jpg" },
  { nombre: "DEVIL'S ADVOCATE ", imagen: "img/DEVIL'S ADVOCATE.jpg" },
  { nombre: "Eternal Sunshine", imagen: "img/Eternal Sunshine.jpg" },
  { nombre: "INTERSTELLAR", imagen: "img/INTERSTELLAR.jpg" },
  { nombre: "THE DARK KNIGHT", imagen: "img/THE DARK KNIGHT.jpg" },
  { nombre: "THE SILENCE OF THE LAMBS", imagen: "img/THE SILENCE OF THE LAMBS.jpg" },
  { nombre: "Seven", imagen: "img/Seven.jpg" },
  { nombre: "Parasite", imagen: "img/Parasite.jpg" },
  { nombre: "REQUIEM FOR A DREAM", imagen: "img/REQUIEM FOR A DREAM.jpg" },
  { nombre: "TAXI DRIVER", imagen: "img/TAXI DRIVER.jpg" },
  { nombre: "DONNIE BRASCO", imagen: "img/DONNIE BRASCO.jpg" },
  { nombre: "OPPENHEIMER", imagen: "img/OPPENHEIMER.jpg" },
  { nombre: "kids", imagen: "img/kids.JPG" },
  { nombre: "COHERENCE", imagen: "img/COHERENCE.jpeg.jpeg" },
  { nombre: "ENEMY", imagen: "img/ENEMY.jpeg" },
  { nombre: "IDENTITY", imagen: "img/IDENTITY.JPeG" },
  { nombre: "OLDBOY", imagen: "img/OLDBOY.jpg" },
  { nombre: "BLOW", imagen: "img/BLOW.JPG" },
  { nombre: "THE TRUMAN SHOW", imagen: "img/THE TRUMAN SHOW.jpg" },
  { nombre: "UNCUT GEMS", imagen: "img/UNCUT GEMS.jpg" },
  { nombre: "THE MACHINIST", imagen: "img/THE MACHINIST.JPG" },
  { nombre: "JOHN WICK", imagen: "img/JOHN WICK.jpg" },
  { nombre: "MAZE RUNNER", imagen: "img/MAZE RUNNER.JPG" },
  { nombre: "HER", imagen: "img/HER.jpg" },
  { nombre: "SPIDER MAN INTO THE SPIDER VERSE", imagen: "img/SPIDER MAN INTO THE SPIDER VERSE.jpg" },
  { nombre: "THE WOLVERINE", imagen: "img/THE WOLVERINE.JPG" },
  { nombre: "X MEN ORGINS WOLVERINE", imagen: "img/X MEN ORGINS WOLVERINE.jpg" },
  { nombre: "FOCUS", imagen: "img/FOCUS.JPG" },
  { nombre: "BIGTIME ADOLESCENCE", imagen: "img/BIGTIME ADOLESCENCE.jpg" },
  { nombre: "THE WOLF OF WALL STREET", imagen: "img/THE WOLF OF WALL STREET.JPG" },
  { nombre: "BLADE RUNNER", imagen: "img/BLADE RUNNER.jpg" },
  { nombre: "FIGHT CLUB", imagen: "img/FIGHT CLUB.JPG" },
  { nombre: "JOKER", imagen: "img/JOKER.jpg" },
  { nombre: "GOODFELLAS", imagen: "img/GOODFELLAS.JPG" },
  { nombre: "HEREDITARY", imagen: "img/HEREDITARY.jpg" },
  { nombre: "TERMINATOR 2 JUDGEMENT DAY", imagen: "img/TERMINATOR 2 JUDGEMENT DAY.JPG" },
  { nombre: "TRAINING DAY", imagen: "img/TRAINING DAY.jpg" },
  { nombre: "THE MATRIX", imagen: "img/THE MATRIX.JPG" },
  { nombre: "BATMAN BEGINS", imagen: "img/BATMAN BEGINS.jpg" },
  { nombre: "AMERICAN PSYCHO", imagen: "img/AMERICAN PSYCHO.JPG" },
  { nombre: "EQUILIBRIUM", imagen: "img/EQUILIBRIUM.jpg" },
  { nombre: "DEMOLITION", imagen: "img/DEMOLITION.JPG" },
  { nombre: "NIGHTCRAWLER", imagen: "img/NIGHTCRAWLER.jpg" },
  { nombre: "DONNIE DARKO", imagen: "img/DONNIE DARKO.JPG" },
  { nombre: "DUNKIRK", imagen: "img/DUNKIRK.jpg" },
  { nombre: "mid90s", imagen: "img/mid90s.JPG" },
  { nombre: "PULP FICTION", imagen: "img/PULP FICTION.jpg" },
  // Agrega más películas con sus nombres y rutas de imágenes aquí
];



// Función para seleccionar una película aleatoria
function seleccionarPeliculaAleatoria() {
  const randomIndex = Math.floor(Math.random() * peliculas.length);
  return peliculas[randomIndex];
}



// Función principal para manejar el botón de girar la ruleta
function handleSpinButtonClick() {
  const { nombre, imagen } = seleccionarPeliculaAleatoria();
  document.getElementById("result").innerText = `¡La película seleccionada es: ${nombre}!`;
  document.getElementById("movieImage").src = imagen;
  document.getElementById("spinner").style.animation = "spin 3s ease-out forwards";
  setTimeout(() => {
      document.getElementById("spinner").style.animation = "";
  }, 3000); // Reiniciar la animación después de 3 segundos
}

// Event listener para el botón de girar la ruleta
document.getElementById("spinButton").addEventListener("click", handleSpinButtonClick);


// Función principal para manejar el botón de girar la ruleta
function handleSpinButtonClick() {
  const { nombre, imagen } = seleccionarPeliculaAleatoria();
  const resultadoElement = document.getElementById("result");
  const movieNameElement = document.getElementById("movieName");
  movieNameElement.innerText = nombre;
  movieNameElement.style.color = "yellow"; // Cambiar color del nombre de la película a azul
  resultadoElement.style.color = "white"; // Cambiar color del texto restante a rojo
  resultadoElement.style.fontSize = "24px"; // Cambiar tamaño del texto restante a 24px
  document.getElementById("movieImage").src = imagen;
  document.getElementById("spinner").style.animation = "spin 3s ease-out forwards";
  setTimeout(() => {
      document.getElementById("spinner").style.animation = "";
  }, 3000); // Reiniciar la animación después de 3 segundos
}




