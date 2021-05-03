import uuid
import datetime

from app.main import db
from app.main.model.categorias import Categorias
from app.main.model.areas import Areas

def lista_link_categorias(id):
    categorias = db.session.query(Categorias, Areas).filter_by(id_area=id).join(Areas).order_by(Areas.nombre).all()
    ans = []
    for elem in categorias:
        # print(elem)
        myCategoria = elem[0]
        myArea = elem[1]
        aux = {
            "id": myCategoria.id,
            "nombre": myCategoria.nombre,
            "area": myArea.nombre,
            "id_area": myArea.id
        }
        ans.append(aux)
    print(ans)
    return ans, 201