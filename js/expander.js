document.querySelectorAll('.expandable-row').forEach(function (row) {
  row.addEventListener('click', function (event) {
    // Collapse all items expect clicked one.
    document.querySelectorAll('.expandable-row.expanded').forEach(function (expandedRow) {
      if (expandedRow !== row) {
        expandedRow.classList.remove('expanded');
      }
    });
    
    // Toggle the clicked row
    this.classList.toggle('expanded');
    event.stopPropagation();
  });
});