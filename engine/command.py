import pyttsx3
import speech_recognition as sr
import eel
import time

def speak(text):
    engine = pyttsx3.init()
    voices=engine.getProperty('voices')
    engine.setProperty('voice',voices[1].id)
    engine.setProperty('rate',160)
    eel.DisplayMessage(text)
    engine.say(text)
    engine.runAndWait()

@eel.expose
def takecommand():
    r=sr.Recognizer()
    with sr.Microphone() as source:
        eel.DisplayMessage('Listening..')
        print("Listening...")
        r.pause_threshold=1
        r.adjust_for_ambient_noise(source)

        audio=r.listen(source,10,6)
    try:
        eel.DisplayMessage('Recognising...')
        print("Recognising...")
        query=r.recognize_google(audio, language='en-in')
        print(f"You said:{query}")
        eel.DisplayMessage(query)
        time.sleep(2)
        
    except Exception as e:
        return ""
    return query.lower()

@eel.expose
def allcommands():
    try:
        query= takecommand()
        print(query)
        if"open" in query:
            from engine.features import openCommand
            openCommand(query)
        elif"on youtube" in query:
            from engine.features import PlayYoutube
            PlayYoutube(query)

        elif "message" in query or "phone call" in query or "video call" in query:
            from engine.features import findContact, whatsApp
            message = ""
            contact_no, name = findContact(query)
            if(contact_no != 0):

                if "message" in query:
                    message = 'message'
                    speak("what message to send")
                    query = takecommand()
                    
                elif "phone call" in query:
                    message = 'call'
                
                else:
                    message = 'video call'
                    
                whatsApp(contact_no, query, message, name)
        
        else:
            print("not run")


    except:
        print("error")

    eel.ShowHood()