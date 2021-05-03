from flask_restplus import Namespace, fields


class UserDto:
    api = Namespace('user', description='user related operations')
    user = api.model('user', {
        'id': fields.Integer(required=True, description='user id'),
        'email': fields.String(required=True, description='user email address'),
        'username': fields.String(required=True, description='user username'),
        'password': fields.String(required=True, description='user password'),
        'public_id': fields.String(description='user Identifier')
    })


class AuthDto:
    api = Namespace('auth', description='authentication related operations')
    user_auth = api.model('auth_details', {
        'email': fields.String(required=True, description='The email address'),
        'password': fields.String(required=True, description='The user password '),
    })

class ItemDto:
    api = Namespace('item', description='item functions')
    item = api.model('item', {
        'id': fields.Integer(required=True, description='item id'),
        'codigo':fields.String(required=True,description='item codigo'),
        'nombre':fields.String(required=True,description='item nombre'),
        'unidad_medida':fields.String(required=True,description='item unidad de medida'),
        'critico':fields.Integer(required=True,description='item critico'),
        'cantidad':fields.Integer(required=True,description='item cantidad'),
        'id_categoria':fields.Integer(required=True,description='item id_categoria'),
    })

class AreasDto:
    api = Namespace('area', description='areas functions')
    area = api.model('area', {
        'id': fields.Integer(required=True, description='area id'),
        'nombre':fields.String(required=True,description='area nombre'),
    })
    
class CategoriasDto:
    api = Namespace('categoria', description='categoria functions')
    categoria = api.model('categoria', {
        'id': fields.Integer(required=True, description='categoria id'),
        'nombre':fields.String(required=True,description='categoria nombre'),
        'id_area':fields.Integer(required=True,description='categoria id_area'),
    })