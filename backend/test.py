import requests

BASE =  "http://127.0.0.1:5000/" 

response = requests.get(BASE + "helloworld/Jack/10")
print(response.json()) #so that they know that this is not a parameter