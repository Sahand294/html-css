from flask import Flask,render_template
app = Flask(__name__)


@app.route("/footer")
def home():
    return render_template('footer.html')
if __name__ == '__main__':
    app.run(debug=True)
