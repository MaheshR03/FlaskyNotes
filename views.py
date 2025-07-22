from flask import Blueprint, render_template, request, flash, jsonify, make_response, redirect, url_for
from flask_login import login_required, current_user
from models import Note
from __init__ import db
import json

views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
@login_required
def home():
    if request.method == 'POST': 
        note = request.form.get('note')#Gets the note from the HTML 

        if len(note) < 1:
            flash('Note is too short!', category='error') 
        else:
            new_note = Note(data=note, user_id=current_user.id)  #providing the schema for the note 
            db.session.add(new_note) #adding the note to the database 
            db.session.commit()
            flash('Note added!', category='success')
        
        # Redirect to prevent form resubmission on refresh
        return redirect(url_for('views.home'))

    response = make_response(render_template('home.html', user=current_user))
    # Prevent caching to ensure fresh data
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response


@views.route('/delete-note', methods=['POST'])
@login_required
def delete_note():  
    try:
        note_data = json.loads(request.data) # this function expects a JSON from the INDEX.js file 
        noteId = note_data['noteId']
        note = Note.query.get(noteId)
        
        if note:
            if note.user_id == current_user.id:
                db.session.delete(note)
                db.session.commit()
                flash('Note deleted!', category='success')
                return jsonify({'success': True})
            else:
                flash('You can only delete your own notes.', category='error')
                return jsonify({'success': False, 'error': 'Unauthorized'})
        else:
            flash('Note not found.', category='error')
            return jsonify({'success': False, 'error': 'Note not found'})
    
    except Exception as e:
        flash('Failed to delete note. Please try again.', category='error')
        return jsonify({'success': False, 'error': str(e)})