# Playwright - SauceDemo

Projeto de automação de testes utilizando Playwright e TypeScript para validar a funcionalidade de login da aplicação SauceDemo.

O objetivo do projeto é demonstrar boas práticas de automação, organização de testes e documentação de cenários utilizando Gherkin.
Embora o SauceDemo utilize credenciais públicas de demonstração, o projeto utiliza variáveis de ambiente para seguir boas práticas adotadas em aplicações reais, evitando que credenciais sensíveis sejam versionadas.

| ID     | Cenário                   | Status         |
| ------ | ------------------------- | -------------- |
| LG-001 | Login com sucesso         | ✅ Automatizado |
| LG-002 | Usuário inválido          | ✅ Automatizado |
| LG-003 | Senha inválida            | ✅ Automatizado |
| LG-004 | Usuário e senha inválidos | ✅ Automatizado |
| LG-005 | Usuário vazio             | ✅ Automatizado |
| LG-006 | Senha vazia               | ✅ Automatizado |
| LG-007 | Ambos vazios              | ✅ Automatizado |
| LG-008 | Usuário bloqueado         | ✅ Automatizado |


Cenários de Teste - Login 

## Funcionalidade: Login de Usuário

Como um usuário do sistema  
Quero realizar o login na aplicação  
Para acessar a lista de produtos

---

### Cenário: Login com credenciais válidas

```gherkin
Scenario: Realizar login com sucesso
    Given que o usuário está na página de login
    When informar um usuário válido
    And informar uma senha válida
    And clicar no botão "Login"
    Then deverá ser redirecionado para a página de produtos
```

---

### Cenário: Login com usuário inválido

```gherkin
Scenario: Tentar realizar login com usuário inválido
    Given que o usuário está na página de login
    When informar um usuário inválido
    And informar uma senha válida
    And clicar no botão "Login"
    Then deverá visualizar a mensagem de erro de credenciais inválidas
```

---

### Cenário: Login com senha inválida

```gherkin
Scenario: Tentar realizar login com senha inválida
    Given que o usuário está na página de login
    When informar um usuário válido
    And informar uma senha inválida
    And clicar no botão "Login"
    Then deverá visualizar a mensagem de erro de credenciais inválidas
```

---

### Cenário: Login com usuário e senha inválidos 

```gherkin
Scenario: Tentar realizar login com credenciais inválidas
    Given que o usuário está na página de login
    When informar um usuário inválido
    And informar uma senha inválida
    And clicar no botão "Login"
    Then deverá visualizar a mensagem de erro de credenciais inválidas
```

---

### Cenário: Login sem informar o usuário

```gherkin
Scenario: Login sem preencher o usuário
    Given que o usuário está na página de login
    When deixar o campo usuário vazio
    And informar uma senha válida
    And clicar no botão "Login"
    Then deverá visualizar a mensagem "Username is required"
```

---

### Cenário: Login sem informar a senha

```gherkin
Scenario: Login sem preencher a senha
    Given que o usuário está na página de login
    When informar um usuário válido
    And deixar o campo senha vazio
    And clicar no botão "Login"
    Then deverá visualizar a mensagem "Password is required"
```

---

### Cenário: Login sem preencher usuário e senha

```gherkin
Scenario: Login sem preencher as credenciais
    Given que o usuário está na página de login
    When deixar os campos usuário e senha vazios
    And clicar no botão "Login"
    Then deverá visualizar a mensagem "Username is required"
```

---

### Cenário: Login com usuário bloqueado

```gherkin
Scenario: Login com usuário bloqueado
    Given que o usuário está na página de login
    When informar o usuário bloqueado
    And informar uma senha válida
    And clicar no botão "Login"
    Then deverá visualizar a mensagem informando que o usuário está bloqueado
```
