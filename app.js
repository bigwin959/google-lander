document.addEventListener('DOMContentLoaded', () => {
    // Apply Configuration

    // 1. Breaking News
    const newsEl = document.getElementById('breakingNewsDisplay');
    if (newsEl && PAGE_CONFIG.breakingNews) {
        // Duplicate the string a few times to make a smooth marquee
        newsEl.innerText = `${PAGE_CONFIG.breakingNews} \u00A0\u00A0\u00A0\u00A0\u00A0 ${PAGE_CONFIG.breakingNews} \u00A0\u00A0\u00A0\u00A0\u00A0 ${PAGE_CONFIG.breakingNews}`;
    }

    // 2. Match of the Day Logic (Continuous Rotation)
    function startMatchRotation() {
        if (!MATCH_LIST || MATCH_LIST.length === 0) return;

        let currentIndex = 0;

        // Cache DOM elements
        const team1Name = document.getElementById('team1Name');
        const team2Name = document.getElementById('team2Name');
        const team1Logo = document.getElementById('team1Logo');
        const team2Logo = document.getElementById('team2Logo');
        const matchOdds = document.getElementById('matchOdds');

        function displayMatch(index) {
            const match = MATCH_LIST[index];

            // DOM Updates
            team1Name.innerText = match.team1;
            team2Name.innerText = match.team2;

            // Image assignments (lazy loading approach)
            if (match.logo1 && team1Logo.src !== match.logo1) {
                team1Logo.src = match.logo1;
            }
            if (match.logo2 && team2Logo.src !== match.logo2) {
                team2Logo.src = match.logo2;
            }

            matchOdds.innerText = match.tournament + " - আমাদের AI এনালাইসিস রেডি।";
        }

        // Initial Display
        displayMatch(currentIndex);

        // Rotate every 5 seconds continuously
        setInterval(() => {
            currentIndex = (currentIndex + 1) % MATCH_LIST.length;
            displayMatch(currentIndex);
        }, 5000);
    }

    // Start rotation immediately
    startMatchRotation();

    // 3. Conversion Area
    if (PAGE_CONFIG.promoCode) {
        document.getElementById('promoCodeDisplay').innerText = PAGE_CONFIG.promoCode;
    }
    if (PAGE_CONFIG.promoCodeText) {
        document.getElementById('promoCodeTextDisplay').innerHTML = `<i class="fa-regular fa-clock mr-1"></i> ${PAGE_CONFIG.promoCodeText}`;
    }
    if (PAGE_CONFIG.progressPercentage) {
        document.getElementById('progressBar').style.width = PAGE_CONFIG.progressPercentage + '%';
        document.getElementById('progressText').innerText = PAGE_CONFIG.progressPercentage + '% Full';
    }
    if (PAGE_CONFIG.offerLink) {
        const cta = document.getElementById('ctaLink');
        cta.href = PAGE_CONFIG.offerLink;

        // Auto-copy promo code on click
        cta.addEventListener('click', () => {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(PAGE_CONFIG.promoCode).catch(err => {
                    console.error('Could not copy text: ', err);
                });
            }
        });
    }

    // 4. Fake Reviews Script
    const reviews = [
        { name: "Rahim M.", time: "1 min ago", text: "Bhai, BIGWIN959 er withdrawal onek fast! bKash e 5 minute e taka peyechi. 🔥", avatar: "https://ui-avatars.com/api/?name=Rahim&background=f8f9fa" },
        { name: "Sajib_77", time: "3 mins ago", text: "Ajker Dhaka match er prediction 100% accurate chilo. Best site in BD right now.", avatar: "https://ui-avatars.com/api/?name=Sajib&background=f8f9fa" },
        { name: "Hasan K.", time: "5 mins ago", text: "Nutun account khulei bonus peyechi. Apnarao try korte paren, site ta secure mone holo.", avatar: "https://ui-avatars.com/api/?name=Hasan&background=f8f9fa" }
    ];

    const reviewsContainer = document.getElementById('reviewsContainer');
    let currentIndex = 0;

    function renderReview(review, animateIn) {
        const div = document.createElement('div');
        div.className = `flex gap-3 absolute w-full transition-all duration-500 ease-in-out ${animateIn ? 'translate-y-4 opacity-0' : ''}`;
        div.innerHTML = `
            <img src="${review.avatar}" class="w-10 h-10 rounded-full bg-gray-200">
            <div class="bg-slate-50 rounded-lg rounded-tl-none p-3 border border-slate-100 flex-1 shadow-sm relative">
                <div class="flex justify-between items-baseline mb-1">
                    <span class="font-bold text-sm text-slate-800">${review.name}</span>
                    <span class="text-[10px] text-gray-400">${review.time}</span>
                </div>
                <p class="text-sm text-slate-600 leading-snug">${review.text}</p>
            </div>
        `;
        return div;
    }

    // Initialize first review
    let currentReviewEl = renderReview(reviews[0], false);
    reviewsContainer.appendChild(currentReviewEl);

    // Cycle reviews periodically
    setInterval(() => {
        const oldReview = currentReviewEl;
        oldReview.classList.add('opacity-0', '-translate-y-4');

        setTimeout(() => {
            oldReview.remove();
        }, 500);

        currentIndex = (currentIndex + 1) % reviews.length;
        currentReviewEl = renderReview(reviews[currentIndex], true);
        reviewsContainer.appendChild(currentReviewEl);

        // Trigger reflow to ensure animation runs
        void currentReviewEl.offsetWidth;

        currentReviewEl.classList.remove('translate-y-4', 'opacity-0');
    }, 3500);
});
