# FlaskyNotes Deployment Guide

## Deployment Options

### 1. Railway (Recommended - Free & Easy)

1. **Prepare your project:**
   - Ensure all files are ready (they are!)
   - Your project has: `main.py`, `Procfile`, `requirements.txt`

2. **Deploy to Railway:**
   - Go to [railway.app](https://railway.app)
   - Click "Start a New Project"
   - Choose "Deploy from GitHub repo"
   - Connect your GitHub account and select this repository
   - Railway will automatically detect it's a Flask app
   - Set environment variables:
     - `SECRET_KEY`: Generate a secure secret key
   - Your app will be deployed automatically!

### 2. Heroku

1. **Install Heroku CLI:**
   - Download from [heroku.com](https://devcenter.heroku.com/articles/heroku-cli)

2. **Deploy:**
   ```bash
   # Login to Heroku
   heroku login
   
   # Create a new app
   heroku create your-app-name
   
   # Set environment variables
   heroku config:set SECRET_KEY="your-secret-key-here"
   
   # Add PostgreSQL database
   heroku addons:create heroku-postgresql:mini
   
   # Deploy
   git add .
   git commit -m "Deploy FlaskyNotes"
   git push heroku main
   ```

### 3. Render

1. Go to [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn main:app`
   - **Environment Variables:**
     - `SECRET_KEY`: Your secret key
5. Deploy!

### 4. PythonAnywhere (Free Option)

1. Sign up at [pythonanywhere.com](https://pythonanywhere.com)
2. Upload your files to the web app directory
3. Configure the WSGI file to point to your `main:app`
4. Your app will be live!

## Environment Variables Needed

- `SECRET_KEY`: A secure secret key for Flask sessions
- `DATABASE_URL`: Automatically provided by hosting platforms with PostgreSQL

## Production Features Included

✅ Gunicorn WSGI server for production  
✅ PostgreSQL support for scalable database  
✅ Environment-based configuration  
✅ Static file serving  
✅ Error handling  
✅ Security best practices  

## Local Development

To run locally:
```bash
python main.py
```

The app will run on `http://localhost:5000`
