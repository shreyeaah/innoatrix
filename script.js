document.addEventListener('DOMContentLoaded', () => {
    // JSON data for destinations and activities
    const destinationsData = {
        "Munnar": {
            "activities": {
                "sunny": [{
                        "time": "07:00 - 09:00",
                        "activity": "Tea plantation visit",
                        "description": "Start your day early with a refreshing walk through lush tea gardens. Learn about tea cultivation and enjoy the misty morning views."
                    },
                    {
                        "time": "09:30 - 12:30",
                        "activity": "Trekking",
                        "description": "Guided trek through the Western Ghats. Experience diverse flora and stunning valley views. Includes packed snacks and water."
                    },
                    {
                        "time": "14:00 - 16:00",
                        "activity": "Visit to Eravikulam National Park",
                        "description": "Discover the wildlife and scenic views of the Eravikulam National Park. Famous for its endangered species, Nilgiri Tahr."
                    },
                    {
                        "time": "16:30 - 18:00",
                        "activity": "Sunset view at Echo Point",
                        "description": "Watch the mesmerizing sunset and enjoy the echo phenomena at Echo Point."
                    }
                ],
                "rainy": [{
                        "time": "09:00 - 11:00",
                        "activity": "Tea Museum",
                        "description": "Explore the history of tea cultivation in Kerala. Includes tea tasting session and documentary screening."
                    },
                    {
                        "time": "11:30 - 13:00",
                        "activity": "Spice Garden Visit",
                        "description": "Learn about the spices of Kerala with a guided tour through a spice garden. Includes spice tasting."
                    },
                    {
                        "time": "14:00 - 16:00",
                        "activity": "Indoor crafts workshop",
                        "description": "Participate in a local crafts workshop where you can create souvenirs to take home."
                    }
                ]
            },
            "costs": {
                "budget": 1500,
                "moderate": 3000,
                "luxury": 5000
            },
            
            "image": "./munnar.jpg"
        },

        "Alleppey": {
    "activities": {
        "sunny": [
            {
                "time": "08:00 - 12:00",
                "activity": "Houseboat Cruise",
                "description": "Enjoy a serene cruise through the backwaters of Alleppey. Experience the tranquil waters, lush greenery, and traditional Kerala village life."
            },
            {
                "time": "13:00 - 15:00",
                "activity": "Lunch at a Traditional Kerala Restaurant",
                "description": "Savor delicious Kerala cuisine, including seafood delicacies, served on a banana leaf."
            },
            {
                "time": "15:30 - 17:30",
                "activity": "Beach Walk at Alleppey Beach",
                "description": "Take a relaxing stroll along Alleppey Beach and enjoy the sunset over the Arabian Sea."
            }
        ],
        "rainy": [
            {
                "time": "09:00 - 11:00",
                "activity": "Kerala Coir Museum",
                "description": "Learn about the traditional coir industry of Kerala with exhibits showcasing coir-making techniques and handicrafts."
            },
            {
                "time": "11:30 - 13:00",
                "activity": "Ayurvedic Spa",
                "description": "Experience a rejuvenating Ayurvedic massage and spa treatment, perfect for relaxation on a rainy day."
            },
            {
                "time": "14:00 - 16:00",
                "activity": "Cooking Class on Kerala Cuisine",
                "description": "Join a cooking class to learn how to prepare authentic Kerala dishes, including seafood and traditional spices."
            }
        ]
    },
    "costs": {
        "budget": 2000,
        "moderate": 4000,
        "luxury": 7000
    },
    "image": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=2069"
},

    "Wayanad": {
        "activities": {
            "sunny": [
                {
                    "time": "07:00 - 09:00",
                    "activity": "Edakkal Caves Exploration",
                    "description": "Explore the ancient Edakkal Caves, featuring prehistoric carvings and scenic views of the surrounding hills."
                },
                {
                    "time": "10:00 - 12:00",
                    "activity": "Wildlife Safari at Wayanad Wildlife Sanctuary",
                    "description": "Take a jeep safari through the Wayanad Wildlife Sanctuary to spot elephants, deer, and a variety of birds."
                },
                {
                    "time": "14:00 - 16:00",
                    "activity": "Soochipara Waterfalls Visit",
                    "description": "Enjoy the stunning views and refreshing dip at Soochipara Waterfalls, surrounded by lush greenery."
                },
                {
                    "time": "16:30 - 18:00",
                    "activity": "Sunset at Lakkidi Viewpoint",
                    "description": "Witness a breathtaking sunset at Lakkidi Viewpoint, known for its panoramic views of the Western Ghats."
                }
            ],
            "rainy": [
                {
                    "time": "09:00 - 11:00",
                    "activity": "Pookode Lake Boating",
                    "description": "Enjoy a peaceful boat ride in Pookode Lake, a freshwater lake surrounded by evergreen forests."
                },
                {
                    "time": "11:30 - 13:00",
                    "activity": "Wayanad Heritage Museum",
                    "description": "Discover the rich history and culture of Wayanad through artifacts and exhibits at the Heritage Museum."
                },
                {
                    "time": "14:00 - 16:00",
                    "activity": "Indoor Yoga & Meditation Retreat",
                    "description": "Relax with a guided yoga and meditation session at a wellness retreat, perfect for unwinding on a rainy day."
                }
            ]
        },
        "costs": {
            "budget": 1800,
            "moderate": 3500,
            "luxury": 6000
        },
        "image": "./wayanad.jpg"
    },
    "Varkala": {
    "activities": {
        "sunny": [
            {
                "time": "07:00 - 09:00",
                "activity": "Sunrise at Varkala Cliff",
                "description": "Enjoy a breathtaking sunrise view from Varkala Cliff while sipping fresh coconut water."
            },
            {
                "time": "10:00 - 12:00",
                "activity": "Beach Time at Varkala Beach",
                "description": "Relax on the sandy shores, take a dip in the Arabian Sea, or try surfing at Varkala Beach."
            },
            {
                "time": "14:00 - 16:00",
                "activity": "Visit Janardanaswamy Temple",
                "description": "Explore the historic Janardanaswamy Temple, a 2000-year-old Hindu pilgrimage site."
            },
            {
                "time": "16:30 - 18:30",
                "activity": "Sunset at Kappil Beach",
                "description": "Enjoy a serene sunset at Kappil Beach, where the backwaters meet the Arabian Sea."
            }
        ],
        "rainy": [
            {
                "time": "09:00 - 11:00",
                "activity": "Ayurvedic Spa & Wellness",
                "description": "Rejuvenate with an authentic Ayurvedic massage at a renowned wellness center."
            },
            {
                "time": "11:30 - 13:00",
                "activity": "Café Hopping & Local Cuisine",
                "description": "Explore cozy beachside cafés and taste fresh seafood and traditional Kerala dishes."
            },
            {
                "time": "14:00 - 16:00",
                "activity": "Varkala Aquarium Visit",
                "description": "Learn about marine life and explore different species of fish at the Varkala Aquarium."
            }
        ]
    },
    "costs": {
        "budget": 1500,
        "moderate": 3200,
        "luxury": 5500
    },
    "image": "./varkala.jpg"
}


    };
   
     const moodToPlaces = {
            Munnar: {
                relaxed: [
                    { name: "Tea Gardens", description: "Enjoy the lush green tea plantations and take a peaceful walk." },
                    { name: "Echo Point", description: "A calm and scenic place where you can hear your voice echo." },
                    { name: "Attukal Waterfalls", description: "A beautiful waterfall surrounded by nature, perfect for relaxation." }
                ],
                adventurous: [
                    { name: "Trekking in Eravikulam National Park", description: "Hike through the beautiful landscapes and spot the endangered Nilgiri Tahr." },
                    { name: "Rock Climbing", description: "Try rock climbing at scenic spots in Munnar for an adrenaline rush." },
                    { name: "Mountain Biking", description: "Explore Munnar’s winding roads and hills on a bike ride." }
                ],
                romantic: [
                    { name: "Top Station", description: "A breathtaking viewpoint offering panoramic views of the Western Ghats." },
                    { name: "Echo Point", description: "A peaceful lake with an echo phenomenon, great for couples." },
                    { name: "Kundala Lake", description: "Enjoy a romantic boat ride on this serene lake." }
                ]
            },
            Alleppey: {
                relaxed: [
                    { name: "Alleppey Backwaters", description: "Take a soothing houseboat cruise through the tranquil waters." },
                    { name: "Vembanadu Lake", description: "Enjoy the scenic beauty and spot migratory birds." },
                    { name: "Houseboat Ride", description: "Stay overnight in a houseboat for a peaceful retreat." }
                ],
                adventurous: [
                    { name: "Kayaking", description: "Paddle through narrow canals and explore the backwaters up close." },
                    { name: "Backwater Cycling", description: "Cycle along the quiet village roads with stunning backwater views." },
                    { name: "Water Sports at Vembanadu", description: "Try jet skiing, speed boating, and other water adventures." }
                ],
                romantic: [
                    { name: "Sunset Cruise", description: "Watch the sun dip below the horizon while cruising on the backwaters." },
                    { name: "Vembanadu Lake", description: "A quiet spot for couples to enjoy nature." },
                    { name: "Alleppey Beach", description: "Walk along the shore and enjoy a beautiful sunset." }
                ]
            },
            Wayanad: {
                relaxed: [
                    { name: "Pookode Lake", description: "A peaceful freshwater lake surrounded by lush greenery." },
                    { name: "Edakkal Caves", description: "Explore caves with ancient petroglyphs and a calm atmosphere." },
                    { name: "Banasura Sagar Dam", description: "A scenic dam with boating facilities and stunning views." }
                ],
                adventurous: [
                    { name: "Chembra Peak Trek", description: "A challenging trek leading to a heart-shaped lake at the top." },
                    { name: "Wayanad Wildlife Sanctuary", description: "Spot elephants, tigers, and other wildlife in their natural habitat." },
                    { name: "Ziplining at Vythiri", description: "Soar over lush forests and tea plantations on a thrilling zipline ride." }
                ],
                romantic: [
                    { name: "Soochipara Waterfalls", description: "A beautiful three-tiered waterfall, perfect for couples." },
                    { name: "Edakkal Caves", description: "A historical yet romantic place with scenic views." },
                    { name: "Banasura Hill", description: "A quiet, picturesque hill perfect for a romantic getaway." }
                ]
            },
            Varkala: {
                relaxed: [
                    { name: "Varkala Beach", description: "Relax on the beautiful beach with golden sands and calm waves." },
                    { name: "Papanasam Beach", description: "A serene spot known for its religious significance and peaceful atmosphere." },
                    { name: "Janardhana Swamy Temple", description: "A quiet place to explore, offering a mix of spirituality and calm vibes." }
                ],
                adventurous: [
                    { name: "Paragliding", description: "Enjoy the thrill of paragliding over the stunning cliffs and sea." },
                    { name: "Surfing", description: "Catch the waves with surfing lessons available at the beach." },
                    { name: "Cliff Jumping", description: "For the brave, jump off the cliffs for a refreshing dip in the waters below." }
                ],
                romantic: [
                    { name: "Varkala Cliff", description: "A beautiful cliff-side spot to watch the sunset with your loved one." },
                    { name: "Kappil Lake", description: "Take a romantic boat ride on the tranquil lake surrounded by greenery." },
                    { name: "Papanasam Beach at Sunset", description: "Enjoy the magical sunset views with your partner, creating a perfect romantic moment." }
                ]
            }
            
        };
        document.getElementById("generate-mood").addEventListener("click", function () {
            const mood = document.getElementById("mood").value;
            const destination = document.getElementById("mood-destination").value;
        
            const places = moodToPlaces[destination][mood];
        
            const placesListDiv = document.getElementById("places-list");
        
            // Clear previous places
            placesListDiv.innerHTML = "";
        
            if (places) {
                const ul = document.createElement("ul");
                places.forEach(place => {
                    const li = document.createElement("li");
                    li.innerHTML = `<strong>${place.name}:</strong> ${place.description}`;
                    ul.appendChild(li);
                });
                placesListDiv.appendChild(ul);
            } else {
                placesListDiv.innerHTML = "<p>No places found for this combination. Please select again.</p>";
            }
        });
    

    

    // Handling the general itinerary generation
    document.getElementById('generate').addEventListener('click', () => {
        const destination = document.getElementById('destination').value;
        const days = parseInt(document.getElementById('days').value);
        const budget = document.getElementById('budget').value;
        const weather = document.getElementById('weather').value;

        if (destination && days && budget && weather) {
            // Check if the destination exists in the JSON data
            if (destinationsData[destination]) {
                const destinationData = destinationsData[destination];
                const activities = destinationData.activities[weather] || [];
                const costs = destinationData.costs;
                const imageUrl = destinationData.image;

                // Build the itinerary content dynamically
                let itineraryContent = `
                  <h3>Your ${days}-day itinerary for ${destination}:</h3>
                  <p>Budget: ${budget}</p>
                  <p>Weather: ${weather}</p>
                  <p>Estimated Costs: ${costs[budget.toLowerCase()] || 'N/A'} INR</p>
                  <img src="${imageUrl}" alt="${destination}" style="max-width: 100%; height: auto; margin-top: 20px;" />
                  <h4>Day-by-Day Activities:</h4>
              `;

                if (activities.length > 0) {
                    // Split activities for the number of days
                    const activitiesPerDay = Math.ceil(activities.length / days);

                    for (let day = 1; day <= days; day++) {
                        itineraryContent += `<h5>Day ${day}:</h5>`;
                        const startIdx = (day - 1) * activitiesPerDay;
                        const endIdx = startIdx + activitiesPerDay;

                        const dayActivities = activities.slice(startIdx, endIdx);
                        if (dayActivities.length > 0) {
                            dayActivities.forEach(activity => {
                                itineraryContent += `
                                  <div>
                                      <h6>${activity.time} - ${activity.activity}</h6>
                                      <p>${activity.description}</p>
                                  </div>
                              `;
                            });
                        } else {
                            itineraryContent += `<p>No activities available for this day.</p>`;
                        }
                    }
                } else {
                    itineraryContent += `<p>No activities available for this weather.</p>`;
                }

                // Set the itinerary content in the DOM
                document.getElementById('itinerary').innerHTML = itineraryContent;
            } else {
                document.getElementById('itinerary').innerHTML = '<p>No data available for the selected destination.</p>';
            }
        } else {
            alert('Please fill all the fields to generate your itinerary.');
        }
    });

    // Handling the mood-based itinerary generation
    document.getElementById('generate-mood').addEventListener('click', () => {
        const mood = document.getElementById('mood').value;
        const moodDestination = document.getElementById('mood-destination').value;
        const moodDays = parseInt(document.getElementById('mood-days').value);

        if (mood && moodDestination && moodDays) {
            // Check if the destination exists in the JSON data
            if (destinationsData[moodDestination]) {
                const moodData = destinationsData[moodDestination];
                const weather = 'sunny'; // Default for mood; you can modify this
                const activities = moodData.activities[weather] || [];
                const imageUrl = moodData.image;

                // Build the itinerary content dynamically for the mood
                let moodItineraryContent = `
                  <h3>Your ${moodDays}-day ${mood} itinerary for ${moodDestination}:</h3>
                  <p>Mood: ${mood}</p>
                  <img src="${imageUrl}" alt="${moodDestination}" style="max-width: 100%; height: auto; margin-top: 20px;" />
                  <h4>Day-by-Day Activities:</h4>
              `;

                if (activities.length > 0) {
                    // Split activities for the number of days
                    const activitiesPerDay = Math.ceil(activities.length / moodDays);

                    for (let day = 1; day <= moodDays; day++) {
                        moodItineraryContent += `<h5>Day ${day}:</h5>`;
                        const startIdx = (day - 1) * activitiesPerDay;
                        const endIdx = startIdx + activitiesPerDay;

                        const dayActivities = activities.slice(startIdx, endIdx);
                        if (dayActivities.length > 0) {
                            dayActivities.forEach(activity => {
                                moodItineraryContent += `
                                  <div>
                                      <h6>${activity.time} - ${activity.activity}</h6>
                                      <p>${activity.description}</p>
                                  </div>
                              `;
                            });
                        } else {
                            moodItineraryContent += `<p>No activities available for this day.</p>`;
                        }
                    }
                } else {
                    moodItineraryContent += `<p>No activities available for this mood and weather.</p>`;
                }

                // Set the mood itinerary content in the DOM
                document.getElementById('itinerary').innerHTML = moodItineraryContent;
            } else {
                document.getElementById('itinerary').innerHTML = '<p>No data available for the selected destination.</p>';
            }
        } else {
            alert('Please fill all the fields to generate your mood-based itinerary.');
        }
    });
});