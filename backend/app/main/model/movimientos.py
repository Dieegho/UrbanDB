from .. import db
from datetime import datetime
from ..config import key

class Movimientos(db.Model):
    __tablename__ = 'movimientos'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    # id_user = db.Column(db.Integer, db.ForeignKey('user.id'))
    id_item = db.Column(db.Integer, db.ForeignKey('items.id'))
    accion = db.Column(db.Integer) # 1 para ingresar, 2 para retirar, 3..., 4...
    cantidad = db.Column(db.Integer)
    timestamp = db.Column(db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)

    # user, item, accion, cant
    # 1 3 1 10
    # 2 3 1 3
    # 1 3 2 2

    # hacer controller y service