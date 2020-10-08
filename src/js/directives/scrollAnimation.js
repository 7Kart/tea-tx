
const animatedScrollObserver = new IntersectionObserver((enties, observer) => {
    console.log(`enties`, enties);

    enties.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("scroll-enter")
            observer.unobserve(entry.target);
        }
    })
})

export default {
    bind(el) {
        el.classList.add("before-scroll-enter")
        animatedScrollObserver.observe(el);
    }
}