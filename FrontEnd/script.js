const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

let inactivityAlertTimer;
let inactivityResetTimer;

function resetInactivityTimers() {
  clearTimeout(inactivityAlertTimer);
  clearTimeout(inactivityResetTimer);

  // 2 minutos: alerta de inactividad
  inactivityAlertTimer = setTimeout(() => {
    chatBox.innerHTML += `
      <div class="message bot">
        <div class="bubble bot-bubble">
          <span><em>¿Sigues ahí? Han pasado 2 minutos sin actividad.</em></span>
        </div>
      </div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 2 * 60 * 1000); // 2 min

  // 5 minutos: limpieza automática
  inactivityResetTimer = setTimeout(() => {
    chatBox.innerHTML += `
      <div class="message bot">
        <div class="bubble bot-bubble">
          <span><em>Sesión finalizada por inactividad. Chat limpiado automáticamente.</em></span>
        </div>
      </div>
    `;
    setTimeout(() => {
      chatBox.innerHTML = "";
    }, 3000); // esperar 3 segundos antes de limpiar
  }, 5 * 60 * 1000); // 5 min
}

// Activar timers desde el inicio
resetInactivityTimers();

// Evento principal del formulario
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  resetInactivityTimers(); // Reinicia los temporizadores

  const pregunta = input.value.trim();
  if (!pregunta) return;

  // Agregar mensaje del usuario
  chatBox.innerHTML += `
    <div class="message user">
      <div class="bubble user-bubble">
        <span>${pregunta}</span>
      </div>
    </div>
  `;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Mostrar "escribiendo..." del bot
  const typingId = `typing-${Date.now()}`;
  chatBox.innerHTML += `
    <div class="message bot" id="${typingId}">
      <div class="bubble bot-bubble typing">Escribiendo<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></div>
    </div>
  `;
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const response = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pregunta })
    });

    const data = await response.json();

    // Reemplazar "typing..." con la respuesta real
    const typingDiv = document.getElementById(typingId);
    typingDiv.innerHTML = `
      <div class="bubble bot-bubble">
        <span>${data.respuesta}</span>
      </div>
    `;
  } catch (error) {
    const typingDiv = document.getElementById(typingId);
    typingDiv.innerHTML = `
      <div class="bubble bot-bubble error">
        <span><strong>Error:</strong> No se pudo conectar al servidor.</span>
      </div>
    `;
  }

  chatBox.scrollTop = chatBox.scrollHeight;
});

// Reiniciar timers en interacción con input y scroll
input.addEventListener("keydown", resetInactivityTimers);
chatBox.addEventListener("scroll", resetInactivityTimers);
