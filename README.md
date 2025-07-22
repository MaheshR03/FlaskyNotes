# 📝 FlaskyNotes

A modern, elegant note-taking web application built with Flask. FlaskyNotes offers a clean, intuitive interface for creating, managing, and organizing your notes with a beautiful glassmorphism design.

## 🌐 Live Demo

**Try FlaskyNotes now:** [https://web-production-29616.up.railway.app/](https://web-production-29616.up.railway.app/)

![FlaskyNotes Preview](image.png)

## ✨ Features

- **🔐 User Authentication** - Secure login and registration system
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices
- **🎨 Modern UI** - Beautiful glassmorphism design with smooth animations
- **⚡ Real-time Operations** - Add and delete notes instantly
- **🌈 Blue Theme** - Elegant blue gradient color scheme
- **⌨️ Keyboard Shortcuts** - Press Enter to submit notes, Shift+Enter for new lines
- **💾 Persistent Storage** - SQLite database for reliable data storage
- **🚀 Production Ready** - Configured for easy deployment

## 🛠️ Tech Stack

- **Backend:** Flask (Python)
- **Database:** SQLite / PostgreSQL
- **Authentication:** Flask-Login
- **ORM:** SQLAlchemy
- **Frontend:** HTML5, CSS3, JavaScript
- **Styling:** Bootstrap 4 + Custom CSS
- **Deployment:** Gunicorn, Docker-ready

## 🚀 Quick Start

### Prerequisites

- Python 3.7+
- pip (Python package manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MaheshR03/FlaskyNotes.git
   cd FlaskyNotes
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application:**
   ```bash
   python main.py
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5000
   ```

## 🌐 Deployment

FlaskyNotes is production-ready and can be deployed on various platforms:

- **Railway** (Recommended - Free tier available)
- **Heroku** 
- **Render**
- **PythonAnywhere**

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 📁 Project Structure

```
FlaskyNotes/
├── static/
│   ├── style.css          # Custom styling with glassmorphism effects
│   └── index.js           # Client-side JavaScript functionality
├── templates/
│   ├── base.html          # Base template
│   ├── home.html          # Main notes interface
│   ├── login.html         # Login page
│   └── sign-up.html       # Registration page
├── __init__.py            # Flask app factory
├── main.py                # Application entry point
├── models.py              # Database models
├── views.py               # Main routes and logic
├── auth.py                # Authentication routes
├── requirements.txt       # Python dependencies
├── Procfile              # Deployment configuration
└── README.md             # Project documentation
```

## 🎯 Usage

1. **Register** a new account or **login** with existing credentials
2. **Add notes** by typing in the text area and pressing Enter
3. **Delete notes** by clicking the red × button
4. **Use keyboard shortcuts** for faster note-taking
5. **Enjoy** the smooth, responsive interface

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mahesh R**
- GitHub: [@MaheshR03](https://github.com/MaheshR03)

## 🙏 Acknowledgments

- Flask documentation and community
- Bootstrap for responsive components
- Font Awesome for icons
- The open-source community for inspiration

---

⭐ Star this repository if you found it helpful!