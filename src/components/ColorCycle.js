const colors = [
    "255, 255, 0",   // Yellow
    "153, 51, 255",  // Purple
    "255, 51, 51",   // Red
    "0, 128, 255",   // Blue
    "51, 255, 51"    // Green
  ];
  
  let colorIndex = 0;
  
  export function nextColor() {
    const color = colors[colorIndex % colors.length];
    colorIndex++;
    return color;
  }
  
  export function resetColorCycle() {
    colorIndex = 0;
  }
  