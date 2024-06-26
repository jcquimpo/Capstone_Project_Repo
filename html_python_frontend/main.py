from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'your_secret_key'  # Add a secret key for session
db = SQLAlchemy(app)

# TODO: For testing purposes - removed the unique aspect
class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120),  nullable=False)
    username = db.Column(db.String(80),  nullable=False)
    password = db.Column(db.String(80), nullable=False)

class Therapist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=False)
    username = db.Column(db.String(80), nullable=False)
    password = db.Column(db.String(80), nullable=False)
    
# Create users table if not exists
with app.app_context():
    db.create_all()
    
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = Client.query.filter_by(username=username, password=password).first()
        if user:
            # Set the username in the session
            session['username'] = username
            print(f"User {username} logged in successfully.")
            return redirect(url_for('profile', username=username))
        else:
            print("Invalid username or password.")
            return 'Invalid username or password'
    return render_template('login.html')

@app.route('/register_client', methods=['GET', 'POST'])
def register_client():
    if request.method == 'POST':
        email = request.form['email']
        username = request.form['username']
        password = request.form['password']
        confirm_password = request.form['confirm_password']
        existing_user = Client.query.filter_by(username=username).first()
        if existing_user:
            return 'Username already exists'
        elif password != confirm_password:
            return 'Passwords do not match'
        else:
            new_user = Client(email=email, username=username, password=password)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('login'))
    return render_template('register_client.html')

@app.route('/register_therapist', methods=['GET', 'POST'])
def register_therapist():
    if request.method == 'POST':
        email = request.form['email']
        username = request.form['username']
        password = request.form['password']
        confirm_password = request.form['confirm_password']
        existing_user = Therapist.query.filter_by(username=username).first()
        if existing_user:
            return 'Username already exists'
        elif password != confirm_password:
            return 'Passwords do not match'
        else:
            new_user = Therapist(email=email, username=username, password=password)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('login'))
    return render_template('register_therapist.html')

@app.route('/profile/<username>')
def profile(username):
    # TODO: Check if the user is logged in
    if 'username' in session:
        if session['username'] == username:
            return render_template('profile.html', username=username)
        else:
            print(f"User {session['username']} attempted to access profile of {username}.")
            return redirect(url_for('login'))
    else:
        print("User is not logged in.")
        return redirect(url_for('login'))
    
@app.route('/aboutus')
def aboutus():
    return render_template('aboutus.html')
    
if __name__ == '__main__':
    app.run(debug=True)
