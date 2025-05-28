// Player class showing players with their name, role, image, and a fun fact
class Player {
    constructor(name, role, image, hiddenDetail) {
        this.name = name;
        this.role = role;
        this.image = image;
        this.hiddenDetail = hiddenDetail; // A fun fact or hidden detail about the player
    }
}

// Team class that holds an array of Player objects and does the rendering
class Team {
    constructor(players = []) {
        this.players = players;     // The array of Player objects
    }

    // Render method to display players inside a container with given id
    render(containerId) {
        const container = document.getElementById(containerId);  // Get the container element by id
        let row;  // Variable to hold the current Bootstrap row div

        // Loop through all players
        this.players.forEach((player, index) => {
            // Every 3 players, create a new Bootstrap row div for layout
            if (index % 3 === 0) {
                row = document.createElement('div');
                row.className = 'row mt-4';  // Bootstrap row with margin top 4
                container.appendChild(row);  // Add the row to the container
            }

            // Create a column div with Bootstrap class to hold a player card
            const col = document.createElement('div');
            col.className = 'col-md-4';

            // Create a div to contain the player's image and style it
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';

            // Conditional styling: if player role includes 'guard', add a special border
            if (player.role.toLowerCase().includes('guard')) {
            }

            // Create the image element with responsive Bootstrap class
            const img = document.createElement('img');
            img.className = 'img-fluid';  // Responsive image that scales with container
            img.src = player.image;       // Set image source URL
            img.alt = player.name;        // Alt text for accessibility

            // Create a button to show more info about the player
            const button = document.createElement('button');
            button.className = 'btn-orange-glow mt-2';
            button.innerText = 'More Info';

            button.onclick = () => {
                document.getElementById('modalTitle').innerText = `${player.name} – ${player.role}`;  // Modal title
                document.getElementById('modalBody').innerText = player.hiddenDetail;  // Modal body with hidden detail
                $('#infoModal').modal('show');  // Show Bootstrap modal
            };

            imageContainer.appendChild(img);
            col.appendChild(imageContainer);
            col.appendChild(button);
            row.appendChild(col);
        });
    }
}

// Create a sample team with Player objects
const team = new Team([
    new Player('Delon Wright', 'Guard', 'imgs/Delon Wright.png', 'Delon Wright won the Bob Cousy Award, given to the nations best college point guard, in 2015 while playing at the University of Utah.'),
    new Player('Marjon Beauchamp', 'Forward', 'imgs/Marjon Beauchamp.png', 'MarJon Beauchamp is of Native American descent, representing two tribes: the Mission Indians and the La Jolla Band of Luiseño Indians.'),
    new Player('PJ Tucker', 'Forward', 'imgs/PJ Tucker.png', 'He played for five different countries outside of the NBA, including Israel, Ukraine, Greece, Italy, and Germany, before returning to the league in 2012.'),
    new Player('Cameron Payne', 'Guard', 'imgs/Cameron Payne.png', ' Cameron Payne became the first sophomore and fourth player in Ohio Valley Conference history to leave school early for the NBA.'),
    new Player('Miles McBride', 'Guard', 'imgs/Miles McBride.png', 'Miles McBrides nickname "Deuce" originates from his father calling him that because he was the second child born in the family, after his brother Trey.'),
    new Player('Josh Hart', 'Guard/Forward', 'imgs/Josh Hart.png', 'Hart is known for his rebounding ability, particularly without boxing out, allowing him to focus on the balls movement.'),
    new Player('Pacome Dadiet', 'Forward', 'imgs/Pacome Dadiet.png', 'Pacome Dadiet, a French basketball player, started playing basketball at the young age of five in 2011'),
    new Player('Precious Achiuwa', 'Forward', 'imgs/Precious.png', 'He wears the number 5 on his jersey because he has five siblings. He also grew up playing soccer before transitioning to basketball.'),
    new Player('OG Anunoby', 'Forward', 'imgs/OG.png', 'Born in London, England, and raised in Missouri, he has Nigerian parents and three siblings, including a brother who played in the NFL. '),
    new Player('Kevin McCullar Jr.', 'Guard', 'imgs/Kevin.png', 'Kevin McCullar Jr. is a 6"6 forward/guard for the New York Knicks, who was drafted by the Phoenix Suns in the second round (56th overall) of the 2024 NBA Draft'),
    new Player('Jalen Brunson', 'Guard', 'imgs/Jalen.png', 'Jalen Brunson is known for his basketball skill and his connection to the New York Knicks, where his father, Rick Brunson, played.'),
    new Player('Tyler Kolek', 'Guard', 'imgs/Tyler.png', 'Mitchell Robinson, a center for the New York Knicks, is known for his exceptional rebounding, shot-blocking ability, and high field goal percentage.'),
    new Player('Mitchell Robinson', 'Guard', 'imgs/Mitchell.png', 'Mitchell Robinson is a center for the New York Knicks, is known for his exceptional rebounding, shot-blocking ability, and high field goal percentage.'),
    new Player('Mikal Bridges', 'Forward', 'imgs/Mikal.png', 'Mikal Bridges has played every game in his NBA career, has not missed a single game since being drafted in 2018'),
    new Player('Anton Watson', 'Forward', 'imgs/Anton.png', 'Watson has been surrounded by winning throughout his basketball career, both at Gonzaga Prep and with the Gonzaga Bulldogs. '),
    new Player('Karl-Anthony Towns', 'Center', 'imgs/Karl-Anthony.png', 'He is passionate about education and plans to pursue a degree in kinesiology, hoping to become a doctor after his basketball career. '),
    new Player('Landry Shamet', 'Guard', 'imgs/Landry.png', 'He is a 6"4" shooting guard born in Kansas City, Missouri on March 13, 1997. Shamet played college basketball at Wichita State. '),
    new Player('Ariel Hukporti', 'Center', 'imgs/Ariel.png', 'Hukporti is a 7"0" center who excels at rim running, setting screens, and rebounding. He is known for his energy and willingness to do the dirty work on the court. ')
]);

// Wait until the DOM is fully loaded, then render the team inside the element with id 'team-container'
document.addEventListener('DOMContentLoaded', () => {
    team.render('team-container');
});

