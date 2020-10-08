export function initObserver(cb) {
    return new IntersectionObserver(
        (enties, observer) => {
            enties.forEach(entry => {
                if (entry.isIntersecting) {
                    window.addEventListener('scroll', cb)
                } else if (!entry.isIntersecting) {
                    window.removeEventListener('scroll', cb)
                }
            })
        }
    )
}