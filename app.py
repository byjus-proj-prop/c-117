from flask import Flask, render_template, url_for, request, jsonify
#from text_sentiment_prediction import *

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/predict-emotion', methods=["POST"])
def predict_emotion():
    
    # Obtenha a entrada de texto do requisição POST 
   
    input_text = request.json.get("text");
    #if not input_text:
        # Resposta a enviar se o input_text for indefinido
        
        
        # Resposta a enviar se o input_text não for indefinido
        
        # Enviar resposta         
        
       
app.run(debug=True)



    