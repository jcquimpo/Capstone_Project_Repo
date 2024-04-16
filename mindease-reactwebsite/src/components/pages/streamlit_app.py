import streamlit as st
import requests

def fetch_data():
    response = requests.get('https://jsonplaceholder.typicode.com/posts/1')
    return response.json()

# Set CORS headers
@st.cache(allow_output_mutation=True)
def set_cors_headers():
    st.experimental_set_query_params(**{"origin": "*"})

def main():
    set_cors_headers()
    st.title('Streamlit Example')
    st.write('This is a Streamlit app.')

    data = fetch_data()
    st.write('Data from external API:', data)

if __name__ == '__main__':
    main()
