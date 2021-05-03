from .. import db
from datetime import datetime
from ..config import key

class Areas(db.Model):
    __tablename__ = 'areas'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(80), unique=True, nullable=False)
    categorias = db.relationship('Categorias', backref='area')
    timestamp = db.Column(db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)