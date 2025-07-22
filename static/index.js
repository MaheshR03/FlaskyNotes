// FlaskyNotes JavaScript

function deleteNote(noteId) {
    // Prevent any form submission or event bubbling
    event.preventDefault();
    event.stopPropagation();
    
    // Add loading state to the delete button
    const deleteBtn = document.querySelector(`[onclick="deleteNote('${noteId}')"]`);
    if (!deleteBtn) {
        console.error('Delete button not found');
        return;
    }
    
    const originalContent = deleteBtn.innerHTML;
    deleteBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
    deleteBtn.disabled = true;

        fetch("/delete-note", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            },
            body: JSON.stringify({ noteId: parseInt(noteId) }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                // Force reload with cache busting
                window.location.href = window.location.href + '?t=' + new Date().getTime();
            } else {
                throw new Error('Server reported failure');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to delete note. Please try again.');
            // Restore button state
            deleteBtn.innerHTML = originalContent;
            deleteBtn.disabled = false;
        });
}

// Add smooth animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add stagger animation to note items
    const noteItems = document.querySelectorAll('.note-item');
    noteItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Auto-focus on note textarea
    const noteTextarea = document.getElementById('note');
    if (noteTextarea && window.location.pathname === '/') {
        noteTextarea.focus();
        
        // Add Enter key submit functionality
        noteTextarea.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                // Prevent default Enter behavior (new line)
                event.preventDefault();
                
                // Find the form and submit it
                const form = noteTextarea.closest('form');
                if (form) {
                    form.submit();
                }
            }
            // Allow Shift+Enter for new lines
        });
    }

    // Auto-focus on email field for auth pages
    const emailInput = document.getElementById('email');
    if (emailInput && (window.location.pathname === '/login' || window.location.pathname === '/sign-up')) {
        emailInput.focus();
    }

    // Auto-dismiss alerts after 5 seconds
    setTimeout(() => {
        const alerts = document.querySelectorAll('.alert');
        alerts.forEach(alert => {
            if (alert.classList.contains('show')) {
                alert.classList.remove('show');
                setTimeout(() => {
                    if (alert.parentNode) {
                        alert.parentNode.removeChild(alert);
                    }
                }, 150);
            }
        });
    }, 5000);
});

// Add character counter for note textarea
document.addEventListener('DOMContentLoaded', function() {
    const noteTextarea = document.getElementById('note');
    if (noteTextarea) {
        const maxLength = 10000; // Match the model's max length
        
        // Create character counter element
        const counterElement = document.createElement('small');
        counterElement.className = 'form-text text-muted text-right';
        counterElement.style.display = 'block';
        counterElement.style.marginTop = '0.5rem';
        
        // Insert after textarea
        noteTextarea.parentNode.insertBefore(counterElement, noteTextarea.nextSibling);
        
        // Update counter
        function updateCounter() {
            const remaining = maxLength - noteTextarea.value.length;
            counterElement.textContent = `${noteTextarea.value.length}/${maxLength} characters`;
            
            if (remaining < 100) {
                counterElement.style.color = '#ff6b6b';
            } else if (remaining < 500) {
                counterElement.style.color = '#feca57';
            } else {
                counterElement.style.color = '#6c757d';
            }
        }
        
        // Initial update and add event listener
        updateCounter();
        noteTextarea.addEventListener('input', updateCounter);
    }
});