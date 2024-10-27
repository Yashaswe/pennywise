from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory storage for simplicity (replace with a database)
user_data = {}
event_data = []

@app.route('/api/submit-event', methods=['POST'])
def submit_():
    form_data = request.json
    form_type = form_data.get('formType', 'event')  # Default to event

    if form_type == 'event':
        # Store event data
        event_data.append(form_data)
    elif form_type == 'user_info':
        # Store user data
        user_data.update(form_data)

    return jsonify({'message': 'Form submitted successfully'})

@app.route('/api/get-user-data', methods=['GET'])
def get_user_data():
    return jsonify(user_data)

@app.route('/api/get-event-data', methods=['GET'])
def get_event_data():
    return jsonify(event_data)

if __name__ == '__main__':
    app.run(debug=True)