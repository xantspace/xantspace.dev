// Mobile Navigation Logic
const mobileNavTrigger = document.querySelector('#mobile-menu-btn');
const mobileSidebar = document.querySelector('#mobile-sidebar');
const mobileCloseBtn = document.querySelector('#mobile-close-btn');

if (mobileNavTrigger && mobileSidebar && mobileCloseBtn) {
    mobileNavTrigger.addEventListener('click', () => {
        mobileSidebar.classList.remove('translate-x-full');
    });

    mobileCloseBtn.addEventListener('click', () => {
        mobileSidebar.classList.add('translate-x-full');
    });

    // Close on link click
    mobileSidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
             mobileSidebar.classList.add('translate-x-full');
        });
    });
}
