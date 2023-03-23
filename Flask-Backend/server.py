from email.headerregistry import ContentTypeHeader
# from urllib import request
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

from webs import webs

@app.route('/')
def index():
    return 'Hello'
# Random API names route
# @app.route("/names", methods=['GET'])
# def names():
#         app.logger.info('sending names correctly')
#         return {"names": ["NAME1", "NAME2","NAME3","NAME4"]}


# @app.route('/webs') #All URLS of API
# def getURLs():
#       return jsonify(webs) 
#other method to put url inside urls: {"urls": urls, "data"}

@app.route('/webs',methods=['GET']) #specifying only one; string type in order to compare it to the 2 examples
def getURL():
      body = request.json
      print(body['url'])
      URLFound = [web for web in webs if web['url'] == body['url'].lower()] #checking all items in the local jsons anc compares it with the json sent
      print(URLFound)
      if (len(URLFound) > 0): #  len used to see longitude of list 
            return ({'Safe site': URLFound[0] }) # 0 for the initial value, if not all would appear
      return ({'message': 'This is probably a phishing site'})


@app.route("/names", methods=['POST'])
def addURL():
        print(request.json)
        return 'received'


if __name__ == "__main__":
    app.run(host="localhost", port=8000, debug=True)

