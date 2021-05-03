import uuid
import datetime

from app.main import db
from app.main.model.areas import Areas

def lista_areas():
    areas = Areas.query.order_by(Areas.id).all()
    print(areas)
    # ans = []
    # for elem in areas:
    #     # print(elem)
    #     # myArea = elem[0]
    #     aux = {
    #         "id": elem.id,
    #         "nombre": elem.nombre,
    #     }
    #     ans.append(aux)
    # print(ans)
    return areas, 201