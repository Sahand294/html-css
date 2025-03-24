from flask import Flask,render_template
app = Flask(__name__)


@app.route("/profilecard")
def home():
    return render_template('profilecard.html')
if __name__ == '__main__':
    app.run(debug=True)
