import pandas as pd
from simplet5 import SimpleT5
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = SimpleT5()
model.load_model("t5", "C:\\Users\\Admin\\Desktop\\Doctor-Assigned\\epoch_8")

@app.route('/api/predict', methods=['POST','GET'])

def predict():
    try:
        data = request.get_json()
        question = data['userQuery']

        # Perform T5 prediction
        response = model.predict(f'answer : {question}')

        return jsonify({'response': response})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
     app.run(debug=True, port=5001)
