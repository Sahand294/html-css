from flask import Flask,render_template
app = Flask(__name__)


@app.route("/login_form")
def home():
    return render_template('login_form.html')
if __name__ == '__main__':
    app.run(debug=True)
