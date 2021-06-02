import uuid
import datetime
import pytz
from dateutil import tz

from app.main import db
from app.main.model.item import Items
from app.main.model.categorias import Categorias
from app.main.model.areas import Areas

STGO = tz.gettz('America/Santiago')
UTC = pytz.timezone("UTC")


  # user, item, accion, cant
    # 1 3 1 10
    # 2 3 1 3
    # 1 3 2 2

    # hacer controller y service 
    
def tabla_retirar():
    tabla = db.session.query(Items,Categorias,Areas).select_from(Items).join(Categorias).join(Areas).all()
    ans = []
    for elem in tabla:
        myItem = elem[0]
        myCategoria = elem[1]
        myArea = elem[2]
        
        item_timestamp = UTC.localize(myItem.timestamp)

        aux = {
            "id": myItem.id,
            "codigo": myItem.codigo,
            "nombre": myItem.nombre,
            "area": myArea.nombre,
            "categoria": myCategoria.nombre,
            "id_categoria": myCategoria.id,
            "cantidad": myItem.cantidad,
            "unidad_medida": myItem.unidad_medida,
            "critico": myItem.critico,
            "timestamp": item_timestamp.astimezone(tz=STGO).strftime("%d-%m-%Y %H:%M")
        }
        ans.append(aux)
    return ans, 201