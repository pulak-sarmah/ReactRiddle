# ReactRiddle

ReactRiddle is a small React application designed to help users understand and practice using the `useReducer` hook. It consists of 15 riddles presented as questions in JSON format. The app features a timer, a fake server created using JSON Server to fetch questions, and a clean user interface.

## Features

- 15 riddles in JSON format
- Demonstrates the use of `useReducer` for state management
- Implements a timer to add an element of challenge
- Utilizes JSON Server for simulating a server environment

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/pulak-sarmah/reactRiddle.git
```

2. Install dependencies:

```bash
cd reactRiddle
npm install
```

3. Start the App

```bash
npm start
```

4.Start the fake server (Note: Ensure you have JSON Server installed):

```bash
json-server --watch db.json --port 3001

```
