from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
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
        user = User.query.filter_by(username=username, password=password).first()
        if user:
            # return f'Welcome, {username}!'
            return redirect(url_for('profile', username=username))
        else:
            return 'Invalid username or password'
    return render_template('login.html')

@app.route('/profile/<username>')
# TODO: only accessible if you logged in already - make that function
def profile(username):
    return render_template('profile.html', username=username)

@app.route('/profile')
# TODO: only accessible if you logged in already - make that function
# TODO: "if not logged in "please login or register"
def profile_noLogin():
    return render_template('profile.html')

# TODO: make dropdown register menu - client or therapist 
@app.route('/register_client', methods=['GET', 'POST'])
def register_client():
    if request.method == 'POST':
        email = request.form['email']
        username = request.form['username']
        password = request.form['password']
        confirm_password = request.form['confirm_password']
        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            return 'Username already exists'
        elif password != confirm_password:
            return 'Passwords do not match'
        else:
            new_user = User(email=email, username=username, password=password)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('login'))
    return render_template('register_client.html')

# need to edit function for the therapist registration because it is a different form from the client
@app.route('/register_therapist')
def register_therapist():
    # if request.method == 'POST':
    #     email = request.form['email']
    #     username = request.form['username']
    #     password = request.form['password']
    #     confirm_password = request.form['confirm_password']
    #     resume = request.form['insert resume file here']
    #     existing_user = User.query.filter_by(username=username).first()
    #     if existing_user:
    #         return 'Username already exists'
    #     elif password != confirm_password:
    #         return 'Passwords do not match'
    #     else:
    #         new_user = User(email=email, username=username, password=password)
    #         db.session.add(new_user)
    #         db.session.commit()
    #         return redirect(url_for('login'))
    return render_template('register_therapist.html')

@app.route('/aboutus')
def aboutus():
    return render_template('aboutus.html')

if __name__ == '__main__':
    app.run(debug=True)
