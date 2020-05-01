# Sass: Syntatically Awesome Style Sheet

Há cerca de um ano saí do desenvolvimento desktop e entrei no mercado de trabalho seguindo outro paradigma, o desenvolvimento web. Embora a parte de back-end não sofra tanto com a migração de padrões e linguagem - devido a lógica de programação - em relação ao front-end, tive muita dificuldade para me adaptar e talvez essa fosse minha maior fragilidade no inicio. Com a prática e a compreensão de todos, obtive alguma evolução. Utilizar os pré-processadores otimizou muito no desenvolvimento visual das aplicações, e justamente por isso quis compartilhar com quem quisesse entender um pouco mais sobre essa ferramenta.

Caso queira entrar em contato com os arquivos do projeto da capa desse artigo, acesse o meu repositório no [GitHub](https://github.com/MrBarreto/sass-study).

## Intro
O [Sass (Syntactically Awesome Style Sheets)](https://sass-lang.com/) é um dos pré-processadores CSS mais populares que já existiram. Como dito no seu site, o Sass é basicamente um “CSS com superpoderes”.

A ferramenta teve suas primeiras aparições em 2007, foi arquitetada pelo programador americano [Hampton Catlin](https://en.wikipedia.org/wiki/Hampton_Catlin) e desenvolvida por Natalie Weizenbaum e Chris Eppstein.

Os pré-processadores vieram com a promessa de tornar o desenvolvimento e manutenção do CSS mais fácil e dinâmico que o de costume. Eles contam com variáveis, funções, mixins e diversas ferramentas que auxiliam na implementação dos arquivos .sass ou .scss, que são as duas linguagens disponíveis para a utilização do Sass.

## Ambiente
### [Ruby](https://rubyinstaller.org/downloads/)
Para utilizar o Sass precisamos ter o Ruby no nosso ambiente, pois é a partir dele que vamos instalar e executar o pré-processador. Aqui está uma maneira de adquiri-lo a partir do seu SO:

#### Windows:
Instale o Ruby conforme a sua versão de Windows. Ele é necessário em um processo fundamental na implementação de arquivos Sass.

É importante selecionar a opção “Add Ruby executables to your PATH”, para que você não tenha que adicionar o executável do Ruby nas suas variáveis de ambiente manualmente (caso esqueça de selecionar, adicione-a posteriormente).

Caso queira se certificar se o Ruby foi instalado corretamente, abra o prompt e insira o seguinte comando:

```ruby -v```

Se tudo estiver ocorrendo corretamente, será apresentada uma mensagem semelhante a esta:

```ruby 2.5.5p157 (2019-03-15 revision 67269) [x64-mingw32]```

#### Linux:
Para executar a instalação, basta abrir o terminal e utilizar a seguinte linha de comando:

```sudo apt-get install ruby```

Obs: Para validar se a instalação ocorreu corretamente siga o mesmo processo utilizado no Windows (Com o comando: ruby -v);

#### Mac:
No Mac, o Ruby já vem instalado de fábrica. Para ver qual a versão você está utilizando abra o terminal e use o comando:

```ruby -v```

### Sass
The easy way (Recomendado e utilizado durante o processo)
Com o Ruby instalado, basta inserir a instrução abaixo para instalar o Sass em sua máquina:

Windows e Mac:

 ```gem install sass```

Linux:

```sudo gem install sass```

## The medium way
Nada impede de baixar as gems necessárias para utilizar o Sass do próprio [RubyGems](https://rubygems.org/) e move-las para a raiz da pasta de instalação do Ruby.

Abaixo, segue a lista das gems necessárias:
- sass;
- fssm;
- compass;
- chunky_png.

## The "what are you doing" way
Caso queira baixar do git o repositório Sass para poder utilizar o pré-processador, sinta-se à vontade: https://github.com/sass/sass.

## Funcionamento
Se você já houver criado um arquivo .sass ou .scss diretamente no mesmo diretório de desenvolvimento da sua página, sem executar mais nenhum passo, deve ter percebido que nada aconteceu, pois o estilo simplesmente não é aplicado no HTML. Não importa se você estiver aplicando o mesmo em componentes HTML, seletores, classes, IDs ou outros.

Mas não se preocupe, visto que esse comportamento é absolutamente normal.

## Processamento
Na verdade o arquivo do pré-processador não atua diretamente na estrutura da página. O único que realmente pode fazer isso é o CSS, sendo a única arquitetura de estilo que os navegadores são capazes de interpretar. Porém, mesmo as versões atuais do CSS não permitem a utilização de variáveis, classes com subpropriedades, pseudo propriedades e etc. Para isso existe uma compilação, onde o arquivo Sass passa para CSS.

[Arquivo .sass ou .scss] --> (Compilador) --> [Arquivo .css]

## Compilando
Passos necessários para compilar corretamente seu arquivo Sass:

- Abra o prompt ou terminal e navegue até o diretório onde o seu arquivo .sass ou .scss se encontra;
- Utilize a seguinte linha de código para efetuar a compilação:
   - ```sass [nomeDoSeuArquivo_S_CSS].scss:[nomeDoSeuArquivoCSS].css```
- Atualize e verifique sua página.
- Pronto! Agora você já deve estar com o estilo da sua página carregada.

Caso ela não tenha recebido o estilo esperado, você pode agir das seguintes maneiras:

- Verifique se está no diretório certo com o seu prompt ou terminal;
- Veja se salvou o arquivo Sass antes de aplicar o código de compilação;
- Verifique se o comando de compilação do Sass foi digitado corretamente.
- Mas calma que ainda não acabou!
- Dessa maneira você realizou uma compilação unitária, ou seja, a cada vez que modificar o seu arquivo Sass, terá que ir até o seu prompt ou terminal para aplicar esse código e recompilar um novo arquivo CSS. Ela é muito útil enquanto desejamos que a compilação ocorra apenas uma vez.

No entanto, enquanto estamos em desenvolvimento se torna improdutivo realizar esse procedimento a cada alteração. Por isso, existe outro comando voltado justamente para que o Sass fique em modo de “escuta”. Com esse comando, o Sass compilará novamente o arquivo do pré-processador para o arquivo de estilo a cada alteração.

O comando é muito semelhante, há somente uma pequena inclusão:

```
sass --watch estilos.scss:estilos.css
```

A partir desse momento, a cada atualização que o Sass realizar, um aviso será mostrado no seu prompt ou terminal:

```
>>> Sass is watching for changes. Press Ctrl-C to stop.
```

## It’s showtime!
Agora que já conseguimos gerar o CSS a partir do Sass, vamos partir para um pouco de conhecimento técnico da ferramenta. Para isso, serão expostos alguns exemplos:

### Variáveis:
As variáveis são extremamente úteis. Com elas podemos aplicar o mesmo valor em múltiplas partes do arquivo sem se preocupar em decorar paletas de cor, valores numéricos de espaçamento ou ter que buscar em milhares de partes do CSS onde mudar, caso ocorra alguma alteração.

Para usar variáveis, use o símbolo $ precedendo o nome da variável. Lembre-se de não usar espaço em nomes compostos. Após o nome utilize : (dois pontos) para separar o nome da variável do valor que ela guardará.

Exemplo:
```
$cor: #4d4d4d;
$nome_composto: #5d5d5d;
$cor-com-nome-composto: #4e4e4e;
$nomeComposto: #7d7d7d;
```

### Mixins:
Frequentemente temos que repetir um mesmo bloco CSS, o que aumenta o tamanho do nosso arquivo CSS e reduz a performance da folha de estilo. Como por exemplo nos casos em que estruturas estão em fase de teste para navegadores diferentes, os mixins se tornam muito vantajosos.

Para declarar um mixin, devemos utilizar a palavra reservada @mixin e em seu interior as demais estruturas que serão replicadas em outros locais.

Exemplo de criação do mixin:
```
$raio: 4px;

@mixin arredondado {
  -webkit-border-radius: $raio;
  -moz-border-radius: $raio;
  -ms-border-radius: $raio;
  -o-border-radius: $raio;
  border-radius: $raio;
}
```

Mixins podem receber parâmetros para trabalharem de acordo com os valores obtidos, da mesma forma como as funções da programação atuam.

Para receber parâmetros obrigatoriamente, não informe o valor após nomear a variável das mesmas. Os parâmetros opcionais já vêm com valores padrões. Exemplo:
```
$raio: Parâmetro obrigatório;

$sombra: Parâmetro opcional.

@mixin arredondado-sombreado($raio, $sombra: 0 2px 4px black) { 
    -webkit-box-shadow: $sombra; 
    -moz-box-shadow: $sombra; 
    -ms-box-shadow: $sombra; 
    -o-box-shadow: $sombra; 
    box-shadow: $sombra; 
    -webkit-border-radius: $raio; 
    -moz-border-radius: $raio; 
    -ms-border-radius: $raio; 
    -o-border-radius: $raio; 
    border-radius: $raio; 
}
```

Quando desejar incluir as estruturas no interior do mixin em outros locais devemos utilizar outra palavra reservada, o @include.

Exemplo de uso do mixin dentro do CSS:
```
.classe1{
    padding: 5px;
    font-size: 20px;
    @include borda-arredondada;
}

.classe2 button{
    color: #333;
    backgroundcolor: #fff;
    border: 1px solid #333;
    @include borda-arredondada;
}
```
As variáveis do Sass obedecem a um contexto, ou seja, sempre que elas forem declaradas dentro de um escopo, pertencerão somente a este escopo. Veja o exemplo abaixo, onde a variável $raio está dentro de um mixim, porém somente é utilizado em outro:

Arquivo Sass:
```
@mixin sombra-padrao {
  $raio: 0.3rem;
  $sombra: 0 2px 6.65px 0.35px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: $sombra;
  -moz-box-shadow: $sombra;
  -ms-box-shadow: $sombra;
  -o-box-shadow: $sombra;
  box-shadow: $sombra;
}

@mixin borda-arredondada {
  -webkit-border-radius: $raio;
  -moz-border-radius: $raio;
  -ms-border-radius: $raio;
  -o-border-radius: $raio;
  border-radius: $raio;
}
```
Exemplo de erro que o seu prompt ou terminal pode apresentar:
```
Error: Undefined variable.
   ╷
15 │   -webkit-border-radius: $raio;
   │                          ^^^^^
   ╵
  estilos.scss 15:26  borda-arredondada()
  estilos.scss 125:3  root stylesheet
```

### Aninhamento:
O aninhamento é muito útil para cenários em que utilizamos diversas classes ou seletores para aplicar o CSS em componentes do interior dessas classes. Veja o exemplo:
```
.footer-menu {
  font-size: 1.2rem;
}

.footer-menu-button {
  font-size: 1.4rem;
  border-radius: 4px;
  color: #333;
  border: 1px solid #333;
  transition: 0.5s;
}

.footer-menu button:hover {
  background-color: #333;
}

.footer-menu a {
  padding: 3px;
  text-transform: uppercase;
}

.footer-menu .logo {
  height: 30px;
  width: 30px;
  border-radius: 10px;
}
```

Esse trecho é um tanto quanto difícil de ser modificado. Caso o nome da classe mudasse de footer-menu para sub-menu, teríamos que alterar todas as demais classes dos componentes e de dentro do sub-mennu. Isso sem falar que teríamos que mudar todos os diferentes pontos do HTML que contivessem essas classes.

O aninhamento do Sass permite que essa alteração seja feita somente em dois pontos dentro da classe Sass e no HTML (agora temos mais facilidade em englobar os componentes, então o número dos mesmos com classes dentro de subclasses tende a diminuir). Com o Sass, o trecho de CSS acima ficaria da seguinte forma:
```
.footer-menu{
  font-size: 1.2rem;

  button{
    font-size: 1.4rem;
    border-radius: 4px;
    color:#333;
    border: 1px solid #333;
    transition: 0.5s;
    &:hover{
      background-color: #333;
    }
  }

  a{
    padding: 3px;
    text-transform: uppercase;
  }

  .logo{
    height: 30px;
    width: 30px;
    border-radius: 10px;
  }
}
```

### Imports:
Muitas vezes os arquivos CSS seguem algum padrão de implementação imposto pela equipe, onde os estilos ficam separados em pastas que ditam, por exemplo, qual a página que ele se refere ou sua responsabilidade dentro dela.

Quando queremos que o Sass considere esses arquivos, devemos importa-los. Para realizar a importação, usamos a palavra reservada @import com o nome ou diretório do arquivo, incluindo o tipo (.css). Podemos ocultar o tipo do arquivo, caso seja uma das duas linguagens padrões: .sass ou .scss.

Veja no exemplo:
```
@import 'base/reset.css';
@import 'base/page_standart.css';
@import 'header.sass';
@import 'layout/section1.sass';
@import 'layout/section2.scss';
@import 'layout/footer/menu';
```

Essa prática é vantajosa, pois podemos importar, usando links, apenas um arquivo dentro da página HTML, por exemplo, dado que as importações de todos os arquivos podem ficar em um único.

Embora você tenha a liberdade para colocar arquivos .css dentro dos arquivos Sass, isso não é uma boa prática, visto que conterá um import com a URL do arquivo no seu computador ou servidor. Apenas mude o tipo do arquivo de .css para .scss e, após a compilação, no lugar da URL, o Sass irá concatenar o CSS do arquivo externo com o arquivo atual.

### Placeholder:
Esta estrutura trabalha de forma semelhante ao mixin, mas possui focos diferentes. Enquanto o mixin pode gerar dinamicamente uma série de atributos para múltiplos seletores e utilizar parâmetros, o placeholder tem o objetivo de tornar os arquivos CSS mais performáticos a partir da junção de seletores para os mesmos atributos.

Diversas vezes acontecerá a repetição de blocos inteiros de atributos de estilo em classes diferentes. Observe o exemplo:
```
.class0{
  font-size: 1.2rem;
  margin: auto 10px;
  padding: 5px;
  color: gray;
}

.class1{
  font-size: 1.6rem;
  margin: auto 10px;
  padding: 5px;
  color: gray;
}
```

Vemos que tanto a .class0 quanto a .class1 têm atributos CSS em comum, com exceção do tamanho da fonte. Mesmo que um mixin seja utilizado para reduzir esse trecho do Sass, após a compilação, de igual modo esse trecho seria gerado. E é justamente para resolver esse problema que o placeholder existe. Ele aumenta o desempenho da sua folha de estilo, aplicando os atributos de maneira sequencial entre as classes e os demais seletores de estilização (componentes HTML, seletores, id e etc).

Para criar um placeholder utilizamos o sinal de porcentagem (%) precedendo o nome do placeholder, já para sua utilização precisamos de outra palavra reservada, o @extend seguido do mesmo símbolo utilizado na sua criação e o nome do placeholder.

Exemplo:
```
%standart{
  margin: auto 10px;
  padding: 5px;
  color: gray;
}

.class0{
  font-size: 1.2rem;
  @extend %standart;
}

.class1{
  font-size: 1.6rem;
  @extend %standart;
}
```

Em termos de otimização e desempenho, o resultado do arquivo após a compilação ficaria da seguinte forma:
```
.class1, .class0 {
  margin: auto 10px;
  padding: 5px;
  color: gray;
}

.class0 {
  font-size: 1.2rem;
}

.class1 {
  font-size: 1.6rem;
}
```

### Functions:
Parece mixin, tem cara de mixin, implementa que nem mixin mas não é mixin. Embora essas duas estruturas sejam muito semelhantes, as functions e os mixins têm objetivos diferentes.

Como dito anteriormente, os mixins retornam blocos inteiros de atributos CSS, já as functions são mais voltadas para retornarem valores, aplicar alguma lógica e retornarem algum valor processado. Veja abaixo uma função que incrementa o valor de uma variável em 50%:
```
@function increase-value($value){
    @return $value * 1.5;
}
```
Essas funções são úteis quando temos que trabalhar com diversos valores que já estão padronizados.

Exemplo:
```
$standart-padding: 10px;
$stantard-margin: 20rem;
$standart-height: 13vh;

.big-class{
  padding: increase-value($standart-padding);
  margin: increase-value($stantard-margin);
  height: increase-value($standart-height);
}
```
Como resultado teríamos um CSS compilado da seguinte forma:
```
.big-class {
  padding: 15px;
  margin: 30rem;
  height: 19.5vh;
}
```
Perceba que a unidade da variável é mantida intacta enquanto o valor sofre a alteração.

### Media Queries:
Esses são usados frequentemente quando uma aplicação tem o design responsivo, ou seja, se adequa conforme o device em que está sendo executado.

Geralmente essas estruturas de responsividade ficam no mesmo arquivo do componente sem o reajuste responsivo, porém em outra parte do CSS, o que acaba dificultando modificações. Por exemplo, alterar uma classe que possui variações em quatro dispositivos diferentes significam. na verdade, quatro alterações.

Com o Sass você pode fazer o media query da mesma forma com que faz no CSS, o que é ótimo caso queira criar um arquivo isolado para um media query mais completo, mas caso o que desejar for apenas algumas pequenas alterações em alguns seletores faça da seguinte maneira:
```
.class {
  border-radius: 3px;

  @media(max-width: 998px){
    border-radius: 10px;
  }
  
  @media(max-width: 415px){
    border-radius: 15px;
  }

  @media(max-width: 320px){
    border-radius: 20px;
  }
}
```

Isso é ótimo para os próximos a mexer nesse trecho do arquivo, visto que após a compilação do estilo as medias queries ficarão próximas das suas classes de modificação.

Exemplo:
```
border-radius: 3px;
}
@media (max-width: 998px) {
  .class0 button {
    border-radius: 10px;
  }
}
@media (max-width: 415px) {
  .class0 button {
    border-radius: 15px;
  }
}
@media (max-width: 320px) {
  .class0 button {
    border-radius: 20px;
  }
}

.class1 {
  padding: 10px;
}
@media (max-width: 998px) {
  .class1 {
    padding: 5px 7px;
  }
}
@media (max-width: 415px) {
  .class1 {
    padding: 3px 7px;
  }
}
@media (max-width: 320px) {
  .class1 {
    padding: 2px 5px;
  }
}
```

## Bônus:
É possível interpolar variáveis com as instruções CSS, basta colocar no meio das estruturas de estilo a variável ou qualquer outro valor dentro de chaves precedido do cerquilha (#).

Exemplo:
```
$media-query: "(max-width: 415px)";

@media #{$media-query}{
  /* CSS atributes */
}
```
Resultado:
```
@media (max-width: 415px) {
  /* CSS atributes */
}
```

## Conclusão
O Sass é uma ferramenta muito útil para criação e manutenção dos seus arquivos de estilo, mas vale ressaltar que, embora seja uma ferramenta poderosa, nas mãos erradas pode causar muitos danos. Por isso, sempre verifique se o código gerado pelo Sass realmente é o desejável. Lembre-se que outras pessoas irão modificar o que é feito hoje e, mesmo que ninguém tenha que interagir com estruturas de estilização mal arquitetadas, os browsers sofrerão com a falta de performance do mesmo.

Dito isso, treine sempre, continue checando o CSS, atualize sua página sempre que mudar alguma variável, mixin, placeholder ou função muito crítica e boa sorte!
