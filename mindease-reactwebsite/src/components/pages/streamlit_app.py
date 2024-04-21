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
    st.write('T E S T I N G')

    data = fetch_data()
    st.write('Data from external API:', data)
    
    # Create a button in Streamlit
    if st.button('Return to React App'):
        # Redirect to the React app URL when the button is clicked
        st.markdown('<a href="http://localhost:3000">Click here to return to React App</a>', unsafe_allow_html=True)

if __name__ == '__main__':
    main()
