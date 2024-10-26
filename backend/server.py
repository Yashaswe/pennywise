# from flask import Flask

# app = Flask(__name__)

# @app.route("/members")
# def members():
#   return {"members": ["Member1", "Member2", "Member3"]}

# if __name__ =="__main__":
#   app.run(debug=True)

from flask import Flask, jsonify, request
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
income_data = []

# New route for adding financial income information
@app.route("/api/financial-data/income", methods=["POST"])
def add_income_info():
    data = request.json
    if not data or 'type' not in data or 'amount' not in data or 'frequency' not in data:
        return jsonify({"error": "Invalid input, please provide type, amount, and frequency."}), 400
    
    income_entry = {
        "type": data['type'],
        "amount": data['amount'],
        "frequency": data['frequency']
    }
    income_data.append(income_entry)

    return jsonify({"message": "Income data added successfully.", "income_entry": income_entry}), 201

# Route for getting all income data
@app.route("/api/financial-data/income", methods=["GET"])
def get_income_info():
    total_income = sum(entry['amount'] for entry in income_data)
    return jsonify({"sources": income_data, "total_income": total_income})


if __name__ == "__main__":
    app.run(port=port)

  
  
# from flask import Flask

# app = Flask(__name__)

# @app.route("/")
# def hello_world():
#     return "<p>Hello, World!</p>"