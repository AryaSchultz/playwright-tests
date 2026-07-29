Feature: Inventory

  Como um usuário autenticado
  Quero visualizar e interagir com os produtos
  Para realizar uma compra

  Background:
    Given que estou logado no SauceDemo

  Scenario: Exibir todos os produtos disponíveis
    When acesso a página de produtos
    Then devo visualizar 6 produtos cadastrados

  Scenario: Exibir nome, descrição e preço dos produtos
    When acesso a página de produtos
    Then cada produto deve possuir um nome
    And cada produto deve possuir uma descrição
    And cada produto deve possuir um preço

  Scenario: Exibir imagem de todos os produtos
    When acesso a página de produtos
    Then cada produto deve exibir uma imagem

  Scenario: Adicionar um produto ao carrinho
    When adiciono o produto "Sauce Labs Backpack" ao carrinho
    Then o botão do produto deve mudar para "Remove"
    And o carrinho deve exibir o contador "1"

  Scenario: Adicionar múltiplos produtos ao carrinho
    When adiciono o produto "Sauce Labs Backpack" ao carrinho
    And adiciono o produto "Sauce Labs Bike Light" ao carrinho
    Then o carrinho deve exibir o contador "2"

  Scenario: Remover um produto do carrinho
    Given que o produto "Sauce Labs Backpack" foi adicionado ao carrinho
    When removo o produto do carrinho
    Then o botão do produto deve mudar para "Add to cart"
    And o carrinho não deve exibir contador

  Scenario: Remover um produto entre vários adicionados
    Given que existem 2 produtos no carrinho
    When removo um produto
    Then o carrinho deve exibir o contador "1"