document.addEventListener('DOMContentLoaded', () => {
    const states = {
        'Maharashtra': {
            'Mumbai': [
                { name: 'Marine Drive', description: 'Beautiful promenade by the sea', img: 'https://assets.zeezest.com/blogs/PROD_marine%20drive%20_1693625898430.jpg', link: 'index1.html' },
                { name: 'Gateway of India', description: 'Iconic arch-monument', img: 'https://img.veenaworld.com/wp-content/uploads/2021/03/Gateway-of-India-Mumbai-History-and-Heritage.jpeg', link: 'index2.html' },
                { name: 'Upper Deck Resort', description: 'Perched on the highest peak of Lonavala', img: 'https://r1imghtlak.mmtcdn.com/ed6a8e8a08c411e8bc5d0a9df65c8753.jpg', link: 'index3.html' }

            ],
            'Pune': [
                { name: 'Shaniwar Wada', description: 'Historic fortification', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOgwbvDSJSITudJbEDqcZ5diJeNaWoigLZA&s', link: 'index4.html' },
                { name: 'Aga Khan Palace', description: 'Grand mansion with historical significance', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMp0_606v637c3ctMrar3IldIhkA1186y-A&s', link: 'index5.html' }
            ]
        },

        'Rajasthan': {
            'Jaipur': [
                { name: 'Hawa Mahal', description: 'Palace of the Winds', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDD8CIjBDuVukV24jBDSDnW6-DUu3qrzpeQ&s', link: 'index6.html' },
                { name: 'Amber Fort', description: 'Historic fort and palace', img: 'https://xplro.com/wp-content/uploads/2024/04/Xplro-2024-04-12T213753.960.jpg', link: 'https://example.com/amber-fort-info' }
            ],
            'Udaipur': [
                { name: 'City Palace', description: 'Majestic palace complex', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCrR4Aw4kZZKkB3EPgsQYrKkUk_lb-gCgzQ&s', link: 'https://example.com/city-palace-udaipur-info' },
                { name: 'Lake Pichola', description: 'Picturesque lake with boat rides', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm3CVprmJSS256nbZzECvYvygDMu3QHC6lw&s', link: 'https://example.com/lake-pichola-info' }
            ]
        },
        'Kerala': {
            'Munnar': [
                { name: 'Tea Gardens', description: 'Lush green tea plantations', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ukey8vFs4mPo8L16EJKFui0DLxI2WTMasg&s', link: 'https://example.com/tea-gardens-munnar-info' },
                { name: 'Eravikulam National Park', description: 'Home to the Nilgiri Tahr', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv10fiIA9vhWaAfjX9Mkeek91-wCQASn6Tyw&s', link: 'https://example.com/eravikulam-national-park-info' }
            ],
            'Alleppey': [
                { name: 'Backwaters', description: 'Famous for houseboat cruises', img: 'https://static.toiimg.com/photo/47642329.cms', link: 'https://example.com/kerala-backwaters-info' },
                { name: 'Alleppey Beach', description: 'Beautiful beach with a pier', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Alleppey_beach.jpg/1200px-Alleppey_beach.jpg', link: 'https://example.com/alleppey-beach-info' }
            ]
        },
        'Delhi': {
            'New Delhi': [
                { name: 'India Gate', description: 'War memorial and iconic monument', img: 'https://images.news18.com/ibnlive/uploads/2022/01/india-gate.jpg', link: 'https://example.com/india-gate-info' },
                { name: 'Qutub Minar', description: 'Historic minaret and UNESCO site', img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201704/647_042717101905.jpg', link: 'https://example.com/qutub-minar-info' }
            ],
            'Old Delhi': [
                { name: 'Red Fort', description: 'Historic fort and museum', img: 'https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg', link: 'https://example.com/red-fort-info' },
                { name: 'Jama Masjid', description: 'Largest mosque in India', img: 'https://img.staticmb.com/mbcontent/images/uploads/2022/7/jama-masjid-delhi.jpg', link: 'https://example.com/jama-masjid-info' }
            ]
        },
        'Tamil Nadu': {
            'Chennai': [
                { name: 'Marina Beach', description: 'Longest beach in India', img: 'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/marina-beach-1656303766_3ddf37f0ea992c79047a.webp', link: 'https://example.com/marina-beach-info' },
                { name: 'Fort St. George', description: 'Historic fort and museum', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBxLmVmCvWkRrdlb78J0V34mkcKiVcUg3iw&s', link: 'https://example.com/fort-st-george-info' }
            ],
            'Madurai': [
                { name: 'Meenakshi Temple', description: 'Historic and grand temple', img: 'https://live.staticflickr.com/8757/28629291780_35036dc9c2_z.jpg', link: 'https://example.com/meenakshi-temple-info' },
                { name: 'Thirumalai Nayakkar Mahal', description: '17th-century palace', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqKTQJpvAiQyaYAanB3UbvBgJEulVH7qtAg&s', link: 'https://example.com/thirumalai-nayakkar-mahal-info' }
            ]
        },
        'Uttar Pradesh': {
            'Agra': [
                { name: 'Taj Mahal', description: 'Iconic white marble mausoleum', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg', link: 'https://example.com/taj-mahal-info' },
                { name: 'Agra Fort', description: 'Historic fort and UNESCO site', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/01/08/32/agra-fort.jpg?w=1200&h=1200&s=1', link: 'https://example.com/agra-fort-info' }
            ],
            'Varanasi': [
                { name: 'Kashi Vishwanath Temple', description: 'Famous Hindu temple', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7DTFaf8ds_yGq-2UMm_6uangFgN50qt30A&s', link: 'https://example.com/kashi-vishwanath-temple-info' },
                { name: 'Ganga Ghats', description: 'Historic and spiritual riverfront', img: 'https://www.incrediblevaranasi.com/wp-content/uploads/2018/08/Dashashwamedh_Ghat.jpg', link: 'https://example.com/ganga-ghats-info' }
            ]
        },
    

    'Goa': {
        'Panaji': [
            { name: 'Basilica of Bom Jesus', description: 'UNESCO World Heritage Site', img: 'https://cdn.britannica.com/10/252410-050-CE919B39/basilica-born-jesus-borea-jezuchi-bajilika-old-goa-india.jpg' },
            { name: 'Miramar Beach', description: 'Popular beach destination', img: 'https://goa-tourism.org.in/images/places-to-visit/headers/miramar-beach-goa-entry-fee-timings-holidays-reviews-header.jpg' }
        ],
            'Margao': [
                { name: 'Colva Beach', description: 'Famous beach with white sand', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/db/11/caption.jpg?w=300&h=300&s=1' },
                { name: 'Church of the Holy Spirit', description: 'Historic church', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WrBU4NZy5AEGwyaVn3PLeYRYapZAoXCjqg&s' }
            ]
    },

    'Madhya Pradesh': {
        'Omkareshwar': [
            { name: 'Nagar Ghat', description: 'a beautiful place located at the banks of the heavenly river Narmada', img: 'https://media-cdn.tripadvisor.com/media/photo-s/06/d6/2e/3a/shri-omkareshwar-jyotirlinga.jpg' },
            { name: 'Abhay Ghat ', description: 'A Sacred Ghat for a Calming Experience!', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpCTh5g3q9yb4dS3hAezL8a2fItXmt2rFOg&s' }
        ],
            'Jabalpur': [
                { name: 'Balancing Rock', description: 'Roadside Rock Formation', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJZuskjIo6BHxEgf03JNiXxIQhpldzKRnMQ&s' },
                { name: 'Pisanhari Ki Madiya', description: 'Famous Jain Pilgrimage Centre', img: 'https://media1.thrillophilia.com/filestore/lv8865qnt8ylegbo1y0sluc74qh1_1531911436_Pisanhari_ki_madiya.jpg' }
            ]
    }


};

const stateFilter = document.getElementById('state-filter');
const cityFilter = document.getElementById('city-filter');
const destinationsGrid = document.querySelector('.destinations-grid');

// Populate state options
for (const state in states) {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateFilter.appendChild(option);
}

// Populate city options based on selected state
stateFilter.addEventListener('change', (event) => {
    const selectedState = event.target.value;
    cityFilter.innerHTML = '<option value="">Select City</option>'; // Reset city options
    cityFilter.disabled = !selectedState;

    if (selectedState) {
        for (const city in states[selectedState]) {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            cityFilter.appendChild(option);
        }
    }
});

// Display destinations based on selected city
cityFilter.addEventListener('change', (event) => {
    const selectedState = stateFilter.value;
    const selectedCity = event.target.value;
    destinationsGrid.innerHTML = ''; // Clear current destinations

    if (selectedCity) {
        const touristPlaces = states[selectedState][selectedCity];

        touristPlaces.forEach(place => {
            const card = document.createElement('div');
            card.classList.add('destination-card');
            card.innerHTML = `
                        <img src="${place.img}" alt="${place.name}">
                        <div class="destination-info">
                            <h3>${place.name}</h3>
                            <p>${place.description}</p>
                            <button class="explore-btn">Explore</button>
                        </div>
                    `;
            destinationsGrid.appendChild(card);
        });

        // Add event listener to explore button
        const exploreButtons = document.querySelectorAll('.explore-btn');
        exploreButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                window.location.href = touristPlaces[index].link;
            });
        });
    }
});
});
