from .. import db
from datetime import datetime
from ..config import key

class Categorias(db.Model):
    __tablename__ = 'categorias'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(80), unique=True, nullable=False)
    id_area = db.Column(db.Integer, db.ForeignKey('areas.id'))
    items = db.relationship('Items', backref='categoria')
    timestamp = db.Column(db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)




