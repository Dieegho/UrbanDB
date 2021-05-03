from flask import request
from flask_restplus import Resource

from ..service.areas_service import *
from ..util.dto import AreasDto

api = AreasDto.api
_area = AreasDto.area

@api.route('/')
class Areas(Resource):
    @api.doc('Lista de todos las areas')
    @api.marshal_list_with(_area, envelope='data')
    def get(self):
        return lista_areas()

#    @api.response(201, 'Area insertado')
#   @api.doc('Crea una nueva area item')
#    @api.expect(_area, validate=True)
#    def post(self):
#        data = request.json
        # return ingresar_items(data=data)

