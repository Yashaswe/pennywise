from flask import Flask 
from flask_restful import Api, Resource
app = Flask(__name__)
api = Api(app)

names = {}
class HelloWorld(Resource):
    def get(self,name,test):
        return{"data":name,"test": test}
    
    def post(self):
        return{"data":"Posted"}
    
api.add_resource(HelloWorld, "/helloworld/<string:name>")

if __name__ == "__main__":
    app.run(debug = True) #only for debugging 