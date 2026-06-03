// Establecer la fecha del evento (Año, Mes (0-indexado, 7=Agosto), Día, Hora, Minuto, Segundo)
// Nota: JavaScript indexa los meses desde 0 (0 = Enero, 7 = Agosto)
const countdownDate = new Date(2026, 7, 2, 13, 0, 0).getTime();

// Actualizar el contador cada segundo
const timer = setInterval(function() {
    
    // Obtener la fecha y hora actual
    const now = new Date().getTime();
    
    // Encontrar la diferencia entre el tiempo actual y la fecha del evento
    const distance = countdownDate - now;
    
    // Cálculos de tiempo para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Mostrar los resultados en los elementos correspondientes
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    
    // Si la cuenta regresiva termina, mostrar texto de evento iniciado
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<div class='time-box'><span class='number'>¡HOY!</span><span class='label'>ES EL GRAN DÍA</span></div>";
    }
}, 1000);