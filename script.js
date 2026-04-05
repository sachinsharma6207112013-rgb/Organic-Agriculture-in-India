// --- CHART.JS SETUP ---
document.addEventListener("DOMContentLoaded", function() {
    const ctxExport = document.getElementById('exportChart');
    if (ctxExport) {
        new Chart(ctxExport, {
            type: 'bar',
            data: {
                labels: ['2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Export Value ($ Millions)',
                    data: [689, 1040, 1120, 1210, 1300],
                    backgroundColor: '#2d6a4f',
                    borderRadius: 6
                }]
            },
            options: { responsive: true }
        });
    }

    const ctxStates = document.getElementById('statesChart');
    if (ctxStates) {
        new Chart(ctxStates, {
            type: 'doughnut',
            data: {
                labels: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Gujarat', 'Others'],
                datasets: [{
                    data: [35, 20, 15, 10, 20],
                    backgroundColor: ['#133a27', '#2d6a4f', '#52b788', '#b5835a', '#e9c46a']
                }]
            },
            options: { responsive: true, cutout: '65%' }
        });
    }

    const ctxYield = document.getElementById('yieldChart');
    if (ctxYield) {
        new Chart(ctxYield, {
            type: 'line',
            data: {
                labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                datasets: [{
                    label: 'Organic Yield vs Conventional (%)',
                    data: [75, 80, 88, 95, 105],
                    borderColor: '#e9c46a',
                    backgroundColor: 'rgba(233,196,106,0.2)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 4
                }]
            },
            options: { responsive: true, scales: { y: { min: 60, max: 120 } } }
        });
    }
});


// --- MASSIVE DATA DICTIONARY WITH ROBUST UNPSLASH IMAGES ---
const contentDatabase = {
    // BENEFITS
    'ben-environment': {
        title: "Environmental Healing",
        html: `
            <h3>Restoring the Earth's Foundation</h3>
            <img src="https://ocia.org/wp-content/uploads/2023/08/OCIA-Cover-scaled.jpg" alt="Rich healthy soil in hands">
            <p>The core of organic farming lies in soil health. For decades, synthetic nitrogen fertilizers have depleted the topsoil of its natural organic carbon. By replacing synthetics with compost, green manure, and bio-fertilizers, organic farming actively pulls carbon out of the atmosphere and stores it in the soil.</p>
            <h4>Key Environmental Impacts:</h4>
            <ul>
                <li><strong>Water Conservation:</strong> Soil rich in organic matter acts like a sponge. Studies show organic soil can hold up to 30% more water, making farms highly resilient to droughts.</li>
                <li><strong>Groundwater Protection:</strong> Without chemical nitrates washing into the soil, the local groundwater remains pure and safe from agricultural runoff.</li>
            </ul>
            <div class="highlight-box">Deep Effect: In the face of climate change, organic farming is not just an alternative; it is a critical carbon sequestration tool that can stabilize regional microclimates.</div>
        `
    },
    'ben-health': {
        title: "Public Health Transformation",
        html: `
            <h3>Eradicating Chemical Exposure</h3>
            <img src="https://cdn.shopaccino.com/rootz/articles/organic-vs-non-organic-food-6310949214120069_l.jpg?v=684" alt="Fresh organic vegetables">
            <p>The health argument for organic farming operates on two fronts: the farmer and the consumer. In regions utilizing heavy pesticides, farmers suffer incredibly high rates of neurological disorders and cancers due to unprotected spraying.</p>
            <h4>The Two-Fold Health Benefit:</h4>
            <ul>
                <li><strong>Farmer Safety:</strong> Eliminates the handling of highly toxic organophosphates, dramatically increasing the life expectancy and quality of life for farming families.</li>
                <li><strong>Consumer Safety:</strong> Eliminates pesticide residues in daily food items, which are linked to endocrine disruption and developmental issues in children.</li>
            </ul>
            <div class="highlight-box">Deep Effect: Transitioning to organic agriculture drastically reduces the long-term burden on rural healthcare infrastructure, saving billions in medical expenses.</div>
        `
    },
    'ben-economic': {
        title: "Economic Independence",
        html: `
            <h3>Breaking the Debt Cycle</h3>
            <img src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1000&q=80" alt="Farmer calculating finances">
            <p>Conventional farming requires farmers to purchase expensive seeds, fertilizers, and pesticides every single season, often leading them into a vicious cycle of debt. Organic farming focuses on "low external inputs."</p>
            <h4>Financial Mechanics:</h4>
            <ul>
                <li><strong>Input Cost Reduction:</strong> Farmers create their own bio-fertilizers (like Jeevamrut) using local cow dung and organic waste, cutting input costs by up to 50%.</li>
                <li><strong>Premium Pricing:</strong> Once certified (which takes 3 years), farmers can sell their produce in domestic and international markets at a 20-40% premium.</li>
            </ul>
            <div class="highlight-box">Deep Effect: Economic independence empowers marginal farmers. When input costs drop near zero, even a lower yield in the event of a bad monsoon won't result in catastrophic, life-threatening debt.</div>
        `
    },
    'ben-biodiversity': {
        title: "Biodiversity Restoration",
        html: `
            <h3>Bringing Back the Pollinators</h3>
            <img src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=1000&q=80" alt="Bee on a flower">
            <p>Chemical monocropping creates biological deserts. Broad-spectrum pesticides don't just kill pests; they kill bees, butterflies, and the complex web of beneficial insects required for natural ecosystem balance.</p>
            <h4>Ecosystem Recovery:</h4>
            <ul>
                <li><strong>Polyculture:</strong> Organic farms rely on planting multiple crops together to naturally repel pests and attract pollinators.</li>
                <li><strong>Natural Predators:</strong> By not spraying chemicals, birds and predatory insects return, providing a free, natural pest-control service to the farmer.</li>
            </ul>
            <div class="highlight-box">Deep Effect: One-third of the human food supply depends on insect pollination. Restoring biodiversity on farms is essentially protecting the global food supply chain from collapse.</div>
        `
    },

    // GRAPHS
    'graph-export': {
        title: "Deep Dive: Organic Export Economics",
        html: `
            <h3>The Booming Export Market</h3>
            <img src="https://www.knnindia.co.in/uploads/newsfiles/ORGANIC-16-4-2025.jpg" alt="Shipping containers">
            <p>India's organic exports have skyrocketed to $1.3 Billion. The global demand for chemical-free ingredients has positioned India as a powerhouse, especially in the US and European markets.</p>
            <h4>Primary Export Commodities:</h4>
            <ul>
                <li><strong>Processed Food Products (46%):</strong> Leading the charge due to high shelf-life.</li>
                <li><strong>Oil Seeds & Soybean:</strong> Massive demand for organic livestock feed globally.</li>
                <li><strong>Tea & Spices:</strong> High premium crops sourced directly from the pristine hills of Assam and Sikkim.</li>
            </ul>
            <div class="highlight-box">Future Effect: If India invests heavily in cold chain infrastructure and processing units, export values could hit $5 Billion by 2030, drastically increasing foreign exchange reserves.</div>
        `
    },
    'graph-states': {
        title: "Deep Dive: State-by-State Adoption",
        html: `
            <h3>The Geography of Organic India</h3>
            <img src="https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&w=1000&q=80" alt="Indian rural landscape">
            <p>Madhya Pradesh leads the nation with 35% of the total certified organic land. Why? MP historically used fewer chemical fertilizers. Converting these "default organic" tribal belts into "certified organic" regions was faster, cheaper, and politically easier.</p>
            <h4>The Challenge of the Breadbasket:</h4>
            <p>Noticeably absent are Punjab and Haryana. These states are trapped in chemical-heavy cycles due to high minimum support prices (MSP) for conventional wheat and rice.</p>
            <div class="highlight-box">Future Effect: For national resilience, the northern food-bowl states MUST be transitioned. If organic farming remains restricted to central and western states, national supply chains will be highly vulnerable to localized climate events.</div>
        `
    },
    'graph-yield': {
        title: "Deep Dive: The Yield Gap Reality",
        html: `
            <h3>Surviving the 5-Year Transition</h3>
            <img src="https://www.researchgate.net/profile/John-Paull/publication/321146140/figure/fig3/AS:669671929942016@1536673638081/Certified-organic-agriculture-hectares-have-grown-at-nearly-12-per-annum-for-the-past.jpg" alt="Young crops growing">
            <p>The line chart shows the scariest part of organic farming for a farmer: The Initial Yield Drop. When chemicals are stopped, the soil goes through biological withdrawals.</p>
            <h4>The Crucial Timeline:</h4>
            <ul>
                <li><strong>Years 1-2:</strong> Yields crash to 70-80% of normal. Pests increase because natural predators haven't returned yet.</li>
                <li><strong>Year 3:</strong> Soil microbiome starts recovering. Certification is granted, allowing premium pricing to offset lower yields.</li>
                <li><strong>Years 4-5:</strong> Yields catch up to or surpass conventional farming, while input costs remain near zero.</li>
            </ul>
            <div class="highlight-box">Future Effect: The government MUST provide direct cash transfers to farmers during Years 1 and 2. Without this bridging finance, small-holder farmers will go bankrupt before reaching profitability.</div>
        `
    },

    // POLITICS
    'pol-green-rev': {
        title: "History: The Green Revolution",
        html: `
            <h3>1960s: Saving the Nation from Starvation</h3>
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80" alt="Wheat field harvest">
            <p>In the 1960s, India faced severe droughts and relied on foreign food aid. Prime Minister Indira Gandhi and geneticist Dr. M.S. Swaminathan took a drastic decision: import high-yielding dwarf wheat varieties and heavily subsidize chemical fertilizers.</p>
            <h4>The Immediate Success:</h4>
            <p>It worked flawlessly. India became self-sufficient and averted famine. Punjab became the nation's breadbasket.</p>
            <div class="highlight-box">Long-Term Future Effects (The Present Crisis): Fifty years later, the soil in Punjab is highly degraded (organic carbon below 0.5%). Groundwater is critically depleted, and pesticide overuse has caused severe health crises. The decision saved the 20th century but endangered the 21st.</div>
        `
    },
    'pol-sikkim': {
        title: "History: Sikkim's Bold Mandate",
        html: `
            <h3>2003-2016: The 100% Organic State</h3>
            <img src="https://sc0.blr1.digitaloceanspaces.com/large/801861-article-niqqpnhejw-1452785177.jpeg" alt="Lush green mountains in Sikkim">
            <p>Under Chief Minister Pawan Kumar Chamling, Sikkim made an unprecedented political decision. They legally banned the import of synthetic chemicals and phased out subsidies by 10% each year.</p>
            <h4>The Implementation:</h4>
            <p>Over 13 years, the government trained 66,000 farmers in composting and bio-pest management. The result was a total transformation of the state's agricultural economy.</p>
            <div class="highlight-box">Future Effects: Sikkim won the UN Future Policy Award. Eco-tourism exploded. Cardamom and ginger farmers saw incomes rise by 30%. This serves as the ultimate proof-of-concept for global policymakers.</div>
        `
    },
    'pol-pkvy': {
        title: "History: The Modern Era (PKVY)",
        html: `
            <h3>2015: Mainstreaming Organic Schemes</h3>
            <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1000&q=80" alt="Indian farmers meeting">
            <p>The current government launched the PKVY scheme (Paramparagat Krishi Vikas Yojana) to provide structural financial support for organic cluster formation.</p>
            <h4>The Decision Mechanics:</h4>
            <p>The government provides ₹31,500 per hectare over three years directly to farmers to help cover the costs of bio-fertilizers, seeds, and PGS certification.</p>
            <div class="highlight-box">Future Effects: The scheme successfully pushed India to have the highest number of organic farmers globally (4.43 Million). However, until massive chemical urea subsidies are capped, the full national transition will remain stalled.</div>
        `
    }
};

// --- SLIDE-IN PANEL LOGIC ---
const slidePanel = document.getElementById('slide-panel');
const panelTitle = document.getElementById('panel-title');
const panelContent = document.getElementById('panel-content');

document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const data = contentDatabase[targetId];
        
        if(data) {
            panelTitle.innerText = data.title;
            panelContent.innerHTML = data.html;
            slidePanel.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        }
    });
});

function closePanel() {
    slidePanel.classList.remove('active');
    document.body.style.overflow = 'auto'; 
}

// --- IDEA SUBMISSION ---
function submitIdea(event) {
    event.preventDefault(); 
    const name = document.getElementById('idea-name').value;
    const phone = document.getElementById('idea-phone').value;
    const idea = document.getElementById('idea-text').value;
    
    document.getElementById('idea-success-msg').style.display = 'block';
    document.getElementById('solutionForm').reset();
    
    const ownerWhatsAppNumber = "+919631614280"; 
    const waMessage = `Hello Sachin! My name is ${name} (${phone}). I visited your Organic India site and want to propose a solution:%0A%0A"${idea}"`;
    const waLink = `https://api.whatsapp.com/send?phone=${ownerWhatsAppNumber}&text=${waMessage}`;
    window.open(waLink, '_blank');
}

// --- AI CHATBOT LOGIC (DOMAIN STRICT) ---
const chatToggler = document.getElementById('chat-toggler');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');

chatToggler.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
});
closeChat.addEventListener('click', () => chatWindow.style.display = 'none');

function appendMessage(text, sender) {
    const msg = document.createElement('div');
    msg.classList.add('chat-msg', sender);
    msg.innerText = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function processChat() {
    const val = chatInput.value.trim().toLowerCase();
    if (!val) return;
    
    appendMessage(chatInput.value, 'user');
    chatInput.value = '';

    // Show typing indicator
    const typing = document.createElement('div');
    typing.classList.add('typing-indicator');
    typing.innerHTML = '<span></span><span></span><span></span>';
    chatBody.appendChild(typing);
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
        typing.remove();
        // Fallback rejection for non-domain topics
        let reply = "I am an AI assistant dedicated strictly to this website's organic farming research and its creator. I cannot answer queries outside of these topics.";

        // Domain Knowledge Mapping
        if(val.includes('stats') || val.includes('data') || val.includes('export') || val.includes('number')) {
            reply = "India has 4.43 Million organic farmers and exported $1.3 Billion worth of organic goods in 2023. Click the graphs in the 'Interactive Data' section for deeper insights.";
        } else if (val.includes('history') || val.includes('green revolution') || val.includes('sikkim') || val.includes('politics')) {
            reply = "The Green Revolution of the 1960s saved India from famine but harmed soil health. In contrast, Sikkim became a 100% organic state by 2016. Check the Political History cards for full archival data.";
        } else if (val.includes('benefits') || val.includes('health') || val.includes('environment') || val.includes('yield')) {
            reply = "Organic farming restores soil health, eliminates pesticide exposure, and helps farmers break the debt cycle. While yields drop for the first 2 years, they recover and surpass conventional farming by Year 4.";
        } else if (val.includes('developer') || val.includes('contact') || val.includes('sachin') || val.includes('creator') || val.includes('who made')) {
            reply = "This site was engineered by Sachin Kumar, a 19-year-old B.Tech CSE student at Lovely Professional University. He also runs the YouTube channel RealisticRealm. You can reach him via the Creator card at the bottom of the page.";
        } else if (val.includes('idea') || val.includes('solution') || val.includes('share') || val.includes('how to use')) {
            reply = "You can submit your agricultural strategies using the 'Propose Your Solution' card. Just type your idea, and the system will format it and send it directly to Sachin's private WhatsApp for immediate collaboration.";
        } else if (val.includes('hello') || val.includes('hi')) {
            reply = "Hello! I am the Organic India AI. Ask me about organic farming stats, history, benefits, or how to submit an idea!";
        } else if (val.includes('video') || val.includes('documentary') || val.includes('watch')) {
            reply = "You can watch real ground-level documentaries about the organic transition in India by scrolling to the 'Watch The Transition' section, right below the data graphs.";
        }

        appendMessage(reply, 'bot');
    }, 600);
}


// --- SCROLL ANIMATIONS ---
document.addEventListener("DOMContentLoaded", function() {
    // Select all cards to animate
    const elementsToReveal = document.querySelectorAll('.benefit-card, .chart-container, .pol-card, .video-wrapper, .unique-card');

    // Add the starting 'reveal' class
    elementsToReveal.forEach(el => el.classList.add('reveal'));

    // Create an observer to trigger animation when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, { threshold: 0.15 });

    elementsToReveal.forEach(el => observer.observe(el));

    // --- HAMBURGER MENU ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- BACK TO TOP BUTTON ---
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- ANIMATED STAT COUNTERS ---
    const statNumbers = document.querySelectorAll('.stat-number');

    function formatNumber(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(0) >= 10 ? (num / 1000).toFixed(0) + 'K' : (num / 1000).toFixed(1) + 'K';
        return num.toString();
    }

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            el.textContent = formatNumber(current);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = formatNumber(target);
        }
        requestAnimationFrame(update);
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(el => animateCounter(el));
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsStrip = document.querySelector('.stats-strip');
    if (statsStrip) statsObserver.observe(statsStrip);

    // --- KEYBOARD SUPPORT ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (slidePanel.classList.contains('active')) closePanel();
            if (chatWindow.style.display === 'flex') chatWindow.style.display = 'none';
        }
    });
});