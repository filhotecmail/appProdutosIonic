angular.module('starter.controllers', [])

  .controller('ProdutoController', function ($scope, $ionicModal) {

    $scope.produtos = [{
        titulo: 'Livro de Ionic',
        valor: 50.99,
        publicar: true
      },
      {
        titulo: 'Livro de Nodejs',
        valor: 75.00,
        publicar: true
      },
      {
        titulo: 'Livro de CSS3',
        valor: 100,
        publicar: true
      },
      {
        titulo: 'Aprenda html em 5 dias',
        valor: 30,
        publicar: true
      },
      {
        titulo: 'Conhecendo o javascript na prática',
        valor: 69.99,
        publicar: false
      },

    ];

    $ionicModal.fromTemplateUrl('templates/adicionar.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.abreAdicionar = function () {
      $scope.editando = false;
      $scope.produto.titulo = "";
      $scope.produto.valor = "";
      $scope.produto.publicar = false;
      $scope.modal.show();
    }

    $scope.addProduto = function (produto) {
      $scope.produtos.push({
        titulo: produto.titulo,
        valor: produto.valor,
        publicar: produto.publicar
      });

      produto.titulo = "";
      produto.valor = "";
      produto.publicar = false;
      $scope.modal.hide();
    }

    $scope.produto = {};
    $scope.editando = false;
    var auxProdutoEditar;

    $scope.editarProduto = function (produtoEditar) {
      $scope.editando = true;
      $scope.produto.titulo = produtoEditar.titulo;
      $scope.produto.valor = produtoEditar.valor;
      $scope.produto.publicar = produtoEditar.publicar;
      auxProdutoEditar = produtoEditar;
      $scope.modal.show();
    };

    $scope.salvarProduto = function (produto) {
      auxProdutoEditar.titulo = produto.titulo;
      auxProdutoEditar.valor = produto.valor;
      auxProdutoEditar.publicar = produto.publicar;
      $scope.modal.hide();
    };

    $scope.deletarProduto = function(produto){
      for(var index in $scope.produtos){
        var aux = $scope.produtos[index];
        if(produto === aux){
          $scope.produtos.splice(index, 1);
        }
      }
    };

    $scope.deletando = false;

    

  });
