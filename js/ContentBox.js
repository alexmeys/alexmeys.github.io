function showContent(contentId) {
  const contents = document.querySelectorAll('.content');
  contents.forEach((content) => {
    content.classList.remove('active');
  });

  const selectedContent = document.getElementById(contentId);
  selectedContent.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.transparent-btn');
    const contents = document.querySelectorAll('.content');

    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            const contentId = this.getAttribute('data-content');

            // Hide all content sections
            contents.forEach((content) => {
                content.classList.remove('active');
            });

            // Show the selected content
            const selectedContent = document.getElementById(contentId);
            if (selectedContent) {
                selectedContent.classList.add('active');
            } else {
                console.error(`Content section not found for ID: ${contentId}`);
            }

            // Remove 'active' class from all buttons
            buttons.forEach((btn) => {
                btn.classList.remove('active');
            });

            // Add 'active' class to the clicked button
            this.classList.add('active');
        });
    });
});
