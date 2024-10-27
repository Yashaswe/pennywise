from flask import Flask, request, render_template
from transformers import pipeline

app = Flask(__name__)

# Load the sentiment analysis pipeline using a pre-trained BERT model
sentiment_pipeline = pipeline("sentiment-analysis")

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        income = float(request.form['income'])
        event = request.form['event']
        total_expense = float(request.form['total_expense'])

        # Perform sentiment analysis on user input
        user_input = f"I want to save for {event} with an income of {income}."
        sentiment_result = sentiment_pipeline(user_input)

        # Generate budgeting advice based on inputs (dummy logic for demonstration)
        advice = generate_budgeting_advice(income, total_expense, event)

        return render_template('index.html', advice=advice, sentiment=sentiment_result)

    return render_template('index.html', advice=None)

def generate_budgeting_advice(income, total_expense, event):
    # Simple logic to generate budgeting advice
    if income >= total_expense:
        return f"You can afford to save for {event}. Start saving now!"
    else:
        return f"You may need to cut back on expenses to save for {event}."

if __name__ == '__main__':
    app.run(debug=True)
