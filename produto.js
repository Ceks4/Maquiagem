const produtos = [
  {
    nome: "Batom Matte",
    categoria: "Lábios",
    preco: 29.90,
    imagem: "https://mercadomake.com.br/wp-content/uploads/2024/07/V-3254_batom-liquido-matte-perfect-kiss-vivai-kit.jpg"
  },
  {
    nome: "Base Líquida Invisível",
    categoria: "Rosto",
    preco: 59.90,
    imagem: "https://http2.mlstatic.com/D_Q_NP_987223-MLA84835508781_052025-O.webp"
  },
  {
    nome: "Paleta de Sombras",
    categoria: "Olhos",
    preco: 89.90,
    imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRjsZXSAbgkOMHhpNb7h_3Qnf4xepELFO5xBxHt3PGkB6YuyY_cnCNIiiEyion6uLRnTmFCuH62k7G35iAfxYy3uUT7dtqjkgSAR6UMXzjacb9_2A9Ouxg_Ww&usqp=CAc"
  },
  {
    nome: "Iluminador Perolado",
    categoria: "Rosto",
    preco: 42.50,
    imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQfW64b1RG3wCidS3AautvzqAjUwaThYGgplM8OrZGTifrSMWzKTGLGSUQ7p-9ZzyOZAuitE33oUK6THu6Et5DQk-O-lITKKHeloBcL3_7epFlw6Eh6T9P8&usqp=CAcr"
  },
  {
    nome: "Máscara de Cílios",
    categoria: "Olhos",
    preco: 39.90,
    imagem: "https://images.tcdn.com.br/img/img_prod/826475/mascara_para_cilios_efeito_glamour_5g_dalla_417_1_be653a64bece973a256cb02b8e3a67b2.jpg"
  },
  {
    nome: "Pó Compacto",
    categoria: "Rosto",
    preco: 34.90,
    imagem: "https://cdn.awsli.com.br/1641/1641981/produto/218715748/po_compacto_matte_a_prova_d_agua_box_01_cor_200_a_205_max_love_kit_06_unid_virtu-fjqn5zx3h1.jpg"
  }
];

const container = document.getElementById("produtos");
const buscaInput = document.getElementById("busca");

function renderProdutos(lista) {
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<p class=\"nenhum-produto\">Nenhum produto encontrado. Tente outra palavra-chave.</p>";
    return;
  }

  lista.forEach(produto => {
    container.innerHTML += `
      <article class="card-produto">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>${produto.categoria}</p>
        <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
        <button class="botao">Comprar</button>
      </article>
    `;
  });
}

renderProdutos(produtos);

buscaInput.addEventListener("input", () => {
  const termo = buscaInput.value.toLowerCase().trim();
  const filtrados = produtos.filter(produto => {
    return (
      produto.nome.toLowerCase().includes(termo) ||
      produto.categoria.toLowerCase().includes(termo)
    );
  });
  renderProdutos(filtrados);
});