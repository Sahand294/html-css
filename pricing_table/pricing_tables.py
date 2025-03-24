from flask import Flask,render_template
app = Flask(__name__)


@app.route("/pricing_tables")
def home():
    return render_template('pricing_tables.html')
if __name__ == '__main__':
    app.run(debug=True)
