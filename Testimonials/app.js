const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");
const namePlaceholder = document.getElementById("name");
const imagePlaceholder = document.getElementById("customerImage");
const testimonialPlaceholder = document.getElementById("testimonial");

// List of customers
var customers = [
    {
        img: "./img/customer-0.jpg",
        name: "John",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda.Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?"
    },
    {
        img: "./img/customer-1.jpg",
        name: "SANDY",
        testimonial: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
    },
    {
        img: "./img/customer-2.jpg",
        name: "AMY",
        testimonial: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        img: "./img/customer-3.jpg",
        name: "TYRELL",
        testimonial: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    },
    {
        img: "./img/customer-4.jpg",
        name: "WANDA",
        testimonial: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
];
var index = 0;

// Change data to previous customer if LEFT arrow is pressed
leftArrow.addEventListener("click", function () {
    if (index == 0) {
        index = customers.length - 1;
    }
    else {
        index--;
    }

    namePlaceholder.innerText = customers[index].name;
    imagePlaceholder.src = customers[index].img;
    testimonialPlaceholder.innerText = customers[index].testimonial;
});

// Change data to next customer if RIGHT arrow is pressed
rightArrow.addEventListener("click", function () {
    if (index == customers.length - 1) {

        index = 0;
    }
    else {
        index++;
    }

    namePlaceholder.innerText = customers[index].name;
    imagePlaceholder.src = customers[index].img;
    testimonialPlaceholder.innerText = customers[index].testimonial;
});

