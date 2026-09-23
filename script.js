document.addEventListener('DOMContentLoaded', () => {
    console.log('DevFest North 2026 website loaded!');
    document.documentElement.dataset.js = 'true';

    // Handle Code of Conduct link on mobile
    const conductLink = document.querySelector('.conduct-link');
    if (conductLink) {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            conductLink.removeAttribute('target');
        }
    }

    // Handle Participation Terms link
    const participationTermsLink = document.querySelector('.participation-terms-link');
    if (participationTermsLink) {
        participationTermsLink.addEventListener('click', (e) => {
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (!isMobile) {
                e.preventDefault();
                // Open in modal on desktop
                openParticipationTermsModal();
            }
            // On mobile, let it open in the same page (default behavior)
        });
    }

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // --- Dynamic Content Rendering using devFestConfig toggles ---
    const isConfigDefined = typeof devFestConfig !== 'undefined';
    const showAgenda = isConfigDefined ? devFestConfig.showAgenda : false;
    const showSpeakers = isConfigDefined ? devFestConfig.showSpeakers : false;
    const showSponsors = isConfigDefined ? devFestConfig.showSponsors : false;

    // 1. Render Agenda or Coming Soon
    const agendaTracks = document.getElementById('agenda-tracks');
    const mobileAgendaContainer = document.getElementById('mobile-agenda');
    const searchContainer = document.querySelector('.agenda-search-container');
    const pdfContainer = document.querySelector('.pdf-download-container');

    if (showAgenda && typeof devFestData !== 'undefined') {
        if (searchContainer) searchContainer.style.display = 'flex';
        if (pdfContainer) pdfContainer.style.display = 'block';
        if (agendaTracks) renderAgenda(agendaTracks, devFestData);
        if (mobileAgendaContainer) renderMobileAgenda(devFestData.sessions, devFestData.speakers);
    } else {
        if (searchContainer) searchContainer.style.display = 'none';
        if (pdfContainer) pdfContainer.style.display = 'none';
        const agendaContainer = document.querySelector('#agenda .agenda-container');
        if (agendaContainer) {
            renderAgendaComingSoon(agendaContainer);
        }
    }

    // 2. Render Speakers or Coming Soon
    const speakersGrid = document.getElementById('speakers-grid');
    if (speakersGrid) {
        if (showSpeakers && typeof devFestData !== 'undefined' && devFestData.speakers) {
            renderSpeakers(speakersGrid, devFestData.speakers);
        } else {
            renderSpeakersComingSoon(speakersGrid);
        }
    }

    // 3. Render Sponsors or Coming Soon
    const sponsorsContainer = document.querySelector('#sponsors .container');
    if (sponsorsContainer) {
        if (showSponsors && typeof devFestData !== 'undefined' && devFestData.sponsors) {
            renderSponsors(sponsorsContainer, devFestData.sponsors);
        } else {
            renderSponsorsComingSoon(sponsorsContainer);
        }
    }

    // 4. Render FAQ
    const faqData = [
        {
            "question": "What is DevFest?",
            "answer": "DevFest is an annual decentralized tech conference hosted by the Google Developer Groups (GDG) community worldwide. It brings developers, engineers, and tech innovators together to explore cutting-edge technologies, build impactful solutions, and connect with fellow builders."
        },
        {
            "question": "What is DevFest North Lebanon 2026?",
            "answer": "DevFest Tripoli 2026 is proudly organized by <strong>GDG North Lebanon</strong>. Following record participation in past editions, DevFest 2026 is scaling up to welcome over 1,000 developers, students, and technology leaders to learn, share knowledge, and build together in North Lebanon."
        },
        {
            "question": "What is Google Developer Groups (GDG)?",
            "answer": "Google Developer Groups (GDG) is the largest developer community in the world with over 1000+ chapters across 140+ countries. The program empowers developers to connect with one another and master building products on Google and open developer platforms."
        },
        {
            "question": "What GDG communities exist in Lebanon?",
            "answer": "Lebanon is home to two active Google Developer Groups: <strong>GDG Coast Lebanon</strong> (founded 2017) and <strong>GDG North Lebanon</strong> (founded 2019, based in Tripoli). Together, they strengthen Lebanon's tech ecosystem through workshops, hackathons, and flagship conferences."
        },
        {
            "question": "How can I get involved as a Speaker or Sponsor for 2026?",
            "answer": "We are currently accepting speaker proposals and sponsor inquiries for DevFest 2026! Reach out to us at <a href='mailto:info@gdglebanon.com'>info@gdglebanon.com</a> to discuss speaking opportunities or custom sponsorship packages."
        },
        {
            "question": "What technologies are highlighted at DevFest 2026?",
            "answer": "DevFest 2026 covers Artificial Intelligence & Machine Learning (Gemini, LLMs), Cloud & DevOps, Web Technologies (Angular, modern JS), Mobile (Flutter, Android), Cybersecurity, and tech career growth."
        },
        {
            "question": "How can I stay updated on registration and schedule?",
            "answer": "Join <a href='https://gdg.community.dev/gdg-north-lebanon' target='_blank'>GDG North Lebanon on the GDG platform</a> and follow our social channels. You can also reach us directly at <a href='mailto:info@gdglebanon.com'>info@gdglebanon.com</a>."
        }
    ];

    const faqGrid = document.getElementById('faq-grid');
    if (faqGrid) {
        renderFAQ(faqGrid, faqData);
    }

    // Modal Logic
    setupModals();

    // --- Search Logic (Active when showAgenda is true) ---
    const searchInput = document.getElementById('agendaSearch');
    if (searchInput && showAgenda && typeof devFestData !== 'undefined') {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterSessions(searchTerm);
        });
    }

    // Optional: Scroll reveal (respects reduced motion)
    const revealElements = document.querySelectorAll('.reveal-up');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (revealElements.length > 0) {
        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            revealElements.forEach((el) => el.classList.add('is-visible'));
        } else {
            const observer = new IntersectionObserver(
                (entries, obs) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            obs.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
            );

            revealElements.forEach((el) => observer.observe(el));
        }
    }
});

function filterSessions(searchTerm) {
    if (!devFestData) return;

    const { sessions, speakers } = devFestData;

    const filteredSessions = sessions.filter(session => {
        // Always include common sessions if search is empty, otherwise check match
        if (session.isCommon) {
            // Optional: Filter common sessions too? 
            // If I search "React", I probably don't want "Coffee Break".
            // So let's filter them too.
            return session.title.toLowerCase().includes(searchTerm) ||
                session.description.toLowerCase().includes(searchTerm);
        }

        const speaker = speakers.find(s => s.id === session.speakerId);
        const speakerName = speaker ? speaker.fullName.toLowerCase() : '';
        const title = session.title.toLowerCase();
        const tags = session.tags.map(t => t.toLowerCase()).join(' ');
        const description = session.description.toLowerCase();

        return title.includes(searchTerm) ||
            speakerName.includes(searchTerm) ||
            tags.includes(searchTerm) ||
            description.includes(searchTerm);
    });

    // Re-render Desktop Agenda
    const agendaTracks = document.getElementById('agenda-tracks');
    if (agendaTracks) {
        // We need to pass a modified data object to renderAgenda
        const filteredData = { ...devFestData, sessions: filteredSessions };
        renderAgenda(agendaTracks, filteredData);
    }

    // Re-render Mobile Agenda
    // renderMobileAgenda takes sessions array directly
    renderMobileAgenda(filteredSessions, speakers);
}

function renderAgenda(container, data) {
    const { schedule, sessions } = data;

    // 1. Sort all sessions by time
    const allSessions = [...sessions].sort((a, b) => parseTime(a.time) - parseTime(b.time));

    // 2. Identify Common Sessions (Breaks)
    const commonSessions = allSessions.filter(s => s.isCommon);

    // 3. Create Chunks (Blocks)
    // A chunk is either a "common" session or a "track" block (time range between common sessions)
    const chunks = [];
    let lastEndTime = -1;

    // Helper to get start/end minutes
    const getMinutes = (timeStr) => {
        const parts = timeStr.split('-');
        return { start: parseTime(parts[0]), end: parseTime(parts[1]) };
    };

    if (commonSessions.length === 0) {
        // No common sessions, just one big track block
        chunks.push({ type: 'tracks', sessions: allSessions });
    } else {
        let currentSessions = [];

        allSessions.forEach(session => {
            if (session.isCommon) {
                // If we have accumulated track sessions, push them as a block first
                if (currentSessions.length > 0) {
                    chunks.push({ type: 'tracks', sessions: [...currentSessions] });
                    currentSessions = [];
                }
                // Push the common session as its own block
                chunks.push({ type: 'common', session: session });
            } else {
                currentSessions.push(session);
            }
        });

        // Push remaining sessions
        if (currentSessions.length > 0) {
            chunks.push({ type: 'tracks', sessions: [...currentSessions] });
        }
    }

    // 4. Render Chunks
    container.innerHTML = ''; // Clear existing

    const mainRooms = ['Main Auditorium', 'B1008', 'B105'];

    chunks.forEach(chunk => {
        if (chunk.type === 'common') {
            const commonEl = document.createElement('div');
            commonEl.className = 'common-session animate-stagger';
            const delay = container.children.length * 100;
            commonEl.style.animationDelay = `${delay}ms`;

            commonEl.innerHTML = `
                <span class="time">${chunk.session.time}</span>
                <h3>${chunk.session.title}</h3>
                <p>${chunk.session.description}</p>
            `;
            container.appendChild(commonEl);
        } else {
            const trackBlock = document.createElement('div');
            trackBlock.className = 'agenda-block';

            schedule.auditoriums.forEach(room => {
                const trackCol = document.createElement('div');
                trackCol.className = 'track';

                const trackHeader = document.createElement('div');
                trackHeader.className = 'track-header';
                // Only show header if it's one of the columns defined in schedule.auditoriums
                let displayText = room;
                if (room === 'Workshops Auditorium') {
                    displayText = 'Workshops/Career skill';
                }
                trackHeader.textContent = displayText;
                trackCol.appendChild(trackHeader);

                const roomSessions = chunk.sessions.filter(s => {
                    if (room === 'Workshops Auditorium') {
                        // Include any room that is NOT in the main list
                        return !mainRooms.includes(s.room);
                    }
                    return s.room === room;
                });

                roomSessions.forEach(session => {
                    let sessionSpeakers = [];
                    if (session.speakers && session.speakers.length > 0) {
                        sessionSpeakers = session.speakers.map(s => data.speakers.find(ds => ds.id === s.id)).filter(Boolean);
                    } else if (session.speakerId) {
                        const speaker = data.speakers.find(s => s.id === session.speakerId);
                        if (speaker) sessionSpeakers.push(speaker);
                    }

                    // Create card
                    const sessionCard = createSessionCard(session, sessionSpeakers);

                    // For Workshops column on Desktop, show the specific room name
                    if (room === 'Workshops Auditorium') {
                        const roomBadge = document.createElement('div');
                        roomBadge.className = 'session-room-badge';
                        roomBadge.style.cssText = 'font-size: 0.8rem; background: #e0e0e0; color: #333; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 5px; font-weight: bold;';
                        roomBadge.textContent = session.room;
                        // Insert at top of card
                        sessionCard.insertBefore(roomBadge, sessionCard.firstChild);
                    }

                    sessionCard.classList.add('animate-stagger');
                    const delay = (container.children.length * 100) + (Math.random() * 200);
                    sessionCard.style.animationDelay = `${delay}ms`;

                    sessionCard.addEventListener('click', () => openSessionModal(session));
                    trackCol.appendChild(sessionCard);
                });

                trackBlock.appendChild(trackCol);
            });

            container.appendChild(trackBlock);
        }
    });
}

function renderMobileAgenda(sessions, speakers) {
    const happeningNowContainer = document.getElementById('happening-now-container');
    const happeningNowGrid = document.getElementById('happening-now-grid');
    const upcomingContainer = document.getElementById('upcoming-container');
    const mobileAgendaGrid = document.getElementById('mobile-agenda-grid');
    const previousSessionsContainer = document.getElementById('previous-sessions-container');
    const previousSessionsGrid = document.getElementById('previous-sessions-grid');
    const showPreviousBtn = document.getElementById('show-previous-btn');

    // Clear existing content
    happeningNowGrid.innerHTML = '';
    mobileAgendaGrid.innerHTML = '';
    previousSessionsGrid.innerHTML = '';

    // Reset visibility
    happeningNowContainer.style.display = 'none';
    previousSessionsContainer.style.display = 'none';
    upcomingContainer.style.display = 'block'; // Always show schedule container by default, or manage dynamically

    // Flatten and sort all sessions
    const sortedSessions = [...sessions].sort((a, b) => parseTime(a.time) - parseTime(b.time));

    // Current Time Logic (Mockable)
    const now = new Date();
    // To test "Happening Now", uncomment the line below and set a time within a session
    // const now = new Date('2026-10-17T11:10:00');

    const eventDateStr = '2026-10-17';
    const todayStr = now.toISOString().split('T')[0];
    const isEventDay = todayStr === eventDateStr;

    let hasHappeningNow = false;
    let hasPrevious = false;

    sortedSessions.forEach(session => {
        let card;

        if (session.isCommon) {
            card = document.createElement('div');
            card.className = 'common-session mobile-common-session';
            card.innerHTML = `
                <span class="time">${session.time}</span>
                <div class="common-content">
                    <h3>${session.title}</h3>
                    <p>${session.description}</p>
                </div>
            `;
        } else {
            let sessionSpeakers = [];
            if (session.speakers && session.speakers.length > 0) {
                sessionSpeakers = session.speakers.map(s => speakers.find(ds => ds.id === s.id)).filter(Boolean);
            } else if (session.speakerId) {
                const speaker = speakers.find(s => s.id === session.speakerId);
                if (speaker) sessionSpeakers.push(speaker);
            }

            card = createSessionCard(session, sessionSpeakers);
            card.addEventListener('click', () => openSessionModal(session));

            // Add Room Label for Mobile
            // Add Room Label for Mobile
            const roomLabel = document.createElement('div');
            roomLabel.className = 'session-room-label';

            let displayRoom = session.room;

            roomLabel.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${displayRoom}</span>
            `;
            card.insertBefore(roomLabel, card.firstChild);
        }

        if (isEventDay) {
            const { start, end } = getSessionTimes(session.time, eventDateStr);

            if (now >= start && now < end) {
                happeningNowGrid.appendChild(card);
                hasHappeningNow = true;
            } else if (now >= end) {
                previousSessionsGrid.appendChild(card);
                hasPrevious = true;
            } else {
                mobileAgendaGrid.appendChild(card);
            }
        } else {
            // Not event day, show all in schedule
            mobileAgendaGrid.appendChild(card);
        }
    });

    if (hasHappeningNow) {
        happeningNowContainer.style.display = 'block';
    }

    if (hasPrevious) {
        previousSessionsContainer.style.display = 'block';
        showPreviousBtn.addEventListener('click', () => {
            previousSessionsGrid.classList.toggle('show');
            showPreviousBtn.textContent = previousSessionsGrid.classList.contains('show')
                ? 'Hide Previous Sessions'
                : 'See Previous Sessions';
        });
    }
}

// Helper to create session card HTML (reused)
function createSessionCard(session, speakers = []) {
    const sessionCard = document.createElement('div');
    sessionCard.className = 'session-card';

    let speakerHtml = '';

    // Ensure speakers is always an array
    const speakersList = Array.isArray(speakers) ? speakers : (speakers ? [speakers] : []);

    if (speakersList.length > 0) {
        speakerHtml = speakersList.map(speaker => `
            <div class="session-speaker-info">
                <img src="${speaker.profilePicture}" alt="${speaker.fullName}" class="session-speaker-avatar" onerror="this.src='assets/images/logo.png'">
                <div class="session-speaker-text">
                    <span class="session-speaker-name">${speaker.fullName}</span>
                    <span class="session-speaker-tagline">${speaker.tagLine || ''}</span>
                    <span class="session-speaker-company-small">${speaker.company || ''}</span>
                </div>
            </div>
        `).join('');
    }

    sessionCard.innerHTML = `
        <span class="session-time">${session.time}</span>
        <h4>${session.title}</h4>
        <div class="session-meta">
            ${[session.format, session.level].filter(Boolean).join(' | ')}
        </div>
        <div class="session-tags">
            ${session.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        ${speakerHtml}
    `;
    return sessionCard;
}

function parseTime(timeStr) {
    const startTime = timeStr.split('-')[0].trim();
    const [time, modifier] = startTime.split(' ');
    let [hours, minutes] = time.split(':');

    hours = parseInt(hours);
    minutes = parseInt(minutes);

    if (hours === 12 && modifier === 'AM') {
        hours = 0;
    }
    if (hours !== 12 && modifier === 'PM') {
        hours += 12;
    }

    return hours * 60 + minutes;
}

function getSessionTimes(timeStr, dateStr) {
    const [startStr, endStr] = timeStr.split('-').map(s => s.trim());

    const parseDate = (tStr) => {
        const [time, modifier] = tStr.split(' ');
        let [hours, minutes] = time.split(':');
        hours = parseInt(hours);
        minutes = parseInt(minutes);

        if (hours === 12 && modifier === 'AM') hours = 0;
        if (hours !== 12 && modifier === 'PM') hours += 12;

        return new Date(`${dateStr}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`);
    };

    return {
        start: parseDate(startStr),
        end: parseDate(endStr)
    };
}

function renderFAQ(container, data) {
    container.innerHTML = '';
    data.forEach((item) => {
        const details = document.createElement('details');
        details.className = 'faq-item';
        details.innerHTML = `
            <summary class="faq-summary">${item.question}</summary>
            <div class="faq-answer">${item.answer}</div>
        `;
        container.appendChild(details);
    });
}

function renderAgendaComingSoon(container) {
    container.innerHTML = `
        <div class="coming-soon-card coming-soon-card--agenda reveal-up">
            <div class="coming-soon-icon-wrapper">
                <div class="coming-soon-icon agenda-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                </div>
            </div>
            <span class="coming-soon-badge">Agenda • Coming Soon</span>
            <h3 class="coming-soon-title">Detailed Schedule Dropping Soon</h3>
            <p class="coming-soon-desc">
                We are curating an inspiring schedule featuring world-class keynotes, deep-dive technical tracks, and hands-on workshops across AI, Cloud, Web, Mobile, and DevOps.
            </p>
            <div class="coming-soon-features-grid">
                <div class="teaser-card">
                    <div class="teaser-icon-dot blue"></div>
                    <div>
                        <h4>Keynotes & Vision</h4>
                        <p>Inspiring sessions by industry pioneers</p>
                    </div>
                </div>
                <div class="teaser-card">
                    <div class="teaser-icon-dot green"></div>
                    <div>
                        <h4>Hands-on Workshops</h4>
                        <p>Interactive coding labs with modern tools</p>
                    </div>
                </div>
                <div class="teaser-card">
                    <div class="teaser-icon-dot yellow"></div>
                    <div>
                        <h4>Panel Discussions</h4>
                        <p>Real-world insights & future trends</p>
                    </div>
                </div>
                <div class="teaser-card">
                    <div class="teaser-icon-dot red"></div>
                    <div>
                        <h4>Networking & Expo</h4>
                        <p>Connect with peers, startups & mentors</p>
                    </div>
                </div>
            </div>
            <div class="coming-soon-actions">
                <a href="mailto:info@gdglebanon.com?subject=DevFest%202026%20Agenda%20Updates" class="btn btn-primary">Get Notified When Agenda Releases</a>
            </div>
        </div>
    `;
}

function renderSpeakersComingSoon(container) {
    container.innerHTML = `
        <div class="coming-soon-card coming-soon-card--speakers reveal-up">
            <div class="coming-soon-icon-wrapper">
                <div class="coming-soon-icon speaker-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
            </div>
            <a href="https://sessionize.com/devfest-tripoli-2026/" target="_blank" rel="noopener" class="btn btn-primary speaker-cfp-cta">CFP now open! Apply to speak</a>
            <span class="coming-soon-badge">Speakers • Coming Soon</span>
            <h3 class="coming-soon-title">World-Class Speakers Lineup</h3>
            <p class="coming-soon-desc">
                We will be announcing exceptional tech leaders, Google Developer Experts (GDEs), software architects, and community innovators very soon!
            </p>
            <div class="cfs-banner">
                <div class="cfs-badge">Call for Speakers</div>
                <h4>Have an inspiring talk or workshop in mind?</h4>
                <p>Submit your topic or get in touch with our team to speak at DevFest North 2026.</p>
                <a href="https://sessionize.com/devfest-tripoli-2026/" target="_blank" rel="noopener" class="btn btn-secondary">Submit Speaker Proposal</a>
            </div>
        </div>
    `;
}

function renderSponsorsComingSoon(container) {
    const header = container.querySelector('.section-header');
    container.innerHTML = '';
    if (header) container.appendChild(header);

    const comingSoonWrap = document.createElement('div');
    comingSoonWrap.className = 'coming-soon-card coming-soon-card--sponsors reveal-up';
    comingSoonWrap.innerHTML = `
        <div class="coming-soon-icon-wrapper">
            <div class="coming-soon-icon sponsor-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            </div>
        </div>
        <span class="coming-soon-badge">Partnerships • Open for 2026</span>
        <h3 class="coming-soon-title">Support DevFest North 2026</h3>
        <p class="coming-soon-desc">
            Partner with North Lebanon's premier tech conference. Connect with over 1,000 top engineers, designers, innovators, and university talent. We offer tailored sponsorship and exhibition packages.
        </p>
        <div class="coming-soon-actions">
            <a href="https://docs.google.com/presentation/d/1NdlhLGxZ24IsxbqB2D7CYLVs-2xVUxfKrc5WmAPlBzQ/edit?usp=sharing" target="_blank" rel="noopener" class="btn btn-primary">Become a Sponsor</a>
            <a href="https://docs.google.com/presentation/d/1NdlhLGxZ24IsxbqB2D7CYLVs-2xVUxfKrc5WmAPlBzQ/edit?usp=sharing" target="_blank" rel="noopener" class="btn btn-secondary">Partner</a>
        </div>
    `;
    container.appendChild(comingSoonWrap);
}

function renderSpeakers(container, speakers) {
    speakers.forEach(speaker => {
        const card = document.createElement('div');
        card.className = 'speaker-card';
        card.innerHTML = `
            <div class="avatar">
                <img src="${speaker.profilePicture}" alt="${speaker.fullName}" onerror="this.src='assets/images/logo.png'">
            </div>
            <h3>${speaker.fullName}</h3>
            <p style="color: var(--google-blue); font-size: 0.9rem; font-weight: bold; margin-bottom: 5px;">${speaker.company || ''}</p>
            <p>${speaker.tagLine}</p>
        `;
        card.addEventListener('click', () => openSpeakerModal(speaker));
        container.appendChild(card);
    });
}

function renderSponsors(container, sponsors) {
    // Clear existing static content but keep the header
    const header = container.querySelector('.section-header');
    container.innerHTML = '';
    if (header) container.appendChild(header);

    // Grouping Logic
    const sponsoredBy = sponsors.filter(s => ['Gold', 'Silver', 'Bronze'].includes(s.tier));
    const partners = sponsors.filter(s => !['Gold', 'Silver', 'Bronze'].includes(s.tier));

    // 1. Partners & Supporters Section (Moved up)
    if (partners.length > 0) {
        const sectionTitle = document.createElement('h3');
        sectionTitle.className = 'sponsor-section-title';
        sectionTitle.textContent = 'Partners & Supporters';
        container.appendChild(sectionTitle);

        const grid = document.createElement('div');
        grid.className = 'sponsors-grid';

        partners.forEach(sponsor => {
            const card = createSponsorCard(sponsor);
            grid.appendChild(card);
        });
        container.appendChild(grid);
    }

    // 2. Sponsored By Section
    if (sponsoredBy.length > 0) {
        const sectionTitle = document.createElement('h3');
        sectionTitle.className = 'sponsor-section-title';
        if (partners.length > 0) sectionTitle.style.marginTop = '40px';
        sectionTitle.textContent = 'Sponsored By';
        container.appendChild(sectionTitle);

        const grid = document.createElement('div');
        grid.className = 'sponsors-grid';

        sponsoredBy.forEach(sponsor => {
            const card = createSponsorCard(sponsor);
            grid.appendChild(card);
        });
        container.appendChild(grid);
    }
}

function createSponsorCard(sponsor) {
    const card = document.createElement('div');
    card.className = `sponsor-card ${sponsor.tier.toLowerCase().replace(/\s+/g, '-')}`;

    // Determine badge color class based on tier
    let badgeClass = 'badge-default';
    if (sponsor.tier === 'Gold') badgeClass = 'badge-gold';
    if (sponsor.tier === 'Silver') badgeClass = 'badge-silver';
    if (sponsor.tier === 'Bronze') badgeClass = 'badge-bronze';
    if (sponsor.tier === 'Host') badgeClass = 'badge-host';
    if (sponsor.tier === 'Main Supporter') badgeClass = 'badge-main';
    if (sponsor.tier === 'Media Partner') badgeClass = 'badge-media';

    card.innerHTML = `
        <div class="sponsor-logo-wrapper">
            <img src="${sponsor.logo}" alt="${sponsor.name}">
        </div>
        <div class="sponsor-info">
            <h4>${sponsor.name}</h4>
            <span class="sponsor-badge ${badgeClass}">${sponsor.tier}</span>
        </div>
    `;
    card.addEventListener('click', () => openSponsorModal(sponsor));
    return card;
}

// --- Modals ---

const sessionModal = document.getElementById('session-modal');
const speakerModal = document.getElementById('speaker-modal');
const sponsorModal = document.getElementById('sponsor-modal');
const sessionBody = document.getElementById('session-modal-body');
const speakerBody = document.getElementById('speaker-modal-body');
const sponsorBody = document.getElementById('sponsor-modal-body');

function setupModals() {
    // Close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            sessionModal.classList.remove('show');
            speakerModal.classList.remove('show');
            sponsorModal.classList.remove('show');
            setTimeout(() => {
                sessionModal.style.display = 'none';
                speakerModal.style.display = 'none';
                sponsorModal.style.display = 'none';
            }, 300);
        });
    });

    // Click outside to close
    window.addEventListener('click', (e) => {
        if (e.target === sessionModal) closeModal(sessionModal);
        if (e.target === speakerModal) closeModal(speakerModal);
        if (e.target === sponsorModal) closeModal(sponsorModal);
    });
}

function closeModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function openParticipationTermsModal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('participation-terms-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'participation-terms-modal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <h2 class="modal-title">Participation Terms</h2>
                </div>
                <div class="modal-body">
                    <iframe src="https://gdg.community.dev/forum/forum-for-event-99660-801288/topic/data-privacy-and-security-in-tech-events-507/" 
                            style="width: 100%; height: 500px; border: none; border-radius: 8px;">
                    </iframe>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Add close functionality
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => closeModal(modal));
        window.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    }

    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
}

function openSponsorModal(sponsor) {
    if (sessionModal.classList.contains('show')) closeModal(sessionModal);
    if (speakerModal.classList.contains('show')) closeModal(speakerModal);

    // Badge styling for modal
    let badgeClass = 'badge-default';
    if (sponsor.tier === 'Gold') badgeClass = 'badge-gold';
    if (sponsor.tier === 'Silver') badgeClass = 'badge-silver';
    if (sponsor.tier === 'Bronze') badgeClass = 'badge-bronze';
    if (sponsor.tier === 'Host') badgeClass = 'badge-host';
    if (sponsor.tier === 'Main Supporter') badgeClass = 'badge-main';
    if (sponsor.tier === 'Media Partner') badgeClass = 'badge-media';

    sponsorBody.innerHTML = `
        <div class="sponsor-modal-content">
            <div class="sponsor-modal-header">
                <div class="sponsor-modal-logo">
                    <img src="${sponsor.logo}" alt="${sponsor.name}">
                </div>
                <div class="sponsor-modal-info">
                    <h2>${sponsor.name} <span class="sponsor-badge ${badgeClass}"><span class="icon">🏆</span> ${sponsor.tier}</span></h2>
                    
                    <div class="sponsor-description">
                        ${sponsor.description || 'Proud supporter of DevFest North 2025.'}
                    </div>

                    <div class="sponsor-meta">
                        <span class="icon">🏢</span> ${sponsor.name}
                    </div>
                </div>
            </div>
            
            <div class="sponsor-modal-footer">
                <div class="social-links">
                    ${sponsor.socials.website ? `<a href="${sponsor.socials.website}" target="_blank" class="social-icon">🌐 Website</a>` : ''}
                    ${sponsor.socials.linkedin ? `<a href="${sponsor.socials.linkedin}" target="_blank" class="social-icon">🔗 LinkedIn</a>` : ''}
                </div>
                <button class="btn btn-secondary close-modal-btn" onclick="closeModal(document.getElementById('sponsor-modal'))">Close</button>
            </div>
        </div>
    `;

    sponsorModal.style.display = 'block';
    sponsorModal.offsetHeight;
    sponsorModal.classList.add('show');
}


function openSessionModal(session) {
    const speakers = [];
    if (session.speakers && session.speakers.length > 0) {
        session.speakers.forEach(s => {
            const speakerDetail = devFestData.speakers.find(ds => ds.id === s.id);
            if (speakerDetail) speakers.push(speakerDetail);
        });
    } else if (session.speakerId) {
        const speaker = devFestData.speakers.find(s => s.id === session.speakerId);
        if (speaker) speakers.push(speaker);
    }

    sessionBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${session.title}</h2>
            <div class="modal-meta">
                <span>📅 ${session.time}</span>
                <span>📍 ${session.room}</span>
                <span>🎓 ${session.level}</span>
            </div>
            <div class="session-tags">
                ${session.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
        <div class="modal-body">
            ${speakers.length > 0 ? `
                <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eee;">
                    <h4 style="margin-top: 0;">${speakers.length > 1 ? 'Speakers' : 'Speaker'}</h4>
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        ${speakers.map(speaker => `
                            <div style="display: flex; align-items: center; gap: 15px; cursor: pointer;" onclick="openSpeakerModalById('${speaker.id}')">
                                <img src="${speaker.profilePicture}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;" onerror="this.src='assets/images/logo.png'">
                                <div>
                                    <div style="font-weight: bold; color: var(--google-blue);">${speaker.fullName}</div>
                                    <div style="font-size: 0.9rem; color: #4a4a4a; font-weight: 500;">${speaker.company || ''}</div>
                                    <div style="font-size: 0.9rem; color: var(--text-light);">${speaker.tagLine}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <p>${session.description}</p>
            
            <h4 style="margin-top: 20px;">Target Audience</h4>
            <p>${session.targetAudience}</p>
        </div>
    `;

    sessionModal.style.display = 'block';
    // Trigger reflow
    sessionModal.offsetHeight;
    sessionModal.classList.add('show');
}

function openSpeakerModal(speaker) {
    // Close session modal if open
    if (sessionModal.classList.contains('show')) {
        closeModal(sessionModal);
    }

    speakerBody.innerHTML = `
        <div class="speaker-profile">
            <img src="${speaker.profilePicture}" alt="${speaker.fullName}" onerror="this.src='assets/images/logo.png'">
            <div class="speaker-info">
                <h3>${speaker.fullName}</h3>
                <p class="speaker-company-popup">${speaker.company || ''}</p>
                <p class="tagline">${speaker.tagLine}</p>
                <div class="modal-body">
                    <p>${speaker.bio}</p>
                </div>
                <div class="social-links">
                    ${speaker.socials.linkedin ? `<a href="${speaker.socials.linkedin}" target="_blank">LinkedIn</a>` : ''}
                    ${speaker.socials.twitter ? `<a href="${speaker.socials.twitter}" target="_blank">Twitter</a>` : ''}
                    ${speaker.socials.website ? `<a href="${speaker.socials.website}" target="_blank">🌐 Website</a>` : ''}
                    ${speaker.socials.blog ? `<a href="${speaker.socials.blog}" target="_blank">Blog</a>` : ''}
                </div>
            </div>
        </div>
    `;

    speakerModal.style.display = 'block';
    speakerModal.offsetHeight;
    speakerModal.classList.add('show');
}

// Helper to open speaker from session modal (needs to be global or attached to window)
window.openSpeakerModalById = (speakerId) => {
    const speaker = devFestData.speakers.find(s => s.id === speakerId);
    if (speaker) {
        openSpeakerModal(speaker);
    }
};

// --- Badge Generator Logic ---
document.addEventListener('DOMContentLoaded', async () => {
    const showBadgeGenerator = typeof devFestConfig !== 'undefined' && devFestConfig.showBadgeGenerator === true;
    const badgeSection = document.getElementById('badge-generator');
    if (badgeSection) badgeSection.classList.toggle('hidden', !showBadgeGenerator);
    document.querySelectorAll('a[href="#badge-generator"]').forEach(link => {
        (link.closest('li') || link).classList.toggle('hidden', !showBadgeGenerator);
    });
    if (!showBadgeGenerator) return;

    const canvas = document.getElementById('badgeCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const photoUpload = document.getElementById('photoUpload');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const titleInput = document.getElementById('title');
    const companyInput = document.getElementById('company');
    const usernameInput = document.getElementById('username');
    const downloadButton = document.getElementById('downloadButton');
    const fileChosenText = document.getElementById('file-chosen-text');
    const dragHint = document.getElementById('dragHint');

    const templateImage = new Image();
    const userPhoto = new Image();
    userPhoto.crossOrigin = "anonymous";

    const targetRect = {
        x: 590,
        y: 260,
        width: 450,
        height: 620
    };

    const imageState = {
        x: 0,
        y: 0,
        drawWidth: 0,
        drawHeight: 0
    };

    let isDragging = false;
    let lastDragPos = { x: 0, y: 0 };

    const textData = {
        firstName: "First Name",
        lastName: "Last Name",
        title: "",
        company: "",
        username: "",
    };

    // Font loading
    try {
        // Load fonts if not already available
        await document.fonts.load('450 45px "Outfit"');
        await document.fonts.load('bold 32px Roboto');
    } catch (err) {
        console.warn('Fonts might not be fully loaded for canvas:', err);
    }

    function drawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1. Draw User Photo (Clipped)
        if (userPhoto.src) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(targetRect.x, targetRect.y, targetRect.width, targetRect.height);
            ctx.clip();
            ctx.drawImage(userPhoto, imageState.x, imageState.y, imageState.drawWidth, imageState.drawHeight);
            ctx.restore();
        }

        // 2. Draw Template
        ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height);

        // 3. Draw Text
        // Using Outfit to match site theme, fallback to Arial
        ctx.fillStyle = '#757577';
        ctx.font = '450 45px "Outfit", sans-serif';
        ctx.fillText(textData.firstName, 90, 510);
        ctx.fillText(textData.lastName, 90, 580);

        ctx.fillStyle = '#757577';
        ctx.font = '32px "Outfit", sans-serif';
        ctx.fillText(textData.title, 90, 650);
        ctx.font = 'bold 32px "Outfit", sans-serif';
        ctx.fillText(textData.company, 90, 700);
        ctx.font = '32px "Outfit", sans-serif';
        ctx.fillText(textData.username, 90, 800);
    }

    // Load template
    templateImage.src = 'assets/images/Attendee.png';
    templateImage.onload = () => {
        drawCanvas();
    };

    // Handle Photo Upload
    photoUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            fileChosenText.textContent = file.name;
            const reader = new FileReader();
            reader.onload = (event) => {
                userPhoto.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    userPhoto.onload = () => {
        const imgAspectRatio = userPhoto.width / userPhoto.height;
        const targetAspectRatio = targetRect.width / targetRect.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgAspectRatio > targetAspectRatio) {
            drawHeight = targetRect.height;
            drawWidth = drawHeight * imgAspectRatio;
            offsetX = targetRect.x + (targetRect.width - drawWidth) / 2;
            offsetY = targetRect.y;
        } else {
            drawWidth = targetRect.width;
            drawHeight = drawWidth / imgAspectRatio;
            offsetX = targetRect.x;
            offsetY = targetRect.y + (targetRect.height - drawHeight) / 2;
        }

        imageState.x = offsetX;
        imageState.y = offsetY;
        imageState.drawWidth = drawWidth;
        imageState.drawHeight = drawHeight;

        drawCanvas();
        if (dragHint) dragHint.classList.remove('hidden');
    };

    // Handle Inputs
    firstNameInput.addEventListener('input', (e) => {
        textData.firstName = e.target.value || "First Name";
        drawCanvas();
    });

    lastNameInput.addEventListener('input', (e) => {
        textData.lastName = e.target.value || "Last Name";
        drawCanvas();
    });

    titleInput.addEventListener('input', (e) => {
        textData.title = e.target.value;
        drawCanvas();
    });

    companyInput.addEventListener('input', (e) => {
        textData.company = e.target.value;
        drawCanvas();
    });

    usernameInput.addEventListener('input', (e) => {
        textData.username = e.target.value ? `${e.target.value}` : "";
        drawCanvas();
    });

    // Handle Download
    // Handle Download
    downloadButton.addEventListener('click', () => {
        try {
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'my-devfest-badge.png';
            document.body.appendChild(link); // Append to body to ensure it works in all browsers
            link.click();
            document.body.removeChild(link); // Clean up
        } catch (err) {
            console.error("Download failed:", err);
            alert("Could not download badge. If you are running this locally, browser security might be blocking the download. Please try running on a local server.");
        }
    });

    // Drag Logic
    function getEventPos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const clientX = evt.clientX || (evt.touches && evt.touches[0].clientX);
        const clientY = evt.clientY || (evt.touches && evt.touches[0].clientY);
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    }

    function getClientPos(evt) {
        return {
            x: evt.clientX || (evt.touches && evt.touches[0].clientX),
            y: evt.clientY || (evt.touches && evt.touches[0].clientY)
        };
    }

    function onDragStart(e) {
        if (!userPhoto.src) return;
        const pos = getEventPos(canvas, e);
        if (pos.x >= targetRect.x && pos.x <= targetRect.x + targetRect.width &&
            pos.y >= targetRect.y && pos.y <= targetRect.y + targetRect.height) {
            isDragging = true;
            lastDragPos = getClientPos(e);
            canvas.style.cursor = 'grabbing';
            if (e.preventDefault) e.preventDefault();
        }
    }

    function onDragMove(e) {
        const pos = getEventPos(canvas, e);
        if (pos.x >= targetRect.x && pos.x <= targetRect.x + targetRect.width &&
            pos.y >= targetRect.y && pos.y <= targetRect.y + targetRect.height) {
            if (!isDragging) canvas.style.cursor = 'grab';
        } else {
            if (!isDragging) canvas.style.cursor = 'default';
        }

        if (!isDragging) return;
        if (e.preventDefault) e.preventDefault();

        const clientPos = getClientPos(e);
        const dx = clientPos.x - lastDragPos.x;
        const dy = clientPos.y - lastDragPos.y;

        let newX = imageState.x + dx;
        let newY = imageState.y + dy;

        newX = Math.min(targetRect.x, newX);
        newX = Math.max(targetRect.x + targetRect.width - imageState.drawWidth, newX);
        newY = Math.min(targetRect.y, newY);
        newY = Math.max(targetRect.y + targetRect.height - imageState.drawHeight, newY);

        imageState.x = newX;
        imageState.y = newY;

        lastDragPos = clientPos;
        drawCanvas();
    }

    function onDragEnd() {
        isDragging = false;
        canvas.style.cursor = 'grab';
    }

    canvas.addEventListener('mousedown', onDragStart);
    canvas.addEventListener('mousemove', onDragMove);
    canvas.addEventListener('mouseup', onDragEnd);
    canvas.addEventListener('mouseleave', () => {
        if (isDragging) onDragEnd();
        canvas.style.cursor = 'default';
    });

    canvas.addEventListener('touchstart', onDragStart, { passive: false });
    canvas.addEventListener('touchmove', onDragMove, { passive: false });
    canvas.addEventListener('touchend', onDragEnd);
    canvas.addEventListener('touchcancel', onDragEnd);
});
// Code of Conduct Modal
const conductLink = document.getElementById('conduct-link');
const conductModal = document.getElementById('conduct-modal');

if (conductLink && conductModal) {
    conductLink.addEventListener('click', (e) => {
        e.preventDefault();
        conductModal.style.display = 'block';
        setTimeout(() => conductModal.classList.add('show'), 10);
    });

    const closeConduct = conductModal.querySelector('.close-modal');
    if (closeConduct) {
        closeConduct.addEventListener('click', () => {
            conductModal.classList.remove('show');
            setTimeout(() => conductModal.style.display = 'none', 300);
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === conductModal) {
            conductModal.classList.remove('show');
            setTimeout(() => conductModal.style.display = 'none', 300);
        }
    });
}
