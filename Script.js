   const teamMembersData = [
        {
            id: 1,
            name: "Alexa Fernando",
            designation: "CEO, The XeOne Company",
            image: "images/1.png",
            skills: [
                { name: "Leadership", percentage: 95 },
                { name: "Strategy", percentage: 90 },
                { name: "Finance", percentage: 80 }
            ]
        },
        {
            id: 2,
            name: "Johny Walkin",
            designation: "Designer, The XeOne Company",
            image: "images/2.png",
            skills: [
                { name: "UI/UX Design", percentage: 92 },
                { name: "Prototyping", percentage: 88 },
                { name: "Branding", percentage: 78 }
            ]
        },
        {
            id: 3,
            name: "Teena Walkin",
            designation: "Model, The XeOne Company",
            image: "images/3.png",
            skills: [
                { name: "Posing", percentage: 98 },
                { name: "Photography", percentage: 90 },
                { name: "Fashion", percentage: 85 }
            ]
        }
    ];

    document.addEventListener('DOMContentLoaded', function() {
        const nav = document.querySelector('nav');
        if (nav) {
            window.addEventListener('scroll', function () {
                nav.classList.toggle('scrolled', window.scrollY > 10);
            });
        }

        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });

        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                menuToggle.querySelector('i').classList.toggle('ri-menu-line');
                menuToggle.querySelector('i').classList.toggle('ri-close-line');
            });
        }

        const modalOverlay = document.querySelector('.modal-overlay');
        const modalCloseButton = document.querySelector('.modal-close-button');
        const modalMemberImage = document.querySelector('.modal-member-image');
        const modalMemberName = document.querySelector('.modal-member-name');
        const modalMemberDesignation = document.querySelector('.modal-member-designation');
        const modalSkillsContainer = document.querySelector('.modal-skills');

        document.querySelectorAll('.team-member-card').forEach(card => {
            card.addEventListener('click', function() {
                const memberId = parseInt(this.dataset.memberId);
                const member = teamMembersData.find(m => m.id === memberId);

                if (member) {
                    modalMemberImage.src = member.image;
                    modalMemberImage.alt = member.name;
                    modalMemberName.textContent = member.name;
                    modalMemberDesignation.textContent = member.designation;

                    let skillsHtml = '<h4>Skills</h4>';
                    member.skills.forEach(skill => {
                        skillsHtml += `
                            <div class="skill-item">
                                <p>${skill.name}</p>
                                <div class="progress-bar-container">
                                    <div class="progress-bar" style="width: ${skill.percentage}%;"></div>
                                </div>
                            </div>
                        `;
                    });
                    modalSkillsContainer.innerHTML = skillsHtml;

                    modalOverlay.classList.add('active');
                }
            });
        });

        if (modalCloseButton) {
            modalCloseButton.addEventListener('click', function() {
                modalOverlay.classList.remove('active');
            });
        }

        if (modalOverlay) {
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    modalOverlay.classList.remove('active');
                }
            });
        }
    });