# Ask The Code - Backend

To run the backend, you need to:

1. Setup a virtual environment (or use the one you have already created for the processing):

    ```bash
    cd backend
    python -m venv ./.venv
    cd ./.venv/Scripts
    ./activate
    cd ../..
    ```

2. Install the dependencies using `pip install -r requirements.txt`
3. Setup the parameters in api.py (do not forget to setup Azure OpenAI parameters at the beginign of the file)
4. Run the backend using `python api.py` or using `F5` in Visual Studio Code
