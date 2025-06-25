# 🤖 Chatbot API experto en Tramites Gubernamentales
Este proyecto es una API REST basada en FastAPI que funciona como un chatbot experto en tramites gubernamentales. Utiliza el modelo Mistral a través de OpenRouter (compatible con la API de OpenAI) para generar respuestas conversacionales.

## 🚀 Requisitos
- Python 3.8 o superior
- Tener una API Key de OpenRouter
- Conexión a internet

## 🛠 Instalación
1. Clona este repositorio o descarga los archivos
2. Crea un entorno virtual:
```
python -m venv venv  
Activa el entorno virtual:

Windows: venv\Scripts\activate

macOS/Linux: source venv/bin/activate

Instala las dependencias:

pip install -r requirements.txt  
Crea un archivo .env en la raíz del proyecto con:

API_KEY=tu_api_key_de_openrouter  
BASE_URL=https://openrouter.ai/api/v1  
▶ Ejecución
Inicia el servidor con:

uvicorn main:app --reload  
API disponible en: http://127.0.0.1:8000

Documentación Swagger UI: http://127.0.0.1:8000/docs

📬 Ejemplo de uso
Petición POST a /chat:

{"pregunta": "¿Qué es una lista en Python?"}  
Respuesta esperada:

{"respuesta": "Una lista en Python es una colección ordenada y mutable de elementos..."}  

📁 Estructura del proyecto
chatbot-ia_python/  
├── main.py           # API con FastAPI  
├── config.py         # Contiene el PROMPT_SISTEMA  
├── .env              # Variables de entorno  
├── requirements.txt  # Dependencias  
├── Dockerfile        # Configuración para Docker  
├── frontend/         # Interfaz web para el chatbot  
│   ├── index.html    # Estructura HTML  
│   ├── style.css     # Estilos modernos (Glassmorphism + Python theme)  
│   └── script.js     # Lógica de chat, efectos y temporizadores  
└── README.md  

💬 Interfaz Web del Chatbot
El proyecto incluye una interfaz web moderna y funcional para interactuar visualmente con la API:

✨ Funcionalidades del frontend
💎 Diseño tipo Glassmorphism: fondo translúcido con desenfoque y bordes redondeados.

🎨 Tema Pythonista: colores azul y amarillo inspirados en el logo oficial de Python.

⌨️ Tipografía técnica: uso de Fira Code para dar estilo de desarrollo.

💬 Mensajes organizados: estilo chat con diferenciación clara entre el usuario y el bot.

🕒 Temporizadores de inactividad:

A los 2 minutos sin interacción se muestra una alerta.

A los 5 minutos el chat se limpia automáticamente.

✍️ Efecto "escribiendo...": simula la respuesta del bot en tiempo real.

🔄 Soporte CORS habilitado para comunicación frontend-backend.

▶ Cómo usarlo
Asegúrate de que el backend esté en ejecución (uvicorn main:app --reload)

Abre el archivo frontend/index.html en tu navegador

Pregunta lo que quieras sobre Python 😄
```
---

👤 Autor:

Desarrollado por Jhonier Quintero, developer y entusiasta de la IA.