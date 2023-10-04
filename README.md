# README for Quiz App

# Features and Functions
This quiz app is a simple and straightforward way to test your knowledge on a variety of topics. It features:

A variety of question types, including multiple choice, true/false, short answer, and essay questions.
The ability to load questions from a JSON file.
A progress bar to track your progress as you go through the quiz.
A score counter to keep track of your correct and incorrect answers.
A high scores table to track your best performances.

# How to Use
Clone the repository to your local machine.
Install the dependencies with npm install.
Run the app with npm start.
Enter your name on the welcome screen and click "Start Quiz".
Answer the questions on the screen to the best of your ability.
At the end of the quiz, your score will be displayed.
You can view the high scores table by clicking on the "High Scores" link.

# Tips
You can load your own questions into the app by creating a JSON file with the following format:
JSON
[
  {
    "question": "What is the capital of France?",
    "choices": ["Paris", "London", "Berlin", "Rome"],
    "answer": 0
  },
  {
    "question": "What is the largest ocean on Earth?",
    "choices": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    "answer": 0
  }
]
Use code with caution. Learn more
Save the JSON file and then open the app settings menu to select it.

You can adjust the number of questions in the quiz by changing the value of the maxQuestions variable in the game() function.

You can adjust the number of high scores displayed on the high scores table by changing the value of the Max_high_scores variable in the end.html file.

# Contributing
If you have any suggestions or bug reports, please feel free to open an issue on the GitHub repository.
I hope you enjoy this quiz app!

# Additional Information
The quiz app is built using HTML, CSS, and JavaScript. It uses the Fetch API to load questions from a JSON file. The quiz app is also responsive, so it can be used on a variety of devices, including smartphones and tablets.

# How to Create Your Own Quiz Questions
To create your own quiz questions, you will need to create a JSON file with the following format:
JSON
[
  {
    "question": "What is the capital of France?",
    "choices": ["Paris", "London", "Berlin", "Rome"],
    "answer": 0
  },
  {
    "question": "What is the largest ocean on Earth?",
    "choices": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    "answer": 0
  }
]
Use code with caution. Learn more
The question property is the text of the question. The choices property is an array of strings, each of which represents a possible answer to the question. The answer property is the index of the correct answer in the choices array.
Once you have created your JSON file, you can load it into the quiz app by opening the app settings menu and selecting it.

# Troubleshooting
If you are having problems with the quiz app, please check the following:
Make sure that you have installed the dependencies with npm install.
Make sure that you are running the app with npm start.
Make sure that your JSON file is in the correct format.
Make sure that your JSON file is saved in the same directory as the quiz app files.
If you are still having problems, please open an issue on the GitHub repository.
