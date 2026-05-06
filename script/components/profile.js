(function () {
  window.Components = window.Components || {};

  window.Components.profile = {
    render(container, section, config) {
      const div = document.createElement("div");
      div.className = "section section-profile";

      div.innerHTML = `
        <div class="profile-card">
          <div class="profile-wrapper">
            <img src="${config.photo}" alt="profile" class="profile-picture" />
          </div>
          <div class="wish">
            <h3 class="wish-hbd">${section.wishTitle || "¡Feliz cumpleaños mi amor!"}</h3>
            <h5 class="wish-text">${section.wishText || ""}</h5>
          </div>
        </div>
      `;

      // 👉 Mantener espacios en animación de letras
      const hbd = div.querySelector(".wish-hbd");
      hbd.innerHTML = hbd.textContent
        .split("")
        .map((ch) => (ch === " " ? `<span>&nbsp;</span>` : `<span>${ch}</span>`))
        .join("");

      container.appendChild(div);
      return div;
    },

   animate(tl, el) {
      el.classList.add("active"); // 👈 SIN ESTO no aparece el fondo
  // 👇 esto lo hace visible
  tl.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out"
  })

  // luego todo lo demás igual
  .from(el.querySelector(".profile-picture"), {
    duration: 0.8,
    scale: 0.5,
    opacity: 0,
    ease: "back.out(1.4)",
  }, "-=0.3")

  .from(el.querySelectorAll(".wish-hbd span"), {
    duration: 0.5,
    opacity: 0,
    y: -30,
    ease: "back.out(1.7)",
    stagger: 0.06,
  })

  .to(el.querySelectorAll(".wish-hbd span"), {
    color: "var(--primary)",
    duration: 0.4,
    stagger: 0.04,
  }, "-=0.3")

  .from(el.querySelector(".wish-text"), {
    duration: 0.5,
    opacity: 0,
    y: 10,
  }, "-=0.2");
},

    exit(tl, el) {
      tl.to(el.querySelectorAll(".wish-hbd span, .wish-text, .profile-picture"), {
        opacity: 0,
        y: 10,
        stagger: 0.03,
        duration: 0.3,
      })
      .to(el, {
        opacity: 0,
        y: 30,
        filter: "blur(8px)",
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          el.classList.remove("active"); // 👈 reset
        }
      });
    },
  };
})();