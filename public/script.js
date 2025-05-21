
canvas = document.getElementById('pixelCanvas');
ctx = canvas.getContext('2d');

    function drawPixelArt(mood) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      // Head
      ctx.fillStyle = '#FFD700'; // Yellow
      ctx.fillRect(16, 16, 32, 32); // Head

      // Eyes
      ctx.fillStyle = '#000000'; // Black
      ctx.fillRect(24, 24, 4, 4); // Left eye
      ctx.fillRect(36, 24, 4, 4); // Right eye

      // Mouth based on mood
      if (mood === 'smile') {
        ctx.fillRect(26, 36, 12, 4); // Smiling mouth
      } else if (mood === 'angry') {
        ctx.fillRect(26, 34, 12, 4); // Angry mouth (flat or frowning)
        ctx.clearRect(24, 22, 4, 2); // Left eyebrow for angry expression
        ctx.clearRect(36, 22, 4, 2); // Right eyebrow for angry expression
      }
    }
