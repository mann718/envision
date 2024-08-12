from flask import Flask, request, jsonify
from groq import Groq
from langchain.chains import ConversationChain
from langchain.chains.conversation.memory import ConversationBufferWindowMemory
from langchain_groq import ChatGroq
#from dotenv import load_dotenv
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes
#load_dotenv()

groq_api_key = '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'
def initialize_conversation(model, memory_length):
    memory = ConversationBufferWindowMemory(k=memory_length)
    groq_chat = ChatGroq(
        groq_api_key=groq_api_key, 
        model_name=model
    )
    conversation = ConversationChain(
        llm=groq_chat,
        memory=memory
    )
    return conversation, memory

@app.route('/api/explain', methods=['POST'])
def explain():
    data = request.json
    model = data.get('model')
    question = data.get('question')
    memory_length = data.get('memory_length', 5)
    
    exp_query = f"""Role play that you are university professor:
A student asks you with atmost curiosity that {question} 
Answer and explain him with top clarity and such that he gets motivated in this field."""

    conversation, memory = initialize_conversation(model, memory_length)
    
    response = conversation(exp_query)
    return jsonify({'response': response['response']})

@app.route('/api/create_scene', methods=['POST'])
def create_scene():
    data = request.json
    model = data.get('model')
    question = data.get('question')
    memory_length = data.get('memory_length', 5)
    
    scene_query = f"""turn this explanation of {question} into scene by scene description, each scene contains visual description and narration, like Scene : The Experiment - Light and Ejected Electrons
    Visual: A lab setup appears, showing a simple experiment: a light source shining on a metal plate connected to an electron detector. The scene shows a bright light (red or yellow) shining on the plate with no reaction, and then a dimmer, bluish light causing the detector to go off as electrons are ejected.
    Narration: "It turned out that the energy of the ejected electrons didn't depend on how bright the light was but rather on the light's frequency. Even a dim light with a high frequency could knock electrons loose, while a bright light of low frequency couldn't."""

    conversation, memory = initialize_conversation(model, memory_length)
    
    response = conversation(scene_query)
    return jsonify({'response': response['response']})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)