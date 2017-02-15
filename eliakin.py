import unittest


class Eliakin(object):
    
    def __init__(self, nome, idade):
        self._nome = nome
        self._idade = idade
        
    @property
    def nome(self):
        return self._nome
    
    @property
    def idade(self):
        return self._idade

    def falar(self):
        print('oi')


if __name__=='__main__':
    eliakin = Eliakin('Eliakin Costa de Almeida', 23)
    eliakin.falar()
