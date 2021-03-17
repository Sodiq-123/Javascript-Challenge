// Challenge 1: Your age in days 
function age_in_days() {
    var birth_year = prompt('What year were you born?');
    var age_in_dayss = (2021 - birth_year) * 365;
    var h1 = document.createElement('h1');
    var text_answer = document.createTextNode('You are ' + age_in_dayss + ' days old');
    h1.setAttribute('id', 'age_in_days');
    h1.appendChild(text_answer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('age_in_days').remove();
}

// Challenge 2: Cat Generator
function generate_cat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors
function rps_game(your_choice) {
    console.log(your_choice);

    var human_choice, bot_choice;
    human_choice = your_choice.id;

    bot_choice = number_to_choice(rand_to_rps_int());
    console.log('Computer Choice: ', bot_choice);

    results = decide_winner(human_choice, bot_choice);
    console.log(results);

    message = final_message(results);
    console.log(message);

    rps_front_end(your_choice.id, bot_choice, message);
}

function rand_to_rps_int() {
    return Math.floor(Math.random() * 3);
}

function number_to_choice(number) {
    return ['rock', 'paper', 'scissors'][number]; 
}

function decide_winner(your_choice, computer_choice) {
    var rps_database = {
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    };

    var your_score = rps_database[your_choice][computer_choice];
    var computer_score = rps_database[computer_choice][your_choice];

    return [your_score, computer_score];
}

function final_message([your_score, computer_score]) {
    if (your_score === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if (your_score === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won', 'color': 'green'}; 
    }
}

function rps_front_end(human_image_choice, bot_image_choice, final_message) {
    var images_database = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    // Remove all images on click
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var human_div = document.createElement('div');
    var bot_div = document.createElement('div');
    var message_div = document.createElement('div');

    human_div.innerHTML = "<img src='" + images_database[human_image_choice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    message_div.innerHTML = "<h1 style='color: " + final_message['color'] + "; font-size: 60px; padding: 30px; '>" + final_message['message'] + "</h1>"
    bot_div.innerHTML = "<img src='" + images_database[bot_image_choice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(human_div);
    document.getElementById('flex-box-rps-div').appendChild(message_div);
    document.getElementById('flex-box-rps-div').appendChild(bot_div);
}

// Challenge 4: Change the Color of All Buttons
var all_buttons = document.getElementsByTagName('button');

var copy_all_buttons = [];
for (let i = 0;  i < all_buttons.length; i++) {
    copy_all_buttons.push(all_buttons[i].classList[1]);
}

console.log(copy_all_buttons)

function button_color_change(button_thingy) {
    if (button_thingy.value === 'red') {
        buttons_red();
    } else if (button_thingy.value === 'green') {
        buttons_green();
    } else if (button_thingy.value === 'reset') {
        button_color_reset();
    } else if (button_thingy.value === 'random') {
        random_colors();
    }
}

function buttons_red() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttons_green() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function button_color_reset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copy_all_buttons[i]);
    }
}

function random_colors() {
    let choices = ["btn-primary", "btn-danger", "btn-warning", "btn-success"];
    for (let i = 0; i < all_buttons.length; i++) {
        var random_number = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[random_number]);
    }
}

// Challenge 5: Blackjack

let blackjack_game = {
    'you': {'score_span': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'score_span': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cards_map': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]}, 
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'is_stand': false,
    'turns_over': false,
};

const YOU = blackjack_game['you'];
const DEALER = blackjack_game['dealer'];

const hit_sound = new Audio('images/blackjack_assets/sounds/swish.m4a');
const win_sound = new Audio('images/blackjack_assets/sounds/cash.mp3');
const loss_sound = new Audio('images/blackjack_assets/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjack_hit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealer_logic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjack_deal);

function blackjack_hit() {
    if (blackjack_game['is_stand'] === false) {
        let card = random_card()
        show_card(card, YOU);
        update_score(card, YOU);
        show_score(YOU);
    }
}

function random_card() {
    let random_index = Math.floor(Math.random() * 13);
    return blackjack_game['cards'][random_index];
}

function show_card(card, active_player) {
    if (active_player['score'] <= 21) {
        let card_image = document.createElement('img');
        card_image.src = `images/blackjack_assets/images/${card}.png`;
        document.querySelector(active_player['div']).appendChild(card_image);
        hit_sound.play(); 
    }
}

function blackjack_deal() {
    if (blackjack_game['turns_over'] === true) {

        blackjack_game['is_stand'] = false;

        let your_images = document.querySelector('#your-box').querySelectorAll('img');
        let dealer_images = document.querySelector('#dealer-box').querySelectorAll('img');

        for (let i = 0; i < your_images.length; i++) {
            your_images[i].remove();
        }

        for (let i = 0; i < dealer_images.length; i++) {
            dealer_images[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = "black";

        blackjack_game['turns_over'] = true; 
    }
    
}

function update_score(card, active_player) {
    if (card === 'A') {
    // if adding 11 keeps me below 21, add 11. Otherwise, add 1
        if (active_player['score'] + blackjack_game['cards_map'][card][1] <= 21) {
            active_player['score'] += blackjack_game['cards_map'][card][1];
        } else {
            active_player['score'] += blackjack_game['cards_map'][card][0];
        }
    } else {
        active_player['score'] += blackjack_game['cards_map'][card];
    }
}

function show_score(active_player) {
    if (active_player['score'] > 21) {
        document.querySelector(active_player['score_span']).textContent = 'BUST!';
        document.querySelector(active_player['score_span']).style.color = 'red';
    } else {
        document.querySelector(active_player['score_span']).textContent = active_player['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function dealer_logic() {
    blackjack_game['is_stand'] = true;

    while (DEALER['score'] < 16 &&  blackjack_game['is_stand'] === true) {
        let card = random_card();
        show_card(card, DEALER);
        update_score(card, DEALER);
        show_score(DEALER);
        await sleep(1000);
    }
    
    blackjack_game['turns_over'] = true;
    let winner = compute_winner();
    show_result(winner);
}

// Compute winner and return who just won
// Update the wins, draws and losses
function compute_winner() {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            console.log('You won!');
            blackjack_game['wins']++;
            winner = YOU;

        } else if (YOU['score'] <  DEALER['score']){
            console.log('You lost!');
            blackjack_game['losses']++;
            winner = DEALER;

        } else if (YOU['score'] ===  DEALER['score']) {
            blackjack_game['draws']++;
        }

    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjack_game['losses']++;
        winner = DEALER;


    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjack_game['draws']++;
    }

    console.log(blackjack_game);
    return winner;
}

function show_result(winner) {
    let message, message_color;

    if (blackjack_game['turns_over'] === true) {

        if (winner === YOU) {
        document.querySelector('#wins').textContent = blackjack_game['wins'];
        message = 'You won!';
        message_color = 'green';
        win_sound.play();

        } else if (winner === DEALER) {
            document.querySelector('#losses').textContent = blackjack_game['losses'];
            message = 'You lost!';
            message_color = 'red';
            loss_sound.play();

        } else {
            document.querySelector('#draws').textContent = blackjack_game['draws'];
            message = 'You drew!';
            message_color = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = message_color;
    }
}