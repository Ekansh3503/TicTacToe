# Tic Tac Toe Game

Welcome to the **Tic Tac Toe** game! This is a classic two-player game where players take turns marking spaces in a 3x3 grid. The player who successfully places three of their marks in a row, column, or diagonal wins the game.

**Click here to see the live project**: [**Deployed Project Link**](https://ekansh3503.github.io/TicTacToe/)


## Table of Contents

- [Features](#features)
- [Game Logic](#game-logic)
- [Installation](#installation)
- [Usage](#usage)
- [Responsiveness](#responsiveness)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Two-player gameplay**: Players alternate between "X" and "O" on each turn.
- **Win detection**: The game automatically checks for winning combinations after every move.
- **Sound Effects**: Includes background music, sound for turns, and a game over sound effect.
- **Responsive Design**: Adjusts to smaller screens for mobile play.
- **Reset Button**: Reset the game board to start a new match.

## Game Logic

- The game checks for winning combinations based on a predefined set of indices for rows, columns, and diagonals.
- Each player's turn is marked by a sound effect, and the game declares a winner when one player completes a row, column, or diagonal.
- A line is drawn across the winning combination to visually indicate the win.
- The game can be reset by clicking the **Reset** button.

## Installation

To set up the game locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Ekansh3503/TicTacToe.git
   ```

2. Navigate to the project directory:

   ```bash
   cd TicTacToe
   ```

3. Open the `index.html` file in your browser to play the game.

## Usage

- Open the game in your browser.
- The game starts with "X" making the first move.
- Click on any empty cell to place your mark ("X" or "O").
- The game will alternate between the two players.
- When a player wins, the winning combination will be highlighted, and the game can be reset using the reset button.

## Responsiveness

The game adjusts for smaller screen sizes using a media query. The layout and lines drawn for the winning combinations change for devices with a screen width of 950px or less.

- For mobile screens, the game grid will adjust in size and positioning.
- The winning line will adjust its position and size for smaller viewports.

## Technologies Used

- **HTML**: Provides the structure for the game board and user interface.
- **CSS**: Styles the game board, elements, and makes the design responsive for different screen sizes.
- **JavaScript**: Implements the game logic, including turn changes, win detection, and interactivity.
- **Audio Files**: Adds sound effects to enhance the gameplay experience.

## Contributing

Contributions are welcome! If you'd like to add new features, fix bugs, or improve the game, follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your modifications.
4. Push to the branch.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Enjoy playing **Tic Tac Toe** and have fun competing with friends!
