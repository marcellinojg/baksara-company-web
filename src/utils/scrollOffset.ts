
function scrollToTarget(element : Element | null, offset = 120) {

    if(element){
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.scrollY - offset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

}

export default scrollToTarget