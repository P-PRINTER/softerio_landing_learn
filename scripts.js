$serviceBtn = $(".service-btn");
$serviceBtn.click( evt => {
    evt.target.parentNode.classList.toggle("active");
} );