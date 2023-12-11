var currentTestimonial = 1;

function showTestimonial(testimonialNumber) {
    document.getElementById(`testimonial${currentTestimonial}`).style.display = 'none';
    document.getElementById(`testimonial${testimonialNumber}`).style.display = 'flex';
    currentTestimonial = testimonialNumber;
}