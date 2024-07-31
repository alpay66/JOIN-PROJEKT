document.querySelectorAll('.prio-button').forEach(function(button) {
    button.addEventListener('mouseover', function() {
        if (!this.classList.contains('clicked')) {
            const hoverSrc = this.src.replace('_standart', '_hover');
            this.src = hoverSrc;
        }
    });

    button.addEventListener('mouseout', function() {
        if (!this.classList.contains('clicked')) {
            const standartSrc = this.src.replace('_hover', '_standart');
            this.src = standartSrc;
        }
    });

    document.getElementById("title-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addToBoard();
        }
    });

    button.addEventListener('click', function() {
        document.querySelectorAll('.prio-button').forEach(function(btn) {
            if (btn !== button) {
                btn.classList.remove('clicked');
                if (btn.src.includes('_clicked')) {
                    btn.src = btn.src.replace('_clicked', '_standart');
                }
            }
        });

        this.classList.add('clicked');
        if (this.src.includes('_hover')) {
            this.src = this.src.replace('_hover', '_clicked');
        } else if (this.src.includes('_standart')) {
            this.src = this.src.replace('_standart', '_clicked');
        }
    });
});

function addToBoard() {
    let text = document.getElementById('title-input');
    let category = document.getElementById('category');
    let date = document.getElementById('date');

    function setError(field, message) {
        field.style.border = '1px solid #FF8190';
        let errorElement = field.nextElementSibling;
        if (errorElement && errorElement.className === 'error-message') {
            errorElement.textContent = message;
        } else {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.color = '#FF8190';
            errorElement.textContent = message;
            field.parentNode.insertBefore(errorElement, field.nextSibling);
        }
    }

    function clearError(field) {
        field.style.border = '1px solid #D1D1D1';
        let errorElement = field.nextElementSibling;
        if (errorElement && errorElement.className === 'error-message') {
            errorElement.remove();
        }
    }

    let isEmpty = false;

    if (text.value.trim() === '') {
        setError(text, 'Please fill out this field.');
        isEmpty = true;
    } else {
        clearError(text);
    }

    if (category.value.trim() === '') {
        setError(category, 'Please fill out this field.');
        isEmpty = true;
    } else {
        clearError(category);
    }

    if (date.value.trim() === '') {
        setError(date, 'Please fill out this field.');
        isEmpty = true;
    } else {
        clearError(date);
    }

    if (isEmpty) {
        console.log('Please fill in all required fields.');
    } else {
        console.log('All required fields are filled. Proceeding...');

        text.value = '';
        category.value = '';
        date.value = '';

        document.querySelectorAll('.prio-button').forEach(function(button) {
            button.classList.remove('clicked');
            button.src = button.src.replace('_clicked', '_standart');
        });
    }
}

function resetInput() {
    window.location.href = '/html/add_task.html';
    console.log('cleared inputs');
}
