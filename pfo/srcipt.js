function scrollToElement(element, instance = 0) {
    // Check if the requested instance exists
    if (element.length > instance) {
        // Scroll to the specified instance of the element
        element[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const headerElements = document.querySelectorAll('.header');
const columnElement = document.querySelector('.column');

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement(headerElements);
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement(headerElements, 1);
});

link3.addEventListener('click', () => {
    scrollToElement(columnElement);
});