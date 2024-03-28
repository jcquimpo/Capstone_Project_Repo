from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
import sqlite3

app = Flask(__name__)

def create_table_users():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE
                )''')
    conn.commit()
    conn.close()
    
def create_table_therapist():
    conn = sqlite3.connect('therapist.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE
                )''')
    conn.commit()
    conn.close()

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Validate the login credentials against the database
        if validate_login(username, password):
            # Set the username in the session
            session['username'] = username
            return redirect(url_for('profile'))  # Redirect to the profile page
        else:
            # Display an error message if the credentials are invalid
            return render_template('login.html', message="Invalid username or password")

    # Render the login form
    return render_template('login.html', message="")

def validate_login(username, password):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password))
    user = c.fetchone()
    conn.close()
    return user is not None

@app.route('/profile')
    # TODO: implement Gemini API for the profile page 
    # TODO: Check if the user is logged in
    # if 'username' in session and session['username'] == username:
    #     return render_template('profile.html', username=username)
    # else:
    #     return redirect(url_for('login'))
def profile():
    if 'username' in session:
        return render_template('profile.html', username=session['username'])
    else:
        return redirect(url_for('login')) 

@app.route('/register_client', methods=['POST'])
def register_client():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        
        message = register(username, password, email)
        
        return render_template('login.html', message=message)

def register(username, password, email):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    try:
        c.execute('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', (username, password, email))
        conn.commit()
        conn.close()
        return "Registration successful. Please login."
    except sqlite3.IntegrityError:
        conn.close()
        return "Username or email already exists. Please choose a different one."
    
@app.route('/register_therapist', methods=['GET', 'POST'])
def register_therapist():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        
        message = register(username, password, email)
        
        return render_template('login.html', message=message)

def register(username, password, email):
    conn = sqlite3.connect('therapist.db')
    c = conn.cursor()
    try:
        c.execute('INSERT INTO therapist (username, password, email) VALUES (?, ?, ?)', (username, password, email))
        conn.commit()
        conn.close()
        return "Registration successful. Please login."
    except sqlite3.IntegrityError:
        conn.close()
        return "Username or email already exists. Please choose a different one."

@app.route('/aboutus')
def aboutus():
    return render_template('aboutus.html')

if __name__ == '__main__':
    app.run(debug=True)