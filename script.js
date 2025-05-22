document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('floorSlider');
  const floorLabel = document.getElementById('floorLabel');
  slider.addEventListener('change', function() {
    const show5 = slider.checked;
    document.getElementById('floor4-bg').style.display = show5 ? 'none' : 'block';
    document.getElementById('floor4-svg').style.display = show5 ? 'none' : 'block';
    document.getElementById('floor5-bg').style.display = show5 ? 'block' : 'none';
    document.getElementById('floor5-svg').style.display = show5 ? 'block' : 'none';
    floorLabel.textContent = show5 ? '5th Floor' : '4th Floor';
  });
});