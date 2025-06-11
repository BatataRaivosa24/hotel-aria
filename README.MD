# Projeto hotelaria

Nesse projeto, objetivo é criar um sistema de gestão de hotel, utilizando tecnologias como o framework Django, HTML, CSS. 

## Como utilizar :

1. ***Criação do ambiente virtual***
    
    Como o repositório esta clonado ou baixado através do github, a venv está geralmente no `.gitignore`,  ou seja, os repositórios costumam a ignorar a pasta do ambiente virtual por alguns motivos como: 
    
    - Tamanho do arquivo;
    - Arquivos específicos do sistema operacional e do caminho onde foram criadas;
    - Não ser portáveis entre diferentes máquinas/sistemas;
    - Facilidade na reconstrução do repositório a partir do `requirements.txt` ou `pyproject.toml`.

    Se você não conseguir acessar a venv baixada do projeto,exclua e crie a novamente, então para poder cria-lo novamente, abra o terminal (comando:`ctrl+""`) e digite a seguinte linha de código, logo após acesse o ambiente virtual:
    
    ```bash
    python -m venv venv  #Criando o ambiente 
    
    .\venv\Scripts\Activate.ps1 #Acessando o ambiente virtual
    ```
    
    *Para poder utilizar o framework é necessário estar dentro do ambiente virtual*
    
    Caso você queira clonar o repositório no GitHub via terminal, utilize a seguinte linha de código:
    
    ```bash
    git clone https://github.com/usuario/repositorio.git
    
    cd repositorio
    ```
    

1. ***Instalação do Django***
    
    O Django pode ser instalado facilmente através do comando “**`pip`"** dentro do seu ambiente virtual. Além disso instalar uma biblioteca que o código necessita para seus funcionamento correto: 
    
    No terminal, certifique-se de que seu ambiente virtual esteja ativo e execute o seguinte comando:
    
    ```bash
    pip install Django
    pip install pillow
    ```
    

Acesse a pasta de projeto utilizando do seguinte comando:

```bash
cd hotelaria
```

Observe abaixo a seguinte estrutura da projeto:

```markdown
📁 HOTELARIA/
├── 📁 hotelaria/
│   ├── 📁 hotel/
│   ├── 📁 hotelaria/
│   ├── 📁 media\css/
│   ├── 📁 static/
│   ├── 📁 templates/
│   ├── 📄 db.sqlite3
│   └── 📄 manage.py
├── 📁 venv/
```

Para rodar o site, no terminal digite o seguinte código:

```powershell
python manage.py runserver
```

Você precisa acessar o site com algum destes usuários, o gerente possui todas as funcionalidades sendo o mais recomendado para analisar o projeto:

## 👥 Usuários do Sistema

| Cargo | Usuário | Senha |
| --- | --- | --- |
| Gerente | Heloisa | helo1604 |
| Funcionário | Daniel | martinsdan |
| Funcionário | Ana | anal2606 |
| Funcionário | Marcos | marcos123 |
| Administrador | Admin | admin123 |
