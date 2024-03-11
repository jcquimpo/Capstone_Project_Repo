import streamlit as st

# Create a function for each page
def home_page():
    st.write("# Home Page")
    st.write("Welcome to the home page!")

def about_page():
    st.write("# About Page")
    st.write("Welcome to the about page!")

def contact_page():
    st.write("# Contact Page")
    st.write("Welcome to the contact page!")

# Create a navigation bar
nav_selection = st.sidebar.radio("Navigation", ["Home", "About", "Contact"])

# Based on the user's selection, display the corresponding page
if nav_selection == "Home":
    home_page()
elif nav_selection == "About":
    about_page()
elif nav_selection == "Contact":
    contact_page()
