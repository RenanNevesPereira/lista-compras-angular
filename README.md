# 🛒 Lista de Compras (Angular)

Este projeto é uma aplicação simples de Lista de Compras feita com Angular. Permite adicionar itens, marcar como comprados e limpar a lista.

## 📸 Demonstração

![Demo](https://via.placeholder.com/600x300?text=Demo+Lista+de+Compras)

## 🚀 Tecnologias Utilizadas

- [Angular](https://angular.io/)
- TypeScript
- HTML / SCSS
- FormsModule / CommonModule

## 📂 Estrutura do Projeto

```bash
src/
├── app/
│   ├── itemlista.ts            # Classe modelo do item
│   ├── app-lista-compras.component.ts
│   ├── app-lista-compras.component.html
│   └── app-lista-compras.component.scss
├── assets/
├── index.html
└── main.ts
```

## ✅ Funcionalidades

- ✅ Adicionar item à lista
- ✅ Marcar item como comprado (checkbox)
- ✅ Riscar visualmente o item comprado
- ✅ Limpar todos os itens da lista

## 💻 Código Exemplo

### Modelo do item (`itemlista.ts`)

```ts
export class ItemLista {
  id?: number;
  nome?: string;
  comprado: boolean = false;
}
```

### Lógica principal (`app-lista-compras.component.ts`)

```ts
export class ListaComprasComponent {
  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem() {
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;
    this.lista.push(itemLista);
    this.item = '';
  }

  riscarItem(itemLista: ItemLista) {
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista() {
    this.lista = [];
  }
}
```

### HTML (template)

```html
<form #frm="ngForm" class="add-item-form" (ngSubmit)="adicionarItem()">
  <input type="text" [(ngModel)]="item" name="item" placeholder="Digite o nome do item" />
  <button type="submit">Adicionar</button>
  <button type="button" (click)="limparLista()">Limpar Lista</button>
</form>
```

## 📦 Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/lista-compras-angular.git
cd lista-compras-angular
```

2. Instale as dependências:

```bash
npm install
```

3. Execute a aplicação:

```bash
ng serve
```

Acesse `http://localhost:4200` no navegador.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Feito com ❤️ usando Angular.