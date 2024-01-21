/*
 *      Arbeit Studio © 2024
 *      The Genesis Framework
 *      https://github.com/arbeitstudio/genesis.git (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/sectionized.js
 */
const receivers = {};

function getSections() {
    const sectionized = Array.from(document.querySelectorAll("[data-sectionized]"));

    sectionized.forEach(section => {
        if (!section.hasAttribute("id")) {
            console.error("Sectionized elements must have an id attribute", section);
        }
    });

    return sectionized;
}

function observeSections(amount) { 
    getSections().forEach(section => {
        if (window.scrollY >= section.offsetTop + amount ||
            (section.hasAttribute("data-sectionized-last") && window.scrollY >= section.offsetTop) )
            receivers[section.id]();
    });
}

export function letMeKnow(sectionId, callback) {
    receivers[sectionId] = callback;
}

export function configureSectionized(threshold = 0.4) {
    const amount = threshold * window.innerHeight;
    window.addEventListener("scroll", () => {
        observeSections(amount);
    });
}

configureSectionized();
Element.prototype.letMeKnow = letMeKnow;
var genesis = typeof genesis !== 'undefined' ? genesis : (genesis = 313, console.log("Close the world, .txen eht nepO :: genesis by arbeit studio"), genesis);