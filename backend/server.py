# from flask import Flask

# app = Flask(__name__)

# @app.route("/members")
# def members():
#   return {"members": ["Member1", "Member2", "Member3"]}

# if __name__ =="__main__":
#   app.run(debug=True)

from flask import Flask, jsonify
import os

app = Flask(__name__)
port = int(os.getenv("PORT", 3000))

@app.route("/")
def home():
    return "Hello World haha!"

@app.route("/twitter")
def twitter():
    return "yashaswe"

@app.route("/api/jokes")
def jokes():
    jokes = [
        {"id": 1, "title": "Joke1", "content": "This is a joke"},
        {"id": 2, "title": "Joke2", "content": "This is another joke"},
        {"id": 3, "title": "Joke3", "content": "This is very another joke"},
        {"id": 4, "title": "Joke4", "content": "This is last joke"},
    ]
    return jsonify(jokes)

@app.route("/github")

@app.route("/login")
def login():
    return "<h1>please login at me</h1>"

if __name__ == "__main__":
    app.run(port=port)

  
  
# from flask import Flask

# app = Flask(__name__)

# @app.route("/")
# def hello_world():
#     return "<p>Hello, World!</p>"