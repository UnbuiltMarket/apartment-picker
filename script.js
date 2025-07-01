document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('floorSlider');
  const topLabel = document.querySelector('.floor-label.top');
  const bottomLabel = document.querySelector('.floor-label.bottom');
  
  function updateFloorDisplay() {
    const show5 = slider.checked;
    document.getElementById('floor4-bg').style.display = show5 ? 'block' : 'none';
    document.getElementById('floor4-svg').style.display = show5 ? 'block' : 'none';
    document.getElementById('floor5-bg').style.display = show5 ? 'none' : 'block';
    document.getElementById('floor5-svg').style.display = show5 ? 'none' : 'block';
    
    // Update label styles to show which floor is active
    if (show5) {
      topLabel.style.fontWeight = '100';
      topLabel.style.color = '#999';
      bottomLabel.style.fontWeight = '400';
      bottomLabel.style.color = '#000';
    } else {
      topLabel.style.fontWeight = '400';
      topLabel.style.color = '#000';
      bottomLabel.style.fontWeight = '100';
      bottomLabel.style.color = '#999';
    }
  }
  
  slider.addEventListener('change', updateFloorDisplay);
  
  // Initialize the display
  updateFloorDisplay();
});