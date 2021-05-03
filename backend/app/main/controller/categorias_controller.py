from flask import request
from flask_restplus import Resource

from ..service.categorias_service import lista_link_categorias
from ..util.dto import CategoriasDto

api = CategoriasDto.api
_categoria = CategoriasDto.categoria

@api.route('/<id>')
@api.param('id', 'Area con categoria')
@api.response(404, 'categoria not found.')
class Categorias(Resource):
    @api.doc('Lista de todas las categorias')
    # @api.marshal_with(_categoria)
    def get(self, id):
        print(id)
        categoria = lista_link_categorias(id)
        if not categoria:
            api.abort(404)
        else:
            return categoria