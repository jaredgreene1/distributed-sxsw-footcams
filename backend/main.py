import picamera
import flask
import os

from flask_cors import CORS

IMAGE_DIR = '/usr/src/app/frontend/public/'

last_photo = ''

camera = picamera.PiCamera()

# Should save foot pictures categorized by order number
# and by view so that they're easy to sift through for data purposes
def take_picture(name):
    global last_photo

    if os.environ['FLIP_IMAGE'] == 'TRUE':
        camera.vflip = True
    else:
        camera.vflip = False 
    camera.capture(IMAGE_DIR + name)

    last_photo = name
    print('picture taken')


##################################
# Flask Server
##################################
app = flask.Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello Pooja Patel!'


@app.route('/picture')
def take_pic():
    import time

    ts = time.gmtime()
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S", ts)
    file_name = timestamp + '.jpg'
    take_picture(file_name)
    return flask.send_from_directory(IMAGE_DIR, last_photo)


@app.route('/get_picture')
def get_picture():
    return flask.send_from_directory(IMAGE_DIR, last_photo)


app.run(host='0.0.0.0', port=8080)












