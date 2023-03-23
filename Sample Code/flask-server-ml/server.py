from email.headerregistry import ContentTypeHeader
from urllib import request
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)
model = pickle.load(open("model.pkl", "rb"))


# Random API names route
# @app.route("/names", methods=['GET'])
# def names():
#         return {"names": ["NAME1", "NAME2","NAME3","NAME4"]}

@app.route("/predict", methods = ["GET"])
def predict():
    float_features = [float(x) for x in request.form.values()]
    features = [np.array(float_features)]
    prediction = model.predict(features)
    return {"predict" : [(format(prediction))]}

# @app.route("/names", methods=['GET'])
# def predict():
#     return (format(prediction))

if __name__ == "__main__":
    app.run(debug=True)

