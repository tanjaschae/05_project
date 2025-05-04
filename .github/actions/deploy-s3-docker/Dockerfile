FROM python:3

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY deployment.py .

CMD ["python", "deployment.py"]