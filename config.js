/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Valeria",
  photo: "./img/cinco.jpeg",       // Place your photo in the img/ folder
  music: "./music/musi.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
  {
    type: "greeting",
    title: "Hola",
    subtitle: "¡Por cierto amor, me gusta mucho ese nombre!",
  },
  {
    type: "countdown",
    from: 3,                    // Cuenta regresiva desde este número
    goText: "🎉",              // Texto que se muestra al terminar la cuenta
  },
  {
    type: "announcement",
    text: "¡¡Es tu cumpleaños!! :D",
  },
  {
    type: "chatbox",
    message:
      "¡¡Feliz cumpleaños!! Espero que la pases increíble hoy. Te amo mucho ",
    buttonText: "Enviar",
  },
  {
    type: "ideas",
    lines: [
      "Eso es lo que iba a hacer.",
      "Pero luego me detuve.",
      "Me di cuenta de que quería hacer algo un poco <strong>especial</strong>.",
      "Porque,",
      "Tú eres especial <span>:)</span>",
    ],
    bigLetters: "ASÍ QUE",
  },
  {
    type: "quote",
    text: "Cuanto más elogias y celebras tu vida, más hay en la vida para celebrar.",
    author: "Oprah Winfrey",
  },
  {
    type: "stars",
    count: 40,
  },
  {
    type: "balloons",
    count: 25,
  },
  {
    type: "profile",
    wishTitle: "¡Feliz cumpleaños mi amor!",
   wishText: "Y recuerda que siempre serás la mejor ❤️",
  },
  {
    type: "fireworks",
    count: 24,
  },
  {
    type: "confetti",
    count: 9,
  },
{
  type: "closing",
text: "Espero te haya gustado chinita. Te mando un beso desde aquí :)",
},
],
};
