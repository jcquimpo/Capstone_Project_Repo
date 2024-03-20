import streamlit as st 
import sqlite3

# make a POST function for the backend
# Function to register a new user
def register(username, password, email):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    try:
        c.execute('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', (username, password, email))
        conn.commit()
        st.success("Registration successful. Please login.")
    except sqlite3.IntegrityError:
        st.error("Username or email already exists. Please choose a different one.")
    conn.close()