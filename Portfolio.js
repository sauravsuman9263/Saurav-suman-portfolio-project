// JavaScript for the toggle functionality
document.getElementById("toggleButton").addEventListener("click", function () {
  const navList = document.getElementById("navList");
  navList.classList.toggle("show");
});

document.getElementById('downloadBtn').addEventListener('click', () => {
  // Create a blob with some data
  const data = 'This is a sample text file.';
  const blob = new Blob([data], { type: 'text/plain' });

  // Create a temporary link element
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Updated_resumee.pdf'; // File name for the download

  // Programmatically click the link to trigger the download
  link.click();

  // Clean up the URL object
  URL.revokeObjectURL(link.href);
});
