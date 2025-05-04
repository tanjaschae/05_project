FROM python:3.11-slim

RUN pwd
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY main.py .

ENTRYPOINT ["python", "main.py"]
