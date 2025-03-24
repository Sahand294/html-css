
from flask import Flask,render_template
app = Flask(__name__)


@app.route("/image_galary")
def home():
    return render_template('galary.html')
if __name__ == '__main__':
    app.run(debug=True)
