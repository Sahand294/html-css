from flask import Flask,render_template
app = Flask(__name__)


@app.route("/four_exercises")
def home():
    return render_template('shop.html')
if __name__ == '__main__':
    app.run(debug=True)
