// Toggle service selection
document.querySelectorAll('.service-checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', function() {
        this.classList.toggle('checked');
        // Add cart update logic here
    });
});

// Mobile responsive cart visibility
if (window.innerWidth <= 768) {
    const cart = document.querySelector('.cart-section');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > lastScrollTop) {
            cart.style.transform = 'translateY(100%)';
        } else {
            cart.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
}
        
// Add click handlers for interactive elements
document.querySelectorAll('.staff-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.staff-option').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelectorAll('.calendar-day').forEach(day => {
    day.addEventListener('click', function() {
        document.querySelectorAll('.calendar-day').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelectorAll('.time-slot').forEach(slot => {
    slot.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.querySelectorAll('.time-slot').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});



 // Handle payment option selection
 document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', function() {
        // Remove selected class from all options
        document.querySelectorAll('.payment-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        // Add selected class to clicked option
        this.classList.add('selected');
        // Check the radio button
        this.querySelector('input[type="radio"]').checked = true;
    });
});

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
});// Toggle service selection
document.querySelectorAll('.service-checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', function() {
        this.classList.toggle('checked');
        // Add cart update logic here
    });
});

// Mobile responsive cart visibility
if (window.innerWidth <= 768) {
    const cart = document.querySelector('.cart-section');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > lastScrollTop) {
            cart.style.transform = 'translateY(100%)';
        } else {
            cart.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
}
        
// Add click handlers for interactive elements
document.querySelectorAll('.staff-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.staff-option').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelectorAll('.calendar-day').forEach(day => {
    day.addEventListener('click', function() {
        document.querySelectorAll('.calendar-day').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelectorAll('.time-slot').forEach(slot => {
    slot.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.querySelectorAll('.time-slot').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});



 // Handle payment option selection
 document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', function() {
        // Remove selected class from all options
        document.querySelectorAll('.payment-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        // Add selected class to clicked option
        this.classList.add('selected');
        // Check the radio button
        this.querySelector('input[type="radio"]').checked = true;
    });
});

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
});