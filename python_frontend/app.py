# install these first before starting
# pip install Flask
# pip install pymongo

import sqlite3
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

conn = sqlite3.connect('users.db')
cursor = conn.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY,
                    email TEXT UNIQUE NOT NULL,
                    username TEXT UNIQUE NOT NULL,
                    password TEXT NOT NULL
                )''')
conn.commit()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        cursor.execute('''SELECT * FROM users WHERE username = ? AND password = ?''', (username, password))
        user = cursor.fetchone()
        if user:
            return f'Welcome, {username}!'
        else:
            return 'Invalid username or password'
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.form['email']
        username = request.form['username']
        password = request.form['password']
        confirm_password = request.form['confirm_password']
        cursor.execute('''SELECT * FROM users WHERE username = ?''', (username,))
        existing_user = cursor.fetchone()
        if existing_user:
            return 'Username already exists'
        elif password != confirm_password:
            return 'Passwords do not match'
        else:
            cursor.execute('''INSERT INTO users (email, username, password) VALUES (?, ?, ?)''', (email, username, password))
            conn.commit()
            return redirect(url_for('login'))
    return render_template('register.html')

if __name__ == '__main__':
    app.run(debug=True)
