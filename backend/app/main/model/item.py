from .. import db
from datetime import datetime
from ..config import key

class Items(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    codigo = db.Column(db.String(80),unique=True,nullable=True)
    nombre = db.Column(db.String(80), nullable=False)
    unidad_medida = db.Column(db.String(80), nullable=False)
    id_categoria = db.Column(db.Integer, db.ForeignKey('categorias.id'))
    critico = db.Column(db.Integer, nullable=False)
    cantidad = db.Column(db.Integer, nullable=False)
    timestamp = db.Column(db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)
    # movimientos = db.relationship('Movimientos', backref='movimientos')

    def __repr__(self):
        return "<Item '{}'>".format(self.codigo)