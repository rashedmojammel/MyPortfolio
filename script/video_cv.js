 function playVideoCv() {
          const video   = document.getElementById('videoCv');
          const overlay = document.getElementById('videoCvOverlay');
          video.play();
          overlay.classList.add('hidden');
        }

        function toggleVideoCv() {
          const video   = document.getElementById('videoCv');
          const overlay = document.getElementById('videoCvOverlay');
          if (video.paused) {
            video.play();
            overlay.classList.add('hidden');
          } else {
            video.pause();
            overlay.classList.remove('hidden');
          }
        }

        // Show overlay again when video ends
        document.getElementById('videoCv').addEventListener('ended', () => {
          document.getElementById('videoCvOverlay').classList.remove('hidden');
        });