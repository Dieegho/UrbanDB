from flask import request
from flask_restplus import Resource

from ..service.item_service import lista_items, ingresar_items, lista_link_items, tabla_retirar, retirar_item, tabla_todo, ingresar_nuevo_item
from ..util.dto import ItemDto

api = ItemDto.api
_item = ItemDto.item

@api.route('/')
class ItemsList(Resource):
    @api.doc('Lista de todos los items')
    # @api.marshal_list_with(_item, envelope='data')
    def get(self):
        return lista_items()

    @api.response(201, 'Item insertado')
    @api.doc('Crea un nuevo item')
    # @api.expect(_item, validate=True)
    def post(self):
        data = request.json
        return ingresar_items(data=data)

@api.route('/<id>')
@api.param('id', 'The categoria identifier for an item')
@api.response(404, 'Item not found.')
class ItemsByCategory(Resource):
    @api.doc('Obtiene todos los items de una categoria')
    # @api.marshal_with(_item)
    def get(self, id):
        item = lista_link_items(id)
        if not item:
            api.abort(404)
        else:
            return item

@api.route('/todo')
class ItemsListRetirar(Resource):
    @api.doc('tabla todos los datos de items')
    # @api.marshal_list_with(_item, envelope='data')
    def get(self):
        return tabla_retirar()

    @api.response(201, 'Item retirado')
    @api.doc('Retira un item')
    # @api.expect(_item, validate=True)
    def post(self):
        data = request.json
        return retirar_item(data=data)


@api.route('/todo/<id>')
@api.param('id', 'The categoria identifier for an item')
@api.response(404, 'Item not found.')
class Items(Resource):
    @api.doc('Obtiene todo de los items')
    # @api.marshal_with(_item)
    def get(self, id):
        item = tabla_todo(id)
        if not item:
            api.abort(404)
        else:
            return item

@api.route('/pistola/<id>')
@api.param('id', 'The categoria identifier for an item')
@api.response(404, 'Item not found.')
class Items(Resource):
    @api.doc('Obtiene todo de los items')
    # @api.marshal_with(_item)
    def get(self, id):
        item = data_pistola(id)
        if not item:
            api.abort(404)
        else:
            return item

@api.route('/nuevo_item')
class ItemsListRetirar(Resource):
    @api.response(201, 'Item nuevo')
    @api.doc('Ingresa un nuevo item')
    # @api.expect(_item, validate=True)
    def post(self):
        data = request.json
        return ingresar_nuevo_item(data=data)