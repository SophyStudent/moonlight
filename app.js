// Moonlight Afriqa - Phase Band-Home Interactions
document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-2xl', 'bg-opacity-95');
    } else {
      header.classList.remove('shadow-2xl', 'bg-opacity-95');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 3. Side Panel Drawer
  const openDrawerBtn = document.getElementById('open-side-drawer');
  const closeDrawerBtn = document.getElementById('close-side-drawer');
  const sideDrawer = document.getElementById('side-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');

  function openDrawer() {
    if (sideDrawer && drawerBackdrop) {
      sideDrawer.classList.add('active');
      drawerBackdrop.classList.add('active');
      sideDrawer.classList.remove('translate-x-full', 'pointer-events-none', 'invisible');
      sideDrawer.classList.add('translate-x-0', 'pointer-events-auto', 'visible');
      drawerBackdrop.classList.remove('opacity-0', 'pointer-events-none', 'invisible');
      drawerBackdrop.classList.add('opacity-100', 'pointer-events-auto', 'visible');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (sideDrawer && drawerBackdrop) {
      sideDrawer.classList.remove('active');
      drawerBackdrop.classList.remove('active');
      sideDrawer.classList.remove('translate-x-0', 'pointer-events-auto', 'visible');
      sideDrawer.classList.add('translate-x-full', 'pointer-events-none', 'invisible');
      drawerBackdrop.classList.remove('opacity-100', 'pointer-events-auto', 'visible');
      drawerBackdrop.classList.add('opacity-0', 'pointer-events-none', 'invisible');
      document.body.style.overflow = '';
    }
  }

  if (openDrawerBtn) openDrawerBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });

  if (sideDrawer) {
    sideDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // 4. Pre-save "Blessed" Countdown Timer
  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minsEl = document.getElementById('count-mins');
  const secsEl = document.getElementById('count-secs');

  // Target date: 18 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 18);
  targetDate.setHours(0, 0, 0, 0);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
      if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
    }
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // 5. Video Modal Popup
  const videoTriggers = document.querySelectorAll('.video-trigger');
  const videoModal = document.getElementById('video-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const closeModalBtn = document.getElementById('close-modal');

  videoTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const videoSrc = trigger.dataset.videoSrc || 'https://www.youtube-nocookie.com/embed/W5l-musI6pw?autoplay=1';
      if (modalIframe && videoModal) {
        modalIframe.src = videoSrc;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (modalIframe && videoModal) {
      modalIframe.src = '';
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeModal();
    });
  }

  // 6. Pre-save & Newsletter Form Handlers
  const presaveForm = document.getElementById('presave-form');
  const presaveSuccess = document.getElementById('presave-success');
  if (presaveForm && presaveSuccess) {
    presaveForm.addEventListener('submit', (e) => {
      e.preventDefault();
      presaveForm.classList.add('hidden');
      presaveSuccess.classList.remove('hidden');
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterSuccess = document.getElementById('newsletter-success');
  if (newsletterForm && newsletterSuccess) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      newsletterForm.classList.add('hidden');
      newsletterSuccess.classList.remove('hidden');
    });
  }

  // 7. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
      } else {
        backToTopBtn.classList.add('opacity-0', 'invisible');
        backToTopBtn.classList.remove('opacity-100', 'visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 8. Hero Artist Image — single static portrait (no rotation)
  const heroImg1 = document.getElementById('hero-img-1');
  if (heroImg1) {
    heroImg1.classList.add('active');
  }

  // 9. Music Services Smart-Links Modal Interactions
  const servicesModal = document.getElementById('services-modal');
  const closeServicesBtn = document.getElementById('close-services-modal');
  const modalSongTitle = document.getElementById('modal-song-title');
  const openServicesBtns = document.querySelectorAll('.open-services-modal-btn');

  function openServicesModal(songTitle) {
    if (servicesModal) {
      if (modalSongTitle && songTitle) {
        modalSongTitle.textContent = songTitle;
      }
      servicesModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeServicesModal() {
    if (servicesModal) {
      servicesModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openServicesBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const song = btn.dataset.song || 'Blessed';
      openServicesModal(song);
    });
  });

  if (closeServicesBtn) closeServicesBtn.addEventListener('click', closeServicesModal);
  if (servicesModal) {
    servicesModal.addEventListener('click', (e) => {
      if (e.target === servicesModal) closeServicesModal();
    });
  }

  // 10. Tracklist Player Header Play/Pause Toggle
  const playerMainPlayBtn = document.getElementById('player-main-play-btn');
  let isPlaying = false;
  if (playerMainPlayBtn) {
    playerMainPlayBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      const icon = playerMainPlayBtn.querySelector('i');
      if (icon) {
        if (isPlaying) {
          icon.classList.remove('fa-play', 'ml-0.5');
          icon.classList.add('fa-pause');
        } else {
          icon.classList.remove('fa-pause');
          icon.classList.add('fa-play', 'ml-0.5');
        }
      }
    });
  }
});
