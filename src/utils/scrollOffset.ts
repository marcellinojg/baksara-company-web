
function scrollToTarget(element : Element, offset = 120) {

    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

export default scrollToTarget