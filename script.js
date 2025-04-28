function openGift() {
    document.getElementById('giftBox').style.display = 'none';
    document.getElementById('surprise').classList.remove('hidden');
  
    // Play music
    const music = document.getElementById('birthdayMusic');
    music.play();
  
    // Start confetti
    setInterval(() => {
        confetti({
            particleCount: 5,
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0
        });
    }, 2000);
  }
  